const puzzle = require('../../puzzle.json');
const result = require('../../result.json');

function linkedListToArray(input) {
  const map = input.linkedList.reduce((map, item) => {
    map.set(item.id, item);
    return map;
  }, new Map());
  const result = [];
  let item = map.get(input.top);
  result.push(item.value);
  while (item.next !== null) {
    item = map.get(item.next);
    result.push(item.value);
  }
  return result;
}

function isSolutionCorrect(solution, result) {
  return JSON.stringify(solution) === JSON.stringify(result);
}

console.log(linkedListToArray(puzzle));
console.log('Is solution correct?', isSolutionCorrect(linkedListToArray(puzzle), result));
