import { readFileSync, write, writeFile } from 'fs';
const dataset = 'catdata.json';
const cats = JSON.parse(readFileSync(dataset, 'utf8'));


let uniquenames = new Set(
    cats.map(e => e.alt.split(':')[0])
).size
// let portrait = 0;
// let landscape = 0;
// let square = 0;
let widest = 0;
let tallest = 0;
let formats = {};


cats.forEach(cat => {
    widest = Math.max(widest,cat.width);
    tallest = Math.max(tallest,cat.height);
    // if (cat.width > cat.height) { landscape++; }
    // if (cat.height > cat.width) { portrait++; }
    // if (cat.height === cat.width) { square++; }
    let type = cat.filename.split('.').pop();
    if (!formats[type]) {
        formats[type] = 1;
    } else {
        formats[type]++;
    }
    
});
let result = {
    uniquenames: uniquenames,
    // portrait: portrait,
    // landscape: landscape,
    // square: square,
    widest: widest,
    tallest: tallest,
    formats: formats
}

console.log(result);
writeFile('cat-result.json', JSON.stringify(result), err => {
    if (err) throw err;
    console.log('Stored in cat-result.json');
});