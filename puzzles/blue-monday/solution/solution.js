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