
'use strict'

//import {EventLog, GameEventListener} from "./events.js"

const playersHtml = `
  <h1>Players</h1>
  <div class="player-list">
  </div>
`;

function formatTime(timeInMs) {
  let milliseconds = parseInt((timeInMs % 1000) / 100);
  let seconds = Math.floor((timeInMs / 1000) % 60);
  let minutes = Math.floor((timeInMs / (1000 * 60)) % 60);
  let hours = Math.floor((timeInMs / (1000 * 60 * 60)) % 24);

  let formattedTime = hours ? hours + ":" : "";
  formattedTime += hours || minutes ? makeTwoDigits(minutes) + ":" : "";
  return formattedTime + makeTwoDigits(seconds) + "." + milliseconds;
}

function makeTwoDigits(number) {
  return ("0" + number).slice(-2);
}

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
    // this.model.onPeerJoins("Spoof-1");
    // this.model.onPeerJoins("Spoof-2");
    // this.model.onStartGame(3);
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
    /** TODO be able to reset the BoardUpdater. Or probably this.board and
     * this.generator shouldn't need to be reset, instead they should be
     * fully updated when the export ends.
     * 
     * When reseting and applying all the events (maybe also when applying
     * a batch of events), then could take a clone of the board element,
     * make the changes to that, and then replace the displayed board 
     * element, or even recreate the board element from scratch.
     */
  }

  onPeerJoins(asPlayerName) {
    let player = {name: asPlayerName}
    this.players.push(player);
  }

  /**
   * TODO move the allocation of units to AncientLoreEventGenerator::startGame
   * put `units` into the StartGameEvent so that all players get the same setup.
   * 
   * TODO Only react to the first StartGameEvent received.
   */
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

class AncientLoreBoardUpdater {
  constructor(rootElement) {
    this.displayedBoard = rootElement.querySelector(".board")
  }

  startBatchUpdate(isFullRefresh) {
    this.board = this.displayedBoard.cloneNode(true);
    if (isFullRefresh) {
      this.board.innerHTML = boardHtml.trim();
    }
  }

  finishBatchUpdate() {
    this.displayedBoard = this.board;
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

class AncientLoreEventGenerator {
  constructor(eventLog, inputCollector) {
    this.eventLog = eventLog;
    this.input = inputCollector;

    this.input.showGameSetupOptions(this.startGame);
  }

  startGame(options) {
    // TODO create onGameStart StartGameEvent
    console.log('TODO create onGameStart StartGameEvent: ', options.numPlayers);
  }
}

class AncientLoreInputCollector {
  constructor(rootElement) {
    this.overlay = rootElement.querySelector(".input-overlay");
    this.board = rootElement.querySelector(".board");

    this.numSettlements = this.board.querySelectorAll(".buildings").length; 

    this.test();
  }

  test() {
    // this.startSelectingASettlement();
    // setTimeout(() => {
    //   this.startSelectingASettlement();
    // }, 7000);
  }

  showGameSetupOptions(sendTo) {
    let numPlayersInput = document.createElement("input");
    numPlayersInput.setAttribute("type" , "number");
    numPlayersInput.setAttribute("min" , "2");
    numPlayersInput.setAttribute("max" , "6");
    numPlayersInput.setAttribute("value", "3");
    numPlayersInput.className = "num-expected-players";
    numPlayersInput.style.display = "block";
    numPlayersInput.style.margin = "auto";

    let startGameButton = document.createElement("input");
    startGameButton.setAttribute("type" , "button");
    startGameButton.value = "Start Game...";
    startGameButton.style.fontSize = "large";
    startGameButton.style.color = "#3377aa";
    startGameButton.addEventListener("click", () => {
      let options = {numPlayers : numPlayersInput.value}
      sendTo(options);
    });

    let startGameDiv = document.createElement("div");
    startGameDiv.style.position = "relative";
    startGameDiv.style.margin = "auto";
    startGameDiv.style.width = "50%";
    startGameDiv.appendChild(numPlayersInput);
    startGameDiv.appendChild(startGameButton);
    this.overlay.appendChild(startGameDiv);
  }

  startSelectingASettlement() {
    let selectedId;

    let settlementSelectionHandlers = []
    for (let i = 0; i < this.numSettlements; i++) {
      settlementSelectionHandlers.push((event) => {
        event.stopPropagation();
        this.updateSelection(i);
        selectedId = i;
      });
      let settlement = this.board.querySelector(".settlement" + i + ".selection");
      settlement.addEventListener("click", settlementSelectionHandlers[i]);
    }

    // Make a random selection so there is something selected when the timer
    // runs out. TODO handle non-selection more gracefully.
    let highlights = this.board.querySelectorAll(".highlight"); 
    selectedId = Math.floor(Math.random() * highlights.length);
    this.updateSelection(selectedId);

    let countdownDisplay = document.createElement("p");
    countdownDisplay.className = "countdown-display";
    this.overlay.appendChild(countdownDisplay);
    let countdownContext = {
      timeRemainingInMs: 5000, frequencyInMs: 101
    };
    let onFinishFn = () => { 
      this.finishSelectingASettlement(selectedId, settlementSelectionHandlers); 
    };
    let intervalId = setInterval(
      () => { this.showCountdown(
        countdownContext, countdownDisplay, intervalId, onFinishFn
      )}, 
      countdownContext.frequencyInMs
    );
  }

  showCountdown(
    countdownContext, domElement, intervalId, onFinishFn
  ) {
    domElement.innerHTML = formatTime(countdownContext.timeRemainingInMs);
    countdownContext.timeRemainingInMs -= countdownContext.frequencyInMs;
    if (countdownContext.timeRemainingInMs <= 0) {
      clearInterval(intervalId);
      onFinishFn();
    }
  }

  finishSelectingASettlement(selectedId, settlementSelectionHandlers) {
    this.updateSelection(selectedId, "#ff0000");

    for (let i = 0; i < this.numSettlements; i++) {
      let settlement = this.board.querySelector(".settlement" + i + ".selection");
      settlement.removeEventListener("click", settlementSelectionHandlers[i]);
    }

    let countdownDisplay = this.overlay.querySelector(".countdown-display"); 
    countdownDisplay.remove();
  }
  
  updateSelection(i, selectedStroke = "#ffcc00") {
    let highlights = this.board.querySelectorAll(".highlight"); 
    highlights.forEach(highlight => {
      if (highlight.matches(".settlement" + i)) {
        highlight.style.visibility = "visible";
        highlight.style.stroke = selectedStroke;
      } else {
        highlight.style.visibility = "hidden";
      }
    });
  }
}
