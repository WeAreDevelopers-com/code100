import { readFileSync } from 'fs';
const dataset = 'catdata.json';
const cats = JSON.parse(readFileSync(dataset, 'utf8'));

let uniquenames = new Set(
    cats.map(e => e.alt.split(':')[0])
).size
let widest = 0;
let tallest = 0;
let formats = {};


cats.forEach(cat => {
    widest = Math.max(widest,cat.width);
    tallest = Math.max(tallest,cat.height);
    let type = cat.filename.split('.').pop();
    if (!formats[type]) {
        formats[type] = 1;
    } else {
        formats[type]++;
    }
    
});
let result = {
    uniquenames: uniquenames,
    widest: widest,
    tallest: tallest,
    formats: formats
}

console.log(result);