// get the JSON data from the URL
fetch('https://wearedevelopers-com.github.io/code100/puzzles/packedsnowflake/data.json').then((response) => {
    return response.json();
}).then((data) => {
    drawASCII(data);
}).catch((err) => {
    console.log(err);
});

let str = '';
const drawASCII = data => {
    data.forEach(code => {
        if (typeof code === 'string') {
            if (code === '❄️') {
                str += '\n';
            } else {
                let chunks = code.split('x');
                str += String.fromCharCode(chunks[1]).repeat(+chunks[0]);
            }
        } else {
            str += String.fromCharCode(code);
        }
    })
    console.log(str);
}