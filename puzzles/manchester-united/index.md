---
title: CODE100 - the puzzles 
layout: challenge
---

# Manchester United

This puzzle is about getting information about Manchester from three different datasets in three different formats.

You get a [JSON dataset](dataset.json) explaining from which URL you can get the information and what format it is in. In this case, you get a list of actors, actresses and producers from the world for film and stage, a list of movies set in or about Manchester and a list of bands. 

```json
{
  "acting":{
    "format":"csv",
    "URL":"https:// … .csv"
  },
  "movies": {
    "format":"json",
    "URL":"https:// … .json"
  },
  "bands": {
    "format":"HTML",
    "URL":"https:// … .html"
  }
}  
```

What we expect from you as the result of your coding is a dataset with the numbers of each in JSON format. For example:

```json
{ 
  "movies": 20, 
  "acting": 50, 
  "bands": 23 
}
```

Happy uniting! 

<!-- details -->
<!-- summary -->
## Solution explanation
<!-- endsummary -->

This is a pretty common task, and the main stumbling block here was to not rely on data to be clean as it never is in real life. 
The biggie here is the HTML, which features list items that are empty. These are actually pointless as CSS creates the columns, but we've seen extraneous HTML elements like that a lot in the wild (remember `clearfix`?)…

Here is how we [solved this problem in JavaScript](solution/solution.js). 

```javascript
import { readFileSync, writeFileSync } from 'fs';
const URLS = JSON.parse(readFileSync('../dataset.json', 'utf8'));

// start a new object to store all results
let united = {};

// once loadded, add the result to the united object
const addto = (key, value) => {
    united[key] = value;
    // if all 3 results are in, write the file
    if(Object.keys(united).length === 3){
        console.log(united);
        writeFileSync('result.json', JSON.stringify(united));
    }
}

// loop through all URLs
Object.keys(URLS).forEach(key => {
    // load the URL
    fetch(URLS[key].URL).then(response => {
        // get the type 
        let type = response.headers.get('content-type').split(';')[0];
        // if it's JSON, parse it and 
        // add the length to the united object
        if (type === 'application/json') {
            response.json().then(data => {
                addto('movies',data.length);
            });
        }
        // if it's CSV, split it by line and 
        // add the length to the united object
        if (type === 'text/csv') {
            response.text().then(data => {
                addto('acting',data.split('\n').length - 1);
            })
        }
        // if it's HTML, split it by </li>, 
        // grab the second part of the split
        // and filter out the empty strings
        // this skips the commented out <li> tagslike 
        /*
                <li class="ak2f2j">Bipolar Sunshine</li>
                <!-- <li class="wrap"></li> -->
                <li class="dfa54k">Simply Red</li>
        */
        if (type === 'text/html') {
            response.text().then(data => {
                let band = data.split('</li>').map(
                    b => b.split('">')[1]
                ).filter(
                    b => typeof b === "string" && b.length > 0
                )
                addto('bands',band.length);
            });
        } 
    })
});
```

Which gives us the following result:

```json
{ "acting": 131, "bands": 175, "movies": 32 }
```

This is a stark reminder, that when it comes to dealing with HTML, it is always a good plan to use a parser and not rely on regular expressions or string splitting techniques.

<!-- enddetails -->

