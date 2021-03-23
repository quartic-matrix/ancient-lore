
'use strict'

class PeerJoinEventDef extends GameEventDef {
  constructor() {
    super();
  }

  static makeFromData(objectFromData) {
    return new PeerJoinEvent(
      objectFromData.timestamp,
      objectFromData.peerId,
      objectFromData.playerName
    );
  }

  static type() {
    return "peer-joins";
  }
}

class PeerJoinEvent extends GameEvent {
  static makeNow(timestampOffset, peerId, playerName) {
    return new PeerJoinEvent(
      GameEvent.makeTimestamp(timestampOffset),
      peerId,
      playerName
    );
  }

  constructor(timestamp, peerId, playerName) {
    super(timestamp, peerId, PeerJoinEventDef.type());
    this.playerName = playerName;
  }

  notify(eventListener) {
    eventListener.onPeerJoins(this.playerName);
  }
}

class Game {
  constructor(eventLog, playerName) {
    this.eventLog = eventLog;
    this.eventLog.registerEventType(PeerJoinEventDef);
    this.eventLog.add(PeerJoinEvent.makeNow(0, this.eventLog.swarm.me, playerName));
  }
}

class GameDisplayUpdater extends EventLogListener {
  constructor(eventListener, eventLog) {
    super();
    this.eventListener = eventListener;
    this.eventLog = eventLog;
    this.eventLog.addListener(this);
    this.fullUpdate();
  }

  fullUpdate() {
    this.eventListener.clear();
    this.eventLog.exportTo(this.eventListener);
  }

  onEventAdded(event, isLast) {
    if (isLast) {
      event.notify(this.eventListener);
    } else {
      this.fullUpdate();
    }
  }
}
