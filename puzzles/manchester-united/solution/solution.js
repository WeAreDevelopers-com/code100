import { readFileSync } from 'fs';
const URLS = JSON.parse(readFileSync('../dataset.json', 'utf8'));
let united = {};
const addto = (key, value) => {
    united[key] = value;
    if(Object.keys(united).length === 3){
        console.log(united);
    }
}

Object.keys(URLS).forEach(key => {
    fetch(URLS[key].URL).then(response => {
        let type = response.headers.get('content-type').split(';')[0];
        if (type === 'application/json') {
            response.json().then(data => {
                addto('movies',data.length);
            });
        }
        if (type === 'text/csv') {
            response.text().then(data => {
                addto('acting',data.split('\n').length - 1);
            })
        }
        if (type === 'text/html') {
            response.text().then(data => {
                let band = data.split('</li>').map(
                    b => b.split('">')[1]
                ).filter(
                    b => typeof b === "string" && b.length > 0
                )
                addto('bands',band.length);
            });
        } 
    })
});