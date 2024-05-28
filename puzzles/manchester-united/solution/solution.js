import { readFileSync, writeFileSync } from 'fs';
const URLS = JSON.parse(readFileSync('../dataset.json', 'utf8'));

// start a new object to store all results
let united = {};

// once loadded, add the result to the united object
const addto = (key, value) => {
    united[key] = value;
    // if all 3 results are in, write the file
    if(Object.keys(united).length === 3){
        console.log(united);
        writeFileSync('result.json', JSON.stringify(united));
    }
}

// loop through all URLs
Object.keys(URLS).forEach(key => {
    // load the URL
    fetch(URLS[key].URL).then(response => {
        // get the type 
        let type = response.headers.get('content-type').split(';')[0];
        // if it's JSON, parse it and 
        // add the length to the united object
        if (type === 'application/json') {
            response.json().then(data => {
                addto('movies',data.length);
            });
        }
        // if it's CSV, split it by line and 
        // add the length to the united object
        if (type === 'text/csv') {
            response.text().then(data => {
                addto('acting',data.split('\n').length - 1);
            })
        }
        // if it's HTML, split it by </li>, 
        // grab the second part of the split
        // and filter out the empty strings
        // this skips the commented out <li> tags like 
        /*
                <li class="ak2f2j">Bipolar Sunshine</li>
                <!-- <li class="wrap"></li> -->
                <li class="dfa54k">Simply Red</li>
        */
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
