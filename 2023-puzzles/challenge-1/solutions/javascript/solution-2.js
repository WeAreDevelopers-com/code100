const puzzle = require('../../puzzle.json');
const result = require('../../result.json');

let solution = 0;
puzzle.split(/\D/).forEach(
    v => { solution += +v} 
);

function isSolutionCorrect(solution, result) {
    return JSON.stringify(solution) === JSON.stringify(result);
}

console.log(solution);
console.log('Is solution correct?', isSolutionCorrect(solution,result));