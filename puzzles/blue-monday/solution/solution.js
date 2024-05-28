import { readFileSync, write, writeFile } from 'fs';
// const dataset = 'dataset.json';
let data = readFileSync('../dataset.json', 'utf8');
data = JSON.parse(data);

let mondays = 0;
let bluemondays = 0;
data.forEach((item, i) => {
    let datechunks = item.date.split('/');
    let date = new Date(`${datechunks[2]}-${datechunks[1]}-${datechunks[0]}`).getDay();
    if (date === 1) {
        mondays++;
        if (item.label === 'blue') {
            bluemondays++;
        }
    }
});
console.log(JSON.stringify({mondays: mondays, bluemondays: bluemondays}))
