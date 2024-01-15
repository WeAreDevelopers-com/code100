out = `
   .      .
   _\\/  \\/_
    _\\/\\/_
_\\_\\_\\/\\/_/_/_
 / /_/\\/\\_\\ \\
    _/\\/\\_
    /\\  /\\
   '      '
`
console.log(out);
let codes = [];
out.split('').forEach((char) => {
 codes.push(char.charCodeAt(0) === 10 ? '❄️' : char.charCodeAt(0))
})
let str = '';
let packed = [];
let amount = 0;
codes.forEach((code,i) => {
    if(codes[i+1] === codes[i]){
        amount++;
    } else {
        packed.push(amount > 0 ? (amount+1)+'x'+code : code)
        amount = 0;
    }
})
console.log(packed.join(','))
console.log(codes.length);
console.log(packed.length);

packed.forEach(code => {
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