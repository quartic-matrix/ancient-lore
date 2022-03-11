
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
      objectFromData.boardSetup
    );
  }

  static makeNow(timestampOffset, peerId, options) {
    // Set the initial player order.
    let orderedPlayers = [];
    for (let playerId = 0; playerId < options.players.length; ++playerId) {
      orderedPlayers.push({playerId: playerId, x: Math.random()});
    }
    orderedPlayers.sort((a, b) => { return a.x - b.x; });
    for (let rank = 0; rank < orderedPlayers.length; ++rank) {
      options.players[orderedPlayers[rank].playerId].rank = rank;
    }
    
    // Load the board and extract the number of locations and the connections
    // between them.
    let div = document.createElement("div");
    let tempHtmlBoard = new AncientLoreBoardUpdater(div);
    tempHtmlBoard.loadBoard(options);
    let numLocations = tempHtmlBoard.locations.length;
    let numSettlements = numLocations - 1;

    // Distribute the units.
    const numStartingUnitsPerPlayer = 8;
    let units = [];
    for (let playerId = 0; playerId < options.players.length; ++playerId) {
      for (let unitI = 0; unitI < numStartingUnitsPerPlayer; ++unitI) {
        let locationId = Math.floor(Math.random() * numSettlements) + 1;
        units.push({locationId: locationId, playerId: playerId});
      }
    }
    
    // Distribute the lore.
    const numLorePerLocation = 2;
    let loreDistribution = [];
    let loreSupply = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let loreExtraSupply = [];
    loreExtraSupply.push(...loreSupply);
    loreExtraSupply.push(...loreSupply);
    loreExtraSupply.push(...loreSupply);
    for (let i = loreSupply.length; i < numLorePerLocation*numSettlements; ++i) {
      const pickedI = Math.floor(Math.random() * loreExtraSupply.length);
      loreSupply.push(loreExtraSupply.splice(pickedI, 1)[0]);
    }
    for (let j = 0; j < numLorePerLocation; ++j) {
      // Start from the second location, as the first is the woods which
      // doesn't contain lore.
      for (let i = 1; i < numLocations; ++i) {
        const pickedI = Math.floor(Math.random() * loreSupply.length);
        loreDistribution.push({
          locationId: i, 
          loreType: loreSupply.splice(pickedI, 1)[0]
        });
      }
    }
    if (loreSupply.length > 0) throw "Must distribute all the lore";
      
    let boardSetup = {
      numLocations: numLocations,
      connections: tempHtmlBoard.connections(),
      units: units,
      loreDistribution: loreDistribution
    };

    return new StartAncientLoreEvent(
      LogEvent.makeTimestamp(timestampOffset),
      peerId,
      options, 
      boardSetup
    );
  }

  constructor(timestamp, peerId, options, boardSetup) {
    super(timestamp, peerId, StartAncientLoreEvent.type());
    this.options = options;
    this.boardSetup = boardSetup;
  }

  notify(eventListener) {
    eventListener.onStartGame(this.options, this.boardSetup);
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

class RevealLoreEvent extends LogEvent {
  
  static type() {
    return "ancient-lore-reveal-lore";
  }

  static makeFromData(objectFromData) {
    return new RevealLoreEvent(
      objectFromData.timestamp, 
      objectFromData.peerId, 
      objectFromData.playerId, 
      objectFromData.selectedLoreI,
      objectFromData.bonusCards,
      objectFromData.allocation
    );
  }

  static makeNow(
    timestampOffset, peerId, playerId, 
    selectedLoreI, bonusCards, allocation
  ) {
    return new RevealLoreEvent(
      LogEvent.makeTimestamp(timestampOffset),
      peerId,
      playerId, 
      selectedLoreI, 
      bonusCards, 
      allocation
    );
  }

  constructor(
    timestamp, peerId, playerId, 
    selectedLoreI, bonusCards, allocation
  ) {
    super(timestamp, peerId, RevealLoreEvent.type());
    this.playerId = playerId;
    this.selectedLoreI = selectedLoreI;
    this.bonusCards = bonusCards;
    this.allocation = allocation;
  }

  notify(eventListener) {
    eventListener.onRevealLore(
      this.playerId, this.selectedLoreI, this.bonusCards, this.allocation
    );
  }
}

class ProclaimLoreVoteEvent extends LogEvent {
  
  static type() {
    return "ancient-lore-proclaim-lore-vote";
  }

  static makeFromData(objectFromData) {
    return new ProclaimLoreVoteEvent(
      objectFromData.timestamp, 
      objectFromData.peerId, 
      objectFromData.playerId, 
      objectFromData.isInFavour
    );
  }

  static makeNow(
    timestampOffset, peerId, playerId, 
    isInFavour
  ) {
    return new ProclaimLoreVoteEvent(
      LogEvent.makeTimestamp(timestampOffset),
      peerId,
      playerId, 
      isInFavour
    );
  }

  constructor(
    timestamp, peerId, playerId, 
    isInFavour
  ) {
    super(timestamp, peerId, ProclaimLoreVoteEvent.type());
    this.playerId = playerId;
    this.isInFavour = isInFavour;
  }

  notify(eventListener) {
    eventListener.onProclaimLoreVote(
      this.playerId, this.isInFavour
    );
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
    this.board = new AncientLoreBoardUpdater(
      domElement.querySelector(".board")
    );
    this.playerList = new PlayerList(domElement, playerName, this.board);
    this.conclusionDisplay = new ConclusionDisplay(domElement);

    // Internal model
    this.model = new AncientLoreModel(playerName);
    this.modelUpdater = new LogEventConsumerUpdater(this.model, eventLog);

    this.coordinator = new ActivityCoordinator();

    this.model.addListener(this);

    // Kick things off by joining.
    this.join(playerName);
    this.eventLog.broadcastAllEvents();
  }

  onModelUpdated() {
    const m = this.model;

    let v = {
      generator: this.generator,
      board: this.board,
      conclusionDisplay: this.conclusionDisplay
    }

    // If the current coordinator doesn't match the activity that the model 
    // is doing, then a new coordinator is needed.
    if (!this.coordinator.matches(m.activity)) {
      this.coordinator.end(v, m);  
      // Clear any selections left over from the activity that has ended.
      v.generator.clearSelectionOptions();
      this.coordinator = m.activity.makeCoordinator();
      this.coordinator.begin(v, m);
    }
    this.coordinator.update(v, m);
    
    const displayOthersActions = m.activity instanceof TurnActivity;
    this.playerList.update(m.peers, m.players, displayOthersActions);
    this.board.updateLocations(m.myPlayerId, m.locations);
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

    for (let rank = 0; rank < players.length; ++rank) {
      let player = players.find((p) => { return p.rank == rank; });
      this.display(player.name, player, displayOthersActions);
    }

    // Display observers, i.e. peers that are not players.
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

      // TODO `player` no longer has `selectedAction`, need to get that from
      // the 
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
  constructor(boardElement) {
    this.board = boardElement;
    this.locationHighlighter; // Set in loadBoard.
    this.locations; // Set in loadBoard.
    this.colours = generateHslaColors(60, 30, 1.0, 6);
  }

  loadBoard(options) {
    if (this.locations) return;

    if (options.boardSelection == "basic-3-settlement") {
      this.board.innerHTML = board3Html.trim();
    } else if (options.boardSelection == "basic-5-settlement") {
      this.board.innerHTML = board5Html.trim();
    }

    let locationElements = this.board.querySelectorAll(".settlement");
    let numLocations = locationElements.length;

    this.locations = [];
    for (let locationId = 0; locationId < numLocations; locationId++) {
      let location = {};

      const nameEle = 
        this.board.querySelector(".settlement" + locationId + " .name").children[0];
      location.name = nameEle.innerHTML;
      
      let displayAreas = this.makeDisplayAreas(locationId);
      
      location.unitDisplayArea = displayAreas.unitDisplayArea;
      location.unitDisplays = [];
      for (let playerId = 0; playerId < options.players.length; ++playerId) {
        let unitDisplay = this.makeUnitDisplay(location, playerId);
        location.unitDisplayArea.appendChild(unitDisplay);
        location.unitDisplays.push(unitDisplay);
      }

      location.loreDisplayArea = displayAreas.loreDisplayArea;
      // These will be created on demand in updateLoreInLocation.
      location.loreDisplays = []; 

      this.locations.push(location);
    }

    this.locationHighlighter = new SettlementHighlighter(this.board);
    this.loreHighlighter = new LoreHighlighter(this.board);
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

  updateLocations(myPlayerId, modelLocations) {
    if (!this.locations) return;

    for (let locationId = 0; locationId < modelLocations.length; ++locationId) {
      let modelLocation = modelLocations[locationId];
      let boardLocation = this.locations[locationId];
      for (let playerId = 0; playerId < modelLocation.players.length; ++playerId) {
        let unitDisplay = boardLocation.unitDisplays[playerId];
        let player = modelLocation.players[playerId];
        this.updateUnitsForPlayerInLocation(
          unitDisplay, player.numUnits, player.hasKeeper
        );
      }
      this.updateLoreInLocation(myPlayerId, modelLocation, this.locations[locationId]);
    }
  }

  updateUnitsForPlayerInLocation(unitDisplay, numUnits, hasKeeper) {
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
      let keeperDisplay = unitDisplay.querySelector(".keeper");
      if (keeperDisplay) {
        if (hasKeeper) {
          keeperDisplay.style.visibility = "visible";
        } else {
          keeperDisplay.style.visibility = "hidden";
        }
      }
    }
  }

  updateLoreInLocation(myPlayerId, modelLocation, boardLocation) {
    let showLoreType = false;
    if (myPlayerId != undefined && myPlayerId >= 0) {
      showLoreType = modelLocation.players[myPlayerId].numUnits > 0;
    }
    let loreDisplays = boardLocation.loreDisplays;
    let lorePieces = modelLocation.lorePieces;
    // Create new lore displays as necessary.
    while (loreDisplays.length < lorePieces.length) {
      let loreDisplay = this.makeLoreDisplay(location);
      loreDisplay.loreI = loreDisplays.length;
      loreDisplays.push(loreDisplay);
      boardLocation.loreDisplayArea.appendChild(loreDisplay);
    }
    for (let i = 0; i < lorePieces.length; ++i) {
      const lorePiece = lorePieces[i];
      let loreDisplay = loreDisplays[i];
      loreDisplay.style.display = "block";
      let numberText = loreDisplay.querySelector(".lore-number");
      if (numberText) {
        if (showLoreType || lorePiece.isRevealed) {
          numberText.children[0].innerHTML = lorePiece.type.toString();
        } else {
          numberText.children[0].innerHTML = "";
        }
      }
    }
    // Hide any extra lore displays.
    for (let i = lorePieces.length; i < loreDisplays.length; ++i) {
      let loreDisplay = loreDisplays[i];
      loreDisplay.style.display = "none";
    }
  }

  makeUnitDisplay(location, playerId) {
    let unitDisplay = document.createElement("div");
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    // <svg viewBox="-508 54 66 138" width="66" height="138"><g id="g971" class="unit"></g>
    svg.setAttribute("viewBox", "-508 54 66 138");
    svg.setAttribute("width", "66");
    svg.setAttribute("height", "138");

    const exampleUnit = this.board.querySelector(".examples .unit");
    let unit = exampleUnit.cloneNode(true);
    let back = unit.querySelector(".unit-fill");
    back.style.fill = this.colours[playerId];

    svg.appendChild(unit);
    unitDisplay.appendChild(svg);
    return unitDisplay;
  }

  makeLoreDisplay(location) {
    let loreDisplay = document.createElement("div");
    loreDisplay.classList.add("loreDisplay");
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    // <svg viewBox="-508 204 66 66" width="66" height="66"><g id="g1163" class="lore"></g>
    svg.setAttribute("viewBox", "-508 204 66 66");
    svg.setAttribute("width", "66");
    svg.setAttribute("height", "66");

    const exampleLore = this.board.querySelector(".examples .lore");
    let lore = exampleLore.cloneNode(true);

    svg.appendChild(lore);
    loreDisplay.appendChild(svg);
    return loreDisplay;
  }

  makeDisplayAreas(locationId) {
    let parent = this.board.querySelector(".settlement" + locationId + ".settlement");
    const name = parent.querySelector(".name");

    let parentBox = parent.getBBox();
    let nameBox = name.getBBox();

    const x = parentBox.x;
    const y = (nameBox.y + 1.2*nameBox.height);
    const width = parentBox.width;
    const height = nameBox.height;

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
    foreignObject.style.height = 66+138;

    let displayAreas = {};
    displayAreas.unitDisplayArea = 
      this.makeDisplayArea("unit-display-area", width, 138);
    displayAreas.loreDisplayArea = 
      this.makeDisplayArea("lore-display-area", width, 66);

    foreignObject.appendChild(displayAreas.loreDisplayArea);
    foreignObject.appendChild(displayAreas.unitDisplayArea);

    group.appendChild(foreignObject);
    parent.appendChild(group);
    return displayAreas;
  }

  makeDisplayArea(name, width, height) {
    let div = document.createElement("div");
    div.classList.add(name);
    div.style.width = width;
    div.style.height = height;

    return div;
  }

  nameOfLocation(locationId) {
    return this.locations[locationId].name;
  }

  updateLocationHighlight(locationId) {
    if (this.locationHighlighter) {
      this.locationHighlighter.update(locationId, "#ff0000");
    }
  }

  clearLocationHighlight() {
    if (this.locationHighlighter) {
      this.locationHighlighter.clear();
    }
  }

  updateLoreHighlight(locationId, loreI) {
    if (this.loreHighlighter) {
      this.loreHighlighter.update(locationId, loreI, "#ff0000");
    }
  }

  clearLoreHighlight() {
    if (this.loreHighlighter) {
      this.loreHighlighter.clear();
    }
  }
}

class Activity {
  constructor(m) {
    m.incrementProgress();
    this.progressWhenActivityStarted = m.progress;
  }

  // makeCoordinator() = 0
}


class ActivityCoordinator {
  constructor(progressWhenActivityStarted) {
    this.progressWhenActivityStarted = progressWhenActivityStarted;
  }

  matches(activity) {
    return (
      this.progressWhenActivityStarted == activity.progressWhenActivityStarted &&
      this.isMatchingActivity(activity)
    );
  }
  
  isMatchingActivity(activity) { return false; }
  begin(v, m) {}
  update(v, m) {}
  end(v, m) {}
}


class TurnActivityCoordinator extends ActivityCoordinator {
  constructor(activity) {
    super(activity.progressWhenActivityStarted);
    this.turn = activity.turn;
  }

  begin(v, m) {
    v.board.updateLocationHighlight(this.turn.locationId);
    this.doBegin(v, m);
  }
}

class FormingActivity extends Activity {
  constructor(m) {
    super(m);
  }

  makeCoordinator() {
    return new FormingActivityCoordinator(this);
  }

  onStartGame(options, boardSetup, m) {
    m.options = options; // TODO Consider making options a member of this.
    m.players = options.players;
    for (let player of m.players) {
      player.victoryPoints = 0;
      player.extraCards = ["plus2", "convert", "convert", "plus2"]; // TODO = [];
    }
    m.myPlayerId = m.players.findIndex((a) => {
      return a.name == m.myPlayerName;
    });
    this.setupLocations(options, boardSetup, m);
    m.beginRound();
  }

  setupLocations(options, boardSetup, m) {
    // Create the correct number of locations.
    for (let i = 0; i < boardSetup.numLocations; i++) {
      m.locations.push({
        id: i, 
        players: []
      });
    }

    // Set the units per player for each location to 0.
    for (let location of m.locations) {
      for (let index = 0; index < options.players.length; index++) {
        location.players.push({ numUnits: 0, lore: [], hasKeeper: false });
      }
      location.lorePieces = [];
    }

    // Add the units to the appropriate locations.
    for (let unit of boardSetup.units) {
      ++m.locations[unit.locationId].players[unit.playerId].numUnits;
      m.locations[unit.locationId].players[unit.playerId].hasKeeper = true; // TODO remove
    }

    // Setup the lore in each location.
    for (let lorePiece of boardSetup.loreDistribution) {
      m.locations[lorePiece.locationId].lorePieces.push({
        type: lorePiece.loreType,
        isRevealed: false
      });
    }

    this.setupConnections(boardSetup.connections, m);
  }

  setupConnections(connections, m) {
    for (let from of m.locations) {
      from.isConnectedTo = [];
      for (let to of m.locations) {
        from.isConnectedTo[to.id] = false;
      }
    }

    for (let connection of connections) {
      let id0 = connection.locationId0;
      let id1 = connection.locationId1;
      m.locations[id0].isConnectedTo[id1] = true;
      m.locations[id1].isConnectedTo[id0] = true;
    }
  }
}

class FormingActivityCoordinator extends ActivityCoordinator {
  constructor(activity) {
    super(activity.progressWhenActivityStarted);
  }

  isMatchingActivity(activity) {
    return activity instanceof FormingActivity;
  }

  begin(v, m) {
    v.generator.offerToStartGame();
  }

  update(v, m) {
    v.generator.updateGameSetupOptions(m.peers);
  }

  end(v, m) {
    // The board must be loaded before forming ends and the game starts.
    v.board.loadBoard(m.options);
    v.generator.onStartGame(m.players, m.myPlayerName);
  }
}

class ActionSelectionActivity extends Activity {
  constructor(m) {
    super(m);

    m.clearSelectedActions();

    this.isInExtraTime = false;
  }

  makeCoordinator() {
    return new ActionSelectionActivityCoordinator(this);
  }


  onActionSelected(playerId, action, locationId, m) {
    m.players[playerId].selectedAction = { action: action, locationId: locationId };
    m.players[playerId].isActive = action == undefined || locationId == undefined;

    let hasEveryoneSentSomething = true;
    let isEveryoneReady = true;
    for (let player of m.players) {
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
      this.beginExecutingActions(m);
    } else if (hasEveryoneSentSomething) {
      this.isInExtraTime = true;
    }
  }

  onContinue(playerId, m) {
    if (!this.isInExtraTime) return;
    // Some players have an undefined action/locationId, otherwise the automatic
    // progression would have kicked in.
    this.beginExecutingActions(m);
  }

  beginExecutingActions(m) {
    new ExecutingActionsActivity(m);
  }
}

class ActionSelectionActivityCoordinator extends ActivityCoordinator {
  constructor(activity) {
    super(activity.progressWhenActivityStarted);
    this.activity = activity;
    this.isInExtraTime = false;
  }

  isMatchingActivity(activity) {
    return activity instanceof ActionSelectionActivity;
  }

  begin(v, m) {
    v.generator.askForActionSelection();
  }

  update(v, m) {
    if (!this.isInExtraTime && this.activity.isInExtraTime) {
      v.generator.offerToContinueRegardless();
      this.isInExtraTime = true;
    }
  }
}

class ExecutingActionsActivity extends Activity {
  constructor(m) {
    super(m);
    
    this.beginExecutingActions(m);
  }

  beginExecutingActions(m) {
    const actionOrder = 
      [undefined, "regroup", "proclaim", "contest", "move", "invade"];
    
    this.turns = [];
    this.turnI = -1;
    for (const [playerId, player] of m.players.entries()) {
      const selectedAction = player.selectedAction;
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
        return m.players[a.playerId].rank - m.players[b.playerId].rank;
      }
    });

    this.beginTurn(m);
  }

  beginTurn(m) {
    ++this.turnI;
    let turn = this.turns[this.turnI];

    /**
     * Regroup must be done where the player has a unit.
     * Proclaim must be done where the player has a keeper.
     * Contest - player has a unit.
     * Move - Anywhere.
     * Invade - Anywhere.
     */
     console.log('TODO Skip turn if location is unsuitable for action');

    turn.onFinishedFn = this.beginTurn.bind(this);
    if (this.turnI == this.turns.length - 1) {
      turn.onFinishedFn = this.endRound.bind(this);
    }

    for (let player of m.players) {
      player.isActive = false;
      player.isReady = false;    // isReady, isTimeOver and cardSelection should be in 
      player.isTimeOver = false; // the child activities that this spawns.
      player.cardSelection = [];
    }
    m.players[turn.playerId].isActive = true;

    switch (turn.action) { 
      case "regroup": {
        m.activity = new RegroupTurnActivity(m, turn);
        break;
      }
      case "proclaim": {
        m.activity = new ProclaimTurnActivity(m, turn);
        break;
      }
      case "contest": {
        m.activity = new ContestTurnActivity(m, turn);
        break;
      }
      case "move": {
        m.activity = new MoveTurnActivity(m, turn);
        break;
      }
      case "invade": {
        console.log('TODO Invade'); turn.onFinishedFn(m);
        break;
      }
      default: {
        console.log('Invalid action');
        turn.onFinishedFn(m);
        break;
      }
    }
  }
  
  endRound(m) {
    console.log('TODO Check for victory at the end of each turn');

    for (const location of m.locations) {
      let numUnits = [];
      for (const player of location.players) {
        numUnits.push(player.numUnits);
      }
      numUnits.sort();
      const median = numUnits[Math.floor(numUnits.length/2)];
      for (let playerId = 0; playerId < location.players.length; playerId++) {
        if (location.players[playerId].numUnits >= median) {
          ++m.players[playerId].victoryPoints;
        }
      } 
    }
    
    let maxVps = 0;
    for (const player of m.players) {
      maxVps = Math.max(maxVps, player.victoryPoints);
    }
    let winners = [];
    for (const player of m.players) {
      if (player.victoryPoints >= 10 && player.victoryPoints >= maxVps) {
        winners.push(player.name);
      }
    }
    if (winners.length > 0) {
      m.activity = new FinishedActivity(m, winners);
    } else {
      m.beginRound();
    }
  }
}

