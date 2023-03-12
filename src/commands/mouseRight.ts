import { mouse, right } from '@nut-tree/nut-js';

export const mouseRight = async (px: string) => {
  await mouse.move(right(+px));
};
