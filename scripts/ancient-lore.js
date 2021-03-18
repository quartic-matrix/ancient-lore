
'use strict'

//import {EventLog, GameEventListener} from "./events.js"

class AncientLoreGame {
  constructor () {
    this.eventLog = new EventLog();
  }

  pushEventLog(data) {
    data.eventLog = this.eventLog;
  }
}


class AncientLoreDisplay extends GameEventListener {
  constructor (playerListElementId) {
    super();
    this.playerListElement = document.getElementById(playerListElementId);
  }

  clear () {
    this.playerListElement.innerHTML = "";
  }

  onPeerJoins(asPlayerName) {
    var para = document.createElement("p");
    var node = document.createTextNode(asPlayerName);
    para.appendChild(node);
    
    this.playerListElement.appendChild(para);
  }
}