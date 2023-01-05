const OSC = require('osc-js')

const config = {
  udpClient: { port: 9129 },
  wsServer: { port: 8081 }
}
const osc = new OSC({ plugin: new OSC.BridgePlugin(config) })
osc.on('*', message => console.log(message))
osc.open() // start a WebSocket server on port 8080
