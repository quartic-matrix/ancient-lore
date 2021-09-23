
'use strict'

const buttonHtml = `      
<div class="button" style="width:12.8vmax; height:12.8vmax; min-width:15mm; min-height:15mm; margin:2px;">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84 84">
    <g>
      <rect
          class="button-rect"
          rx="5"
          ry="5"
          y="2.5000043"
          x="2.5"
          height="80"
          width="80"
          style="opacity:1;vector-effect:none;fill:#75758a;fill-opacity:0.5;stroke:#5c5c5c;stroke-width:5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />
      <text
          y="29.096361"
          x="41.852322"
          style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:11.28888893px;line-height:1.25;font-family:'Segoe UI';-inkscape-font-specification:'Segoe UI';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458332"
          xml:space="preserve"><tspan
            class="button-label"
            style="font-size:11.28888893px;text-align:center;text-anchor:middle;stroke-width:0.26458332"
            y="29.096361"
            x="41.852322">Down time</tspan></text>
      <text
          y="54.624832"
          x="42.496555"
          style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:16.93333244px;line-height:1.25;font-family:'Segoe UI';-inkscape-font-specification:'Segoe UI';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458332"
          xml:space="preserve"><tspan
            style="font-size:16.93333244px;text-align:center;text-anchor:middle;stroke-width:0.26458332"
            y="54.624832"
            x="42.496555"
            class="time-display">00:00:00</tspan></text>
    </g>
  </svg>
  </div>
  `;

function formatTime(timeInMs) {
  var milliseconds = parseInt((timeInMs % 1000) / 100);
  var seconds = Math.floor((timeInMs / 1000) % 60);
  var minutes = Math.floor((timeInMs / (1000 * 60)) % 60);
  var hours = Math.floor((timeInMs / (1000 * 60 * 60)) % 24);

  return hours + ":" + makeTwoDigits(minutes) + ":" + makeTwoDigits(seconds) + "." + milliseconds;
}

function makeTwoDigits(number) {
  return ("0" + number).slice(-2);
}

class TimerRenameEvent extends LogEvent {

  static type() {
    return "timer-rename";
  }

  static makeFromData(data) {
    return new TimerRenameEvent(
      data.timestamp, data.peerId, data.timerId, data.newName
    );
  }

  static makeNow(timestampOffset, peerId, timerId, newName) {
    return new TimerRenameEvent(
      LogEvent.makeTimestamp(timestampOffset), peerId, timerId, newName
    );
  }

  constructor(timestamp, peerId, timerId, newName) {
    super(timestamp, peerId, TimerRenameEvent.type());
    this.timerId = timerId; 
    this.newName = newName;
  }

  notify(eventListener) {
    eventListener.onRenameTimer(this.timerId, this.newName)
  }
}

class TimerActivateEvent extends LogEvent {

  static type() {
    return "timer-activate";
  }

  static makeFromData(data) {
    return new TimerActivateEvent(
      data.timestamp, data.peerId, data.timerId
    );
  }

  static makeNow(timestampOffset, peerId, timerId) {
    return new TimerActivateEvent(
      LogEvent.makeTimestamp(timestampOffset), peerId, timerId
    );
  }

  constructor(timestamp, peerId, timerId) {
    super(timestamp, peerId, TimerActivateEvent.type());
    this.timerId = timerId;
  }

  notify(eventListener) {
    eventListener.onActivateTimer(this.timerId, this.timestamp)
  }
}

class GameClock {
  constructor(eventLog, domElement) {
    this.gameClockDisplay = new GameClockDisplay(eventLog, domElement);
    this.gameClockBoard = new GameClockBoard(domElement);
    this.gameClockBoardUpdater = new GameClockBoardUpdater(
      this.gameClockBoard, eventLog
    );
    // Tell everyone that we have no events so they send us theirs.
    eventLog.broadcastAllEvents();
  }
}

class GameClockBoardUpdater extends LogEventConsumerUpdater {
  constructor(gameClockBoard, eventLog) {
    super(gameClockBoard, eventLog);
  }
}

class GameClockBoard extends LogEventConsumer {
  constructor(domElement) {
    super([TimerActivateEvent, TimerRenameEvent]);
    this.domElement = domElement;
    this.activeTimer;
    this.lastTimestamp = 0;
    this.activeTimestamp = +(new Date());

    setInterval(this.updateActiveTimer.bind(this), 101);
  }

