import { httpServer } from "./src/http_server/index";
import WebSocket, { WebSocketServer } from "ws";
import { controller } from "./src/controller";

const HTTP_PORT = 8181;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wws = new WebSocketServer({ port: 8080 });
const appAddress = 'http://localhost:8181';

wws.on('connection', async (ws) => {
  console.log('Start WebSocket server on the 8080 port!');
  console.log(`Connection ${appAddress} started!`);
  await controller(ws);
  ws.on('close', () => {
    ws.close()
    console.log(`Connection ${appAddress} ended!`);
  });
})
