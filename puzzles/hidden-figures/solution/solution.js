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

// regular expression string to match the variable figure surrounded by other than letters
let figure = "figure";

// loop through all the figures
figures.forEach((figure,i) => {
    // count them in the story
    let match = story.match(new RegExp("[a-z]?"+figure+"[a-z]?", 'gi'));
    match = match.filter((v) => v.toLowerCase() === figure.toLowerCase());
    let count = match ? match.length : 0;
    // add the count multiplied by the position in the array
    all += (i+1) * count;
});
// write result to file
writeFileSync('result.json', JSON.stringify(all));
console.log(all);