class TurnActivity extends Activity {
  constructor(m, turn) {
    super(m);
    this.onFinishedFn = () => {
      turn.onFinishedFn(m);
    }
    this.turn = turn;
  }

  endTurn() {
    this.onFinishedFn();
  }
}

class MovementTurnActivity extends TurnActivity {
  constructor(m, turn) {
    super(m, turn);
  }
  
  resolveMovement(playerId, movements, m) {
    // Update units in each location.
    for (let movement of movements) {
      movement.numUnits = Math.max(movement.numUnits, 0);
      movement.numUnits = Math.min(
        movement.numUnits,
        m.locations[movement.fromId].players[playerId].numUnits
      );
      m.locations[movement.fromId].players[playerId].numUnits -= movement.numUnits;
      m.locations[movement.toId].players[playerId].numUnits += movement.numUnits;
    }
  }
}

class MoveTurnActivity extends MovementTurnActivity {
  constructor(m, turn) {
    super(m, turn);
  }

  makeCoordinator() {
    return new MoveTurnActivityCoordinator(this);
  }

  onMoveUnits(playerId, movements, m) {
    this.resolveMovement(playerId, movements, m);
    this.endTurn();
  }
}

class MoveTurnActivityCoordinator extends TurnActivityCoordinator {
  constructor(activity) {
    super(activity);
  }

