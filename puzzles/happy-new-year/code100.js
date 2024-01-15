
let data = [
    0,0,0,
    121,231,143,
    195,118,216,
    195,54,223,
    195,182,216,
    121,231,143,
    0,0,0,
    3,15,30,
    97,155,183,
    49,153,179,
    1,157,187
    ,3,207,30,
    0,0,0
];



let out = '';
data = data.map(
    d => d.toString(2).padStart(8, '0')
);
data.forEach((i, k) => out += (k % 3 === 2) ? i + "\n" : i)
out = out.replaceAll('0', '🍾').replaceAll('1', '😄');
console.log(out);





let array = [1,2,3,4,5,6,7,8,9,10,11,12];

for (let i = 0; i < array.length; i += 3) {
    let block = array.slice(i, i + 3).map(
        i => i < 10 ? '0' + i : i
    ).join('-')
    console.log(block);
}

array.forEach((i, k) => {
    if (k % 3 === 0) {
        let block = array.slice(k, k + 3).map(
            k => k < 10 ? '0' + k : k
        ).join('-')
        console.log(block);
    }
})


// for (let i = 0; i < data.length; i += 3) {
//     out += data[i].toString(2).padStart(8, '0');
//     out += data[i+1].toString(2).padStart(8, '0');
//     out += data[i+2].toString(2).padStart(8, '0');
//     out +="\n";
// }
// out = out.replaceAll('0', '🍾');
// out = out.replaceAll('1', '😄');
// console.log(out);
