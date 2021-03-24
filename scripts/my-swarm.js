
'use strict'

class MySwarm {
  constructor() {
    this.myId;
    this.listeners = [];
  }

  /**
   *  listener needs:
   *    onConnect(peer, id)
   *    onReceive(data, fromPeer)
   *    onDisconnect(peer, id)
   */
  addListener(listener) {
    this.listeners.push(listener);
  }

  broadcast(data) {}
  
  sendTo(peer, data) {}

  onConnect(peer, id) {
    this.listeners.forEach(listener => {
      listener.onConnect(peer, id);
    });
  }

  onReceive(json, fromPeer) {
    var data = JSON.parse(json);
    this.listeners.forEach(listener => {
      listener.onReceive(data, fromPeer);
    });
  }
  
  onDisconnect(peer, id) {
    this.listeners.forEach(listener => {
      listener.onDisconnect(peer, id);
    });
  }
}

class WebSwarm extends MySwarm {
  constructor() {
    super();
    this.rtcSwarm = this.makeWebRTCSwarm()

    super.myId = this.rtcSwarm.me;
  }

  broadcast(data) {
    var json = JSON.stringify(data);
    this.rtcSwarm.peers.forEach(function (peer) {
      peer.send(json);
    });
  }
  
  sendTo(peer, data) {
    var json = JSON.stringify(data);
    peer.send(json);
  }

  makeWebRTCSwarm() {
    var swarm = new WebRTCSwarm('swarm-example', ['https://quartic-matrix-signalhub.herokuapp.com/'])

    if (!swarm.WEBRTC_SUPPORT) {

    }

    swarm.on('connect', (function (peer, id) {
      console.log('connected to a new peer:', id);
      console.log('total peers:', swarm.peers.length);

      peer.on('error', function (err) { 
        console.log('error', err); 
      })

      peer.on('data', (function (json) {
        this.onReceive(json, peer);
      }).bind(this));

      this.onConnect(peer, id);
    }).bind(this))

    swarm.on('disconnect', (function (peer, id) {
      console.log('disconnected from a peer:', id)
      console.log('total peers:', swarm.peers.length)
      
      this.onDisconnect(peer, id);
    }).bind(this))

    return swarm;
  }

}

function removeFromArray(array, value) {
  const index = array.indexOf(value);
  if (index >= 0) {
    array.splice(index, 1);
  }
}

class FakeSwarm extends MySwarm {
  constructor() {
    super();
    // All the other FakeSwarms, just needs send(json).
    this.peers = [];

    super.myId = FakeServer.generateId();
  }

  broadcast(data) {
    var json = JSON.stringify(data);
    this.peers.forEach(function (peer) {
      peer.onReceive(json, this);
    });
  }
  
  sendTo(peer, data) {
    var json = JSON.stringify(data);
    peer.onReceive(json, this);
  }
  
  connect(peer, id) {
    this.peers.push(peer);
    this.onConnect(peer, id);
  }

  disconnect(peer, id) {
    this.onDisconnect(peer, id);
    removeFromArray(this.peers, peer);
  }
}


class FakeServer {
  static fakeId = 0;
  static generateId() {
    return "fake-id-" + this.fakeId++;
  }

  constructor() {
    this.fakeSwarms = [];
  }

  connect(initiator) {
    this.fakeSwarms.forEach(function (other) {
      other.connect(initiator, initiator.myId);
      initiator.connect(other, other.myId);
    });
    this.fakeSwarms.push(initiator);
  }

  disconnect(initiator) {
    removeFromArray(this.fakeSwarms, initiator);
    this.fakeSwarms.forEach(function (other) {
      initiator.disconnect(other, other.myId);
      other.disconnect(initiator, initiator.myId);
    });
  }
}
