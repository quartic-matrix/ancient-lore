
'use strict'


class Game {
  constructor(swarm, playerName) {
    this.eventLog = new SyncedEventLog(swarm);
    this.eventLog.add(PeerJoinEvent.makeNow(0, swarm.me, playerName));
  }

  onConnect(peer, id) {
    this.eventLog.sendAllEventsTo(peer);
  }

  onReceive(data) {
    switch (data.type) {
      case "events": {
        this.eventLog.onReceive(data);
        break;
      }
    }
  }
}