  isMatchingActivity(activity) {
    return activity instanceof MoveTurnActivity;
  }

  doBegin(v, m) {
    v.generator.beginMove(this.turn, m.locations);
  }
}

class ProclaimTurnActivity extends TurnActivity {
  constructor(m, turn) {
    super(m, turn);

    this.location = m.locations[turn.locationId];

    this.playersWithKeeper = [];
    for (let i = 0; i < this.location.players.length; ++i) {
      if (this.location.players[i].hasKeeper) {
        this.playersWithKeeper.push({playerId: i, playerName: m.players[i].name});
      }
    }
  }
  
  makeCoordinator() {
    return new ProclaimTurnActivityCoordinator(this);
  }

  onRevealLore(playerId, loreI, bonusCards, allocations, m) {
    m.bonusCardDeck.findAndDiscard(bonusCards);

    // Reveal the lore, which will trigger voting.
    this.location.lorePieces[loreI].isRevealed = true;
    for (const allocation of allocations) {
      let playerWithKeeper = this.playersWithKeeper.find(
        (e) => { return e.playerId == allocation.playerId; }
      );
      playerWithKeeper.bonusCard = bonusCards[allocation.cardI];
    }

    m.activity = new ProclaimTurnVoteActivity(m, this, loreI);
  }
}

