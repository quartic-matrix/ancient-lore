
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

    /**
     * At the start the Event Generator tells the Input Collector to display a 
     * "Start Game" button, anyone can click this. The map is not displayed.
     * 
     * Only the first onStartGame event is acted upon.
     * 
     * Only peers that join before the game is started are players.
     * 
     * PlayerId is determined by sorting the peerIds when the player first
     * joined. If a player needs to rejoin, then there will be a new
     * onPeerJoins event with the same player name, but a different peerId,
     * the peerId associated with the original onPeerJoins event is used to
     * determine the playerId.
     */
    this.board = new AncientLoreBoardUpdater(domElement);
    this.input = new AncientLoreInputCollector(domElement);
    this.generator = new AncientLoreEventGenerator(eventLog, this.input);
    this.model = new AncientLoreModel(this.board, this.generator);
    this.modelUpdater = new LogEventConsumerUpdater(this.model, eventLog);

    this.playerList = new PlayerList(domElement);
    this.playerListUpdater = new LogEventConsumerUpdater(this.playerList, eventLog);

    this.join(playerName);
    this.eventLog.broadcastAllEvents();

    // TODO Should be called via an event from 
    // AncientLoreEventGenerator::startGame
    this.model.onPeerJoins("Spoof-1");
    this.model.onPeerJoins("Spoof-2");
    this.model.onStartGame(3);
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
    let para = document.createElement("p");
    let node = document.createTextNode(asPlayerName);
    para.appendChild(node);
    
    this.playerListElement.appendChild(para);
  }
}

class AncientLoreModel extends LogEventConsumer {
  constructor(boardUpdater, eventGenerator) {
    super([PeerJoinEvent]);
    this.board = boardUpdater;
    this.generator = eventGenerator;

    this.locations = []; // Setup in setupBoard.
    this.players = []; // Added to in onPeerJoins.
  }

  reset() {
    this.locations = [];
    this.players = [];
    // TODO be able to reset the BoardUpdater.
  }

  onPeerJoins(asPlayerName) {
    let player = {name: asPlayerName}
    this.players.push(player);
  }

  onStartGame(numPlayers) {
    const numStartingUnitsPerPlayer = 8;
    const numLocations = 3;

    let units = [];
    
    for (let playerId = 0; playerId < numPlayers; ++playerId) {
      for (let unitI = 0; unitI < numStartingUnitsPerPlayer; ++unitI) {
        let locationId = Math.floor(Math.random() * numLocations);
        units.push({locationId: locationId, playerId: playerId});
      }
    }

    this.setupBoard(3, units);
  }

  setupBoard(numLocations, units) {
    // Create the correct number of locations.
    for (let i = 0; i < numLocations; i++) {
      this.locations.push({players: []});
    }

    // Set the units per player for each location to 0.
    this.locations.forEach(location => {
      for (let index = 0; index < this.players.length; index++) {
        location.players.push({numUnits: 0});
      }
    });

    // Add the units to the appropriate locations.
    units.forEach(unit => {
      ++this.locations[unit.locationId].players[unit.playerId].numUnits;
    });

    // Tell the board updater to update the locations
    this.board.updateLocations(this.locations);
  }
}

class AncientLoreEventGenerator {
  constructor(eventLog, inputCollector) {
    this.eventLog = eventLog;
    this.input = inputCollector;
  }
}

class AncientLoreBoardUpdater {
  constructor(rootElement) {
    this.board = rootElement.querySelector(".board")
    this.board.innerHTML += boardHtml.trim();
  }

  updateLocations(locations) {
    for (let locationId = 0; locationId < locations.length; ++locationId) {
      let location = locations[locationId];
      for (let playerId = 0; playerId < location.players.length; ++playerId) {
        let player = location.players[playerId];
        this.updateUnitsForPlayerInLocation(locationId, playerId, player.numUnits);
      }
    }
  }

  updateUnitsForPlayerInLocation(locationId, playerId, numUnits) {
    let numberText = this.board.querySelector(
      ".settlement" + locationId + ".player" + playerId + ".number"
    );
    if (numberText) {
      numberText.children[0].innerHTML = numUnits.toString();
    }
  }
}

class AncientLoreInputCollector {
  constructor(rootElement) {
    this.board = rootElement.querySelector(".board");

    this.init();
  }

  init() {
    for (let i = 0; i < 3; i++) {
      let settlement = this.board.querySelector(".settlement" + i + ".selection");
      settlement.addEventListener("click", (event) => {
        event.stopPropagation();
        let highlights = this.board.querySelectorAll(".highlight"); 
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
