
'use strict'

class MySwarm {
  constructor(isOnline) {
    this.listeners = [];
    this.swarm = this.makeWebRTCSwarm(isOnline);
  }

  /**
   *  listener needs:
   *    onConnect(peer, id)
   *    onReceive(data)
   *    onDisconnect(peer, id)
   */
  addListener(listener) {
    this.listeners.push(listener);
  }

  broadcast(data) {
    var json = JSON.stringify(data);
    this.swarm.peers.forEach(function (peer) {
      peer.send(json);
    });
  }
  
  sendTo(peer, data) {
    var json = JSON.stringify(data);
    peer.send(json);
  }

  makeWebRTCSwarm(isOnline) {
    var swarm;
    if (isOnline) {
      swarm = new WebRTCSwarm('swarm-example', ['https://quartic-matrix-signalhub.herokuapp.com/'])
      var isMyFirstConnection = true;

      if (!swarm.WEBRTC_SUPPORT) {

      }

      swarm.on('connect', function (peer, id) {
        console.log('connected to a new peer:', id);
        console.log('total peers:', swarm.peers.length);

        peer.on('error', function (err) { 
          console.log('error', err); 
        })
              
        function receive(json) {
          var data = JSON.parse(json);
          listeners.forEach(listener => {
            listener.onReceive(data);
          });
        }

        peer.on('data', receive);

        listeners.forEach(listener => {
          listener.onConnect(peer, id);
        });
      })

      swarm.on('disconnect', function (peer, id) {
        console.log('disconnected from a peer:', id)
        console.log('total peers:', swarm.peers.length)
        
        listeners.forEach(listener => {
          listener.onDisconnect(peer, id);
        });
      })
    } else {
      swarm = {};
      swarm.me = -1;
      swarm.peers = [];
    }
    return swarm;
  }

}
