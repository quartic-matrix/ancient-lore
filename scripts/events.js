
'use strict'

/**
 * The functions that may be called for something that will be passed to 
 *    EventLog::exportTo()
 */
class GameEventListener {
  constructor() {}

  clear() {}

  onPeerJoins(asPlayerName) {}
}

function strcmp(a, b)
{   
    return (a<b?-1:(a>b?1:0));  
}

class GameEventDef {
  constructor() {}

  static type() {};

  static makeFromData(objectFromData) {};
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
    events.forEach(this.add);
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
          onlyInThis = this.events[thisI];
          ++thisI;
          break;
        }
        case 0: {++thisI; ++otherI; break;} // Duplicate.
        case 1: {
          onlyInOther = otherEvents[otherI];
          ++otherI;
          break;
        }
        default: {throw "Unhandled case, infinite loop";}
      }
    }
    while (thisI < this.events.length) {
      onlyInThis = this.events[thisI];
      ++thisI;
    }
    while (otherI < otherEvents.length) {
      onlyInOther = otherEvents[otherI];
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

class SyncedEventLog extends EventLog {
  constructor(swarm) {
    super();
    this.swarm = swarm;
    swarm.addListener(this);
    this.eventTypeMap = new Map();
  }

  registerEventType(eventDef) {
    this.eventTypeMap.set(eventDef.type(), eventDef);
  }

  makeEventFromData(data) {
    this.eventTypeMap.get(data.type).makeFromData(data);
  }

  add(event) {
    super.add(event);
    this.broadcastEvents([event]);
  }

  dataType() {
    return "events";
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
    data.events.forEach(function (eventData) {
      var gameEvent = this.makeEventFromData(eventData);
      if (gameEvent) {
        otherEvents.push(gameEvent);
      }
    });
    this.merge(otherEvents, data.isAllEvents);
  }

  merge(otherEvents, broadcastMissing) {
    var [onlyInThis, onlyInOther] = this.compare(otherEvents);

    // Add those that are onlyInOther without broadcasting.
    super.addMultiple(onlyInOther);

    // Broadcast onlyInThis 
    // TODO only if it contains an event this peer generated.
    if (broadcastMissing && onlyInThis.length > 0) {
      this.broadcastEvents(onlyInThis);
    }
  }
  
  broadcastEvents(events) {
    var data = {type: this.dataType()};
    data.isAllEvents = false;
    data.events = events;
    this.swarm.broadcast(data);
  }
  
  broadcastAllEvents() {
    this.swarm.broadcast(this.dataForAllEvents());
  }

  sendAllEventsTo(peer) {
    this.swarm.send(peer, this.dataForAllEvents());
  }

  dataForAllEvents() {
    var data = {type: this.dataType()};
    data.isAllEvents = true;
    data.events = this.events;
    return data;
  }

}


