
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

class OfferAllianceEvent extends LogEvent {
  
  static type() {
    return "ancient-lore-offer-alliance";
  }

  static makeFromData(objectFromData) {
    return new OfferAllianceEvent(
      objectFromData.timestamp, 
      objectFromData.peerId, 
      objectFromData.playerId, 
      objectFromData.toPlayerId
    );
  }

  static makeNow(timestampOffset, peerId, playerId, toPlayerId) {
    return new OfferAllianceEvent(
      LogEvent.makeTimestamp(timestampOffset),
      peerId,
      playerId, 
      toPlayerId
    );
  }

  constructor(timestamp, peerId, playerId, toPlayerId) {
    super(timestamp, peerId, OfferAllianceEvent.type());
    this.playerId = playerId;
    this.toPlayerId = toPlayerId;
  }

  notify(eventListener) {
    eventListener.onOfferAlliance(this.playerId, this.toPlayerId);
  }
}

class AcceptAllianceEvent extends LogEvent {
  
  static type() {
    return "ancient-lore-accept-alliance";
  }

  static makeFromData(objectFromData) {
    return new AcceptAllianceEvent(
      objectFromData.timestamp, 
      objectFromData.peerId, 
      objectFromData.playerId, 
      objectFromData.withPlayerId
    );
  }

  static makeNow(timestampOffset, peerId, playerId, withPlayerId) {
    return new AcceptAllianceEvent(
      LogEvent.makeTimestamp(timestampOffset),
      peerId,
      playerId, 
      withPlayerId
    );
  }

  constructor(timestamp, peerId, playerId, withPlayerId) {
    super(timestamp, peerId, AcceptAllianceEvent.type());
    this.playerId = playerId;
    this.withPlayerId = withPlayerId;
  }

  notify(eventListener) {
    eventListener.onAcceptAlliance(this.playerId, this.withPlayerId);
  }
}

class ConflictCardSelectionEvent extends LogEvent {
  
  static type() {
    return "ancient-lore-conflict-card-selection";
  }

  static makeFromData(objectFromData) {
    return new ConflictCardSelectionEvent(
      objectFromData.timestamp, 
      objectFromData.peerId, 
      objectFromData.playerId, 
      objectFromData.cards,
      objectFromData.isReady,
      objectFromData.isTimeOver
    );
  }

  static makeNow(
    timestampOffset, peerId, playerId, cards, isReady, isTimeOver
  ) {
    return new ConflictCardSelectionEvent(
      LogEvent.makeTimestamp(timestampOffset),
      peerId,
      playerId, 
      cards,
      isReady,
      isTimeOver
    );
  }

  constructor(timestamp, peerId, playerId, cards, isReady, isTimeOver) {
    super(timestamp, peerId, ConflictCardSelectionEvent.type());
    this.playerId = playerId;
    this.cards = cards;
    this.isReady = isReady;
    this.isTimeOver = isTimeOver;
  }

  notify(eventListener) {
    eventListener.onConflictCardSelection(
      this.playerId, this.cards, this.isReady, this.isTimeOver
    );
  }
}

class AncientLorePhase {
  constructor() {
    this.gamePhase = "";
    this.roundI = -1;
    this.roundPhase = "";
    this.turnI = -1;
    this.inExtraTime = false;
    this.allianceI = -1;
    // Remember to update copyFrom, isEqual and reset.
  }

  copyFrom(other) {
    this.gamePhase = other.gamePhase;
    this.roundI = other.roundI;
    this.roundPhase = other.roundPhase;
    this.turnI = other.turnI;
    this.inExtraTime = other.inExtraTime;
    this.allianceI = other.allianceI;
  }

