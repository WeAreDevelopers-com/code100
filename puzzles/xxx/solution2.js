import { readFileSync, write, writeFile } from 'fs';
const games = readFileSync('games.txt', 'utf8');
let gamesarr = games.split('\n\n');
/*
123 | *** | ... | ... | *.. | .*. | ..* | *.. | ..*
456 | ... | *** | ... | *.. | .*. | ..* | .*. | .*. 
789 | ... | ... | *** | *.. | .*. | ..* | ..* | *..
*/
let lines = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[6,4,2]
];

let checkWinner = b => {
    // convert display to 3x3 array
    /*
         X │ O │ O 
        ───┼───┼───
         O │ X │ X 
        ───┼───┼───
         X │ X │ O 
    */
    let g = b.
        replaceAll(/[│─┼\n]/g, '').
        //  X  O  O  O  X  X  X  X  O 
        replaceAll(/ (.) /g, '$1').
        // XOOOXXXXO
        split('');
        /*
        [
            'X', 'O', 'O',
            'O', 'X', 'X',
            'X', 'X', 'X'
        ]
        */
    let winner = 0;
    lines.forEach(line => {
        if (g[line[0]] !== ' ' && 
            g[line[0]] === g[line[1]] && 
            g[line[1]] === g[line[2]]){
            winner = g[line[0]];
        }
    });
    return winner;
}
let wins = 0;
gamesarr.forEach(game => {
    if (checkWinner(game) === 'X'){
        wins++;
    }
});
console.log(wins);