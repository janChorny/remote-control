import { mouse, Region, screen } from "@nut-tree/nut-js";
import Jimp from 'jimp/es';

export const printScreen = async () => {
  const { x, y } = await mouse.getPosition();
  const region = new Region(x-100,y-100,200,200);
  const grabbedRegion = (await screen.grabRegion(region)).toRGB();
  const image = new Jimp({ data: (await grabbedRegion).data, width: (await grabbedRegion).width, height: (await grabbedRegion).height });
  const bufferedImg = await image.getBufferAsync(Jimp.MIME_PNG);
  const result = bufferedImg.toString('base64');
  return result;
};

