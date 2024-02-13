import { readFileSync, write, writeFile } from 'fs';
const games = readFileSync('games.txt', 'utf8');
let gamesarr = games.split('\n\n');
/* 
let game = ` X │ X │ X 
───┼───┼───
 X │ X │ X 
───┼───┼───
 X │ X │ X `;
let xlocations = []
game.split('').forEach((e, i) => {
    if (e === 'X') {
        xlocations.push(i);
    }
});
console.log(xlocations);
*/
let checkWinner = b => {
    b = b.split('');
    let winner = 0;
    let lines = [
        [1,5,9],[25,29,33],[49,53,57],
        [1,25,49],[5,29,53],[9,33,57],
        [1,29,57],[49,29,9]
    ];
    lines.forEach(line => {
        if (b[line[0]] !== ' ' && 
            b[line[0]] === b[line[1]] && 
            b[line[1]] === b[line[2]]){
            winner = b[line[0]];
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