import { readFileSync } from 'fs';
const text = readFileSync('../../web-proposal.txt', 'utf8');

// get sentences and filter out empties and outliers
let sentences = text.split('. ').filter(i => i.length > 2);

let out = {};

// longest without comma
let nocomma = sentences.filter(i => !i.includes(','));
nocomma.sort((a, b) => b.length - a.length);
out['Longest without comma'] = nocomma[0] + '.';

// shortest 
sentences.sort((a, b) => b.length - a.length);
out['shortest'] = sentences.pop() + '.';

// most commas using regex
let mostcommas = sentences.filter(
    i => i.includes(',')).
        sort((a, b) => {
            b.match(/,/g).length - a.match(/,/g).length
        }
);

out['Most commas'] = mostcommas[0] + '.';

// Alternatively: 
// Most commas using split:
let most = {sentence:'', commas: 0};
sentences.forEach(sentence => {
    let chunks = sentence.split(',');
    if (chunks.length > most.commas) {
        most.commas = chunks.length;
        most.sentence = sentence;
    }
})
console.log(most.sentence);

console.log(JSON.stringify(out));