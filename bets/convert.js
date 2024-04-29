import { readFileSync, write, writeFile } from 'fs';
let csv = readFileSync('./challengers.csv', 'utf8');
let lines = csv.split('\n'); 
console.log(lines);
lines.forEach(element => {
    let parts = element.split(';');
    let name = parts[0];
    console.log(name);    
});