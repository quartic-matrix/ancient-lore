
'use strict'

//import {EventLog, GameEventListener} from "./events.js"

class AncientLoreGame extends Game {
  constructor (swarm, playerName) {
    super(swarm, playerName);
  }

}


class AncientLoreDisplay extends GameEventListener { 
  constructor(playerListElementId) {
    super();
    this.playerListElement = document.getElementById(playerListElementId);
  }

  clear() {
    this.playerListElement.innerHTML = "";
  }

  onPeerJoins(asPlayerName) {
    var para = document.createElement("p");
    var node = document.createTextNode(asPlayerName);
    para.appendChild(node);
    
    this.playerListElement.appendChild(para);
  }
}

class AncientLoreDisplayUpdater extends EventLogListener {
  constructor(display, eventLog) {
    super();
    this.display = display;
    this.eventLog = eventLog;
    this.eventLog.addListener(this);
    this.fullUpdate();
  }

  fullUpdate() {
    this.display.clear();
    this.eventLog.exportTo(this.display);
  }

  onEventAdded(event, isLast) {
    if (isLast) {
      event.notify(this.display);
    } else {
      this.fullUpdate();
    }
  }
}
