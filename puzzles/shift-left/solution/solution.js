import { readFileSync, write, writeFile } from 'fs';
const dataset = '../pagedata.json';
const grid = readFileSync(dataset, 'utf8');
let rotations = grid.match(/(\d+)deg/gm)
    .map(rotation => parseInt(rotation, 10)).filter(
            angle => angle > 90 && angle < 270
    );
console.log(rotations.length);