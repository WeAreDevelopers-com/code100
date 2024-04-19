---
title: CODE100 - the puzzles - unknown pleasures
layout: challenge
---

# Unknown pleasures puzzle

To celebrate [CODE100](https://code100.dev) coming to Manchester, here is our take on the classic [Unknown Pleasures by Joy Division cover](unknown.png):

![Wave from the iconic cover with a CODE100 logo above it and the wave coloured in a gradient from lime to white](code100-unknown.png).

You get [a JSON file](pixels.json) with the dimensions of the image and all the pixels with their colours. 

Your job is easy: tell us the amount of black or transparent pixels in the image. Return it as an integer.

<!-- details -->
<!-- summary -->
## Solution
<!-- endsummary -->

The JSON object is a HTML5 canvas representation of the pixels. This [ImageData](https://developer.mozilla.org/en-US/docs/Web/API/ImageData) has its own format, and is pretty straight forward. 

You get the width, the height of the image and the pixels in RGBA. Knowing this, the solution to finding the transparent/black pixels is a simple loop and comparison. 

In JavaScript, this could be:

```javascript
// read in the pixel data and parse it
import { readFileSync } from 'fs';
const dataset = '../pixels.json';
const data = JSON.parse(readFileSync(dataset, 'utf8'));

// define the black/transparent and non-black pixel amounts
let blackPixels = 0;
let otherPixels = 0;
// get the pixels and store the length to speed up the loop
let pixels = data.pixels;
let all = pixels.length;

// loop through the pixel data in fours
for (let i = 0; i < all; i += 4) {
// the pixel colour of a canvas is stored in RGBA format
// This means if the fourth value is 0, the pixel is transparent
// If the first three values are 0, the pixel is black
if (pixels[i + 3] === 0 || 
        (pixels[i] === 0 && 
         pixels[i + 1] === 0 && 
         pixels[i + 2] === 0)) {
        black++;
    } else {
        nonblack++;
    }
}
console.log(blackPixels);
console.log(otherPixels);
// testing the outcome - this should be zero
console.log(data.width * data.height - black - nonblack)
```

Canvas and pixel manipulation is so much fun.

<!-- details -->