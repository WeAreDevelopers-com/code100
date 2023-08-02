const puzzle = require('../../puzzle.json');
const result = require('../../result.json');

let all = [];
let entries = puzzle["linkedList"];
let top = puzzle["top"];

const isSolutionCorrect = () => {
    return JSON.stringify(all) === JSON.stringify(result);
};

const get = (id) => {
    all.push(id.value);
    if (id.next !== null) {
        get(entries.find(entry => entry.id === id.next))
    } else {
        console.log(all);
        console.log('Is solution correct?', isSolutionCorrect());
    }
}

get(entries.find(entry => entry.id === top))

