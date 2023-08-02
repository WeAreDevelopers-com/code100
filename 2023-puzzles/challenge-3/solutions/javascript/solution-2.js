const puzzle = require('../../puzzle.json');
const result = require('../../result.json');
let out = [];

const isSolutionCorrect = () => {
    return JSON.stringify(out) === JSON.stringify(result);
};

const getEntry = (id) => {
    puzzle["linkedList"].forEach(entry => {
        if (entry.id === id) {
            out.push(entry.value);
            if (entry.next !== null) {
                getEntry(entry.next);
            } else {
                console.log(out);
                console.log('Is solution correct?', isSolutionCorrect());
            }
        }
    })
}

getEntry(puzzle.top);


