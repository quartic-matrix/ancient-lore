
'use strict'

/**
 * The functions that may be called for something that will be passed to 
 *    EventLog::exportTo()
 */
class GameEventListener {
  constructor() {}

  onPeerJoins(asPlayerName) {}
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
}

class PeerJoinEvent extends GameEvent {
  static fromJSON(objectFromJSON) {
    return new PeerJoinEvent(
      objectFromJSON.timestamp,
      objectFromJSON.peerId,
      objectFromJSON.playerName
    );
  }

  static makeNow(timestampOffset, peerId, playerName) {
    return new PeerJoinEvent(
      GameEvent.makeTimestamp(timestampOffset),
      peerId,
      playerName
    );
  }

  constructor(timestamp, peerId, playerName) {
    super(timestamp, peerId, "peer-joins");
    this.playerName = playerName;
  }

  notify(eventListener) {
    eventListener.onPeerJoins(this.playerName);
  }
}

function eventFromJson(objectFromJSON) {
  switch (objectFromJSON.type) {
    case "peer-joins":
      return PeerJoinEvent.fromJSON(objectFromJSON);
  
    default:
      break;
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
    this.listeners.forEach(function (listener) {
      listener.onEventAdded(event, i == this.events.length-1);
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
  }

  add(event) {
    super.add(event);
    this.broadcastEvents([event]);
  }

  onReceive(data) {
    var otherEvents = [];
    data.events.forEach(function (eventJson) {
      var gameEvent = eventFromJson(eventJson);
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

  broadcast(data) {
    var json = JSON.stringify(data);
    this.swarm.peers.forEach(function (peer) {
      peer.send(json);
    });
  }
  
  broadcastEvents(events) {
    var data = {type: "events"};
    data.isAllEvents = false;
    data.events = events;
    this.broadcast(data);
  }

  dataForAllEvents() {
    var data = {type: "events"};
    data.isAllEvents = true;
    data.events = this.events;
    return data;
  }
  
  broadcastAllEvents() {
    this.broadcast(this.dataForAllEvents());
  }

  sendAllEventsTo(peer) {
    var json = JSON.stringify(this.dataForAllEvents());
    peer.send(json);
  }
}