class ProclaimTurnActivityCoordinator extends TurnActivityCoordinator {
  constructor(activity) {
    super(activity);
    this.playersWithKeeper = activity.playersWithKeeper;
  }

  isMatchingActivity(activity) {
    return activity instanceof ProclaimTurnActivity;
  }

  doBegin(v, m) {
    v.generator.beginProclaim(this.turn, this.playersWithKeeper, m.bonusCardDeck);
  }
}


class ProclaimTurnVoteActivity extends TurnActivity {
  constructor(m, revealActivity, loreI) {
    super(m, revealActivity.turn);

    this.loreI = loreI;
    this.playersWithKeeper = revealActivity.playersWithKeeper;

    for (const playerWithKeeper of this.playersWithKeeper) {
      m.players[playerWithKeeper.playerId].isActive = true;
    }
  }
  
  makeCoordinator() {
    return new ProclaimTurnVoteActivityCoordinator(this);
  }

  onProclaimLoreVote(playerId, isInFavour, m) {
    // Once everyone applicable has voted, then resolve the vote.
    let numInFavour = 0;
    let numNotInFavour = 0;
    for (let playerWithKeeper of this.playersWithKeeper) {
      if (playerWithKeeper.playerId == playerId) {
        playerWithKeeper.isInFavour = isInFavour;
        m.players[playerId].isActive = false;
      }
      numInFavour += playerWithKeeper.isInFavour === true;
      numNotInFavour += playerWithKeeper.isInFavour === false;
    }
    if (numInFavour + numNotInFavour == this.playersWithKeeper.length) {
      if (numInFavour > numNotInFavour) {
        this.proclaimLore(m);
      }
      this.endTurn();
    }
  }

  proclaimLore(m, playersWithKeeper) {
    let location = m.locations[this.turn.locationId];
    let lorePiece = location.lorePieces.splice(this.loreI, 1)[0];
    let isFirstToProclaim = !m.proclaimedLore.find((lore) => {
      return lore.type == lorePiece.type;
    });
    m.proclaimedLore.push(lorePiece);
    

    for (const playerWithKeeper of this.playersWithKeeper) {
      location.players[playerWithKeeper.playerId].numUnits += 
        playerWithKeeper.bonusCard.numFollowers;
      for (let i = 0; i < playerWithKeeper.bonusCard.numArtifacts; ++i) {
        m.players[playerWithKeeper.playerId].extraCards.push("plus2");
      }
      if (playerWithKeeper.playerId == this.turn.playerId) {
        // This is the initiator, so they may get a convert card.
        if (isFirstToProclaim) {
          m.players[playerWithKeeper.playerId].extraCards.push("convert");
        }
      }
    }
  }
}

class ProclaimTurnVoteActivityCoordinator extends TurnActivityCoordinator {
  constructor(activity) {
    super(activity);
    this.activity = activity;
  }

  isMatchingActivity(activity) {
    return activity instanceof ProclaimTurnVoteActivity;
  }

  doBegin(v, m) {
    v.board.updateLoreHighlight(this.turn.locationId, this.activity.loreI);


    let meWithKeeper = this.activity.playersWithKeeper.find(
      (e) => { return e.playerId == m.myPlayerId }
    );
    if (meWithKeeper) {
      v.generator.beginProclaimVote(this.turn, meWithKeeper.bonusCard);
    }
  }

  end(v, m) {
    v.generator.showVotes(this.activity.playersWithKeeper);
    v.board.clearLoreHighlight();
  }
}

class RegroupTurnActivity extends MovementTurnActivity {
  constructor(m, turn) {
    super(m, turn);
  }
  
  makeCoordinator() {
    return new RegroupTurnActivityCoordinator(this);
  }

  onMoveUnits(playerId, movements, m) {
    this.resolveMovement(playerId, movements, m);
    
    // Reorder the turn order.
    let activeRank = m.players[playerId].rank;
    for (let player of m.players) {
      if (player.rank < activeRank) {
        ++player.rank;
      }
    }
    m.players[playerId].rank = 0;

    this.endTurn();
  }
}

class RegroupTurnActivityCoordinator extends TurnActivityCoordinator {
  constructor(activity) {
    super(activity);
  }

  isMatchingActivity(activity) {
    return activity instanceof RegroupTurnActivity;
  }

  doBegin(v, m) {
    v.generator.beginRegroup(this.turn, m.locations);
  }
}

class ConflictTurnActivity extends TurnActivity {
  constructor(m, turn) {
    super(m, turn);
    this.isInExtraTime = false;
    this.playersAllies = [];
    
    for (let playerId = 0; playerId < m.players.length; ++playerId) {
      this.playersAllies.push({
        'id': playerId,
        'name': m.players[playerId].name,
        'inAlliance': false,
        'allies': [],
        'alliedTo': undefined,
        'offer': undefined
      });
    }
  }

  onContinue(playerId, m) {
    if (!this.isInExtraTime) return;
    this.resolveConflict(m);
  }

