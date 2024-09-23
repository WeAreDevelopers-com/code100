---
title: CODE100 - Congressdata challenge
layout: challenge
--- 

# WeAreDevelopers World Congress Session analysis

You get a [dataset containing all sessions](data.json) of the WeAreDevelopers World Congress. 
You can also [browse the data](display.html) instead of reading JSON to get an idea what awaits you.

Write a script that returns a JSON object with the following properties:

* `sessions`: the amount of overall sessions
* `streamedSessions`: the amount of sessions that were streamed (that have a stream provider)
* `moreThanOneSpeaker`: the amount of sessions that had more than one speaker
* `types`: an array of all the types of sessions without repeats
* `longestTitle`: the longest session title as a string
* `averageTitleLength`: the average title length

For example:

```json
{
  "sessions": 300,
  "streamedSessions": 100,
  "moreThanOneSpeaker": 20,
  "types": [
    "Keynote",
    "Random waffling",
    "Moshpit"
    "Virtual Talk"
  ],
  "longestTitle": "How to deal with unclean data without going bonkers",
  "averageTitleLength": 13
}
```

<!-- details -->
<!-- summary -->
## Solution
<!-- endsummary -->

There were not many stumbling blocks in this one but there are of course lots of ways to solve it. We got solutions in Typescript, Ruby, Python and PHP for this one. 

The solution is: 

```json
{
  "sessions": 504,
  "streamedSessions": 217,
  "moreThanOneSpeaker": 87,
  "types": [
    "Workshop",
    "Side Event",
    "Other",
    "Keynote",
    "Talk",
    "Virtual Talk",
    "Fireside Chat",
    "Panel",
    "Lightning Talk",
    "Booth Activities"
  ],
  "longestTitle": "Developers don't need onboarding, do they? 
                   The balance between corporate culture and 
                   day-to-day project work.",
  "averageTitleLength": 56
}
```

Our own solution is in JavaScript/Node and looks like this:

```javascript
import { readFileSync } from 'fs';

let result = {}
let data = JSON.parse(readFileSync('./data.json'));

// all sessions
result.sessions = data.length;

// sessions with streamprovider 
result.streamedSessions = data.filter(
    (item) => item.streamprovider !== ''
).length;

// sessions with several speakers 
result.moreThanOneSpeaker = data.filter(
  (item) => item.speakers?.length > 1
).length;

// all types without duplicates using Set
// and casting back to Array
result.types = [...new Set(
  data.flatMap((item) => item.type))
];

// longest title using reduce
result.longestTitle = data.reduce((acc, item) => {
  return item.title.length > acc.title.length ? item : acc;
} , { title: '' }).title;

// average title length using reduce
result.averageTitleLength = Math.ceil(data.reduce((acc, item) => {
  return acc + item.title.length;
}, 0) / data.length);

console.log(result);
``` 

<!-- details -->




