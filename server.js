// Importar librerías necesarias
const WebSocket = require('ws');

// Crear un servidor WebSocket
const wss = new WebSocket.Server({ port: 8080 });

console.log("Servidor WebSocket iniciado en el puerto 8080");

// Manejar conexiones entrantes
wss.on('connection', (ws) => {
    console.log("Cliente conectado");

    // Enviar mensaje de bienvenida
    ws.send("¡Bienvenido al servidor WebSocket!");

    // Manejar mensajes recibidos del cliente
    ws.on('message', (message) => {
        console.log(`Mensaje recibido: ${message}`);
        // Responder al cliente
        ws.send(`Servidor recibió: ${message}`);
    });

    // Manejar cierre de conexión
    ws.on('close', () => {
        console.log("Cliente desconectado");
    });
});