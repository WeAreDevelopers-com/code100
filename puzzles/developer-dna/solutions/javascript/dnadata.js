const dnadata = {
    "cols": 30,
    "sine": [
     '-0.93', '-0.60', '-0.33', '-0.13', '0.00',
     '0.00', '-0.13', '-0.33', '-0.60', '-0.93'
    ],
    "parts": ["💻", "💖"]
}

let {cols, sine, sin, parts} = dnadata;
let mid = dnadata.cols / 2;

[[0,1],[1,0]].forEach((i) => {
    dnadata.sine.forEach((value) => {
        const line = Array(dnadata.cols).fill(" ");
        let sine = Math.round(mid/2 * value);
        let left = Math.floor(mid/2 - sine);
        let right = Math.floor(mid/2 + sine) + mid;
        line[left] = parts[i[0]];
        line[right] = parts[i[1]];
        console.log(line.join(''));
    });
});