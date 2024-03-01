# Cat pics challenge =^_^=

You have a [JSON dataset of cat pictures](catdata.json), each with a file name, dimensions and alternative text that starts with the name of the cat and a description of what it looks like. 

Write a solution that shows: 

* the amount of unique cat names
* the width of the widest image
* the height of the tallest image
* all the formats the images are in and how many there are

For example, if the dataset were to be: 

```JSON
[
    {
        "width":200,"height":300,
        "filename":"5klvugfffl.gif",
        "alt":"Whiskers: ginger cat."
    },
    {
        "width":800,"height":600,
        "filename":"fpocczf87fl.jpg",
        "alt":"Bootsy: grey cat."
    },
    {
        "width":400,"height":900,
        "filename":"5pocczf87fl.jpg",
        "alt":"Whiskers: white cat."
    },
    {
        "width":200,"height":300,
        "filename":"5k9kof87fl.webp",
        "alt":"Mortimer: tabby cat."
    }
]
```

The result you should create is: 

```JSON
{
  "uniquenames": 3,
  "widest": 800,
  "tallest": 900,
  "formats": { "gif": 1, "jpg": 2, "webp": 1 }
}
```

<!-- details -->
<!-- summary -->
## Solution
<!-- endsummary -->

This wasn't a tough assignment, but it needed some looking up of the data. 

1. You get the name of each cat by checking the `alt` property and splitting it at the `:`. You need to remove duplicates either by using the name as an object key, or using a Set.
1. You loop through all the data and read the `width` and `height` of each. If either is bigger than the one before, you got the maximum width or height.
1. You get all the formats by splitting the `filename` at the `.` and you add them to a dictionary. 

In JavaScript, it can look like this:

```JavaScript
// Grab the data
import { readFileSync } from 'fs';
const dataset = 'catdata.json';
const cats = JSON.parse(readFileSync(dataset, 'utf8'));

// Map the array to it's alt property values split at the ":" 
// and create a Set to remove duplicates. The size property is 
// the amount of unique names. 
let uniquenames = new Set(
    cats.map(e => e.alt.split(':')[0])
).size;

// Define widest, tallest and a formats object
let widest = 0;
let tallest = 0;
let formats = {};
// Loop over the data
cats.forEach(cat => {
    // Replace widest and tallest if width or height are bigger
    widest = Math.max(widest, cat.width);
    tallest = Math.max(tallest, cat.height);
    // Get the file ending
    let type = cat.filename.split('.').pop();
    // Add to dictionary. If type isn't already in it, create 
    // it and set the amount to one. If it does, increase the 
    // amount.
    if (!formats[type]) {
        formats[type] = 1;
    } else {
        formats[type]++;
    }
    
});
let result = {
    uniquenames: uniquenames,
    widest: widest,
    tallest: tallest,
    formats: formats
}

console.log(result);
```

Which results in the following data:

```JSON
{
  "uniquenames": 57,
  "widest": 2076,
  "tallest": 2089,
  "formats": {
    "gif": 12,
    "jpeg": 19,
    "JPEG": 28,
    "JPE": 19,
    "BMP": 14,
    "jpg": 14,
    "png": 17,
    "webp": 7
  }
}
```

<!-- enddetails -->
