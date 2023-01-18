import { httpServer } from "./src/http_server/index.js";
import { mouse } from "@nut-tree/nut-js";
import WebSocket, { WebSocketServer } from "ws";

const HTTP_PORT = 8181;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wws = new WebSocketServer({ port: 8080 });

wws.on('connection', ws => {
  ws.on('message', data => {
    console.log('received:', data);
  })

  ws.send('something');
})

wws.on('close', () => {

})
