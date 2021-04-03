
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

class StartAncientLoreEvent extends LogEvent {

  static type() {
    return "ancient-lore-start";
  }

  static makeFromData(objectFromData) {
    return new StartAncientLoreEvent(
      objectFromData.timestamp,
      objectFromData.peerId,
      objectFromData.options, 
      objectFromData.units
    );
  }

  static makeNow(timestampOffset, peerId, options) {
    const numStartingUnitsPerPlayer = 8;

    let units = [];
    
    for (let playerId = 0; playerId < options.players.length; ++playerId) {
      for (let unitI = 0; unitI < numStartingUnitsPerPlayer; ++unitI) {
        let locationId = Math.floor(Math.random() * options.numLocations);
        units.push({locationId: locationId, playerId: playerId});
      }
    }

    return new StartAncientLoreEvent(
      LogEvent.makeTimestamp(timestampOffset),
      peerId,
      options, 
      units
    );
  }

  constructor(timestamp, peerId, options, units) {
    super(timestamp, peerId, StartAncientLoreEvent.type());
    this.options = options;
    this.units = units;
  }

  notify(eventListener) {
    eventListener.onStartGame(this.options, this.units);
  }
}

class MoveUnitsEvent extends LogEvent {
  
  static type() {
    return "ancient-lore-move-units";
  }

  static makeFromData(objectFromData) {
    return new MoveUnitsEvent(
      objectFromData.timestamp,
      objectFromData.peerId,
      objectFromData.playerId,
      objectFromData.movements
    );
  }

  static makeNow(timestampOffset, peerId, playerId, movements) {
    return new MoveUnitsEvent(
      LogEvent.makeTimestamp(timestampOffset),
      peerId,
      playerId, 
      movements
    );
  }

  constructor(timestamp, peerId, playerId, movements) {
    super(timestamp, peerId, MoveUnitsEvent.type());
    this.playerId = playerId;
    this.movements = movements;
  }

  notify(eventListener) {
    eventListener.onMoveUnits(this.playerId, this.movements);
  }
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
    
    this.gameSetup = new AncientLoreGameSetup(domElement);
    this.inputCollector =  new AncientLoreInputCollector(domElement);
    this.generator = new AncientLoreEventGenerator(
      eventLog, this.gameSetup, this.inputCollector
    );
    
    this.board = new AncientLoreBoardUpdater(domElement);
    this.playerList = new PlayerList(domElement, playerName);
    this.model = new AncientLoreModel(
      this.board, this.playerList, this.generator
    );
    this.modelUpdater = new LogEventConsumerUpdater(this.model, eventLog);

    this.join(playerName);
    this.eventLog.broadcastAllEvents();
  }
}

class PlayerList  { 
  constructor(rootElement, myPlayerName) {
    rootElement.querySelector(".players").innerHTML += playersHtml.trim();
    this.playerListElement = rootElement.querySelector(".player-list");
    this.myPlayerName = myPlayerName;
    this.peers = [];
  }

  reset() {
    this.playerListElement.innerHTML = "";
    this.peers = [];
  }

  onPeerJoins(asPlayerName) {
    this.peers.push({playerName: asPlayerName});

    this.update(new Array());
  }

  update(players) {
    this.playerListElement.innerHTML = "";

    for (const player of players) {
      this.display(player.name, player);
    }

    for (const peer of this.peers) {
      const player = players.find((a) => {return a.name == peer.playerName});
      if (!player) {
        this.display(peer.playerName, player);
      }
    }
  }

  display(playerName, player) {
    let para = document.createElement("p");
    if (this.myPlayerName == playerName) {
      para.style.fontWeight = "bold";
    }
    
    let nameNode = document.createTextNode(playerName);
    para.appendChild(nameNode);

    if (player) {
      let vpNode = document.createTextNode(" : " + player.victoryPoints.toString());
      para.appendChild(vpNode);
    } else {
      para.style.fontStyle = "italic";
    }

    this.playerListElement.appendChild(para);
  }
}

class AncientLoreBoardUpdater {
  constructor(rootElement) {
    this.displayedBoard = rootElement.querySelector(".board");
    this.board = this.displayedBoard;
  }

