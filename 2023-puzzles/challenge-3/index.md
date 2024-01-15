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

### Actual datasets using in the competition

- [Coding puzzle (input)](challenge3/puzzle.json)
- [Result (output)](challenge3/result.json)




