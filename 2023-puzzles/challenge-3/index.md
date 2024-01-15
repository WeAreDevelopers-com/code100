---
title: CODE100 - the puzzles
layout: challenge
---

## Linked List 

You will receive an array with nodes of a linked list and the ID of the top node as seen below.

- The property next points to the ID of the next node
- The last node has the value null for next 
- The property top points to the ID of the first node

Submit as solution an array of the values in the order that they appear in the linked list.

## Example puzzle

```json
{
    "linkedList": [
        { "id": "b", "value": 2, "next": "c" },
        { "id": "c", "value": 3, "next": null },
        { "id": "a", "value": 1, "next": "b" }
    ],
    "top": "a"
}
```

### Example solution
```json
[ 1, 2, 3 ]
```

### Actual data used in the competition

- [Coding puzzle (input)](challenge3/puzzle.json)
- [Result (output)](challenge3/result.json)


<!-- details -->
<!-- summary -->
## Explanation
<!-- endsummary -->

This challenge was easiest to solve using recursion: 

- Write a recursive function that takes a node ID as an argument
- If the node is null, abort the function (this means that it's the last node in the list)
- Push the value of the current node to the result array
- Call the recursive function again with the ID of the next node ​

<!-- enddetails -->

<!-- details -->

<!-- summary -->
## Code solutions
<!-- endsummary -->

There are many ways to solve this. [This JavaScript solution](solutions/javascript/solution-1.js) does a good job of using `find()`:

```javascript
const topNode = linkedList.find(node => node.id === top);
const tree = [];
const traverse = node => {
    if (!node) return;
    tree.push(node.value);
    traverse(linkedList.find(n => n.id === node.next));
    return tree;
};

traverse(topNode);
```
Other submissions:

* [A ruby solution](solutions/ruby/solution-1.rb)
* [A JavaScript solution by Phil Nash using Set()](solutions/javascript/philnash.js)
* [Another JS solution](solutions/javascript/solution-2.js)

<!-- enddetails -->