  onOfferAlliance(fromId, toId) {
    // TODO only process this if it is an appropriate time to be forming
    // alliances.
    if (this.playersAllies[fromId].inAlliance) {
      return;
    }
    this.playersAllies[fromId].offer = toId;
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
  }

  onConflictCardSelection(playerId, cards, isReady, isTimeOver, m) {
    // TODO Some similarities to ActionSelectionActivity::onActionSelected
    // can they share some code?

    m.players[playerId].cardSelection = cards;
    m.players[playerId].isReady = isReady;
    m.players[playerId].isTimeOver = isTimeOver;

    let isEveryoneReady = true;
    let isTimeOverForEveryone = true;
    for (let player of m.players) {
      if (!player.isReady) {
        isEveryoneReady = false;
      }
      if (!player.isTimeOver) {
        isTimeOverForEveryone = false;
      }
    }

    if (isEveryoneReady) {
      this.resolveConflict(m);
    } else if (isTimeOverForEveryone) {
      this.isInExtraTime = true;
    }
  }

  resolveConflict(m) {
    console.log('TODO Resolve conflict');
    /**
     * TODO-INVADE Choose where to bring followers from.
     * Identify the valid alliances.
     * Select who to convert.
     * Sum up the strength of each.
     * Identify the strongest.
     * TODO-INVADE Select who is chased away.
     * TODO Chase away losers in settlement.
     * Set keepers.
     */
    const turn = this.turn;
    let location = m.locations[turn.locationId];

    // Must be in the settlement to contest it.
    if (
      turn.action == 'contest' && 
      location.players[turn.playerId].numUnits == 0
    ) {
      this.endTurn();
      return; 
    }

    let keyPlayers = [];
    keyPlayers.push(turn.playerId);
    for (let player of this.playersAllies) {
      if (location.players[player.id].numUnits > 0) {
        keyPlayers.push(player.id);
      }
    }

    let alliances = [];
    for (const player of this.playersAllies) {
      if (!player.inAlliance || player.allies.length > 0) {
        let isValid = keyPlayers.includes(player.id);
        for (let i = 0; !isValid && i < player.allies.length; ++i) {
          isValid = keyPlayers.includes(player.allies[i].id);
        }
        if (isValid) {
          let alliance = { 'allies' : player.allies };
          alliance.allies.push(player.id);
          alliances.push(alliance);
        }
      }
    }

    // Add on fractions for tie breaker.
    // Initiator gets (<num players> + 1)/(<num players> + 2)
    // Others get (<num players> - <earliest position in turn order>)/(<num players> + 2)
    for (let alliance of alliances) {
      alliance.strength = 0;
      let bestTieBreaker = 0;
      let numPlayers = m.players.length;
      for (const playerId of alliance.allies) {
        alliance.strength += location.players[playerId].numUnits;
        let tieBreaker = numPlayers - m.players[playerId].rank;
        if (playerId == turn.playerId) {
          tieBreaker = numPlayers + 1;
        }
        bestTieBreaker = Math.max(bestTieBreaker, tieBreaker);
      }
      alliance.strength += bestTieBreaker/(numPlayers + 2);
    }
    // Strongest is placed first.
    alliances.sort((a, b) => { return b.strength - a.strength; });


    for (let player of location.players) {
      player.hasKeeper = false;
    }
    for (let playerId of alliances[0].allies) {
      location.players[playerId].hasKeeper = true;
    }

    this.endTurn();
  }
}

class ContestTurnActivity extends ConflictTurnActivity {
  constructor(m, turn) {
    super(m, turn);
  }

  makeCoordinator() {
    return new ContestTurnActivityCoordinator(this);
  }
}

class ContestTurnActivityCoordinator extends TurnActivityCoordinator {
  constructor(activity) {
    super(activity);
    this.isInExtraTime = false;
    this.activity = activity;
    this.playersAllies = activity.playersAllies
  }

  isMatchingActivity(activity) {
    return activity instanceof ContestTurnActivity;
  }
  
  doBegin(v, m) {
    let extraCards = m.players[m.myPlayerId].extraCards;
    v.generator.beginContest(extraCards, this.playersAllies);
  }

  update(v, m) {
    v.generator.updateAlliances(this.playersAllies);
    
    // TODO Similar code to ActionSelectionActivityCoordinator::update
    if (!this.isInExtraTime && this.activity.isInExtraTime) {
      v.generator.offerToContinueRegardless();
      this.isInExtraTime = true;
    }
  }
}

class FinishedActivity extends Activity {
  constructor(m, winners) {
    super(m);
    this.winners = winners;

    m.clearSelectedActions();
  }

  makeCoordinator() {
    return new FinishedActivityCoordinator(this);
  }
}

class FinishedActivityCoordinator extends ActivityCoordinator {
  constructor(activity) {
    super(activity.progressWhenActivityStarted);
    this.winners = activity.winners
  }

  isMatchingActivity(activity) {
    return activity instanceof FinishedActivity;
  }
  
  begin(v, m) {
    v.board.clearLocationHighlight();
    v.conclusionDisplay.declareWinners(this.winners);
  }
}

class AncientLoreModel extends LogEventConsumer {
  constructor(playerName) {
    super([
      PeerJoinEvent, 
      StartAncientLoreEvent, 
      ActionSelectedEvent, 
      ContinueEvent, 
      MoveUnitsEvent,
      RevealLoreEvent,
      ProclaimLoreVoteEvent,
      OfferAllianceEvent,
      AcceptAllianceEvent,
      ConflictCardSelectionEvent
    ]);
    this.listeners = [];
    this.myPlayerName = playerName;
    this.myPlayerId = undefined; // Only determined when the game starts.

    this.reset(); // Also declares some member variables.
  }
  
  addListener(listener) {
    this.listeners.push(listener);
  }

  reset() {
    this.options = undefined;
    this.peers = [];
    this.players = []; // Added to in onStartGame.
    this.locations = []; // Setup in setupBoard.
    this.proclaimedLore = []; // Added to by ProclaimTurnVoteActivity.

    this.progress = 1;
    this.activity = new FormingActivity(this);
    this.bonusCardDeck = new BonusCardDeck();
  }

  incrementProgress() {
    ++this.progress;
  }

  clearSelectedActions() {
    for (let player of this.players) {
      player.selectedAction = undefined;
      player.isActive = true;
    }
  }

  beginRound() {
    this.activity = new ActionSelectionActivity(this);
  }

  react() {
    for (const listener of this.listeners) {
      listener.onModelUpdated();
    }
  }

  onPeerJoins(asPlayerName, peerId) {
    this.peers.push({playerName: asPlayerName, id: peerId});
  }

  onStartGame(options, boardSetup) {
    if (typeof this.activity.onStartGame == 'function') {
      this.activity.onStartGame(options, boardSetup, this);
    }
  }

  onActionSelected(playerId, action, locationId) {
    if (typeof this.activity.onActionSelected == 'function') {
      this.activity.onActionSelected(playerId, action, locationId, this);
    }
  }

  onContinue(playerId) {
    if (typeof this.activity.onContinue == 'function') {
      this.activity.onContinue(playerId, this);
      return;
    }
  }
  
  onMoveUnits(playerId, movements) {
    if (typeof this.activity.onMoveUnits == 'function') {
      this.activity.onMoveUnits(playerId, movements, this);
    }
  }
  