  startBatchUpdate(isFullRefresh) {
    this.board = this.displayedBoard.cloneNode(true);
    if (isFullRefresh) {
      this.board.innerHTML = "";
    }
  }

  finishBatchUpdate() {
    this.displayedBoard = this.board;
  }

  loadBoard(options) {
    if (options.numLocations == 3) {
      this.board.innerHTML = boardHtml.trim();
    }
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

class AncientLoreModel extends LogEventConsumer {
  constructor(boardUpdater, playerList, eventGenerator) {
    super([PeerJoinEvent, StartAncientLoreEvent, MoveUnitsEvent]);
    this.board = boardUpdater;
    this.generator = eventGenerator;
    this.playerList = playerList

    this.locations = []; // Setup in setupBoard.
    this.players = []; // Added to in onStartGame.
    this.isGameStarted = false;
    this.numPlayersMovedUnits = 0;
  }

  reset() {
    this.locations = [];
    this.isGameStarted = false;
    this.playerList.reset();
    this.generator.reset();
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

  onPeerJoins(asPlayerName, peerId) {
    this.playerList.onPeerJoins(asPlayerName);
    this.generator.onPeerJoins(asPlayerName, peerId);
  }

  onStartGame(options, units) {
    if (this.isGameStarted) {
      return; // Only react to the first StartGameEvent received.
    }
    this.players = options.players;
    for (let player of this.players) {
      player.victoryPoints = 0;
    }
    this.playerList.update(this.players);
    this.board.loadBoard(options);
    this.setupBoard(options, units);
    this.generator.onStartGame(options);
    this.isGameStarted = true;
    this.numPlayersMovedUnits = 0;
    this.generator.moveUnits(this.locations);
  }

  setupBoard(options, units) {
    // Create the correct number of locations.
    for (let i = 0; i < options.numLocations; i++) {
      this.locations.push({players: []});
    }

    // Set the units per player for each location to 0.
    this.locations.forEach(location => {
      for (let index = 0; index < options.players.length; index++) {
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

  onMoveUnits(playerId, movements) {
    // Update units in each location.
    for (let movement of movements) {
      movement.numUnits = Math.max(movement.numUnits, 0);
      movement.numUnits = Math.min(
        movement.numUnits,
        this.locations[movement.fromId].players[playerId].numUnits
      );
      this.locations[movement.fromId].players[playerId].numUnits -= movement.numUnits;
      this.locations[movement.toId].players[playerId].numUnits += movement.numUnits;
    }
    
    ++this.numPlayersMovedUnits;
    if (this.numPlayersMovedUnits == this.players.length) {
      // TODO Update the victory points. In a 2 player game, the winner in each
      // settlement gets a VP, with more players the first and second players
      // get VPs.
      console.log("TODO Update the victory points.");

      // Tell the board updater to update the locations
      this.board.updateLocations(this.locations);
    }
  }
}

class AncientLoreEventGenerator {
  constructor(eventLog, gameSetup, inputCollector) {
    this.eventLog = eventLog;
    this.gameSetup = gameSetup;
    this.input = inputCollector;
    this.myPlayerId = -1; // Set in onStartGame. -1 means observer.

    this.eventLog.registerEventType(StartAncientLoreEvent);
    this.eventLog.registerEventType(MoveUnitsEvent);

    this.gameSetup.showGameSetupOptions(this.startGame.bind(this));
  }

  reset() {
    this.gameSetup.reset();
  }

  onPeerJoins(asPlayerName, peerId) {
    this.gameSetup.onPeerJoins(asPlayerName, peerId);
  }

  startGame(options) {
    let rank = new Map();
    for (const player of options.players) {
      rank.set(player.peerId, Math.random());
    }
    options.players.sort((a, b) => {return rank.get(a.peerId) - rank.get(b.peerId);});

    let startGameEvent = StartAncientLoreEvent.makeNow(
      0, this.eventLog.swarm.myId, options
    );
    this.eventLog.add(startGameEvent);
  }

  onStartGame(options) {
    this.gameSetup.hideGameSetupOptions();
    this.myPlayerId = options.players.findIndex((a) => {
      return a.peerId == this.eventLog.swarm.myId;
    });
  }

  moveUnits(locations) {
    if (this.myPlayerId < 0) {
      return;
    }
    let maxUnitsPerSettlement = [];
    for (let location of locations) {
      maxUnitsPerSettlement.push(location.players[this.myPlayerId].numUnits);
    }

    let toSettlementId;
    this.input.startSelectingASettlement((selectedSettlementId) => {
      toSettlementId = selectedSettlementId;

      this.input.startSelectingUnitsToMove(
        toSettlementId, 
        maxUnitsPerSettlement,
        (numUnitsFromSettlements) => {
          let movements = [];
          for (let [key, value] of numUnitsFromSettlements) {
            movements.push({fromId: key, toId: toSettlementId, numUnits: value});
          }
          this.input.updateSelectedSettlement(-1);

          let moveUnitsEvent = MoveUnitsEvent.makeNow(
            0, this.eventLog.swarm.myId, this.myPlayerId, movements
          );
          this.eventLog.add(moveUnitsEvent);
        }
      );
    });
  }
}

class AncientLoreGameSetup {
  constructor(rootElement) {
    this.overlay = rootElement.querySelector(".input-overlay");
    this.playerSelection = document.createElement("div");
    this.playerSelection.className = "player-selection";
  }

  reset() {
    this.playerSelection.innerHTML = "";
  }

  /**
   * @param {*} sendTo(gameSetupOptions)
   *    gameSetupOptions has:
   *      options, which has:
   *        numLocations
   *        players
   */
  showGameSetupOptions(sendTo) {
    this.startGameDiv = document.createElement("div");
    this.startGameDiv.style.position = "relative";
    this.startGameDiv.style.margin = "2em";
    this.startGameDiv.style.width = "50em";

    let startGameButton = document.createElement("input");
    startGameButton.setAttribute("type" , "button");
    startGameButton.value = "Start Game...";
    startGameButton.style.display = "block";
    startGameButton.style.fontSize = "large";
    startGameButton.style.color = "#3377aa";
    startGameButton.addEventListener("click", () => {
      let options = {
        players : [],
        numLocations : 3 // TODO perhaps a board should be selected
      };
      for (let child of this.playerSelection.children) {
        if (child.className = "player-selected" && child.checked) {
          options.players.push({
            name: child.name,
            peerId: child.peerId
          });
        }
      }

      if (options.players.length >= 2) {
        sendTo(options);
      }
    });

    this.startGameDiv.appendChild(this.playerSelection);
    this.startGameDiv.appendChild(startGameButton);
    this.overlay.appendChild(this.startGameDiv);
  }

  onPeerJoins(asPlayerName, peerId) {
    let playerCheckbox = document.createElement("input");
    playerCheckbox.setAttribute("type" , "checkbox");
    playerCheckbox.className = "player-selected";
    playerCheckbox.name = asPlayerName;
    playerCheckbox.peerId = peerId;

    let label = document.createElement("label");
    label.innerHTML = asPlayerName + " ";

    this.playerSelection.appendChild(playerCheckbox);
    this.playerSelection.appendChild(label);
    this.playerSelection.appendChild(document.createElement("br"));
  }

  hideGameSetupOptions() {
    this.startGameDiv.remove();
  }

}

class AncientLoreInputCollector {
  constructor(rootElement) {
    this.overlay = rootElement.querySelector(".input-overlay");
    this.board = rootElement.querySelector(".board");
    this.startGameDiv;
    this.countdown;
  }

  /**
   * @param {*} sendTo(selectedSettlementId)
   */
  startSelectingASettlement(sendTo) {
    let selectedId;

    let numSettlements = this.board.querySelectorAll(".settlement").length; 
    let settlementSelectionHandlers = [];
    for (let i = 0; i < numSettlements; i++) {
      settlementSelectionHandlers.push((event) => {
        event.stopPropagation();
        this.updateSelectedSettlement(i);
        selectedId = i;
      });
      let settlement = this.board.querySelector(".settlement" + i + ".settlement");
      settlement.addEventListener("click", settlementSelectionHandlers[i]);
    }

    // Make a random selection so there is something selected when the timer
    // runs out. TODO handle non-selection more gracefully.
    selectedId = Math.floor(Math.random() * numSettlements);
    this.updateSelectedSettlement(selectedId);

    this.countdown = new Countdown(5000, 101, this.overlay);
    let onFinishFn = () => { 
      this.finishSelectingASettlement(selectedId, settlementSelectionHandlers); 
      sendTo(selectedId);
    };
    this.countdown.start(onFinishFn);
  }

  finishSelectingASettlement(selectedId, settlementSelectionHandlers) {
    this.updateSelectedSettlement(selectedId, "#ff0000");

    for (let i = 0; i < settlementSelectionHandlers.length; i++) {
      let settlement = this.board.querySelector(".settlement" + i + ".settlement");
      settlement.removeEventListener("click", settlementSelectionHandlers[i]);
    }
  }
  
  updateSelectedSettlement(i, selectedStroke = "#ffcc00") {
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

  /**
   * @param {*} sendTo(numUnitsFromSettlements)
   */
  startSelectingUnitsToMove(toSettlementId, maxUnitsPerSettlement, sendTo) {
    let numFromSettlements = new Map();

    let toSettlementClass = ".settlement" + toSettlementId;

    let moveElements = this.board.querySelectorAll(".move" + toSettlementClass); 
    moveElements.forEach((element) => {
      element.style.visibility = "visible";
    });

    let arrows = this.board.querySelectorAll(".arrow" + toSettlementClass); 
    let arrowClickHandlers = [];
    arrows.forEach((arrow) => {
      let arrowToSettlement = parseInt(arrow.getAttribute("tosettlement"));
      let arrowFromSettlement = parseInt(arrow.getAttribute("fromsettlement"));
      let isInward = arrowToSettlement == toSettlementId;
      let otherSettlementId = isInward ? arrowFromSettlement : arrowToSettlement;
      let numberElement = this.board.querySelector(
        ".move.number" + toSettlementClass + ".settlement" + otherSettlementId
      );
      if (!numFromSettlements.has(otherSettlementId)) {
        numFromSettlements.set(otherSettlementId, 0)
        numberElement.children[0].innerHTML = "0";
      }
      let onClickFn = (event) => {
        event.stopPropagation();
        let numUnits = Math.max(
          numFromSettlements.get(otherSettlementId) + 2*isInward - 1, 0
        );
        numUnits = Math.min(maxUnitsPerSettlement[otherSettlementId], numUnits);
        numFromSettlements.set(otherSettlementId, numUnits);
        numberElement.children[0].innerHTML = numUnits.toString();
      }
      arrowClickHandlers.push({
        element: arrow,
        function: onClickFn
      });
      arrow.addEventListener("click", onClickFn);
    });

    this.countdown = new Countdown(10000, 101, this.overlay);
    let onFinishFn = () => { 
      this.finishSelectingUnitsToMove(moveElements, arrowClickHandlers); 
      sendTo(numFromSettlements);
    };
    this.countdown.start(onFinishFn);
  }

  finishSelectingUnitsToMove(moveElements, arrowClickHandlers) {
    moveElements.forEach((element) => {
      element.style.visibility = "hidden";
    });

    arrowClickHandlers.forEach((handler) => {
      handler.element.removeEventListener("click", handler.function);
    });
  }


}

class Countdown {
  constructor(
    timeRemainingInMs, frequencyInMs, domElement
  ) {
    this.onFinishFn;
    this.timeRemainingInMs = timeRemainingInMs;
    this.frequencyInMs = frequencyInMs;
    this.display = document.createElement("p");
    this.display.className = "countdown-display";
    domElement.appendChild(this.display);

  }

  start(onFinishFn) {
    this.onFinishFn = onFinishFn;
    this.intervalId = setInterval(
      this.update.bind(this), 
      this.frequencyInMs
    );
  }

  update() {
    this.display.innerHTML = formatTime(this.timeRemainingInMs);
    this.timeRemainingInMs -= this.frequencyInMs;
    if (this.timeRemainingInMs <= 0) {
      clearInterval(this.intervalId);
      this.display.remove();
      this.onFinishFn();
    }
  }
}
