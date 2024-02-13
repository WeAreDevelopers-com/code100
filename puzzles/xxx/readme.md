# The CODE100 XXX challenge

It's not what you think… On the 29th of January [CODE100 is coming to Amsterdam](https://code100.dev) - you can [get a ticket here to join the party and network](https://ti.to/wearedevelopers/code100-amsterdam) or you can go the whole hog and [apply as a challenger](https://www.wearedevelopers.com/events/code100-challenger) - remember, the winners get to the finals in July and last year's winner went home with 10,000 Euro prize money.

In any case, this time the puzzle is to celebrate Amsterdam and it's flag:

![Flag of Amsterdam, two red bars with a black bar containing three white X](amsterdam.png)

The challenge is to take a collection of 292 games of noughts and crosses (or Tic Tac Toe) and to find out how many were won by the player using the X like shown in this animation:

{% include smallimage.html alt="Animation of 292 games of Tic Tac Toe and the result of how many were won by the player x" src="/puzzles/xxx/xxx-challenge.gif" %}

You can use [this text file of all the games as the source](games.txt). The file consist of played games separated by a blank line. For example:

```
 O │ O │ O 
───┼───┼───
 X │   │   
───┼───┼───
 X │ X │   

 O │ X │ X 
───┼───┼───
 O │ O │ X 
───┼───┼───
 X │ O │ X 

   │ O │ X 
───┼───┼───
 X │ X │ O 
───┼───┼───
 X │   │ O 
```

In this case, the first game was won by O and the second and third by X. The rules are the ones of the game, in order to win, three Xes must be either in horizontal, vertical or diagonal order. 

How many games were won by X? 

Submit your thoughts and solutions [on this Github gist](https://gist.github.com/codepo8/458953213aae249cdcd4b073e522b4cf).

<!-- details -->
<!-- summary -->
## Solution explanation
<!-- endsummary -->

In essence, what we need to do here is write a noughts and crosses/Tic Tac Toe validator. It's a pretty simple game, and if you think about itm it is a 3 x 3 matrix:

```
123
456
789
```

In order to win, you need to have any of the following patterns: 

```
 *** | ... | ...  
 ... | *** | ...  
 ... | ... | *** 

 *.. | .*. | ..* 
 *.. | .*. | ..*  
 *.. | .*. | ..* 

 *.. | ..*
 .*. | .*. 
 ..* | *..
```

Horizontal lines, vertical lines or diagonals. Zero-indexed, we can translate that to the following lookup array:

``` Javascript
let lines = [
    [0,1,2],[3,4,5],[6,7,8], /* horizontal */
    [0,3,6],[1,4,7],[2,5,8], /* vertical */
    [0,4,8],[6,4,2]          /* diagonal */
];
```
Now, the issue we have left is that the games in the file are not a 3 x 3 matrix, but also have all the lines in there. So we need to either get rid of those, or change the numbers in the lookup table accordingly. 

## Solution one: find the locations of X or O and change lookup

One way is to change the numbers and instead of counting by hand we can use this:

```Javascript
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
```

This results in:

```Javascript
[
   1,  5,  9, 
   25, 29, 33, 
   49, 53, 57
]
```
## Solution 2: remove all characters that aren't needed

``` Javascript
// convert display to 3x3 array
let game = `
 X │ O │ O 
───┼───┼───
 O │ X │ X 
───┼───┼───
 X │ X │ O `;
let g = game.
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
```

Regardless of which solution, the main way to find out which games were won by `X` is to compare the game with the winning pattern array. 

```Javascript
let lines = [
    [0,1,2],[3,4,5],[6,7,8], 
    [0,3,6],[1,4,7],[2,5,8], 
    [0,4,8],[6,4,2]          
];
let game = [
    ' ', 'O', 'O',
    'O', 'O', 'X',
    'X', 'X', 'X'
]
let winner = 0;
lines.forEach(line => {

    if (game[line[0]] !== ' ' && 
        game[line[0]] === game[line[1]] && 
        game[line[1]] === game[line[2]]){
        winner = game[line[0]];
    }
});
console.log(winner);
```

All that is left is to read the file, split it at the double linebreak into games and analyse each game if it was won by X or not. 

You can check the [solution using the number array](solution.js) and the [solution that replaces all characters](solution2.js) to see this in action. 

Would you approach this differently? I liked [Gabriele Petrioli](http://petrioli.me)'s [solution](https://stackblitz.com/@gpetrioli)

<!-- enddetails -->
