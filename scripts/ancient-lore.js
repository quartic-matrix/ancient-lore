
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

class ContinueEvent extends LogEvent {
  
  static type() {
    return "ancient-lore-continue";
  }

  static makeFromData(objectFromData) {
    return new ContinueEvent(
      objectFromData.timestamp, 
      objectFromData.peerId, 
      objectFromData.playerId
    );
  }

  static makeNow(timestampOffset, peerId, playerId) {
    return new ContinueEvent(
      LogEvent.makeTimestamp(timestampOffset),
      peerId,
      playerId
    );
  }

  constructor(timestamp, peerId, playerId) {
    super(timestamp, peerId, ContinueEvent.type());
    this.playerId = playerId;
  }

  notify(eventListener) {
    eventListener.onContinue(this.playerId);
  }
}

class ActionSelectedEvent extends LogEvent {
  
  static type() {
    return "ancient-lore-action-selected";
  }

  static makeFromData(objectFromData) {
    return new ActionSelectedEvent(
      objectFromData.timestamp, 
      objectFromData.peerId, 
      objectFromData.playerId, 
      objectFromData.action,
      objectFromData.locationId
    );
  }

  static makeNow(timestampOffset, peerId, playerId, action, locationId) {
    return new ActionSelectedEvent(
      LogEvent.makeTimestamp(timestampOffset),
      peerId,
      playerId, action, locationId
    );
  }

  constructor(timestamp, peerId, playerId, action, locationId) {
    super(timestamp, peerId, ActionSelectedEvent.type());
    this.playerId = playerId;
    this.action = action;
    this.locationId = locationId;
  }

