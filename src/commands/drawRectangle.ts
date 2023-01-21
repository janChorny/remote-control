import { Button, down, left, mouse, right, up } from "@nut-tree/nut-js";

export const drawRectangle = async (argOne: string, argTwo: string) => {
  await mouse.pressButton(Button.LEFT);
  await mouse.move(right(+argOne));
  await mouse.move(down(+argTwo));
  await mouse.move(left(+argOne));
  await mouse.move(up(+argTwo));
  await mouse.releaseButton(Button.LEFT);
};
