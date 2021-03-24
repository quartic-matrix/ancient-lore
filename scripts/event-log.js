
'use strict'

/**
 * The functions that may be called for something that will be passed to 
 *    EventLog::exportTo()
 */
class GameEventListener {
  constructor() {}

  clear() {}
  
  // Derived classes must provide the on...() functions that will be called
  // by events stored in an EventLog.
}

function strcmp(a, b)
{   
    return (a<b?-1:(a>b?1:0));  
}

class GameEvent {
  static makeTimestamp(timestampOffset) {
    var timestamp = +(new Date());
    return timestampOffset + timestamp;
    ;
  }

  constructor(timestamp, peerId, type) {
    // TODO calibrate the timestamp by passing in the timestampOffset.
    this.timestamp = timestamp;
    this.peerId = peerId;
    this.type = type;
  }

  static compare(event0, event1) {
    var timestampDiff = event0.timestamp - event1.timestamp;
    if (timestampDiff == 0) {
      return strcmp(event0.peerId, event1.peerId);
    }
    return timestampDiff;
  }

  notify(gameEventListener) {}
}

class EventLogListener {
  constructor() {}

  onEventAdded(event, isLast) {}

  // Called before multiple events are added in a batch.
  onAddingEvents() {}

  // Called after multiple events are added in a batch.
  onEventsAdded() {}
}

class EventLog {
  constructor() {
    this.events = [];
    this.listeners = [];
  }

  addListener(listener) {
    this.listeners.push(listener);
  }

  findIndexFor(event) {
    for (var i = this.events.length; i > 0; --i) {
      switch (Math.sign(GameEvent.compare(event, this.events[i - 1]))) {
        case -1: {break;} // Before event i-1, keep looking.
        case 0: {return false;} // Duplicate.
        case 1: {return i;}
        default: {throw "Unhandled case";}
      }
    }
    return 0;
  }

  add(event) {
    var i = this.findIndexFor(event);
    if (i === false) {
      return false;
    }
    this.events.splice(i, 0, event);
    var isLast = i == this.events.length-1;
    this.listeners.forEach(function (listener) {
      listener.onEventAdded(event, isLast);
    });
    return true;
  }

  addMultiple(events) {
    if (events.length == 0) {
      return;
    }
    
    this.listeners.forEach(function (listener) {
      listener.onAddingEvents();
    });

    events.forEach(this.add.bind(this));

    this.listeners.forEach(function (listener) {
      listener.onEventsAdded();
    });
  }

  compare(otherEvents) {
    var onlyInThis = [];
    var onlyInOther = [];

    var thisI = 0;
    var otherI = 0;
    while (thisI < this.events.length && otherI < otherEvents.length) {
      switch (Math.sign(GameEvent.compare(this.events[thisI], otherEvents[otherI]))) {
        case -1: {
          onlyInThis.push(this.events[thisI]);
          ++thisI;
          break;
        }
        case 0: {++thisI; ++otherI; break;} // Duplicate.
        case 1: {
          onlyInOther.push(otherEvents[otherI]);
          ++otherI;
          break;
        }
        default: {throw "Unhandled case, infinite loop";}
      }
    }
    while (thisI < this.events.length) {
      onlyInThis.push(this.events[thisI]);
      ++thisI;
    }
    while (otherI < otherEvents.length) {
      onlyInOther.push(otherEvents[otherI]);
      ++otherI;
    }
    return [onlyInThis, onlyInOther];
  }

  exportTo(gameEventListener) {
    this.events.forEach(function (event) {
      event.notify(gameEventListener);
    });
  }
}

function flattenObject(obj) {   
  var result = {};   
  for(var key in obj) {       
    result[key] = obj[key];   
  }   
  return result; 
}

function flattenEachIn(array) {
  var flatArray = [];
  array.forEach(function (event) {
    flatArray.push(flattenObject(event));
  });
  return flatArray;
}

class SyncedEventLog {
  constructor(swarm) {
    this.swarm = swarm;
    swarm.addListener(this);
    this.eventTypeMap = new Map();
    this.log = new EventLog();
  }

  //  Requires:
  //    eventDef.type();
  //    eventDef.makeFromData(data);
  //      where data == flattenObject(event)
  //      returns a GameEvent
  registerEventType(eventDef) {
    this.eventTypeMap.set(eventDef.type(), eventDef);
  }

  addListener(listener) {
    this.log.addListener(listener);
  }

  add(event) {
    this.log.add(event);
    this.broadcastEvents([event]);
  }
  
  exportTo(gameEventListener) {
    this.log.exportTo(gameEventListener);
  }


  dataType() {
    return "events";
  }

  makeEventFromData(data) {
    return this.eventTypeMap.get(data.type).makeFromData(data);
  }

  onConnect(peer, id) {
    this.sendAllEventsTo(peer);
  }

  onDisconnect(peer, id) {}

  onReceive(data) {
    if (data.type != this.dataType()) {
      return; // `data` is not for this.
    }

    var otherEvents = [];
    data.events.forEach((function (eventData) {
      var gameEvent = this.makeEventFromData(eventData);
      if (gameEvent) {
        otherEvents.push(gameEvent);
      }
    }).bind(this));
    this.merge(otherEvents, data.isAllEvents);
  }

  merge(otherEvents, broadcastMissing) {
    var [onlyInThis, onlyInOther] = this.log.compare(otherEvents);

    // Add those that are onlyInOther without broadcasting.
    this.log.addMultiple(onlyInOther);

    // Broadcast onlyInThis 
    // TODO only if it contains an event this peer generated.
    if (broadcastMissing && onlyInThis.length > 0) {
      this.broadcastEvents(onlyInThis);
    }
  }

  broadcastEvents(events) {
    var data = {type: this.dataType()};
    data.isAllEvents = false;
    data.events = flattenEachIn(events);
    this.swarm.broadcast(data);
  }
  
  broadcastAllEvents() {
    this.swarm.broadcast(this.dataForAllEvents());
  }

  sendAllEventsTo(peer) {
    this.swarm.sendTo(peer, this.dataForAllEvents());
  }

  dataForAllEvents() {
    var data = {type: this.dataType()};
    data.isAllEvents = true;
    data.events = flattenEachIn(this.log.events);
    return data;
  }

}


