---
title: CODE100 - the puzzles
layout: challenge
---

## Anagrams

You will receive an array of strings.

Submit that array of strings, sorted from A-Z, but only supply the words that are an anagram of another word in that array.

### Example puzzle

```json
[ "kiwi", "melon", "apple", "lemon" ]
```

### Example solution

```json
[ "lemon", "melon" ]
```
### Actual data used in the competition

- [Coding puzzle (input)](challenge2/puzzle.json)
- [Result (output)](challenge2/result.json)

<!-- details -->
<!-- summary -->
## Explanation
<!-- endsummary -->

This challenge required you to split words into characters and sort them: 

- Write a function that identifies if two words are anagrams
– Sort the letters of both words alphabetically
– Iterate word 1, and create an object map for each character, counting the occurance of each
– Iterate word 2, and check if the character count matches
- Iterate over the array of words
- For each word, iterate over the remaining words in the array
- If the current word is an anagram of the other word, add it to the result array ​

<!-- enddetails -->

<!-- details -->

<!-- summary -->
## Code solutions
<!-- endsummary -->

There are many ways to solve this. [This JavaScript solution](solutions/javascript/solution-2.js) is nice and short:

```javascript
let sortobj = {};
let anagrams = [];

puzzle.forEach(function (item) { 
    let id = item.split('').sort().join('');
    if (!sortobj[id]) { sortobj[id] = []; }
    sortobj[id].push(item); 
});

for (let i in sortobj) {
    if (sortobj[i].length > 1) {
        sortobj[i].forEach(function (e) { 
            anagrams.push(e); 
        });
    }
}

anagrams.sort();
```
Other submissions:

* [A JavaScript solution by Phil Nash using nested loops](solutions/javascript/philnash.js)
* [Another JS solution](solutions/javascript/solution-1.js)

<!-- enddetails -->



