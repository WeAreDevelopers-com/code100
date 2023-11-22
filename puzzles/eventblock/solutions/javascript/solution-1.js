// get the JSON data from the URL
fetch('https://wearedevelopers-com.github.io/code100/puzzles/eventblock/events.json').then((response) => {
    return response.json();
}).then((data) => {
    draweventbox(data);
}).catch((err) => {
    console.log(err);
});

// pad both sides of a string with a space if it exists
const padBoth = (prop) => {
    return prop ? ` ${prop} ` : '';
}
// draw the box 
const draweventbox = (data) => {
    // grab data from dataset
    let {columns, padChar, events} = data;
    columns = 64;
    // draw upper bar
    console.log('\n' + padChar.repeat(columns));
    events.forEach(ev => {
        // pad data 
        let event = padBoth(ev.name);
        let location = padBoth(ev.location);
        let date = padBoth(ev.date);
        // calculate padding for centered locations
        let pad = (columns - location.length) / 2 ;
        // round and floor them to avoid half characters
        let padLeft = padChar.repeat(Math.floor(pad) - (event.length + 1));
        let padRight = padChar.repeat(Math.round(pad) - (date.length + 1));
        // write line 
        console.log(padChar + event + padLeft + location + padRight + date + padChar);
    })
    // draw downer bar
    console.log(padChar.repeat(columns)+'\n');
}
