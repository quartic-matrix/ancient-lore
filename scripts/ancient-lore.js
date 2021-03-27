
'use strict'

//import {EventLog, GameEventListener} from "./events.js"

const playersHtml = `
  <h1>Players</h1>
  <div class="player-list">
  </div>
`;

class AncientLoreGame extends BasicGame {
  constructor (eventLog, domElement, playerName) {
    super(eventLog);
    this.playerList = new LogEventConsumerUpdater(
      new PlayerList(domElement), eventLog
    );
    this.board = new AncientLoreBoard(domElement);
    this.board = new AncientLoreDisplay(domElement);

    this.join(playerName);
    this.eventLog.broadcastAllEvents();
  }
}

class PlayerList extends LogEventConsumer { 
  constructor(rootElement) {
    super([PeerJoinEvent]);
    rootElement.querySelector(".players").innerHTML += playersHtml.trim();
    this.playerListElement = rootElement.querySelector(".player-list");
  }

  reset() {
    this.playerListElement.innerHTML = "";
  }

  onPeerJoins(asPlayerName) {
    var para = document.createElement("p");
    var node = document.createTextNode(asPlayerName);
    para.appendChild(node);
    
    this.playerListElement.appendChild(para);
  }
}

class AncientLoreBoard {
  constructor(rootElement) {
    rootElement.querySelector(".board").innerHTML += boardHtml.trim();

  }
}

class AncientLoreDisplay {
  constructor(rootElement) {
    this.board = rootElement.querySelector(".board");

    this.init();
  }

  init() {
    for (let i = 0; i < 3; i++) {
      var settlement = this.board.querySelector(".settlement" + i + ".selection");
      settlement.addEventListener("click", (event) => {
        event.stopPropagation();
        var highlights = this.board.querySelectorAll(".highlight"); 
        highlights.forEach(highlight => {
          if (highlight.matches(".settlement" + i)) {
            highlight.style.visibility = "visible";
          } else {
            highlight.style.visibility = "hidden";
          }
        });
      });
    }
  }
}
