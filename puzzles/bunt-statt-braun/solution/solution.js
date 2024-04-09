import { readFileSync, write, writeFile } from 'fs';
let html = readFileSync('../example.html', 'utf8');
let browndata = JSON.parse(readFileSync('../browndata.json', 'utf8'));
let heartcolours = html.match(/color:(.*?);/gm).map(
    heart => heart.replace(/color\:|;|rgb\(|\)|#/g,'')
); 
let amount = 0;
let browns = {};
heartcolours.forEach(heart => {
    browndata.forEach(brown => {
        Object.keys(brown).forEach(key => {
            if (heart === brown[key]) {
                amount++;
                browns[brown.name] = (browns[brown.name] || 0) + 1;
            }
        });
    });
});
let out = {amount: amount, distribution: browns};
console.log(JSON.stringify(out));
/*
// In - browser solution => 

let heartcolours = [...document.querySelectorAll('i')].map(
    i => i.style.color.replace(/rgb\(|\)|#/g,'')
);
let amount = 0;
let browns = {};
heartcolours.forEach(heart => {
    browndata.forEach(brown => {
        Object.keys(brown).forEach(key => {
            let col = brown[key];
            if (key === 'name') {
                col = col.toLowerCase();
            }
            if (heart === col) {
                    amount++;
                    browns[brown.name] = (browns[brown.name] || 0) + 1;
            }
        });
    });
});
let out = {amount: amount, distribution: browns};
console.log(JSON.stringify(out));
*/

