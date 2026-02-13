import { WebSocketServer } from 'ws'


const ws = new WebSocketServer({
    port: 8080
})
console.log('websocket rodando');


ws.on('connection', (ws) => {
    console.log('Novo cliente conectado');

    ws.send('Bem-vindo ao servidor WebSocket!') 
})

  ws.on('message', (message) => {
    console.log(`Mensagem recebida: ${message}`);
    
    // Echo: envia a mesma mensagem de volta para o cliente
    ws.send(`Servidor recebeu: ${message}`);
  });


ws.on('close', () => {
    console.log('Cliente desconectado');
})