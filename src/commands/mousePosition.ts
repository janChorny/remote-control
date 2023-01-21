import { mouse } from '@nut-tree/nut-js';

export const mousePosition = async () => {
  return await mouse.getPosition();
};
