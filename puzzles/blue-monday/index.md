---
title: CODE100 - the puzzles 
layout: challenge
---

# How does it feel? Challenge

You get a [JSON dataset](dataset.json) with dates and labels:

```json
[
    {"date": "21/4/1728", "label": "brown"},
    {"date": "13/4/1281", "label": "purple"},
    {"date": "21/10/2241", "label": "red"},
    {"date": "7/1/1176", "label": "brown"},
    {"date": "9/6/1660", "label": "orange"},
    {"date": "18/12/2651", "label": "brown"},
    // … lots more …    
}
```

Your job is to find out how many Mondays are there and how many are labeled `blue`.

The result has to be a JSON object with both. For example:

```json
{"mondays":30,"bluemondays":4}
```

<!-- details -->
<!-- summary -->
## Solution explanation
<!-- endsummary -->

This should have been pretty straight forward, you read the date, parse it and get the day back. The only niggle we added was that the day and month were not in the order that the Date object expects them. One glance at the data should make that obvious:

```json
    {"date": "21/4/1728", "label": "brown"},
    {"date": "13/4/1281", "label": "purple"},
```

The [solution in JavaScript](solution/solution.js) could look like this:

```javascript
// read and parse data
import { readFileSync, write, writeFile, writeFileSync } from 'fs';
let data = readFileSync('../dataset.json', 'utf8');
data = JSON.parse(data);

// define monday and blue monday counters
let mondays = 0;
let bluemondays = 0;
// loop through all data
data.forEach((item, i) => {
    // reverse day and month so it is a valid date
    // and get the day from the Date object
    let datechunks = item.date.split('/');
    let date = new Date(`${datechunks[2]}-${datechunks[1]}-${datechunks[0]}`).getDay();
    // if it is a Monday, count it
    if (date === 1) {
        mondays++;
        // if it is a blue Monday, count it
        if (item.label === 'blue') {
            bluemondays++;
        }
    }
});
// write result to file
let result = {mondays: mondays, bluemondays: bluemondays};
console.log(JSON.stringify(result))
writeFileSync('result.json', JSON.stringify(result));
``` 

This means the result it 77 Mondays and 7 blue ones.

<!-- enddetails -->