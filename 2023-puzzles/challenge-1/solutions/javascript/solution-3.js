const puzzle = require('../../puzzle.json');
const result = require('../../result.json');

const sumNumbersInString = inputString => {
    let currentNumber = '';
    let sum = 0;

    inputString.split('').forEach(char => {
        if (!isNaN(char)) {
            currentNumber += char;
        } else {
            if (currentNumber !== '') {
                sum += parseInt(currentNumber);
                currentNumber = '';
            }
        }
    });

    if (currentNumber !== '') {
        sum += parseInt(currentNumber);
    }

    return sum;
};

const isSolutionCorrect = () => {
    return JSON.stringify(solution) === JSON.stringify(result);
};

const solution = sumNumbersInString(puzzle);
console.log(solution);
console.log('Is solution correct?', isSolutionCorrect());
