import { FileType, mouse, Region, screen } from "@nut-tree/nut-js";
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFile } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = join(__dirname,'..', 'prtscreen');

export const printScreen = async () => {
  const { x, y } = await mouse.getPosition();
  const region = new Region(x-100,y-100,200,200);
  const screenShot = await screen.captureRegion('screenshot', region, FileType.PNG, filePath)
  const result = await readFile(screenShot);
  return result.toString('base64');
};

