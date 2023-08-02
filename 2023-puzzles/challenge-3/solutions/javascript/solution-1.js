const { linkedList, top } = require('../../puzzle.json');
const result = require('../../result.json');

const topNode = linkedList.find(node => node.id === top);

const tree = [];
const traverse = node => {
    if (!node) return;
    tree.push(node.value);
    traverse(linkedList.find(n => n.id === node.next));
    return tree;
};

const isSolutionCorrect = () => {
    return JSON.stringify(tree) === JSON.stringify(result);
};

traverse(topNode);

console.log(tree);
console.log('Is solution correct?', isSolutionCorrect());
