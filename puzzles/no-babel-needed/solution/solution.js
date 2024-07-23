import { readFileSync, writeFileSync } from 'fs';
let numbers = JSON.parse(readFileSync('../dataset.json', 'utf8'));
let out = {};
Object.keys(numbers).forEach(lang => {
    let labeled = numbers[lang].map((n,i) => `${n} - ${i+1}`);
    out[lang] = labeled.sort().map(n => +n.split('-').pop());
});
writeFileSync('./result.json', JSON.stringify(out));
console.log(out);
