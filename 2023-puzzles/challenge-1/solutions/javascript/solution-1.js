const puzzle = require('../../puzzle.json');
const result = require('../../result.json');

const solve = input =>
    input.split(/\D/).reduce((acc, curr) => {
        if (curr === '') return acc;
        else return acc + parseInt(curr);
    }, 0);

console.log(solve(puzzle));
console.log('Is solution correct?', solve(puzzle) === result);