  isEqual(other) {
    return (
      this.gamePhase == other.gamePhase && 
      this.roundI == other.roundI &&
      this.roundPhase == other.roundPhase &&
      this.turnI == other.turnI &&
      this.inExtraTime == other.inExtraTime &&
      this.allianceI == other.allianceI
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
    this.allianceI = -1;
  }

  beginRound() {
    this.gamePhase = "playing";
    ++this.roundI;
    this.roundPhase = "selecting-actions";
    this.turnI = -1;
    this.inExtraTime = false;
    this.allianceI = -1;
  }

  beginExtraTime() {
    this.inExtraTime = true;
  }

  beginTurn() {
    this.roundPhase = "executing-actions";
    ++this.turnI;
    this.inExtraTime = false;
    this.allianceI = -1;
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
    this.gameSetup.updateGameSetupOptions(m.peers);
    
    if (this.phase.isEqual(m.phase)) {
      this.playerList.update(m.peers, m.players, m.phase.isExecutingActions());
      return;
    }
    
    if (this.phase.isForming()) {
      // This was previously forming, so some setup is needed.
      this.board.loadBoard(m.options);
      this.inputCollector.onBoardLoaded();
      this.generator.onStartGame(m.players, this.playerList.myPlayerName);
      this.model.setupConnections(this.board.connections());
      
    } else if (
      this.phase.isSelectingActions() && 
      !m.phase.isSelectingActions()
    ) {
      // This was previously selecting an action, that needs to stop.
      this.generator.clearSelectionOptions();
    }
    // Need to load the board prior to updating players.
    this.playerList.update(m.peers, m.players, m.phase.isExecutingActions());
      
    if (m.phase.isForming()) {
      this.generator.offerToStartGame();

    } else if (m.phase.isPlaying()) {
      // Either the game was forming and is now playing, or this was already 
      // playing and the round, round phase or turn must be different.
      this.board.updateLocations(m.locations);

      if (m.phase.isSelectingActions()) {
        if (!m.phase.isInExtraTime()) {
          this.generator.askForActionSelection();
        }

      } else if (m.phase.isExecutingActions()) {
        if (this.phase.turnI < m.phase.turnI) {
          this.beginTurn(m, m.turns[m.phase.turnI]);
        } else {
          this.progressTurn(m, m.turns[m.phase.turnI]);
        }
      }

      if (m.phase.isInExtraTime()) {
        this.generator.offerToContinueRegardless();
      }

    } else if (m.phase.isFinished()) {
      this.board.clearHighlight();
      this.board.updateLocations(m.locations);
      this.conclusionDisplay.declareWinners(m.winners);
    }

    // Finally update the game phase.
    this.phase.copyFrom(m.phase);
  }
  
  beginTurn(m, turn) {
    /**
     * Regroup must be done where the player has a unit.
     * Proclaim must be done where the player has a keeper.
     * Contest - player has a unit.
     * Move - Anywhere.
     * Invade - Anywhere.
     */
    console.log('TODO Skip turn if location is unsuitable for action');

    // Clear any selections left over from the previous turn.
    this.generator.clearSelectionOptions();
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
        this.generator.beginContest(turn, m.locations, m.playersAllies);
        break;
      }
      case 4: { // Move
        this.generator.beginMove(turn, m.locations);
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

  progressTurn(m, turn) {
    if (this.phase.allianceI < m.phase.allianceI) {
      this.generator.updateAlliances(m.playersAllies);
    }
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
    this.locations; // Set in loadBoard.
    this.colours = generateHslaColors(60, 30, 1.0, 6);
  }

  loadBoard(options) {
    if (options.numLocations == 3) {
      this.board.innerHTML = board3Html.trim();
    } else if (options.numLocations == 5) {
      this.board.innerHTML = board5Html.trim();
    }

    this.locations = [];
    for (let locationId = 0; locationId < options.numLocations; locationId++) {
      let location = {};

      const nameEle = 
        this.board.querySelector(".settlement" + locationId + " .name").children[0];
      location.name = nameEle.innerHTML;

      location.unitDisplayArea = this.makeUnitDisplayArea(locationId);

      location.unitDisplays = [];
      for (let playerId = 0; playerId < options.players.length; ++playerId) {
        let unitDisplay = this.makeUnitDisplay(location, playerId);
        location.unitDisplayArea.appendChild(unitDisplay);
        location.unitDisplays.push(unitDisplay);
      }

      this.locations.push(location);
    }

    this.highlighter = new SettlementHighlighter(this.board);
  }

  connections() {
    let connectionElements = this.board.querySelectorAll(".path");
    let connections = [];
    for (let connectionElement of connectionElements) {
      connections.push({ 
        locationId0: parseInt(connectionElement.getAttribute("locationid0")),
        locationId1: parseInt(connectionElement.getAttribute("locationid1"))
      });
    }
    return connections;
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
    /*
    let numberText = this.board.querySelector(
      ".settlement" + locationId + ".player" + playerId + ".number"
    );
    */
    let location = this.locations[locationId];
    let unitDisplay = location.unitDisplays[playerId];
    if (unitDisplay) {
      if (numUnits == 0) {
        unitDisplay.style.display = "none";
      } else {
        unitDisplay.style.display = "block";
        
        let numberText = unitDisplay.querySelector(".unit-number");
        if (numberText) {
          numberText.children[0].innerHTML = numUnits.toString();
        }
      }
    }
  }

  makeUnitDisplay(location, playerId) {

    let unitDisplay = document.createElement("div");
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    // <svg viewBox="-508 54 66 138" width="66" height="138"><g id="g971" class="unit"></g>
    svg.setAttribute("viewBox", "-508 54 66 138");
    svg.setAttribute("width", "66");
    svg.setAttribute("height", "138");

    // TODO colour it.
    const exampleUnit = this.board.querySelector(".examples .unit");
    let unit = exampleUnit.cloneNode(true);
    let back = unit.querySelector(".unit-fill");
    back.style.fill = this.colours[playerId];

    svg.appendChild(unit);
    unitDisplay.appendChild(svg);
    return unitDisplay;
  }

  makeUnitDisplayArea(locationId) {
    let parent = this.board.querySelector(".settlement" + locationId + ".settlement");
    const name = parent.querySelector(".name");

    let parentBox = parent.getBBox();
    let nameBox = name.getBBox();

    const x = parentBox.x;
    const y = (nameBox.y + 1.5*nameBox.height);
    const width = parentBox.width;
    const height = 3*nameBox.height;

    // const x = name.x.baseVal[0].value;
    // const y = (name.y.baseVal[0].value + 20);

    let group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    // let m = new DOMMatrix([0.4,0,0,0.4,x,y]);
    let m = document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGMatrix();
    m.a = 1; m.b = 0; 
    m.c = 0; m.d = 1;
    m.e = x; m.f = y;
    group.transform.baseVal.initialize(
      group.transform.baseVal.createSVGTransformFromMatrix(m)
    );

    let foreignObject = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
    foreignObject.style.width = width;
    foreignObject.style.height = height;

    let div = document.createElement("div");
    div.classList.add("unit-display-area");
    div.style.width = width;
    div.style.height = height;
 
    foreignObject.appendChild(div);
    group.appendChild(foreignObject);
    parent.appendChild(group);
    return div;
  }

  nameOfLocation(locationId) {
    return this.locations[locationId].name;
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
      MoveUnitsEvent,
      OfferAllianceEvent,
      AcceptAllianceEvent,
      ConflictCardSelectionEvent
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
    this.playersAllies = [];
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
      this.locations.push({
        id: i, 
        players: []
      });
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

  setupConnections(connections) {
    for (let from of this.locations) {
      from.isConnectedTo = [];
      for (let to of this.locations) {
        from.isConnectedTo[to.id] = false;
      }
    }

    for (let connection of connections) {
      let id0 = connection.locationId0;
      let id1 = connection.locationId1;
      this.locations[id0].isConnectedTo[id1] = true;
      this.locations[id1].isConnectedTo[id0] = true;
    }
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
    if (!this.phase.isInExtraTime()) {
      return;
    }
    if (this.phase.isSelectingActions()) {
      // Some players have an undefined action/locationId.
      this.beginExecutingActions();
    } else if (this.phase.isExecutingActions()) {      
      const turn = this.turns[this.phase.turnI];
      if (turn.action == "contest" || turn.action == "invade") {
        this.resolveConflict();
      }
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

    for (let player of this.players) {
      player.isActive = false;
      player.isReady = false;
      player.isTimeOver = false;
      player.cards = [];
    }
    this.players[turn.playerId].isActive = true;
    
    this.playersAllies = [];
    for (let playerId = 0; playerId < this.players.length; ++playerId) {
      this.playersAllies.push({
        'id': playerId,
        'name': this.players[playerId].name,
        'inAlliance': false,
        'allies': [],
        'alliedTo': undefined,
        'offer': undefined
      });
    }
  }

  onOfferAlliance(fromId, toId) {
    // TODO only process this if it is an appropriate time to be forming
    // alliances.
    if (this.playersAllies[fromId].inAlliance) {
      return;
    }
    this.playersAllies[fromId].offer = toId;
    ++this.phase.allianceI;
  }
  
  onAcceptAlliance(leadId, withId) {
    // TODO only process this if it is an appropriate time to be forming
    // alliances.
    if (!this.playersAllies[withId].offer == leadId) {
      return;
    }
    this.playersAllies[withId].alliedTo = leadId;
    this.playersAllies[withId].inAlliance = true;
    this.playersAllies[leadId].allies.push(withId);
    this.playersAllies[leadId].inAlliance = true;
    ++this.phase.allianceI;
  }

  onConflictCardSelection(playerId, cards, isReady, isTimeOver) {
    this.players[playerId].cards = cards;
    this.players[playerId].isReady = isReady;
    this.players[playerId].isTimeOver = isTimeOver;

    let isEveryoneReady = true;
    let isTimeOverForEveryone = true;
    for (let player of this.players) {
      if (!player.isReady) {
        isEveryoneReady = false;
      }
      if (!player.isTimeOver) {
        isTimeOverForEveryone = false;
      }
    }

    if (isEveryoneReady) {
      this.resolveConflict();
    } else if (isTimeOverForEveryone) {
      this.phase.beginExtraTime();
    }
  }

  resolveConflict() {
    console.log('TODO Resolve conflict');
    
    this.beginTurn();
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
    this.eventLog.registerEventType(OfferAllianceEvent);
    this.eventLog.registerEventType(AcceptAllianceEvent);
    this.eventLog.registerEventType(ConflictCardSelectionEvent);
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

  onStartGame(players, myPlayerName) {
    this.gameSetup.hideGameSetupOptions();
    this.myPlayerId = players.findIndex((a) => {
      return a.name == myPlayerName;
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

    // Regroup is only allowed in locations where the player has a unit.
    let isMoveToAllowedFn = (location) => {
      return location.players[this.myPlayerId].numUnits > 0;
    }

    let isMoveFromAllowedFn = (location) => {
      return true;
    }

    this.offerToMoveUnits(turn, locations, isMoveFromAllowedFn, isMoveToAllowedFn);
  }

  beginMove(turn, locations) {
    if (this.myPlayerId != turn.playerId) { 
      this.clearSelectionOptions();
      return; 
    }

    // Regroup is only allowed in locations where the player has a unit.
    let isMoveToAllowedFn = (location) => {
      return true;
    }

    let isMoveFromAllowedFn = (location) => {
      return location.isConnectedTo[turn.locationId];
    }

    this.offerToMoveUnits(turn, locations, isMoveFromAllowedFn, isMoveToAllowedFn);
  }

  offerToMoveUnits(turn, locations, isMoveFromAllowedFn, isMoveToAllowedFn) {
    let numUnitsFromSettlements = new Map();
    let onDoneFn = () => {
      this.sendMoveUnits(turn.locationId, numUnitsFromSettlements);
    }

    // Refuse if the target location is not allowed.
    if (!isMoveToAllowedFn(locations[turn.locationId])) {
      onDoneFn();
      return;
    }

    let onInputChanged = (locationId, newValue) => {
      numUnitsFromSettlements.set(locationId, newValue)
    }
    this.input.startMoveSelection(
      turn.locationId, 
      this.maxUnitsPerSettlement(locations, isMoveFromAllowedFn),
      onInputChanged
    );
    
    this.input.showReadyOption(onDoneFn);
  }

  maxUnitsPerSettlement(locations, isMoveFromAllowedFn) {
    let maxUnitsPerSettlement = [];
    for (let location of locations) {
      if (isMoveFromAllowedFn(location)) {
        maxUnitsPerSettlement.push(location.players[this.myPlayerId].numUnits);
      } else {
        maxUnitsPerSettlement.push(0);
      }
    }
    return maxUnitsPerSettlement;
  }

  sendMoveUnits(toSettlementId, numUnitsFromSettlements) {
    let movements = [];
    for (let [key, value] of numUnitsFromSettlements) {
      movements.push({fromId: key, toId: toSettlementId, numUnits: value});
    }

    let moveUnitsEvent = MoveUnitsEvent.makeNow(
      0, this.eventLog.swarm.myId, this.myPlayerId, movements
    );
    this.eventLog.add(moveUnitsEvent);
  }

  beginContest(turn, locations, playersAllies) {
    if (this.myPlayerId < 0) { return; }

    this.offerToMakeAlliances(playersAllies);

    let isReady = false;
    let isTimeOver = false;
    let cards = [];
    let onConflictCardSelectionChangedFn = (cardSelection) => {
      cards = cardSelection;
      this.sendConflictCardSelection(cards, isReady, isTimeOver);
    };
    this.input.startConflictCardSelection(onConflictCardSelectionChangedFn);

    this.input.showReadyOption(() => {
      isReady = true;
      this.sendConflictCardSelection(cards, isReady, isTimeOver);
    });

    // The continue option will appear once everyone has sent a 
    // ConflictCardSelectionEvent with isTimeOver == true.
    this.input.startCountdown(10000, () => { // TODO 30000
      isTimeOver = true;
      this.sendConflictCardSelection(cards, isReady, isTimeOver);
    });
  }

  sendConflictCardSelection(cards, isReady, isTimeOver) {
    console.log('TODO Send card selection.');
    let conflictCardSelectionEvent = ConflictCardSelectionEvent.makeNow(
      0, this.eventLog.swarm.myId, this.myPlayerId, cards, isReady, isTimeOver
    );
    this.eventLog.add(conflictCardSelectionEvent);
  }

  offerToMakeAlliances(playersAllies) {

    let onOfferFn = (toPlayerId) => {
      this.sendOfferAlliance(toPlayerId);
    };
    let onAcceptFn = (toPlayerId) => {
      this.sendAcceptAlliance(toPlayerId);
    };

    this.input.startAllianceSelection(
      playersAllies, this.myPlayerId, onOfferFn, onAcceptFn
    );
  }

  sendOfferAlliance(toPlayerId) {
    let offerAllianceEvent = OfferAllianceEvent.makeNow(
      0, this.eventLog.swarm.myId, this.myPlayerId, toPlayerId
    );
    this.eventLog.add(offerAllianceEvent);
  }

  sendAcceptAlliance(withPlayerId) {
    let acceptAllianceEvent = AcceptAllianceEvent.makeNow(
      0, this.eventLog.swarm.myId, this.myPlayerId, withPlayerId
    );
    this.eventLog.add(acceptAllianceEvent);
  }

  updateAlliances(playersAllies) {
    this.input.updateAlliances(playersAllies);
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
        numLocations : 5 // TODO perhaps a board should be selected
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
    this.allianceSelection = new AllianceSelection(this.overlay);
    this.conflictCardSelection = new ConflictCardSelection(this.cardsArea);
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

  onBoardLoaded() {
    this.settlementSelection.onBoardLoaded();
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

  startMoveSelection(
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

  startConflictCardSelection(onConflictCardSelectionChangedFn) {
    this.conflictCardSelection.start(onConflictCardSelectionChangedFn);
  }

  startAllianceSelection(playersAllies, myPlayerId, onOfferFn, onAcceptFn) {
    // Alliance selection is done simultaneously with card selection.
    this.allianceSelection.start(playersAllies, myPlayerId, onOfferFn, onAcceptFn);
  }

  updateAlliances(playersAllies) {
    this.allianceSelection.update(playersAllies);
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
    this.conflictCardSelection.cancel();
    
    if (this.countdown) {
      this.countdown.cancel();
    }
  }
}

class CardSelection {
  constructor(cardsArea) {
    this.cardsArea = cardsArea;
    this.cards = [];

    if (!typeof this.onSelected === "function") {
      throw new TypeError("Must override onSelected(cardId)");
    }
  }

  deselectAll() {
    for (let c of this.cards) {
      this.deselect(c);
    }
  }

  deselect(card) {
    card.querySelector(".border").style.stroke = "#6d0000"; 
    card.style.paddingTop = "1%";
    card.style.paddingBottom = "0%";
  }

  select(card) {
    card.querySelector(".border").style.stroke = "#ff0000";
    card.style.paddingTop = "0%";
    card.style.paddingBottom = "1%";
  }

  initCardElement(cardId, html) {
    let card = document.createElement("div");
    card.addEventListener("click", () => {
      this.onSelected(card, cardId);
    });
    card.className = "action card";
    card.innerHTML = html;
    card.style.display = "none";
    card.style.position = "relative";
    card.style.flexBasis = "10%";
    this.cards.push(card);
    this.cardsArea.appendChild(card);
  }

  showAll() {
    for (let card of this.cards) {
      card.style.display = "block";
    }
  }

  hideAll() {
    for (let card of this.cards) {
      card.style.display = "none";
    }
  }
}

class ConflictCardSelection extends CardSelection {
  constructor(cardsArea) {
    super(cardsArea);
    this.initCardElements();
    this.cardSelection = [];
    this.onConflictCardSelected;
  }

  initCardElements() {
    this.initCardElement("0-card", number0CardHtml.trim());
    this.initCardElement("1-card", number1CardHtml.trim());
    this.initCardElement("2-card", number2CardHtml.trim());
    this.initCardElement("3-card", number3CardHtml.trim());
    this.initCardElement("4-card", number4CardHtml.trim());
    this.initCardElement("5-card", number5CardHtml.trim());
    this.initCardElement("6-card", number6CardHtml.trim());
    this.initCardElement("7-card", number7CardHtml.trim());

    this.initCardElement("convert", convertCardHtml.trim());
    this.initCardElement("plus2", plus2CardHtml.trim());
  }

  start(onConflictCardSelected) {
    this.cardSelection = [];
    this.onConflictCardSelected = onConflictCardSelected;
    this.showAll();
  }

  cancel() {
    this.onConflictCardSelected = undefined;
    this.hideAll();
    this.deselectAll();
  }

  onSelected(card, cardId) {
    const index = this.cardSelection.indexOf(cardId);
    if (index > -1) {
      this.cardSelection.splice(index, 1);
      this.deselect(card);
    } else {
      this.cardSelection.push(cardId);
      this.select(card);
    }

    if (this.onConflictCardSelected) {
      this.onConflictCardSelected(this.cardSelection);
    }
  }
}

class ActionSelection extends CardSelection {
  constructor(cardsArea) {
    super(cardsArea);
    this.initCardElements();
    this.onActionSelected;
  }

  initCardElements() {
    this.initCardElement("regroup", regroupCardHtml.trim());
    this.initCardElement("proclaim", proclaimCardHtml.trim());
    this.initCardElement("contest", contestCardHtml.trim());
    this.initCardElement("move", moveCardHtml.trim());
    this.initCardElement("invade", invadeCardHtml.trim());
  }

  start(onActionSelected) {
    this.onActionSelected = onActionSelected;
    this.showAll();
  }

  cancel() {
    this.onActionSelected = undefined;
    this.hideAll();
    this.deselectAll();
  }

  onSelected(card, gameAction) {
    this.deselectAll();
    this.select(card);
    if (this.onActionSelected) {
      this.onActionSelected(gameAction);
    }
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

  onBoardLoaded() {
    if (!this.highlighter) {
      this.highlighter = new SettlementHighlighter(this.board);
    }
  }

  start(onLocationSelected) {
    this.selectedId = -1;
    this.onLocationSelected = onLocationSelected;

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
      if (highlight.closest(".settlement" + settlementId)) {
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
    const names = this.board.querySelectorAll(".settlement .name"); 

    for (let i = 0; i < names.length; ++i) {
      const name = this.board.querySelector(".settlement" + i + " .name");
      let parent = name.parentElement;

      const x = Math.round(name.x.baseVal[0].value - 40);
      const y = Math.round(name.y.baseVal[0].value - 77);

      let group = document.createElementNS("http://www.w3.org/2000/svg", "g");
      // let m = new DOMMatrix([0.4,0,0,0.4,x,y]);
      let m = document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGMatrix();
      m.a = 2; m.b = 0; m.c = 0;  m.d = 2;
      m.e = x; m.f = y;
      group.transform.baseVal.initialize(
        group.transform.baseVal.createSVGTransformFromMatrix(m)
      );

      let foreignObject = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
      foreignObject.style.width = "3.5em";
      foreignObject.style.height = "3em";

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
class AllianceSelection {
  constructor(overlay) {
    this.overlay = overlay;
    this.onOfferFn;
    this.onAcceptFn;
    this.myPlayerId;
    this.table;
  }

  start(playersAllies, myPlayerId, onOfferFn, onAcceptFn) {
    /**
     * TODO Need to work out which players are allowed to offer/accept 
     * alliances, and which are only allowed to offer.
     *
     * For now just allow all alliances to form and weed out the 
     * invalid ones at the end.
     * 
     * TODO Consider requiring a 5s gap between accepting alliances, 
     * except for last 5s.
     */
    /**
     * Want to display buttons to offer an alliance to other players,
     * these stay until my offer is accepted. Pressing a different 
     * offer button just changes who is being offered an alliance.
     * 
     * Once my offer is accepted I cannot offer or accept offers.
     * 
     * Also need buttons to accept offers, once I have accepted an
     * offer I cannot make offers.
     * 
     * Want to show which other offers have been made, and what the
     * current alliances are.
     */
    this.myPlayerId = myPlayerId;
    this.onOfferFn = onOfferFn;
    this.onAcceptFn = onAcceptFn;
    this.update(playersAllies);
  }

  update(playersAllies) {
    /**
     *  per player {
     *    id: ;
     *    name: ;
     *    allies: [ids];
     *    alliedTo: id;
     *    offer: playerId;
     *  }
     * 
     * or
     *  per alliance {
     *    leadPlayer: id;
     *    otherPlayers: [ids];
     *    offer: playerId;
     *  }
     */

    /**
      <table>
        <tbody>
          <tr>
            <td><p>Andrew</p></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td><p>Tessa</p></td>
            <td><input type="button" value="Offer"></td>
            <td><p>Amos</p></td>
          </tr>
          <tr>
            <td><p>Miriam</p></td>
            <td><input type="button" value="Offer"></td>
            <td><input type="button" value="Accept"></td>
          </tr>
          <tr>
            <td><p>Amos</p></td>
            <td><input type="button" value="Offer"></td>
            <td><p>Miriam</p></td>
          </tr>
        </tbody>
      </table>
    */
    let players = playersAllies;

    if (this.table) {
      this.table.remove();
    }
    this.table = document.createElement("table");
    let tableBody = document.createElement("tbody");
    
    let me = players[this.myPlayerId];
    if (me === undefined) {
      // I'm just an observer.
      me = {
        'id': -1,
        'inAlliance': true,
        'offer': undefined
      }
    }

    let canAccept = me.alliedTo === undefined;

    for (let player of players) {
      if (player.alliedTo !== undefined) {
        continue;
      }

      let tableRow = document.createElement("tr"); 
      let nameCell = document.createElement("td"); 
      nameCell.classList.add("alliance");
      let nameP = document.createElement("span");
      nameP.classList.add("leadAlly");
      nameP.innerHTML = player.name;
      nameCell.appendChild(nameP);
      for (let ally of player.allies) {
        nameCell.appendChild(document.createElement("br"));
        let allyP = document.createElement("span");
        allyP.classList.add("otherAlly");
        allyP.innerHTML = players[ally].name;
        nameCell.appendChild(allyP);
      }

      let offerCell = document.createElement("td");  
      if (player.id != me.id && !me.inAlliance) {
        let input = document.createElement("input");
        input.type = "button";
        input.value = "Offer";
        input.classList.add("offer-button");
        if (me.offer == player.id) {
          input.classList.add("selected");
        }
        input.addEventListener("click", (event) => {
          let wasSelected = event.target.classList.contains("selected");
          if (wasSelected) {
            this.onOfferFn(undefined);
          } else {
            this.onOfferFn(player.id);
          }
        });
        offerCell.appendChild(input);
      }

      let acceptCell = document.createElement("td");
      if (canAccept && player.offer == me.id) {
        let input = document.createElement("input");
        input.type = "button";
        input.value = "Accept";
        input.classList.add("accept-button");
        input.addEventListener("click", (event) => {
          this.onAcceptFn(player.id);
        });
        acceptCell.appendChild(input);
      } else if (player.offer !== undefined) {
        let nameP = document.createElement("span");
        nameP.classList.add("offered");
        nameP.innerHTML = players[player.offer].name;
        acceptCell.appendChild(nameP);
      }

      tableRow.appendChild(nameCell);
      tableRow.appendChild(offerCell);
      tableRow.appendChild(acceptCell);
      if (player.id == me.id) {
        tableBody.insertBefore(tableRow, tableBody.firstChild);
      } else {
        tableBody.appendChild(tableRow);
      }
    }
    this.table.appendChild(tableBody);
    this.overlay.appendChild(this.table);
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
