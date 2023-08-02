const puzzle = require('../../puzzle.json');
const result = require('../../result.json');

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

const isSolutionCorrect = () => {
    return JSON.stringify(anagrams) === JSON.stringify(result);
};

console.log(anagrams);
console.log('Is solution correct?', isSolutionCorrect());