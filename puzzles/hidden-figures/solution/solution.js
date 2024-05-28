import { readFileSync, write, writeFile } from 'fs';
let storydata = readFileSync('../dataset.json', 'utf8');
let story = JSON.parse(storydata).story;
let figures = JSON.parse(storydata).numbers;
let all = 0
story.split(/\D+/).forEach(number => {
    all += +number;
})
figures.forEach((figure,i) => {
    let count = story.match(new RegExp(figure, 'gi')).length;
    all += (i+1) * count;
});
console.log(all);