  notify(eventListener) {
    eventListener.onActionSelected(this.playerId, this.action, this.locationId);
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

class AncientLorePhase {
  constructor() {
    this.gamePhase = "";
    this.roundI = -1;
    this.roundPhase = "";
    this.turnI = -1;
    this.inExtraTime = false;
    // Remember to update copyFrom and isEqual.
  }

  copyFrom(other) {
    this.gamePhase = other.gamePhase;
    this.roundI = other.roundI;
    this.roundPhase = other.roundPhase;
    this.turnI = other.turnI;
    this.inExtraTime = other.inExtraTime;
  }

  isEqual(other) {
    return (
      this.gamePhase == other.gamePhase && 
      this.roundI == other.roundI &&
      this.roundPhase == other.roundPhase &&
      this.turnI == other.turnI &&
      this.inExtraTime == other.inExtraTime
    );
  }

  isForming() {
    return this.gamePhase == "forming";
  }

  isPlaying() {
    return this.gamePhase == "playing";
  }

  isSelectingActions() {
    return (
      this.isPlaying() && 
      this.roundI >= 0 && 
      this.roundPhase == "selecting-actions"
    );
  }

  isInExtraTime() {
    return this.inExtraTime;
  }

  isExecutingActions() {
    return (
      this.isPlaying() && 
      this.roundI >= 0 && 
      this.roundPhase == "executing-actions"
    );
  }

  isFinished() {
    return this.gamePhase == "finished";
  }

  reset() {
    this.gamePhase = "forming";
    this.roundI = -1;
    this.roundPhase = "";
    this.turnI = -1;
    this.inExtraTime = false;
  }

  beginRound() {
    this.gamePhase = "playing";
    ++this.roundI;
    this.roundPhase = "selecting-actions";
    this.turnI = -1;
    this.inExtraTime = false;
  }

  beginExtraTime() {
    this.inExtraTime = true;
  }

  beginTurn() {
    this.roundPhase = "executing-actions";
    ++this.turnI;
    this.inExtraTime = false;
  }

  finish() {
    this.gamePhase = "finished";
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
    
    // User input
    this.gameSetup = new AncientLoreGameSetup(domElement);
    this.inputCollector =  new AncientLoreInputCollector(domElement);
    this.generator = new AncientLoreEventGenerator(
      eventLog, this.gameSetup, this.inputCollector
    );
    
    // Display
    this.board = new AncientLoreBoardUpdater(domElement);
    this.playerList = new PlayerList(domElement, playerName, this.board);
    this.conclusionDisplay = new ConclusionDisplay(domElement);

    // Internal model
    this.model = new AncientLoreModel();
    this.modelUpdater = new LogEventConsumerUpdater(this.model, eventLog);

    this.phase = new AncientLorePhase();

    this.model.addListener(this);

    // Kick things off by joining.
    this.join(playerName);
    this.eventLog.broadcastAllEvents();
  }

  onModelUpdated() {
    const m = this.model;
    this.playerList.update(m.peers, m.players, m.phase.isExecutingActions());
    this.gameSetup.updateGameSetupOptions(m.peers);

    if (this.phase.isEqual(m.phase)) {
      return;
    }

    if (this.phase.isForming()) {
      // This was previously forming, so some setup is needed.
      this.board.loadBoard(m.options);
      this.generator.onStartGame(m.players);
      
    } else if (
      this.phase.isSelectingActions() && 
      !m.phase.isSelectingActions()
    ) {
      // This was previously selecting an action, that needs to stop.
      this.generator.clearSelectionOptions();
    }

    if (m.phase.isForming()) {
      this.generator.offerToStartGame();

    } else if (m.phase.isPlaying()) {
      // Either the game was forming and is now playing, or this was already 
      // playing and the round, round phase or turn must be different.
      this.board.updateLocations(m.locations);

      if (m.phase.isSelectingActions()) {
        if (!m.phase.isInExtraTime()) {
          this.generator.askForActionSelection();
        } else {
          this.generator.offerToContinueRegardless();
        }

      } else if (m.phase.isExecutingActions()) {
        this.progressTurn(m, m.turns[m.phase.turnI]);
      }

      // this.generator.offerToMoveUnits(m.locations);

    } else if (m.phase.isFinished()) {
      this.board.clearHighlight();
      this.board.updateLocations(m.locations);
      this.conclusionDisplay.declareWinners(m.winners);
    }

    // Finally update the game phase.
    this.phase.copyFrom(m.phase);
  }
  
  progressTurn(m, turn) {
    /**
     * Regroup must be done where the player has a unit.
     * Proclaim must be done where the player has a keeper.
     * Contest - player has a unit.
     * Move - Anywhere.
     * Invade - Anywhere.
     */
    console.log('TODO Skip turn if location is unsuitable for action');

    this.board.updateHighlight(turn.locationId);
    switch (turn.actionI) {
      case 1: { // Regroup
        this.generator.beginRegroup(turn, m.locations);
        break;
      }
      case 2: { // Proclaim
        console.log('TODO Proclaim');
        break;
      }
      case 3: { // Contest
        console.log('TODO Contest');
        break;
      }
      case 4: { // Move
        console.log('TODO Move');
        break;
      }
      case 5: { // Invade
        console.log('TODO Invade');
        break;
      }
      default: {
        console.log('Invalid action');
      }
    }
    console.log('TODO Check for victory');

  }

}

class PlayerList  { 
  constructor(rootElement, myPlayerName, board) {
    rootElement.querySelector(".players").innerHTML += playersHtml.trim();
    this.playerListElement = rootElement.querySelector(".player-list");
    this.myPlayerName = myPlayerName;
    this.board = board;
    this.peers = [];
  }

  update(peers, players, displayOthersActions) {
    this.playerListElement.innerHTML = "";

    for (const player of players) {
      this.display(player.name, player, displayOthersActions);
    }

    for (const peer of peers) {
      const player = players.find((a) => {return a.name == peer.playerName});
      if (!player) {
        this.display(peer.playerName, player);
      }
    }
  }

  display(playerName, player, displayOthersActions) {
    let para = document.createElement("p");
    if (this.myPlayerName == playerName) {
      para.style.fontWeight = "bold";
    }
    
    let nameNode = document.createTextNode(playerName);
    para.appendChild(nameNode);

    if (player) {
      let vpNode = document.createTextNode(" : " + player.victoryPoints.toString());
      para.appendChild(vpNode);

      if (player.isActive) {
        para.classList.add("active-player");
      } else {
        para.classList.remove("active-player");
      }

      if (
        (this.myPlayerName == playerName || displayOthersActions) &&
        player.selectedAction && 
        player.selectedAction.action != undefined &&
        player.selectedAction.locationId != undefined
      ) {
        let br = document.createElement("br");
        para.appendChild(br);

        let actionDescription = document.createTextNode(
          this.textForAction(player.selectedAction.action) + " " +
          this.board.nameOfLocation(player.selectedAction.locationId)
        );
        para.appendChild(actionDescription);
      }

    } else {
      para.style.fontStyle = "italic";
    }

    this.playerListElement.appendChild(para);
  }

  textForAction(action) {
    switch (action) {
      case "regroup": return "Regroup in";
      case "proclaim": return "Proclaim lore in";
      case "contest": return "Contest";
      case "move": return "Move to";
      case "invade": return "Invade";
      default: return "No action";
    }
  }
}

class AncientLoreBoardUpdater {
  constructor(rootElement) {
    this.board = rootElement.querySelector(".board");
    this.highlighter; // Set in loadBoard.
  }

  loadBoard(options) {
    if (options.numLocations == 3) {
      this.board.innerHTML = boardHtml.trim();
    }

    this.locationNames = [];
    for (let locationId = 0; locationId < options.numLocations; locationId++) {
      const nameEle = this.board.querySelector(".settlement" + locationId + ".name").children[0];
      this.locationNames.push(nameEle.innerHTML);
    }

    this.highlighter = new SettlementHighlighter(this.board);
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

  nameOfLocation(locationId) {
    return this.locationNames[locationId];
  }

  updateHighlight(locationId) {
    if (this.highlighter) {
      this.highlighter.update(locationId, "#ff0000");
    }
  }

  clearHighlight() {
    if (this.highlighter) {
      this.highlighter.clear();
    }
  }
}

class AncientLoreModel extends LogEventConsumer {
  constructor() {
    super([
      PeerJoinEvent, 
      StartAncientLoreEvent, 
      ActionSelectedEvent, 
      ContinueEvent, 
      MoveUnitsEvent
    ]);
    this.phase = new AncientLorePhase();
    this.listeners = [];

    this.reset(); // Also declares some member variables.
  }
  
  addListener(listener) {
    this.listeners.push(listener);
  }

  reset() {
    this.options = undefined;
    this.peers = [];
    this.players = []; // Added to in onStartGame.
    this.winners = []; // Added to in endRound.
    this.locations = []; // Setup in setupBoard.
    this.phase.reset();
    this.turns = [];
  }

  react() {
    for (const listener of this.listeners) {
      listener.onModelUpdated();
    }
  }

  onPeerJoins(asPlayerName, peerId) {
    this.peers.push({playerName: asPlayerName, id: peerId});
  }

  onStartGame(options, units) {
    if (!this.phase.isForming()) {
      return; // Only react to the first StartGameEvent received.
    }
    this.options = options;
    this.players = options.players;
    for (let player of this.players) {
      player.victoryPoints = 0;
    }
    this.setupLocations(options, units);
    this.beginRound();
  }

  setupLocations(options, units) {
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
  }

  beginRound() {
    this.turns = [];
    for (let player of this.players) {
      player.selectedAction = undefined;
      player.isActive = true;
    }
    this.phase.beginRound();
  }

  onActionSelected(playerId, action, locationId) {
    if (!this.phase.isSelectingActions()) {
      // Ignore these events if no longer selecting actions. This could happen
      // if a peer allows action selection and then realizes the phase is 
      // already over.
      return;
    }

    let fromPlayer = this.players[playerId];
    fromPlayer.selectedAction = {
      action: action, 
      locationId: locationId
    };
    fromPlayer.isActive = 
      fromPlayer.selectedAction.action == undefined ||
      fromPlayer.selectedAction.locationId == undefined;

    let hasEveryoneSentSomething = true;
    let isEveryoneReady = true;
    for (let player of this.players) {
      if (player.selectedAction == undefined) {
        hasEveryoneSentSomething = false;
        isEveryoneReady = false;
        break;
      }
      if (player.isActive) {
        isEveryoneReady = false;
        // Need to continue to check whether everyone has even sent something.
      }
    }
    if (isEveryoneReady) {
      this.beginExecutingActions();
    } else if (hasEveryoneSentSomething) {
      this.phase.beginExtraTime();
    }
  }

  onContinue(playerId) {
    if (this.phase.isSelectingActions() && this.phase.isInExtraTime()) {
      // Some players have an undefined action/locationId.
      this.beginExecutingActions();
    }
  }

  beginExecutingActions() {
    const actionOrder = 
      [undefined, "regroup", "proclaim", "contest", "move", "invade"];
    
    for (let playerId = 0; playerId < this.players.length; ++playerId) {
      const selectedAction = this.players[playerId].selectedAction;
      if (
        selectedAction && 
        selectedAction.action != undefined &&
        selectedAction.locationId != undefined
      ) {
        this.turns.push({
          playerId: playerId, 
          actionI: actionOrder.indexOf(selectedAction.action),
          action: selectedAction.action,
          locationId: selectedAction.locationId,
        });
      }
    }
    
    this.turns.sort((a, b) => {
      const actionIDiff = a.actionI - b.actionI;
      if (actionIDiff) {
        return actionIDiff; 
      } else { 
        return this.players[a.playerId].rank - this.players[b.playerId].rank;
      }
    });

    this.beginTurn();
  }

  beginTurn() {
    this.phase.beginTurn();
    if (this.phase.turnI >= this.turns.length) {
      this.endRound();
      return;
    }
    const turn = this.turns[this.phase.turnI];

    for (const player of this.players) {
      player.isActive = false;
    }
    this.players[turn.playerId].isActive = true;
    
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
    
    this.beginTurn();
  }

  endRound() {
    for (const location of this.locations) {
      let numUnits = [];
      for (const player of location.players) {
        numUnits.push(player.numUnits);
      }
      numUnits.sort();
      const median = numUnits[Math.floor(numUnits.length/2)];
      for (let playerId = 0; playerId < location.players.length; playerId++) {
        if (location.players[playerId].numUnits >= median) {
          ++this.players[playerId].victoryPoints;
        }
      } 
    }
    
    let maxVps = 0;
    for (const player of this.players) {
      maxVps = Math.max(maxVps, player.victoryPoints);
    }
    for (const player of this.players) {
      if (player.victoryPoints >= 10 && player.victoryPoints >= maxVps) {
        this.winners.push(player.name);
      }
    }
    if (this.winners.length > 0) {
      this.phase.finish();
    } else {
      this.beginRound();
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
    this.eventLog.registerEventType(ActionSelectedEvent);
    this.eventLog.registerEventType(ContinueEvent);
    this.eventLog.registerEventType(MoveUnitsEvent);
  }

  offerToStartGame() {
    this.gameSetup.showGameSetupOptions(this.startGame.bind(this));
  }

  startGame(options) {
    let orderedPlayers = [];
    for (let playerId = 0; playerId < options.players.length; ++playerId) {
      orderedPlayers.push({playerId: playerId, x: Math.random()});
    }
    orderedPlayers.sort((a, b) => { return a.x - b.x; });
    for (let rank = 0; rank < orderedPlayers.length; ++rank) {
      options.players[orderedPlayers[rank].playerId].rank = rank;
    }

    let startGameEvent = StartAncientLoreEvent.makeNow(
      0, this.eventLog.swarm.myId, options
    );
    this.eventLog.add(startGameEvent);
  }

  onStartGame(players) {
    this.gameSetup.hideGameSetupOptions();
    this.myPlayerId = players.findIndex((a) => {
      return a.peerId == this.eventLog.swarm.myId;
    });
  }

  clearSelectionOptions() {
    this.input.cancelOngoingSelection();
  }

  askForActionSelection() {
    if (this.myPlayerId < 0) { 
      this.input.startCountdown(30000);
      return; 
    }
    let hasSentASelection = false;
    let action;
    let locationId;
    let onSelectionChanges = (newAction, newLocationId) => {
      action = newAction;
      locationId = newLocationId;
      if (hasSentASelection) {
        this.sendActionSelection(action, locationId);
      }
    }

    let onDoneFn = () => {
      /**
       * Send the currently selected action, if no action is selected send
       * that. When a selected action (including "undefined") has been 
       * received from all players, then offer the option to continue 
       * regardless of whether others are ready.
       */
      if (!hasSentASelection) {
        this.sendActionSelection(action, locationId);
        hasSentASelection = true;
      }
    }

    this.input.startSelectingAnAction(onSelectionChanges);
    this.input.showReadyOption(onDoneFn);
    this.input.startCountdown(10000, onDoneFn); // TODO 30000
  }

  sendActionSelection(action, locationId) {
    let actionSelectedEvent = ActionSelectedEvent.makeNow(
      0, this.eventLog.swarm.myId, this.myPlayerId, action, locationId
    );
    this.eventLog.add(actionSelectedEvent);
  }
  
  offerToContinueRegardless() {
    if (this.myPlayerId < 0) { return; }
    this.input.showContinueOption(this.sendContinueInstruction.bind(this));
  }

  sendContinueInstruction() {
    let continueEvent = ContinueEvent.makeNow(
      0, this.eventLog.swarm.myId, this.myPlayerId
    );
    this.eventLog.add(continueEvent);
  }

  beginRegroup(turn, locations) {
    if (this.myPlayerId != turn.playerId) { 
      this.clearSelectionOptions();
      return; 
    }

    /** 
     * +/- on all other locations with the player's units.
     * +/- on the player's supply.
     * Send a move units action when done.
     */
    let numUnitsFromSettlements = new Map();

    let onInputChanged = (locationId, newValue) => {
      numUnitsFromSettlements.set(locationId, newValue)
    }
    this.input.startRegroupSelection(
      turn.locationId, 
      this.maxUnitsPerSettlement(locations),
      onInputChanged
    );
    
    let onDoneFn = () => {
      this.moveUnits(turn.locationId, numUnitsFromSettlements);
    }
    this.input.showReadyOption(onDoneFn);
  }

  offerToMoveUnits(locations) {
    if (this.myPlayerId < 0) { return; }

    let toSettlementId;
    this.input.startSelectingASettlement((selectedSettlementId) => {
      toSettlementId = selectedSettlementId;

      this.input.startSelectingUnitsToMove(
        toSettlementId, 
        this.maxUnitsPerSettlement(locations),
        (numUnitsFromSettlements) => {
          this.moveUnits(toSettlementId, numUnitsFromSettlements)
        }
      );
    });
  }

  maxUnitsPerSettlement(locations) {
    let maxUnitsPerSettlement = [];
    for (let location of locations) {
      maxUnitsPerSettlement.push(location.players[this.myPlayerId].numUnits);
    }
    return maxUnitsPerSettlement;
  }

  moveUnits(toSettlementId, numUnitsFromSettlements) {
    let movements = [];
    for (let [key, value] of numUnitsFromSettlements) {
      movements.push({fromId: key, toId: toSettlementId, numUnits: value});
    }

    let moveUnitsEvent = MoveUnitsEvent.makeNow(
      0, this.eventLog.swarm.myId, this.myPlayerId, movements
    );
    this.eventLog.add(moveUnitsEvent);
  }

}

class AncientLoreGameSetup {
  constructor(rootElement) {
    this.overlay = rootElement.querySelector(".input-overlay");
    this.playerSelection = document.createElement("div");
    this.playerSelection.className = "player-selection";
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
    startGameButton.className = "button";
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

  updateGameSetupOptions(peers) {
    this.playerSelection.innerHTML = "";
    for (const peer of peers) {
      this.addPlayerCheckbox(peer.playerName, peer.id);
    }
  }

  addPlayerCheckbox(asPlayerName, peerId) {
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
    this.cardsArea = rootElement.querySelector(".cards-area");

    this.readyButton = rootElement.querySelector(".flow-control-area .ready.button");
    this.onReadyFn = undefined;
    this.continueButton = rootElement.querySelector(".flow-control-area .continue.button");
    this.onContinueFn = undefined;
    this.initButtons();

    this.actionSelection = new ActionSelection(this.cardsArea);
    this.settlementSelection = new SettlementSelection(this.board);
    this.unitsToMoveSelection = new UnitsToMoveSelection(this.overlay, this.board);
    this.countdown;
  }

  initButtons() {
    this.readyButton.addEventListener("click", () => {
      if (this.onReadyFn) {
        this.onReadyFn()
      }
    });
    this.continueButton.addEventListener("click", () => {
      if (this.onContinueFn) {
        this.onContinueFn()
      }
    });
  }


  startCountdown(timeInMs, onDoneFn) {
    this.countdown = new Countdown(timeInMs, 101, this.overlay);
    this.countdown.start(onDoneFn);
  }

  showReadyOption(onClickFn) {
    this.onReadyFn = onClickFn;
    this.readyButton.style.display = "block";
  }
  
  showContinueOption(onClickFn) {
    this.onContinueFn = onClickFn;
    this.continueButton.style.display = "block";
  }

  startSelectingAnAction(onSelectionChanges) {
    this.cancelOngoingSelection();

    this.readyButton.disabled = true;

    let action;
    let locationId;
    let myOnSelectionChanges = () => {
      onSelectionChanges(action, locationId);
      if (action != undefined && locationId != undefined) {
        this.readyButton.disabled = false;
      }
    };
    let onActionSelected = (newAction) => {
      action = newAction;
      myOnSelectionChanges();
    };
    let onLocationSelected = (newLocationId) => {
      locationId = newLocationId;
      myOnSelectionChanges();
    };
    this.actionSelection.start(onActionSelected);
    this.settlementSelection.start(onLocationSelected);
  }

  startRegroupSelection(
    toLocationId, 
    maxUnitsPerSettlement,
    onInputChanged
  ) {
    this.cancelOngoingSelection();
    this.settlementSelection.highlighter.update(toLocationId, "#ff0000");
    /**
     * Place a number input on top of each of the other locations. Whenever
     * these are changed update numUnitsFromSettlements.
     */
    this.unitsToMoveSelection.start(
      toLocationId, maxUnitsPerSettlement, onInputChanged
    );
  }

  startSelectingUnitsToMove(toSettlementId, maxUnitsPerSettlement, sendTo) {
    this.cancelOngoingSelection();

    let onFinishFn = (numFromSettlements) => { 
      this.settlementSelection.updateHighlight(-1); 
      sendTo(numFromSettlements);
    };
    this.unitsToMoveSelection.start(
      toSettlementId, maxUnitsPerSettlement, onFinishFn
    );
  }

  cancelOngoingSelection() {
    this.readyButton.style.display = "none";
    this.readyButton.disabled = false;
    this.onReadyFn = undefined;

    this.continueButton.style.display = "none";
    this.continueButton.disabled = false;
    this.onContinueFn = undefined;

    this.actionSelection.cancel();
    this.settlementSelection.cancel();
    this.unitsToMoveSelection.cancel();
    
    if (this.countdown) {
      this.countdown.cancel();
    }
  }
}

class ActionSelection {
  constructor(cardsArea) {
    this.cardsArea = cardsArea;
    this.initCardElements();
    this.onActionSelected;
  }

  initCardElements() {
    this.cards = [];
    this.initCardElement("regroup", regroupCardHtml.trim());
    this.initCardElement("proclaim", proclaimCardHtml.trim());
    this.initCardElement("contest", contestCardHtml.trim());
    this.initCardElement("move", moveCardHtml.trim());
    this.initCardElement("invade", invadeCardHtml.trim());
  }

  deselectAll() {
    for (let c of this.cards) {
      c.querySelector(".border").style.stroke = "#6d0000"; 
      c.style.paddingTop = "1%";
      c.style.paddingBottom = "0%";
    }
  }

  initCardElement(gameAction, html) {
    let card = document.createElement("div");
    card.addEventListener("click", () => {
      this.deselectAll();
      card.querySelector(".border").style.stroke = "#ff0000";
      card.style.paddingTop = "0%";
      card.style.paddingBottom = "1%";
      if (this.onActionSelected) {
        this.onActionSelected(gameAction);
      }
    });
    card.className = "action card";
    card.innerHTML = html;
    card.style.display = "none";
    card.style.position = "relative";
    card.style.flexBasis = "10%";
    this.cards.push(card);
    this.cardsArea.appendChild(card);
  }

  start(onActionSelected) {
    this.onActionSelected = onActionSelected;

    for (let card of this.cards) {
      card.style.display = "block";
    }
  }

  cancel() {
    this.onActionSelected = undefined;
    for (let card of this.cards) {
      card.style.display = "none";
    }
    this.deselectAll();
  }
}

class SettlementSelection {
  constructor(board) {
    this.board = board;
    this.highlighter = undefined; // Created in start.
    this.clickHandlers = [];
    this.selectedId;
    this.onLocationSelected;
  }

  start(onLocationSelected) {
    this.selectedId = -1;
    this.onLocationSelected = onLocationSelected;
    if (!this.highlighter) {
      this.highlighter = new SettlementHighlighter(this.board);
    }

    let numSettlements = this.board.querySelectorAll(".settlement").length;
    for (let i = 0; i < numSettlements; i++) {
      this.clickHandlers.push((event) => {
        event.stopPropagation();
        this.selectedId = i;
        this.updateHighlight();
        if (this.onLocationSelected) {
          this.onLocationSelected(this.selectedId);
        }
      });
      let settlement = this.board.querySelector(".settlement" + i + ".settlement");
      settlement.addEventListener("click", this.clickHandlers[i]);
    }
    
    this.updateHighlight();
  }
  
  cancel() {
    if (this.highlighter) {
      this.highlighter.clear();
    }
    this.onLocationSelected = undefined;
    this.removeClickHandlers();
  }

  updateHighlight() {
    this.highlighter.update(this.selectedId, "#ffcc00");
  }

  removeClickHandlers() {
    for (let i = 0; i < this.clickHandlers.length; i++) {
      let settlement = this.board.querySelector(".settlement" + i + ".settlement");
      settlement.removeEventListener("click", this.clickHandlers[i]);
    }
    this.clickHandlers = [];
  }
}

class SettlementHighlighter {
  constructor(board) {
    this.highlights = board.querySelectorAll(".highlight");
  }

  update(settlementId, colour) {
    for (let highlight of this.highlights) {
      if (highlight.matches(".settlement" + settlementId)) {
        highlight.style.visibility = "visible";
        highlight.style.stroke = colour;
      } else {
        highlight.style.visibility = "hidden";
      }
    };
  }

  clear() {
    this.update(-1);
  }
}

class UnitsToMoveSelection {
  constructor(overlay, board) {
    this.overlay = overlay;
    this.board = board;
    this.clickHandlers = [];
    this.inputs = []; // Filled in initInputs called by start.

    this.onInputChanged;
  }

  initInputs() {
    const names = this.board.querySelectorAll(".name"); 

    for (let i = 0; i < names.length; ++i) {
      const name = this.board.querySelector(".name.settlement" + i);
      let parent = name.parentElement;

      const x = name.x.baseVal[0].value;
      const y = (name.y.baseVal[0].value - 20);

      let group = document.createElementNS("http://www.w3.org/2000/svg", "g");
      // let m = new DOMMatrix([0.4,0,0,0.4,x,y]);
      let m = document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGMatrix();
      m.a = 0.4; m.b = 0; m.c = 0;  m.d = 0.4;
      m.e = x; m.f = y;
      group.transform.baseVal.initialize(
        group.transform.baseVal.createSVGTransformFromMatrix(m)
      );

      let foreignObject = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
      foreignObject.style.width = "3em";
      foreignObject.style.height = "2.5em";

      let input = document.createElement("input");
      input.type = "number";
      input.min = "0";
      input.classList.add("location-units");
      input.classList.add("settlement" + i);
      input.addEventListener("change", (event) => {
        this.onInputChanged(i, parseInt(event.target.value));
      });
      input.locationId = i;
      this.inputs.push(input);

      foreignObject.appendChild(input);
      group.appendChild(foreignObject);
      parent.appendChild(group);
    }
  }

  start(toLocationId, maxUnitsPerSettlement, onInputChanged) {
    this.onInputChanged = onInputChanged;
    if (this.inputs.length == 0) {
      this.initInputs();
    }

    for (const input of this.inputs) {
      const maxUnits = maxUnitsPerSettlement[input.locationId];
      if (input.locationId != toLocationId && maxUnits) {
        input.style.visibility = "visible";
        input.max = maxUnits.toString();
        input.value = "0";
      }
    }
  }

  cancel() {
    for (const input of this.inputs) {
      input.style.visibility = "hidden";
    }
  }
}

class Countdown {
  constructor(
    timeRemainingInMs, frequencyInMs, domElement
  ) {
    this.intervalId;
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
      this.cancel();
      if (this.onFinishFn) {
        this.onFinishFn();
      }
    }
  }

  cancel() {
    if (this.intervalId !== undefined) {
      clearInterval(this.intervalId);
      this.display.remove();
      this.intervalId = undefined;
    }
  }
}

class ConclusionDisplay {
  constructor(rootElement) {
    this.rootElement = rootElement;

  }

  declareWinners(winners) {
    let overlay = this.rootElement.querySelector(".input-overlay");
    overlay.style.width = "100%";
    overlay.style.height = "100%";

    let winnersTitle = document.createElement("h1");
    winnersTitle.style.textAlign = "center";
    if (winners.length > 1) {
      winnersTitle.innerHTML = "Winners";
    } else {
      winnersTitle.innerHTML = "Winner";
    }
    overlay.appendChild(winnersTitle);
    
    for (const winner of winners) {
      let winnerDisplay = document.createElement("h2");
      winnerDisplay.style.textAlign = "center";
      winnerDisplay.innerHTML = winner;
      overlay.appendChild(winnerDisplay);
    }

    overlay.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
  }

}
