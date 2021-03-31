
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
    
    for (let playerId = 0; playerId < options.numPlayers; ++playerId) {
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
    super([PeerJoinEvent, StartAncientLoreEvent]);
    this.board = boardUpdater;
    this.generator = eventGenerator;

    this.locations = []; // Setup in setupBoard.
    this.players = []; // Added to in onPeerJoins.
    this.isGameStarted = false;
  }

  reset() {
    this.locations = [];
    this.players = [];
    this.isGameStarted = false;
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

  onStartGame(options, units) {
    if (this.isGameStarted) {
      return; // Only react to the first StartGameEvent received.
    }
    this.board.loadBoard(options);
    this.setupBoard(options, units);
    this.isGameStarted = true;
    this.generator.onStartGame();
  }

  setupBoard(options, units) {
    // Create the correct number of locations.
    for (let i = 0; i < options.numLocations; i++) {
      this.locations.push({players: []});
    }

    // Set the units per player for each location to 0.
    this.locations.forEach(location => {
      for (let index = 0; index < options.numPlayers; index++) {
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

class AncientLoreEventGenerator {
  constructor(eventLog, inputCollector) {
    this.eventLog = eventLog;
    this.input = inputCollector;

    this.eventLog.registerEventType(StartAncientLoreEvent);

    this.input.showGameSetupOptions(this.startGame.bind(this));
  }

  startGame(options) {
    let startGameEvent = StartAncientLoreEvent.makeNow(
      0, this.eventLog.swarm.myId, options
    );
    this.eventLog.add(startGameEvent);
  }

  onStartGame() {
    this.input.hideGameSetupOptions();
    this.moveUnits();
  }

  moveUnits() {
    let toSettlementId;
    let fromSettlements = [];
    this.input.startSelectingASettlement((selectedSettlementId) => {
      toSettlementId = selectedSettlementId;

      this.input.startSelectingUnitsToMove(
        toSettlementId, 
        (numUnitsFromSettlements) => {
          for (let [key, value] of numUnitsFromSettlements) {
            fromSettlements.push({settlementId: key, numUnits: value});
          }
          this.input.updateSelectedSettlement(-1);

          console.log('TODO send a MoveUnitsEvent. To: ', toSettlementId);
        }
      );
    });
  }
}

class AncientLoreInputCollector {
  constructor(rootElement) {
    this.overlay = rootElement.querySelector(".input-overlay");
    this.board = rootElement.querySelector(".board");
    this.startGameDiv;
    this.countdown;

    this.test();
  }

  test() {
  }

  /**
   * @param {*} sendTo(gameSetupOptions)
   *    gameSetupOptions has:
   *      numPlayers,
   *      numLocations
   */
  showGameSetupOptions(sendTo) {
    this.startGameDiv = document.createElement("div");
    this.startGameDiv.style.position = "relative";
    this.startGameDiv.style.margin = "2em";
    this.startGameDiv.style.width = "50em";

    let label = document.createElement("label");
    label.innerHTML = "Number of players "

    let numPlayersInput = document.createElement("input");
    numPlayersInput.setAttribute("type" , "number");
    numPlayersInput.setAttribute("min" , "2");
    numPlayersInput.setAttribute("max" , "6");
    numPlayersInput.setAttribute("value", "3");
    numPlayersInput.className = "num-expected-players";

    let startGameButton = document.createElement("input");
    startGameButton.setAttribute("type" , "button");
    startGameButton.value = "Start Game...";
    startGameButton.style.display = "block";
    startGameButton.style.fontSize = "large";
    startGameButton.style.color = "#3377aa";
    startGameButton.addEventListener("click", () => {
      let options = {
        numPlayers : parseInt(numPlayersInput.value),
        numLocations : 3 // TODO perhaps a board should be selected
      };
      sendTo(options);
    });

    this.startGameDiv.appendChild(label);
    this.startGameDiv.appendChild(numPlayersInput);
    this.startGameDiv.appendChild(startGameButton);
    this.overlay.appendChild(this.startGameDiv);
  }

  hideGameSetupOptions() {
    this.startGameDiv.remove();
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
  startSelectingUnitsToMove(toSettlementId, sendTo) {
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
        let numUnits = Math.max(numFromSettlements.get(otherSettlementId) + 2*isInward - 1, 0);
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
