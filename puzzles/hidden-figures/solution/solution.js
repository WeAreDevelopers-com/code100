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