  reset() {
    if (this.activeTimer) {
      this.activeTimer.parentElement.parentElement.querySelector(".button-rect").style.stroke = "#5c5c5c";
    }
    this.activeTimer = undefined;
    this.lastTimestamp = 0;
    this.domElement.querySelectorAll(".button").forEach((timer) => {
      timer.time = 0;
    });
    this.domElement.querySelectorAll(".time-display").forEach((timer) => {
      timer.innerHTML = formatTime(0);
    });
    this.domElement.querySelectorAll(".button-label").forEach((label) => {
      label.innerHTML = "Timer";
    });
  }

  react() {}

  onRenameTimer(timerId, newName) {
    var label = this.domElement.querySelector(timerId).querySelector(".button-label");
    label.innerHTML = newName;
  }
  
  onActivateTimer(timerId, timestamp) {
    if (this.activeTimer) {
      this.setTimerHighlight("#5c5c5c");
      this.activeTimer.time += timestamp - this.lastTimestamp;
      this.setTimerTime(this.activeTimer.time);
    }
    this.lastTimestamp = timestamp;
    this.activeTimer = this.domElement.querySelector(timerId);
    this.setTimerHighlight("#aa0000");
    this.activeTimer.activeTime = 0;
  }

  updateActiveTimer() {
    var timestamp = +(new Date());

    if (this.activeTimer) {
      this.activeTimer.activeTime += timestamp - this.activeTimestamp;
      this.setTimerTime(this.activeTimer.time + this.activeTimer.activeTime);
    }
    
    this.activeTimestamp = timestamp;
  }

  setTimerHighlight(colour) {
    this.activeTimer.querySelector(".button-rect").style.stroke = colour;
  }

  setTimerTime(timeInMs) {
    this.activeTimer.querySelector(".time-display").innerHTML = formatTime(timeInMs);
  }
}

class GameClockDisplay {
  constructor(eventLog, domElement) {
    this.eventLog = eventLog;
    this.domElement = domElement;
    this.domElement.innerHTML = buttonHtml.trim();
    this.templateButton = this.getElement(".button");

    this.eventLog.registerEventType(TimerRenameEvent);
    this.eventLog.registerEventType(TimerActivateEvent);

    let colours = generateHslaColors(70, 50, 1.0, 6);
    for (var i = 0; i < colours.length; ++i) {
      this.cloneButton(i+1, colours[i]);
    };

    this.setupButton(this.templateButton, 0, "#75758a");
  }

  getElement(selectorString) {
    return this.domElement.querySelector(selectorString);
  }

  cloneButton(i, colour) {
    var newButton = this.templateButton.cloneNode(true);
    this.setupButton(newButton, i, colour);
    this.domElement.appendChild(newButton);
  }

  setupButton(button, i, colour) {
    this.setLocalIds(button, i);
    button.querySelector(".button-rect").style.fill = colour;

    var timer = button.querySelector(".time-display");
    timer.time = 0;
    button.addEventListener("click", (event) => { 
      this.switchTo(button); 
    });
    
    var label = button.querySelector(".button-label");
    label.addEventListener("click", (event) => { 
      event.stopPropagation();
      this.rename(button); 
    });
  }

  setLocalIds(element, i) {
    element.localId = ".timer-"+i;
    element.className += " timer-"+i;
  }

  switchTo(button) {
    this.eventLog.add(TimerActivateEvent.makeNow(
      0, this.eventLog.swarm.myId, button.localId)
    );
  }

  rename(button) {
    var div = document.createElement( "div" ); 
    div.style.position = "relative";

    var textbox = document.createElement( "input" ); 
    textbox.setAttribute("type" , "text" );
    textbox.setAttribute("maxlength", 12);

    var label = button.querySelector(".button-label");
    var rect = label.getBoundingClientRect();
    var labelWidth = rect.width+25;
    textbox.style.height = rect.height+4;
    textbox.style.width = labelWidth;
    
    textbox.setAttribute("value", label.innerHTML);

    textbox.addEventListener("keyup", (keyupEvent) => {
      keyupEvent.stopPropagation();
      // Number 13 is the "Enter" key on the keyboard
      if (keyupEvent.keyCode === 13) {
        // Cancel the default action, if needed
        keyupEvent.preventDefault();
        
        this.eventLog.add(TimerRenameEvent.makeNow(
          0, this.eventLog.swarm.myId, button.localId, textbox.value)
        );

        div.parentNode.removeChild(div);
      }
    });

    textbox.addEventListener("click", (event) => { 
      event.stopPropagation();
    });

    var leftPos = (84 - labelWidth)/2;
    div.style.top = 14 - 84;
    div.style.left = leftPos;

    div.appendChild(textbox);
    button.appendChild(div);
    textbox.focus();
    textbox.select();
  }
}
