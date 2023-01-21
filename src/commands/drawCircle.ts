import { mouse, Point, straightTo, Button } from '@nut-tree/nut-js';

export const drawCircle = async (radius:number) => {
  const { x, y } = await mouse.getPosition();
  const xValues = [x];
  var yValues = [y];
  await mouse.pressButton(Button.LEFT);
  for (let i = 0; i <= 360; i++) {
    xValues[i] = (x + radius * Math.cos(2 * Math.PI * i / 360)) - radius;
    yValues[i] = (y + radius * Math.sin(2 * Math.PI * i / 360));
    const point = new Point(xValues[i], yValues[i]);
    await mouse.move(straightTo(point));
  }
  await mouse.releaseButton(Button.LEFT);
};