  onRevealLore(playerId, loreI, bonusCards, allocations) {
    if (typeof this.activity.onRevealLore == 'function') {
      this.activity.onRevealLore(playerId, loreI, bonusCards, allocations, this);
    }
  }
  
  onProclaimLoreVote(playerId, isInFavour) {
    if (typeof this.activity.onProclaimLoreVote == 'function') {
      this.activity.onProclaimLoreVote(playerId, isInFavour, this);
    }
  }

  onOfferAlliance(fromId, toId) {
    if (typeof this.activity.onOfferAlliance == 'function') {
      this.activity.onOfferAlliance(fromId, toId, this);
    }
  }
  
  onAcceptAlliance(leadId, withId) {
    if (typeof this.activity.onAcceptAlliance == 'function') {
      this.activity.onAcceptAlliance(leadId, withId, this);
    }
  }

  onConflictCardSelection(playerId, cards, isReady, isTimeOver) {
    if (typeof this.activity.onConflictCardSelection == 'function') {
      this.activity.onConflictCardSelection(playerId, cards, isReady, isTimeOver, this);
    }
  }
}

class CardDeck {
  constructor() {
    this.deck = [];
    this.discardPile = [];
  }

  addCard(card) {
    this.deck.push(card);
  }

  peek(numToPeekAt) {
    if (this.deck.length < numToPeekAt) {
      this.deck.push(...this.discardPile);
      this.discardPile = [];
    }
    let peekedCards = [];
    for (let i = 0; i < numToPeekAt; i++) {
      const pickedI = Math.floor(Math.random() * this.deck.length);
      peekedCards.push(...this.deck.splice(pickedI, 1));
    }
    this.deck.push(...peekedCards);
    return peekedCards;
  }

  findAndDiscard(cards) {
    for (let card of cards) {
      const cardJson = JSON.stringify(card);
      let index = this.deck.findIndex((c) => {
        const cJson = JSON.stringify(c);
        return cJson === cardJson; 
      });
      this.discardPile.push(this.deck.splice(index, 1));
    }
  }
}

class BonusCardDeck extends CardDeck {
  constructor() {
    super();
    this.addCards(5, 1, 0);
    this.addCards(2, 2, 0);
    this.addCards(2, 1, 1);
    this.addCards(2, 0, 2);
    this.addCards(5, 0, 1);
    this.addCards(4, 0, 0);
  }

