---
title: CODE100 - the puzzles 
layout: challenge
---

# Crew manifest challenge - how many on each ship?

Get the full dataset of a crew manifest of various ficticious spacecraft from the following endpoint:

[https:-devrel.wearedevelopers.com/code100-puzzles/009-zagreb/crews.json](https:-devrel.wearedevelopers.com/code100-puzzles/009-zagreb/crews.json)

The structure of the file is the following (this is an excerpt):

```json
[
    { "name": "Philip J. Fry", "ship": "Planet Express Ship", "job": "Delivery Boy", "age": 25 },
    { "name": "Luke Skywalker", "ship": "Millennium Falcon", "job": "Jedi", "age": -1 },
    { "name": "Marvin", "ship": "Heart of Gold", "job": "Paranoid Android", "age": 30 },
    { "name": "Pavel Chekov", "ship": "USS Enterprise NCC-1701", "job": "Navigator", "age": 22 },
    { "name": "Doctor John A. Zoidberg", "ship": "Planet Express Ship", "job": "Doctor", "age": 86 },
    { "name": "Kaylee Frye", "ship": "Serenity", "job": "Mechanic", "age": 23 },
    { "name": "Simon Tam", "ship": "Serenity", "job": "Doctor", "age": 28 }
]
```

Show a list of all the ships in the dataset (no duplicates) and the number of people on each ship. 

For the demo sample above here, this would be: 

```json
[
    {"ship": "Planet Express Ship" "crewcount": 2},
    {"ship": "Millennium Falcon" "crewcount": 1},
    {"ship": "Heart of Gold" "crewcount": 1},
    {"ship": "USS Enterprise NCC-1701" "crewcount": 1},
    {"ship": "Serenity" "crewcount": 2},
]
```

### Actual data used in the competition

- [Coding puzzle (input)](crews.json)
- [Result (output)](challenge-1-result.json)

<!-- details -->
<!-- summary -->
## Explanation
<!-- endsummary -->

One solution for this is to use an object and the spacecraft names as keys:

- Create a new ships object
- loop through the crew array and create a new key for each ship
- add an array to each ship key
- push the person into the array
- Display all the ships and the amount of people in them

<!-- enddetails -->

<!-- details -->

<!-- summary -->
## Code solutions
<!-- endsummary -->

There are many ways to solve this. [This JavaScript solution](challenge-1.js) can help as an example:

```javascript
const shipsAndCrewnumbers = (crews) => {
    let ships = {};
    crews.forEach((person) => {
        if (!ships[person.ship]) {
            ships[person.ship] = [];
        }
        ships[person.ship].push(person);
    });
    let result = [];
    Object.keys(ships).forEach((ship) => {
        result.push(
            {ship: ship, crewcount: ships[ship].length}
        )
    });
    console.log(JSON.stringify(result));
}
```

<!-- enddetails -->
