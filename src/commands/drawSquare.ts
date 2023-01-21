import { Button, down, left, mouse, right, up } from "@nut-tree/nut-js";

export const drawSquare = async ([px]:any) => {
  await mouse.pressButton(Button.LEFT);
  await mouse.move(right(+px));
  await mouse.move(down(+px));
  await mouse.move(left(+px));
  await mouse.move(up(+px));
  await mouse.releaseButton(Button.LEFT);
};
