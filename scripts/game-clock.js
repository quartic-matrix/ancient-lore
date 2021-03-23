
'use strict'


function generateHslaColors (saturation, lightness, alpha, amount) {
  let colors = []
  let huedelta = Math.trunc(360 / amount)

  for (let i = 0; i < amount; i++) {
    let hue = i * huedelta
    colors.push(`hsla(${hue},${saturation}%,${lightness}%,${alpha})`)
  }

  return colors
}

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

class TimerRenameEventDef extends GameEventDef {
  constructor () {super();}

  static makeFromData(data) {
    return new TimerRenameEvent(data.labelId, data.newName);
  }

  static type() {
    return "timer-rename";
  }
}

class TimerRenameEvent extends GameEvent {
  static makeNow(timestampOffset, peerId, labelId, newName) {
    return new TimerRenameEvent(
      GameEvent.makeTimestamp(timestampOffset),
      peerId,
      labelId, 
      newName
    );
  }

  constructor(timestamp, peerId, labelId, newName) {
    super(timestamp, peerId, TimerRenameEventDef.type());
    this.labelId = labelId; 
    this.newName = newName;
  }

  notify(eventListener) {
    eventListener.onRenameTimer(this.labelId, this.newName)
  }
}

class TimerActivateEventDef extends GameEventDef {
  constructor () {super();}

  static makeFromData(data) {
    return new TimerActivateEvent(data.timerId);
  }

  static type() {
    return "timer-activate";
  }
}

class TimerActivateEvent extends GameEvent {
  static makeNow(timestampOffset, peerId, timerId) {
    return new TimerActivateEvent(
      GameEvent.makeTimestamp(timestampOffset),
      peerId,
      timerId
    );
  }

  constructor(timestamp, peerId, timerId) {
    super(timestamp, peerId, TimerActivateEventDef.type());
    this.timerId = timerId;
  }

  notify(eventListener) {
    eventListener.onActivateTimer(this.timerId, this.timestamp)
  }
}

class GameClock extends Game {
  constructor(eventLog) {
    super(eventLog, "<player-name>");
    this.eventLog.registerEventType(TimerRenameEventDef);
    this.eventLog.registerEventType(TimerActivateEventDef);
  }
}

class GameClockUpdater extends GameDisplayUpdater {
  constructor(eventListener, eventLog) {
    super(eventListener, eventLog);
  }
}

class GameClockBoard extends GameEventListener {
  constructor() {
    super();
    this.activeTimer;
    this.lastTimestamp = 0;
    this.activeTimestamp = +(new Date());

    setInterval(this.updateActiveTimer.bind(this), 100);
  }

  clear() {
    if (this.activeTimer) {
      this.activeTimer.parentElement.parentElement.querySelector(".button-rect").style.stroke = "#5c5c5c";
    }
    this.activeTimer = undefined;
    this.lastTimestamp = 0;
    document.querySelectorAll(".timer").forEach(function (timer) {
      timer.time = 0;
      timer.innerHTML = "00:00:00";
    });
    document.querySelectorAll(".button-label").forEach(function (label) {
      label.innerHTML = "Timer";
    });
  }

  onRenameTimer(labelId, newName) {
    label = document.getElementById(labelId);
    label.innerHTML = newName;
  }
  
  onActivateTimer(timerId, timestamp) {
    if (this.activeTimer) {
      this.activeTimer.parentElement.parentElement.querySelector(".button-rect").style.stroke = "#5c5c5c";
      this.activeTimer.time += timestamp - this.lastTimestamp;
      this.activeTimer.innerHTML = formatTime(this.activeTimer.time);
    }
    this.lastTimestamp = timestamp;
    this.activeTimer = document.getElementById(timerId);
    this.activeTimer.parentElement.parentElement.querySelector(".button-rect").style.stroke = "#aa0000";
    this.activeTimer.activeTime = 0;
  }

  updateActiveTimer() {
    var timestamp = +(new Date());

    if (this.activeTimer) {
      this.activeTimer.activeTime += timestamp - this.activeTimestamp;
      this.activeTimer.innerHTML = formatTime(this.activeTimer.time + this.activeTimer.activeTime);
    }
    
    this.activeTimestamp = timestamp;
  }
}

class GameClockDisplay {
  constructor(eventLog) {
    this.eventLog = eventLog;

    let colours = generateHslaColors(70, 50, 1.0, 6);

    for (var i = 0; i < colours.length; ++i) {
      this.cloneButton(i, colours[i]);
    };

    var downTimeButton = document.getElementById("down-time-button");
    this.setupButton(downTimeButton);
  }

  updateIds(element, i) {
    element.id = element.id.replace("down-time", "my-"+i);
    var children = [].slice.call(element.children);
    children.forEach(function (child) { this.updateIds(child, i); }, this);
  }

  setupButton(button) {
    var timer = button.querySelector(".timer");
    timer.time = 0;
    button.addEventListener("click", (function() { this.switchTo(button); }).bind(this));
    
    var label = button.querySelector(".button-label");
    label.addEventListener("click", (function() { this.rename(button); }).bind(this));
  }

  cloneButton(i, colour) {
    var newButton = document.getElementById("down-time-button").cloneNode(true);
    this.updateIds(newButton, i);

    var topPos = 0;// (100 + i*100);
    //var move = "translate("+0+","+ (100+i*100) +")";
    //newButton.setAttribute("transform", move);
    newButton.style.top = topPos;
    newButton.querySelector(".button-rect").style.fill = colour;
    this.setupButton(newButton);
    this.changeButtonName(newButton, i); 
    document.getElementById("buttons").appendChild(newButton);
  }

  changeButtonName(button, i) {
    button.querySelector(".button-label").innerHTML = "Button " + i;
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

    textbox.addEventListener("keyup", function(keyupEvent) {
      // Number 13 is the "Enter" key on the keyboard
      if (keyupEvent.keyCode === 13) {
        // Cancel the default action, if needed
        keyupEvent.preventDefault();
        
        this.eventLog.add(TimerRenameEvent.makeNow(
          0, this.eventLog.swarm.me, label.id, textbox.value)
        );

        div.parentNode.removeChild(div);
      }
    });

    var leftPos = (84 - labelWidth)/2;
    div.style.top = 14 - 84;
    div.style.left = leftPos;

    div.appendChild(textbox);
    button.appendChild(div);
    textbox.focus();
    textbox.select();
  }

  switchTo(button) {
    this.eventLog.add(TimerActivateEvent.makeNow(
      0, this.eventLog.swarm.me, button.querySelector(".timer").id)
    );
  }
}
