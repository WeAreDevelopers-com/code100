const puzzle = require('../../puzzle.json');
const result = require('../../result.json');

console.log(puzzle)

let solution = 0;
puzzle.split(/\D/).forEach(v => { solution += +v} );

const isSolutionCorrect = () => {
    return JSON.stringify(solution) === JSON.stringify(result);
};

console.log(solution);
console.log('Is solution correct?', isSolutionCorrect());