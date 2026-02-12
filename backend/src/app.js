const ws = require('ws')
const PORT = 3000;

const wss = new ws.Server({
    port: PORT
});
function online(){
    console.log('Servidor on')
}
wss.on("connection", online)

console.log('Websoket rodando')