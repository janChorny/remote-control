import { mouse, up } from '@nut-tree/nut-js';

export const mouseUp = async ([px]:string) => {
  await mouse.move(up(+px));
};
