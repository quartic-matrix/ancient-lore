
'use strict'

function generateHslaColors (saturation, lightness, alpha, amount) {
  let colors = []
  let huedelta = Math.trunc(360 / amount)

  for (let i = 0; i < amount; i++) {
    let hue = i * huedelta
    colors.push(`hsla(${hue},${saturation}%,${lightness}%,${alpha})`)
  }

  return colors
}

function querySelectorFrom(elements, selector) {
  return [].filter.call(elements, function(element) {
      return element.matches(selector);
  });
}

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
    eventListener.onPeerJoins(this.playerName, this.peerId);
  }
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

