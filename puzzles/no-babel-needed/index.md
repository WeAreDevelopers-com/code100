---
title: CODE100 - the puzzles 
layout: challenge
---

# No Babel Needed - sort numbers by alphabet

You get a [JSON object](dataset.json) that contains the words for the numbers 1 to 100 in various languages.

```json
{
    "English": ["one","two","three","four","five","six"…],
    "German": ["eins","zwei","drei","vier","fünf","sechs"…],
    "French": ["un","deux","trois","quatre","cinq","six"…],
    …
}
```

The challenge is to sort the languages alphabetically and return an array of numbers that shows that order.

For example, image an imaginary language `shloumph` where the numnbers 1 to 10 are:

```json
"Shloumph": [
    "ona", "dodzette", "turna", "frotsa", "abla",
    "tro", "bababdook", "deezes", "oran", "bordernone"
]
```

In this case, the desired result would be:

```json 
 "Shloumph": [5, 7, 10, 8, 2, 4, 1, 9, 6, 3]
```

As the order is like this: 

```json
"Shloumph": {
    "abla": 5,
    "bababdook": 7,
    "bordernone": 10,
    "deezes": 8,
    "dodzette": 2,
    "frotsa": 4,
    "ona": 1,
    "oran": 9,
    "tro": 6,
    "turna": 3  
}
```

Return a JSON object of all the languages and the numbers 1 to 100 sorted like this. For example:

```json
{
    "English":[79,71,77,76,73,72,6,22,… ],
    "German":[45,25,15,50,100,9,89,39,…],
    "French":[63,13,30,31,35,32,38,39,…],
    …
}
```

Happy sorting!

<!-- details -->
<!-- summary -->
## Solution
<!-- endsummary -->

OK, this looked a lot more complex as it is. In essence, what we wanted here was to sort an array by alphabet anr return the index as another array. So, if the input array were:

```javascript
['b','d','a','c'];
```

The result should be: 

```javascript
[2,4,1,3]
```

And that repeated for all languages. 

One way to do that in JavaScript is to add the index to each of the items of an array at the end, sort it and then remove the string. 

```javascript
// read the dataset 
import { readFileSync, writeFileSync } from 'fs';
let numbers = JSON.parse(readFileSync('dataset.json', 'utf8'));
// define an object to return
let out = {};
// loop through all the languages
Object.keys(numbers).forEach(lang => {
    // add the index + 1 (to avoid 0) to each 
    // array item in the language with a preceeding
    // ` - `
    let labeled = numbers[lang].map((n,i) => `${n} - ${i+1}`);
    // sort this array, and remove the string 
    // before the - with nothing. The +n casts 
    // the result to an integer
    // push the result for the language into out
    out[lang] = labeled.sort().map(n => +n.split('-').pop());
});
writeFileSync('./result.json', JSON.stringify(out));
console.log(out);
```

Other programming languages have built-in functions for that, and we are sure there are even shorter versions in JavaScript…

<!-- enddetails -->