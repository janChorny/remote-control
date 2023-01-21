import { left, mouse } from '@nut-tree/nut-js';

export const mouseLeft = async ([px]: string) => {
  await mouse.move(left(+px));
};
