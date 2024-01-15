---
title: CODE100 - the puzzles 
layout: challenge
---

# CODE100 Puzzle: Event Block

The challenge here is to turn [this JSON object](events.json):

```json
{
    "columns": 80,
    "padChar": "·",
    "events": [
        { "name": "Code 100", "location": "Zagreb, Croatia", "date": "29.11.2023" },
        { "name": "LIVE", "date": "ongoing" },
        { "name": "Coffee With Developers", "location": "various", "date": "ongoing"} ,
        { "name": "World Congress","location": "Berlin, Germany", "date":"17-19.07.2024" }
    ]
}
```

Into a block like this:

```
································································
· Code 100 ············ Zagreb, Croatia ··········· 29.11.2023 ·
· LIVE ··············································· ongoing ·
· Coffee With Developers ·· various ·················· ongoing ·
· World Congress ······ Berlin, Germany ········ 17-19.07.2024 ·
································································
```

The rules are that the location needs to be centered in the 80 columns wide block, the name on the left and the date on the right. Each need to have spaces surrounding them. (and no, this demo isn't the right amount of chars).

<!-- details -->
<!-- summary -->
## Solution explanation
<!-- endsummary -->

We got quite a few submissions for solutions and you can see them in the comments on the [the codeblock puzzle Gist](https://gist.github.com/codepo8/84248aea816544c8e730c8dffb975c0e), but [here is ours](solutions/javascript/solution-1.js) using JavaScript. 

The first step is to load the data and call the function to write the block. This can be done in JavaScript with a `fetch` statement:

```javascript
fetch('https://wearedevelopers-com.github.io/code100/puzzles/eventblock/events.json').then((response) => {
    return response.json();
}).then((data) => {
    draweventbox(data);
}).catch((err) => {
    console.log(err);
});
```

Each of the data items (name, date, location) needs to be padded with a space on each side, so it makes sense to write a helper method for that. This one also checks if the property exists as not all events in the dataset have a location.

```javascript
const padBoth = (prop) => {
    return prop ? ` ${prop} ` : '';
}
```

Now we get to the meat, as in the function called by the successful fetch call earlier.

```javascript
const draweventbox = (data) => {
    let {columns, padChar, events} = data;
```

The first thing to do is to grab the data items from the JSON object. The shortest way is to use [destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment). Now we have the amount of columns the block should have in the variable `columns`, the char to add in between data items as `padChar` and the array of all the events as `events`. 

```javascript
    console.log('\n' + padChar.repeat(columns));
```

Drawing the upper and lower lines can be done by printing a line break followed by the `padChar` repeated `columns` times.

```javascript
    events.forEach(ev => {
        let event = padBoth(ev.name);
        let location = padBoth(ev.location);
        let date = padBoth(ev.date);
```

We then loop over all the events and add spaces around all the different properties.

```javascript
        let pad = (columns - location.length) / 2;
        let padLeft = padChar.repeat(Math.floor(pad) - (event.length + 1));
        let padRight = padChar.repeat(Math.round(pad) - (date.length + 1));
```

Now comes the part where the devil is in the details. First we need to center the location data in the block. We do this by subtracting its length from the amount of columns and divide it by two. 

As the location could be not an even amount of chars and we can't use `String.repeat()` with non Integers, we use `Math.floor()` and `Math.round()` to make sure our function works even with those locations.

We then calculate the amount of padding chars on the left by subtracting the length of the event from the earlier padding and the amount on the right by subtracting the length of the date. However, we also need to subtract another 1 as there is a dot on the left of the event name and the right of the date, making the box complete. 

```javascript
        console.log(padChar + event + padLeft + location + padRight + date + padChar);
    })
    // draw downer bar
    console.log(padChar.repeat(columns)+'\n');
}
```

We add all the data together and print out the event. Once we are done with the link we paint another line on the bottom and we got the functionality we want.

Thoughts? Ideas? Can you do better? Keep the conversation going at [the codeblock puzzle Gist](https://gist.github.com/codepo8/84248aea816544c8e730c8dffb975c0e). 

<!-- enddetails -->