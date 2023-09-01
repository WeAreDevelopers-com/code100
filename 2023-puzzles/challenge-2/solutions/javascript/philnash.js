const puzzle = require('../../puzzle.json');
const result = require('../../result.json');

function sortWord(word) {
  return word.split('').sort().join('');
}

function findAnagrams(words) {
  const anagrams = new Set();
  for(let i = 0; i < words.length; i++) {
    const word = words[i];
    const sortedWord = sortWord(word);
    for(let j = i+1; j < words.length; j++) {
      if (sortedWord.length === words[j].length && sortedWord === sortWord(words[j])) {
        anagrams.add(word);
        anagrams.add(words[j]);
      }
    }
  }
  return Array.from(anagrams).sort();
}

function isSolutionCorrect(solution, result) {
  return JSON.stringify(solution) === JSON.stringify(result);
}

console.log(findAnagrams(puzzle));
console.log('Is solution correct?', isSolutionCorrect(findAnagrams(puzzle), result));
