# Web proposal scraping

You get the [text of Tim Berners-Lee proposal](web-proposal.txt) for the web (slightly abridged).
What we want are the: 

* longest sentence without a comma
* shortest sentence
* sentence with the most commas. 

Sentences in the original file end with a full stop and a space. 

The result should be sentences ending in a full stop and a linebreak. For example:

```
Longest sentence without a comma.
Shortest sentence.
Sentence, with, the, most, commas.
```

<!-- details -->
<!-- summary -->
## Solution
<!-- endsummary -->

Approaching this problem takes a few steps. 

1. Get the sentences. You can do this by splitting the text file at `. `. 
1. As with any dataset, it isn't clean though, so you need to ensure that there are no empty items in the resulting array or stray entries that are only a few characters.
1. For the longest sentence, filter out all entries that have no comma in them and sort them by length. 
1. You find the shortest sentence by sorting the array by length.
1. You find the one with the most commas either by splitting it on the comma and check the length or using a regular expression. 

Here is a solution in Node/JavaScript:

```javascript
import { readFileSync } from 'fs';
const text = readFileSync('../../web-proposal.txt', 'utf8');

// Get sentences and filter out empties and outliers
let sentences = text.split('. ').filter(i => i.length > 2);

let out = {};

// Longest without comma
let nocomma = sentences.filter(i => !i.includes(','));
nocomma.sort((a, b) => b.length - a.length);
out['Longest without comma'] = nocomma[0] + '.';

// Shortest 
sentences.sort((a, b) => a.length - b.length);
out['Shortest'] = sentences[0] + '.';

// Most commas using regex
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

out['Most commas'] = mostcommas[0] + '.';

console.log(JSON.stringify(out));
```

This results in: 

```JSON
{
    "Longest without comma":"It discusses the problems of loss of 
    information about complex evolving systems and derives a solution 
    based on a distributed hypertext system.",
    "Shortest":"There are many others.",
    "Most Commas":"In practice, it is useful for the system to be 
    aware of the generic types of the links between items 
    (dependences, for example), and the types of nodes 
    (people, things, documents…) without imposing any limitations."
}
```

<!-- enddetails -->