  addCards(numCards, numFollowers, numArtifacts) {
    for (let i = 0; i < numCards; i++) {
      this.addCard({ numFollowers: numFollowers, numArtifacts: numArtifacts });    
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
    this.eventLog.registerEventType(RevealLoreEvent);
    this.eventLog.registerEventType(ProclaimLoreVoteEvent);
    this.eventLog.registerEventType(OfferAllianceEvent);
    this.eventLog.registerEventType(AcceptAllianceEvent);
    this.eventLog.registerEventType(ConflictCardSelectionEvent);
  }

  offerToStartGame() {
    this.gameSetup.showGameSetupOptions(this.startGame.bind(this));
  }

  updateGameSetupOptions(peers) {
    this.gameSetup.updateGameSetupOptions(peers);
  }

  startGame(options) {
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
    this.input.onStartGame();
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

  beginProclaim(turn, playersWithKeeper, bonusCardDeck) {
    if (this.myPlayerId != turn.playerId) { 
      return; 
    }

    let selectedLoreI = undefined;
    let startBonusCardAllocationFn = () => {
      this.startBonusCardAllocation(
        playersWithKeeper, bonusCardDeck, selectedLoreI
      );
    };

    let onSelectedFn = (loreDisplay) => {
      selectedLoreI = loreDisplay.loreI;
      this.input.showReadyOption(startBonusCardAllocationFn, "Reveal");
    };

    this.input.startLoreSelection(turn.locationId , onSelectedFn);

  }

  startBonusCardAllocation(
    playersWithKeeper, bonusCardDeck, selectedLoreI
  ) {
    let allocation = new Map();
    let onAllocatedFn = (playerId, cardI) => {
      if (cardI != undefined) {
        allocation.set(playerId, cardI);
      } else {
        allocation.delete(playerId);
      }
      if (allocation.size == playersWithKeeper.length) {
        this.input.readyButton.disabled = false;
      } else {
        this.input.readyButton.disabled = true;
      }
    };
    
    let bonusCards = bonusCardDeck.peek(3);
    let beginVotingFn = () => {
      this.sendRevealLore(selectedLoreI, bonusCards, allocation);
    };

    this.input.showReadyOption(beginVotingFn, "Begin Voting");
    this.input.readyButton.disabled = true;

    this.input.startBonusCardAllocation(
      playersWithKeeper, bonusCards, onAllocatedFn
    );


  }

  sendRevealLore(selectedLoreI, bonusCards, allocationMap) {
    let allocation = [];
    for (const [playerId, cardI] of allocationMap) {
      allocation.push({playerId: playerId, cardI: cardI});
    }

    let revealLoreEvent = RevealLoreEvent.makeNow(
      0, this.eventLog.swarm.myId, this.myPlayerId, 
      selectedLoreI, bonusCards, allocation
    );
    this.eventLog.add(revealLoreEvent);
  }


  beginProclaimVote(turn, myBonusCard) {
    this.input.showBonusCard(myBonusCard);

    let onVoteFn = (isInFavour) => {
      this.sendProclaimLoreVote(isInFavour);
    };
    this.input.startVote(onVoteFn);
  }
  
  sendProclaimLoreVote(isInFavour) {
    let proclaimLoreVoteEvent = ProclaimLoreVoteEvent.makeNow(
      0, this.eventLog.swarm.myId, this.myPlayerId, isInFavour
    );
    this.eventLog.add(proclaimLoreVoteEvent);
  }

  showVotes(playersWithKeeper) {
    this.input.showVotes(playersWithKeeper);
  }

  beginContest(extraCards, playersAllies) {
    if (this.myPlayerId < 0) { return; }

    this.offerToMakeAlliances(playersAllies);

    let isReady = false;
    let isTimeOver = false;
    let cards = [];
    let onConflictCardSelectedFn = (cardSelection) => {
      cards = cardSelection;
      this.sendConflictCardSelection(cards, isReady, isTimeOver);
    };
    this.input.startConflictCardSelection(extraCards, onConflictCardSelectedFn);

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
   *        boardSelection
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
        boardSelection : "basic-5-settlement"
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
    playerCheckbox.checked = true;
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

    this.voteYesButton = rootElement.querySelector(".flow-control-area .vote-yes.button");
    this.voteNoButton = rootElement.querySelector(".flow-control-area .vote-no.button");
    this.onVoteFn = undefined;
    this.readyButton = rootElement.querySelector(".flow-control-area .ready.button");
    this.onReadyFn = undefined;
    this.continueButton = rootElement.querySelector(".flow-control-area .continue.button");
    this.onContinueFn = undefined;
    this.initButtons();

    this.settlementHighlighter = undefined; // Set in onStartGame.

    this.actionSelection = new ActionSelection(this.cardsArea);
    this.settlementSelection = new SettlementSelection(this.board);
    this.loreSelection = new LoreSelection(this.board);
    this.bonusCardAllocation = new BonusCardAllocation(this.cardsArea);
    this.bonusCardDisplay = new BonusCardDisplay(this.cardsArea);
    this.unitsToMoveSelection = new UnitsToMoveSelection(this.overlay, this.board);
    this.allianceSelection = new AllianceSelection(this.overlay);
    this.conflictCardSelection = new ConflictCardSelection(this.cardsArea);
    this.countdown;
  }

  initButtons() {
    this.voteYesButton.addEventListener("click", () => {
      if (this.onVoteFn) {
        this.onVoteFn(true)
      }
    });
    this.voteNoButton.addEventListener("click", () => {
      if (this.onVoteFn) {
        this.onVoteFn(false)
      }
    });
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

  onStartGame() {
    this.settlementHighlighter = new SettlementHighlighter(this.board);
  }

  startCountdown(timeInMs, onDoneFn) {
    this.countdown = new Countdown(timeInMs, 101, this.overlay);
    this.countdown.start(onDoneFn);
  }

  showVoteOptions(onClickFn) {
    this.onReadyFn = onClickFn;
    this.readyButton.value = buttonText;
    this.readyButton.style.display = "block";
  }

  showReadyOption(onClickFn, buttonText = "Ready") {
    this.onReadyFn = onClickFn;
    this.readyButton.value = buttonText;
    this.readyButton.style.display = "block";
  }
  
  hideReadyOption() {
    this.readyButton.style.display = "none";
    this.readyButton.disabled = false;
    this.onReadyFn = undefined;
  }

  showContinueOption(onClickFn) {
    this.onContinueFn = onClickFn;
    this.continueButton.style.display = "block";
  }

  startSelectingAnAction(onSelectionChanges) {
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
    this.settlementSelection.start(onLocationSelected, this.settlementHighlighter);
  }

  startMoveSelection(
    toLocationId, 
    maxUnitsPerSettlement,
    onInputChanged
  ) {
    this.settlementHighlighter.update(toLocationId, "#ff0000");
    /**
     * Place a number input on top of each of the other locations. Whenever
     * these are changed update numUnitsFromSettlements.
     */
    this.unitsToMoveSelection.start(
      toLocationId, maxUnitsPerSettlement, onInputChanged
    );
  }

  startLoreSelection(locationId, onSelected){
    this.loreSelection.start(locationId, onSelected);
  }

  startBonusCardAllocation(playersWithKeeper, bonusCards, onAllocatedFn) {
    this.bonusCardAllocation.start(
      bonusCards, playersWithKeeper, onAllocatedFn
    );
  }

  showBonusCard(bonusCard) {
    this.bonusCardDisplay.start(bonusCard);
  }

  startVote(onVoteFn) {
    this.onVoteFn = onVoteFn;
    this.voteYesButton.style.display = "block";
    this.voteNoButton.style.display = "block";
  }

  showVotes(playersWithKeeper) {
    let voteDisplay = new VotesDisplay(this.overlay);
    voteDisplay.update(playersWithKeeper);
    setTimeout(() => { voteDisplay.cancel(); }, 5000);
  }

  startConflictCardSelection(extraCards, onConflictCardSelectedFn) {
    this.conflictCardSelection.start(extraCards, onConflictCardSelectedFn);
  }

  startAllianceSelection(playersAllies, myPlayerId, onOfferFn, onAcceptFn) {
    // Alliance selection is done simultaneously with card selection.
    this.allianceSelection.start(playersAllies, myPlayerId, onOfferFn, onAcceptFn);
  }

  updateAlliances(playersAllies) {
    this.allianceSelection.update(playersAllies);
  }

  cancelOngoingSelection() {
    this.voteYesButton.style.display = "none";
    this.voteNoButton.style.display = "none";
    this.onVoteFn = undefined;

    this.hideReadyOption();

    this.continueButton.style.display = "none";
    this.continueButton.disabled = false;
    this.onContinueFn = undefined;

    this.actionSelection.cancel();
    this.settlementSelection.cancel();
    this.loreSelection.cancel();
    this.bonusCardAllocation.cancel();
    this.bonusCardDisplay.cancel();
    this.unitsToMoveSelection.cancel();
    this.conflictCardSelection.cancel();
    this.allianceSelection.cancel();
    
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
    card.isSelected = false;
    card.querySelector(".border").style.stroke = "#6d0000"; 
    card.style.paddingTop = "1%";
    card.style.paddingBottom = "0%";
  }

  select(card) {
    card.isSelected = true;
    card.querySelector(".border").style.stroke = "#ff0000";
    card.style.paddingTop = "0%";
    card.style.paddingBottom = "1%";
  }

  initCardElement(cardType, html) {
    if (html == undefined) {
      html = this.selectHtml(cardType).trim();
    }

    let card = document.createElement("div");
    card.addEventListener("click", (event) => {
      event.stopPropagation();
      this.onSelected(card, cardType);
    });
    card.cardType = cardType;
    card.isSelected = false;
    card.className = "selection card";
    card.innerHTML = html;
    card.style.display = "none";
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

  removeAll() {
    for (let card of this.cards) {
      card.remove();
    }
    this.cards = [];
  }

  selectHtml(cardType) {
    switch (cardType) {
      case "bonus-f2-a0": return gain2FollowersCardHtml;
      case "bonus-f1-a0": return gain1FollowerCardHtml;
      case "bonus-f1-a1": return gain1Follower1Plus2CardHtml;
      case "bonus-f0-a1": return gain1Plus2CardHtml;
      case "bonus-f0-a2": return gain2Plus2sCardHtml;
      case "bonus-f0-a0": return gainNothingCardHtml;

      case "convert": return convertCardHtml;
      case "plus2": return plus2CardHtml;

      default: return gainNothingCardHtml;
    }
  }
}

class ConflictCardSelection extends CardSelection {
  constructor(cardsArea) {
    super(cardsArea);
    this.cardSelection = [];
    this.onConflictCardSelected;
  }

  initCardElements(extraCards) {
    this.initCardElement("0-card", number0CardHtml.trim());
    this.initCardElement("1-card", number1CardHtml.trim());
    this.initCardElement("2-card", number2CardHtml.trim());
    this.initCardElement("3-card", number3CardHtml.trim());
    this.initCardElement("4-card", number4CardHtml.trim());
    this.initCardElement("5-card", number5CardHtml.trim());
    this.initCardElement("6-card", number6CardHtml.trim());
    this.initCardElement("7-card", number7CardHtml.trim());

    for (const extraCard of extraCards) {
      this.initCardElement(extraCard);
    }
  }

  start(extraCards, onConflictCardSelected) {
    this.cardSelection = [];
    this.onConflictCardSelected = onConflictCardSelected;
    this.initCardElements(extraCards);
    this.showAll();
  }

  cancel() {
    this.onConflictCardSelected = undefined;
    this.removeAll();
  }

  onSelected(card, cardType) {
    if (card.isSelected) {
      const index = this.cardSelection.indexOf(cardType);
      this.cardSelection.splice(index, 1);
      this.deselect(card);
    } else {
      this.cardSelection.push(cardType);
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

class BoardSelection {
  constructor() {
    this.highlighter = undefined; // Created in start.
    this.clickHandlers = [];
  }

  cancel() {
    if (this.highlighter) {
      this.highlighter.clear();
    }
    this.removeClickHandlers();
  }

  removeClickHandlers() {
    for (let clickHandler of this.clickHandlers) {
      clickHandler.element.removeEventListener("click", clickHandler.fn);
    }
    this.clickHandlers = [];
  }
}

class SettlementSelection extends BoardSelection {
  constructor(board) {
    super();
    this.board = board;
  }

  start(onSelected, settlementHighlighter) {
    this.highlighter = settlementHighlighter;

    let numSettlements = this.board.querySelectorAll(".settlement").length;
    for (let i = 0; i < numSettlements; i++) {
      let clickHandler = {
        element: this.board.querySelector(".settlement" + i + ".settlement"),
        fn: (event) => {
          event.stopPropagation();
          this.highlighter.update(i, "#ffcc00");
          if (onSelected) {
            onSelected(i);
          }
        }
      };
      clickHandler.element.addEventListener("click", clickHandler.fn);
      this.clickHandlers.push(clickHandler);
    }
    
    this.highlighter.clear();
  }
}

class SettlementHighlighter {
  constructor(board) {
    this.highlights = board.querySelectorAll(".settlement .highlight");
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

class LoreSelection extends BoardSelection {
  constructor(board) {
    super();
    this.board = board;
  }

  start(locationId, onSelected) {
    this.highlighter = new LoreHighlighter(this.board);

    let lorePieces = this.board.querySelectorAll(
      ".settlement" + locationId + " .loreDisplay"
    );
    for (let lorePiece of lorePieces) {
      let clickHandler = {
        element: lorePiece,
        fn: (event) => {
          event.stopPropagation();
          this.highlighter.updateElement(lorePiece, "#ffcc00");
          if (onSelected) {
            onSelected(lorePiece);
          }
        }
      };
      clickHandler.element.addEventListener("click", clickHandler.fn);
      this.clickHandlers.push(clickHandler);
    }
    
    this.highlighter.clear();
  }
}

class LoreHighlighter {
  constructor(board) {
    this.board = board;
    this.highlights = board.querySelectorAll(".lore .highlight");
  }

  update(locationId, loreI, colour) {
    let loreDisplayArea = this.board.querySelector(
      ".settlement" + locationId + " .lore-display-area"
    );
    let loreDisplay = loreDisplayArea.children[loreI];
    this.updateElement(loreDisplay, colour);
  }

  updateElement(loreElement, colour) {
    for (let highlight of this.highlights) {
      highlight.style.visibility = "hidden";
    }

    if (loreElement) {
      let highlight = loreElement.querySelector(".highlight")
      if (highlight) {
        highlight.style.visibility = "visible";
        highlight.style.stroke = colour;
      }
    }
  }

  clear() {
    this.updateElement();
  }
}

class BonusCardAllocation extends CardSelection {
  constructor(cardsArea) {
    super(cardsArea);

    // Set in start.
    this.unallocated = undefined;
    this.playersElements = [];
    this.onAllocatedFn = undefined;

    // Set in onSelected.
    this.selectedCard = undefined;
  }

  buildColumn(headingText) {
    let columnElement = document.createElement("div");
    columnElement.classList.add("cards-area-column");

    let heading = document.createElement("p");
    heading.classList.add("cards-area-heading");
    heading.innerHTML = headingText;

    let areaElement = document.createElement("div");
    areaElement.classList.add("cards-area");

    columnElement.addEventListener("click", () => {
      this.onAllocated(areaElement);
    });

    columnElement.appendChild(heading);
    columnElement.appendChild(areaElement);
    this.cardsArea.appendChild(columnElement);
    return { column: columnElement, area: areaElement };
  }

  start(bonusCards, playersWithKeeper, onAllocatedFn) {
    this.cancel();

    this.onAllocatedFn = onAllocatedFn;
    this.unallocated = this.buildColumn("Unallocated");

    // Find the bonus cards to allocate.
    for (let bonusCard of bonusCards) {
      let cardType = "bonus-f" + bonusCard.numFollowers + "-a" + bonusCard.numArtifacts;
      this.initCardElement(cardType);
      let card = this.cards[this.cards.length - 1];
      card.cardI = this.cards.length - 1;
      this.unallocated.area.appendChild(card);
    }
    this.showAll();

    // Create the player columns.
    for (let playerWithKeeper of playersWithKeeper) {
      let playerElements = this.buildColumn(playerWithKeeper.playerName);
      playerElements.area.playerId = playerWithKeeper.playerId;
      this.playersElements.push(playerElements);
    }
  }

  onSelected(card, cardType) {
    if (this.selectedCard) this.deselect(this.selectedCard);
    this.select(card);
    this.selectedCard = card;
  }

  onAllocated(areaElement) {
    if (this.selectedCard) {
      const toPlayerId = areaElement.playerId;
      const isToPlayer = toPlayerId != undefined;
      const fromPlayerId = this.selectedCard.parentElement.playerId;
      const isFromOtherPlayer = fromPlayerId != undefined;

      // Deallocate the card from any other player, appendChild does this
      // job for us in the graphics.
      if (isFromOtherPlayer) {
        this.onAllocatedFn(fromPlayerId, undefined);
      }

      // Players can only have one card at a time, if the player already 
      // had a card, then move that card to the unallocated space.
      if (isToPlayer && areaElement.firstChild) {
        this.unallocated.area.appendChild(areaElement.firstChild);
      }
      
      areaElement.appendChild(this.selectedCard);
      if (isToPlayer) {
        this.onAllocatedFn(toPlayerId, this.selectedCard.cardI);
      }
    }
  }

  cancel() {
    if (this.unallocated) this.unallocated.column.remove();
    for (let playerElements of this.playersElements) {
      playerElements.column.remove();
    }
    this.playersElements = [];
    this.removeAll();
  }
}

class BonusCardDisplay extends CardSelection {
  constructor(cardsArea) {
    super(cardsArea);
  }
  
  start(bonusCard) {
    this.cancel();
    let cardType = "bonus-f" + bonusCard.numFollowers + "-a" + bonusCard.numArtifacts;
    this.initCardElement(cardType);
    this.showAll();
  }

  cancel() {
    this.removeAll();
  }

  onSelected() {}
}

class VotesDisplay {
  constructor(overlay) {
    this.overlay = overlay;
    this.table = undefined;
  }

  update(playersWithKeeper) {
    /**
     *  playersWithKeeper[]
     *    playerName
     *    playerId
     *    isInFavour
     */

    /**
      <table>
        <tbody>
          <tr>
            <td><p>Andrew</p></td>
            <td><p>No</p></td>
          </tr>
          <tr>
            <td><p>Tessa</p></td>
            <td><p>Yes</p></td>
          </tr>
        </tbody>
      </table>
    */

    // We start creating the table from scratch on each update.
    this.cancel();
    this.table = document.createElement("table");
    let tableBody = document.createElement("tbody");

    for (let player of playersWithKeeper) {
      let tableRow = document.createElement("tr"); 

      let nameCell = document.createElement("td"); 
      nameCell.classList.add("alliance");
      let nameP = document.createElement("span");
      nameP.classList.add("leadAlly");
      nameP.innerHTML = player.playerName;
      nameCell.appendChild(nameP);

      let voteCell = document.createElement("td");  
      let voteP = document.createElement("span");
      voteP.innerHTML = player.isInFavour ? "Yes" : "No";
      voteCell.appendChild(voteP);

      tableRow.appendChild(nameCell);
      tableRow.appendChild(voteCell);
      tableBody.appendChild(tableRow);
    }
    this.table.appendChild(tableBody);
    this.overlay.appendChild(this.table);
  }
  
  cancel() {
    if (this.table) {
      this.table.remove();
    }
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

    // We start creating the table from scratch on each update.
    this.cancel();
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

  cancel() {
    if (this.table) {
      this.table.remove();
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
