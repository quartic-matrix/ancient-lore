
'use strict'

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

  add(event) {
    var i = this.findIndexFor(event);
    if (i === false) {
      return false;
    }
    this.events.splice(i, 0, event);
    var isLast = i == this.events.length-1;
    this.listeners.forEach((listener) => {
      listener.onEventAdded(event, isLast);
    });
    return true;
  }

  addMultiple(events) {
    if (events.length == 0) {
      return;
    }
    
    this.listeners.forEach((listener) => {
      listener.onAddingEvents();
    });

    events.forEach(this.add.bind(this));

    this.listeners.forEach((listener) => {
      listener.onEventsAdded();
    });
  }

  /**
   * @param {*} otherEvents an array of GameEvents.
   * @returns [onlyInThis, onlyInOther] where:
   *    onlyInThis is an array of all the events that are only in this.
   *    onlyInOther is an array of all the events that are only in otherEvents.
   */
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

  /**
   * @param {*} gameEventListener requires:
   *    Everything used by event.notify() for all events added to this.
   */
  exportTo(gameEventListener) {
    this.events.forEach((event) => {
      event.notify(gameEventListener);
    });
  }

  //-----

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
  array.forEach((event) => {
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

  /**
   * @param {*} eventDef requires:
   *    type()
   *    makeFromData(data):
   *      data == flattenObject(event with type matching eventDef)
   *      Returns a GameEvent.
   */
  registerEventType(eventDef) {
    this.eventTypeMap.set(eventDef.type(), eventDef);
  }

  /**
   * @param {*} listener requires:
   *    Everything declared in EventLogListener.
   */
  addListener(listener) {
    this.log.addListener(listener);
  }

  /**
   * 
   * @param {*} event requires:
   *    To extend or be usable in place of GameEvent.
   *    For notify(gameEventListener), see EventLog.exportTo().
   */
  add(event) {
    this.log.add(event);
    this.broadcastEvents([event]);
  }
  
  /**
   * @param {*} gameEventListener see EventLog.exportTo().
   */
  exportTo(gameEventListener) {
    this.log.exportTo(gameEventListener);
  }

  //-----

  /**
   * See MySwarm.addListener().
   */
  /// @{
  onConnect(peer, id) {
    this.sendAllEventsTo(peer);
  }

  onDisconnect(peer, id) {}

  onReceive(data) {
    if (data.type != this.dataType()) {
      return; // `data` is not for this.
    }

    var otherEvents = [];
    data.events.forEach((eventData) => {
      var gameEvent = this.makeEventFromData(eventData);
      if (gameEvent) {
        otherEvents.push(gameEvent);
      }
    });
    this.merge(otherEvents, data.isAllEvents);
  }
  /// @}
  
  dataType() {
    return "events";
  }

  makeEventFromData(data) {
    return this.eventTypeMap.get(data.type).makeFromData(data);
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


