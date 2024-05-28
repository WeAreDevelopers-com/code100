import { readFileSync, write, writeFile } from 'fs';
// const dataset = 'dataset.json';

let dates = [];
let labels = ['blue', 'green', 'red', 'yellow', 'purple', 'orange', 'pink', 'brown'];
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
for (let i = 0; i < 500; i++) {
    let year = Math.floor(Math.random() * 2000 + 1000);
    let month = Math.floor(Math.random() * 12 + 1);
    let day = Math.floor(Math.random() * 28 + 1);
    let date = new Date(`${year}-${month}-${day}`).getDay();
    dates.push({date:`${day}/${month}/${year}`,label:labels[Math.floor(Math.random() * 8)],day:days[date]});
}
console.log(dates);
let mondays = dates.filter(date => date.day === 'Monday');
let bluemondays = dates.filter(date => date.day === 'Monday' && date.label === 'blue');
let allmondays = mondays.length;
let allbluemondays = bluemondays.length;
let out = {
    dates: dates,
    dates: dates.map(date => {return {date:date.date, label:date.label}}),
    allmondays: mondays.length, 
    mondays: mondays.map(monday => {return {date:monday.date, label:monday.label}}),
    allbluemondays: bluemondays.length,
    bluemondays: bluemondays.map(monday => {return {date:monday.date, label:monday.label}}),
};
console.log(out)
/*
writeFile('fulldataset.json', JSON.stringify(out), err => {
    if (err) throw err;
    console.log('Stored in fulldataset.json');
});
writeFile('dataset.json', JSON.stringify(dates.map(date => {return {date:date.date, label:date.label}})), err => {
    if (err) throw err;
    console.log('Stored in dataset.json');
});
writeFile('result.json', JSON.stringify({mondays: allmondays,bluemondays: allbluemondays}), err => {
    if (err) throw err;
    console.log('Stored in mondays.json');
});
*/