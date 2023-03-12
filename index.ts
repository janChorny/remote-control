import { httpServer } from "./src/http_server/index";
import { WebSocketServer } from "ws";
import { controller } from "./src/controller";

const HTTP_PORT = 8181;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({ port: 8080 });
const socketAddress = 'http://localhost:8181';

wss.on('listening', () => {
  console.log('Start WebSocket server on 8080 port!');
});

wss.on('connection', async (ws) => {
  console.log(`Connection ${socketAddress} started!`);
  ws.on('close', () => {
    console.log(`Connection ${socketAddress} stopped!`);
  });
  await controller(ws);
})

process.on('SIGINT', () => {
  wss.close();
  console.log('End WebSocket server on 8080 port!');
  httpServer.close();
  console.log('End static http server on 8181 port!');
  process.exit();
});
