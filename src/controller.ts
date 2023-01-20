import { color } from "./constants/constants";
import { createWebSocketStream, WebSocket } from "ws";
import { mouseUp } from "./commands/mouseUp";

export const controller = async(ws: WebSocket) => {
  const readline = createWebSocketStream(ws, { encoding: 'utf8', decodeStrings: false });

  readline.on('data', async (data) => {
    try {
      const command = data.split(' ').shift();
      const args = data.split(' ').slice(1).join('');

      switch (command) {
        case 'mouse_up': {
          await mouseUp(args);
          readline.write('mouse_up');
          console.log(`${color.yellow}${command}${color.white} resulted as move up ${args}px;`);
          break;
        }

        default:
          break;
      }
    } catch (error) {
      throw new Error(`${color.red} Command error${color.white}`);
    }
  })
}

