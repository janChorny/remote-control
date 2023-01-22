import { color } from "./constants/constants";
import { createWebSocketStream, WebSocket } from "ws";
import { mouseUp } from "./commands/mouseUp";
import { mouseDown } from "./commands/mouseDown";
import { mouseLeft } from "./commands/mouseLeft";
import { mouseRight } from "./commands/mouseRight";
import { mousePosition } from "./commands/mousePosition";
import { drawCircle } from "./commands/drawCircle";
import { drawSquare } from "./commands/drawSquare";
import { drawRectangle } from "./commands/drawRectangle";
import { printScreen } from "./commands/printScreen";

export const controller = async(ws: WebSocket) => {
  const readline = createWebSocketStream(ws, { encoding: 'utf8', decodeStrings: false });

  readline.on('data', async (data) => {
    try {
      const command = data.split(' ').shift();
      const args = data.split(' ').slice(1).join('');
      const argOne = data.split(' ').slice(1,2);
      const argTwo = data.split(' ').slice(2);

      switch (command) {
        case 'mouse_up': {
          await mouseUp(args);
          readline.write('mouse_up');
          console.log(`${color.yellow}${command}${color.white} resulted as move up ${args}px;`);
          break;
        }

        case 'mouse_down': {
          await mouseDown(args);
          readline.write('mouse_down');
          console.log(`${color.yellow}${command}${color.white} resulted as move down ${args}px;`);
          break;
        }

        case 'mouse_left': {
          await mouseLeft(args);
          readline.write('mouse_left');
          console.log(`${color.yellow}${command}${color.white} resulted as move left ${args}px;`);
          break;
        }

        case 'mouse_right': {
          await mouseRight(args);
          readline.write('mouse_right');
          console.log(`${color.yellow}${command}${color.white} resulted as move right ${args}px;`);
          break;
        }

        case 'mouse_position': {
          const {x, y} = await mousePosition();
          readline.write(`${command} ${x},${y}`);
          console.log(`${color.yellow}${command}${color.white} resulted as cursor at ${x}px ${y}px;`);
          break;
        }

        case 'draw_circle': {
          await drawCircle(args);
          readline.write('draw_circle');
          console.log(`${color.yellow}${command}${color.white} resulted as draw circle with radius ${args}px;`);
          break;
        }

        case 'draw_square': {
          await drawSquare(args);
          readline.write('draw_square');
          console.log(`${color.yellow}${command}${color.white} resulted as draw square with side ${args}px;`);
          break;
        }

        case 'draw_rectangle': {
          await drawRectangle(argOne, argTwo)
          readline.write('draw_rectangle');
          console.log(`${color.yellow}${command}${color.white} resulted as draw rectangle ${argOne}X${argTwo};`);
          break;
        }

        case 'prnt_scrn': {
          await printScreen();
          readline.write('prnt_scrn');
          console.log(`${color.yellow}${command}${color.white} resulted as screenshot at prscreen folder;`);
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


