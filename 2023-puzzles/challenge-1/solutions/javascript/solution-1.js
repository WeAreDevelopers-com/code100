const puzzle = require('../../puzzle.json');
const result = require('../../result.json');

const solve = input =>
    input.split(/\D/).reduce((acc, curr) => {
        if (curr === '') return acc;
        else return acc + parseInt(curr);
    }, 0);

const isSolutionCorrect = (solution, result) => {
    return JSON.stringify(solution) === JSON.stringify(result);
};

console.log(solve(puzzle));
console.log('Is solution correct?', isSolutionCorrect(solve(puzzle), result));
