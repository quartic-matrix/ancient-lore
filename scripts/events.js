
'use strict'

/**
 * The functions that may be called for something that will be passed to 
 *    EventLog::exportTo()
 */
class GameEventListener {
  constructor() {}

  onPeerJoins(asPlayerName) {}
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
      return event0.peerId - event1.peerId
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

class EventLog {
  constructor() {
    this.events = [];
  }

  add(event) {
    this.events.push(event);
    this.sortAndFilter();
  }

  merge(otherEventLog) {
    this.events = this.events.concat(otherEventLog.events);
    this.sortAndFilter();
  }

  sortAndFilter() {
 //   let somefunc = function someFunction(event0, event1) { return -1 }
    this.events.sort(function (event0, event1) { 
      return GameEvent.compare(event0, event1);
    }); //GameEvent.compare)
    this.events = this.events.filter(function(item, pos, array) {
      return pos == 0 || GameEvent.compare(item, array[pos - 1]) != 0;
    });
  }

  exportTo(gameEventListener) {
    this.events.forEach(function (event) {
      event.notify(gameEventListener);
    });
  }
}


