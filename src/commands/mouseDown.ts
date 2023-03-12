import { down, mouse} from '@nut-tree/nut-js';

export const mouseDown = async (px:string) => {
  await mouse.move(down(+px));
};
