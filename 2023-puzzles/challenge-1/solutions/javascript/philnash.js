// Submitted by philnash

const puzzle = require('../../puzzle.json');
const result = require('../../result.json');

function sumNumbersInAString(string) {
  return string
    .match(/(\d+)/g)
    .map(num => parseInt(num, 10))
    .reduce((sum, num) => sum + num, 0);
}

function isSolutionCorrect(solution, result) {
  return JSON.stringify(solution) === JSON.stringify(result);
}

console.log(sumNumbersInAString(puzzle));
console.log('Is solution correct?', isSolutionCorrect(sumNumbersInAString(puzzle), result));
