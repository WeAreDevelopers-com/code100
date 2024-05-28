---
title: CODE100 - the puzzles 
layout: challenge
---

# Hidden figures challenge

The end goal of this challenge is to add all the numbers and number words together.

You get the [text of a story about Maths and the name of the numbers](dataset.json) to find:

```json
{
"numbers":
[
    "one","two","three","four","five","six",
    "seven","eight","nine","ten","eleven",
    "twelve"
],
"story": "Once upon a time, in the ancient land of Sumer …"
}
```

So, if the story would say: 

```text
The Commodore 64 was the one computer to be available to all
it's 1985 release made the three kids in our household jealous
as we couldn't afford it with a father working three shifts in
a factory. 
```

The result we expect from your code is `2056`.

```
64 + 
"one" = 1 +
1985 + 
"three" = 3
"three" = 3
=> 64 + 1 + 1985 + 3 + 3 = 2056
```

<!-- details -->
<!-- summary -->
## Solution explanation
<!-- endsummary -->

This could be achieved in many different ways. The easiest is to use regular expressions. 
In [JavaScript](solution/solution.js), this could be:

```javascript
// Load the data
import { readFileSync, writeFileSync } from 'fs';
let storydata = readFileSync('../dataset.json', 'utf8');
// get the story and the numbers array
let story = JSON.parse(storydata).story;
let figures = JSON.parse(storydata).numbers;
// start the sum at 0
let all = 0
// get all the numbers in the story and add them to the sum
story.split(/\D+/).forEach(number => {
    all += +number;
})
// loop through all the figures
figures.forEach((figure,i) => {
    // count them in the story
    let count = story.match(new RegExp(figure, 'gi')).length;
    // add the count multiplied by the position in the array
    all += (i+1) * count;
});
// write result to file
writeFileSync('result.json', JSON.stringify(all));
console.log(all);
```

The result us `2050`. Would you have done it differently?

<!-- enddetails -->