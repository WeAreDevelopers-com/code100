import { readFileSync, write, writeFile } from 'fs';
const dataset = '../pixels.json';
const data = JSON.parse(readFileSync(dataset, 'utf8'));


let black = 0;
let nonblack = 0;
let trans = 0;
let pixels = data.pixels;
let all = pixels.length;

for (let i = 0; i < all; i += 4) {
    if (pixels[i + 3] === 0 || 
        (pixels[i] === 0 && 
         pixels[i + 1] === 0 && 
         pixels[i + 2] === 0)) {
        black++;
    } else {
        nonblack++;
    }
}
console.log(black);
console.log(nonblack);
console.log(data.width*data.height - black - nonblack)

