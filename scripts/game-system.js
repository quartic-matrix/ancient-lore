
'use strict'

class PeerJoinEvent extends LogEvent {

  static type() {
    return "peer-joins";
  }

  static makeFromData(objectFromData) {
    return new PeerJoinEvent(
      objectFromData.timestamp,
      objectFromData.peerId,
      objectFromData.playerName
    );
  }

  static makeNow(timestampOffset, peerId, playerName) {
    return new PeerJoinEvent(
      LogEvent.makeTimestamp(timestampOffset),
      peerId,
      playerName
    );
  }

  constructor(timestamp, peerId, playerName) {
    super(timestamp, peerId, PeerJoinEvent.type());
    this.playerName = playerName;
  }

  notify(eventListener) {
    eventListener.onPeerJoins(this.playerName);
  }
}

class BasicLogEventListener {
  constructor() {}

  reset() {}

  onPeerJoins(playerName) {}
}

class BasicGame {
  constructor(eventLog) {
    this.eventLog = eventLog;
    this.eventLog.registerEventType(PeerJoinEvent);
  }

  join(playerName) {
    this.eventLog.add(PeerJoinEvent.makeNow(
      0, this.eventLog.swarm.myId, playerName
    ));
  }
}

