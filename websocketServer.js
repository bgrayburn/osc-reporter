const OSC = require('osc-js')

const osc = new OSC({ plugin: new OSC.WebsocketServerPlugin({ port: 8081 }) })
osc.on('*', msg => console.log(msg.args))
osc.on('open', () => {
  const message = new OSC.Message('/test', 12.221, 'hello')
})
osc.on('close', () => console.log('connection was closed'))
osc.on('error', err => console.error(err))
osc.open() // start server on port 8080
