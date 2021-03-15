import { promises as fs } from 'fs';
import path from 'path';

export async function getRandomStickers(n: number) {
  const dir = path.join(process.cwd(), 'svg/stickers');
  const svgs = (await fs.readdir(dir)).filter((p) =>
    p.toLowerCase().endsWith('.svg')
  );
  const dedupe = new Set<string>();
  return svgs.map((svg) => ({
    svg,
    style: getRandomStyle(n, dedupe),
  }));
}

function getRandom(n: number) {
  return Math.floor(Math.random() * n) / n;
}

function getRandomStyle(n: number, dedupe: Set<string>) {
  let left;
  let top;
  while (true) {
    const r = 0.2 + 0.3 * Math.sqrt(getRandom(n));
    const theta = getRandom(n) * 2 * Math.PI;
    const x = 0.5 + r * Math.cos(theta);
    const y = 0.5 + r * Math.sin(theta);
    const hash = `${x.toFixed(1)}_${y.toFixed(1)}`;
    if (dedupe.has(hash)) {
      continue;
    }
    dedupe.add(hash);
    left = (100 * x).toFixed(2);
    top = (100 * y).toFixed(2);
    break;
  }
  return {
    left: `${left}%`,
    top: `${top}%`,
    transform: `rotate(${getRandom(n) * 90}deg)`,
  };
}
