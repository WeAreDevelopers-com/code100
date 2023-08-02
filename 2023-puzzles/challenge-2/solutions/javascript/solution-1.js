const puzzle = require('../../puzzle.json');
const result = require('../../result.json');

const isAnagram = (str1, str2) => {
    if (str1.length !== str2.length) return false;

    str1 = str1.replace(/\s/g, '').toLowerCase();
    str2 = str2.replace(/\s/g, '').toLowerCase();
    let counter = {};
    for (let letters of str1) {
        counter[letters] = counter[letters] ? counter[letters] + 1 : 1;
    }
    for (let items of str2) {
        if (!counter[items]) {
            return false;
        }
        counter[items] -= 1;
    }
    return true;
};

const anagramWords = puzzle
    .filter(word => {
        return puzzle
            .filter(word2 => word !== word2)
            .some(word2 => isAnagram(word, word2));
    })
    .sort();

const isSolutionCorrect = () => {
    return JSON.stringify(anagramWords) === JSON.stringify(result);
};

console.log(anagramWords);
console.log('Is solution correct?', isSolutionCorrect());
