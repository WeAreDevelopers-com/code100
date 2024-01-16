---
title: CODE100 - the puzzles 
layout: challenge
---

# CODE100 Happy new year! Puzzle

Welcome to the first puzzle of 2024! To celebrate, we want you to take [this dataset](dataset.json): 

```JSON
[
    0,0,0,121,231,143,195,118,216,
    195,54,223,195,182,216,121,231,
    143,0,0,0,3,15,30,97,155,183,
    49,153,179,1,157,187,3,207,30,
    0,0,0
]
```
And create the following [emoji "happy new year" message](message.txt) from it:

```
🍾🍾🍾🍾🍾🍾🍾🍾🍾🍾🍾🍾🍾🍾🍾🍾🍾🍾🍾🍾🍾🍾🍾🍾
🍾😄😄😄😄🍾🍾😄😄😄😄🍾🍾😄😄😄😄🍾🍾🍾😄😄😄😄
😄😄🍾🍾🍾🍾😄😄🍾😄😄😄🍾😄😄🍾😄😄🍾😄😄🍾🍾🍾
😄😄🍾🍾🍾🍾😄😄🍾🍾😄😄🍾😄😄🍾😄😄🍾😄😄😄😄😄
😄😄🍾🍾🍾🍾😄😄😄🍾😄😄🍾😄😄🍾😄😄🍾😄😄🍾🍾🍾
🍾😄😄😄😄🍾🍾😄😄😄😄🍾🍾😄😄😄😄🍾🍾🍾😄😄😄😄
🍾🍾🍾🍾🍾🍾🍾🍾🍾🍾🍾🍾🍾🍾🍾🍾🍾🍾🍾🍾🍾🍾🍾🍾
🍾🍾🍾🍾🍾🍾😄😄🍾🍾🍾🍾😄😄😄😄🍾🍾🍾😄😄😄😄🍾
🍾😄😄🍾🍾🍾🍾😄😄🍾🍾😄😄🍾😄😄😄🍾😄😄🍾😄😄😄
🍾🍾😄😄🍾🍾🍾😄😄🍾🍾😄😄🍾🍾😄😄🍾😄😄🍾🍾😄😄
🍾🍾🍾🍾🍾🍾🍾😄😄🍾🍾😄😄😄🍾😄😄🍾😄😄😄🍾😄😄
🍾🍾🍾🍾🍾🍾😄😄😄😄🍾🍾😄😄😄😄🍾🍾🍾😄😄😄😄🍾
🍾🍾🍾🍾🍾🍾🍾🍾🍾🍾🍾🍾🍾🍾🍾🍾🍾🍾🍾🍾🍾🍾🍾🍾
```

Cheers and good luck!

<!-- details -->
<!-- summary -->
## Solution
<!-- endsummary -->

Well, the trick here is to think binary. If you take the message and replace the bottles with 0:

```
000000000000000000000000
0😄😄😄😄00😄😄😄😄00😄😄😄😄000😄😄😄😄
😄😄0000😄😄0😄😄😄0😄😄0😄😄0😄😄000
😄😄0000😄😄00😄😄0😄😄0😄😄0😄😄😄😄😄
😄😄0000😄😄😄0😄😄0😄😄0😄😄0😄😄000
0😄😄😄😄00😄😄😄😄00😄😄😄😄000😄😄😄😄
000000000000000000000000
000000😄😄0000😄😄😄😄000😄😄😄😄0
0😄😄0000😄😄00😄😄0😄😄😄0😄😄0😄😄😄
00😄😄000😄😄00😄😄00😄😄0😄😄00😄😄
0000000😄😄00😄😄😄0😄😄0😄😄😄0😄😄
000000😄😄😄😄00😄😄😄😄000😄😄😄😄0
000000000000000000000000
```

And the smileys with 1, you get a block of numbers: 

```
000000000000000000000000
011110011110011110001111
110000110111011011011000
110000110011011011011111
110000111011011011011000
011110011110011110001111
000000000000000000000000
000000110000111100011110
011000011001101110110111
001100011001100110110011
000000011001110110111011
000000111100111100011110
000000000000000000000000
```

Each line is 24 characters long, which means you can split them into three eight character binary strings:

```
00000000 00000000 00000000
01111001 11100111 10001111
11000011 01110110 11011000
11000011 00110110 11011111
11000011 10110110 11011000
01111001 11100111 10001111
00000000 00000000 00000000
00000011 00001111 00011110
01100001 10011011 10110111
00110001 10011001 10110011
00000001 10011101 10111011
00000011 11001111 00011110
00000000 00000000 00000000
```

The dataset is decimal.

```json
[
    0,0,0,121,231,143,195,118,216,
    195,54,223,195,182,216,121,231,
    143,0,0,0,3,15,30,97,155,183,
    49,153,179,1,157,187,3,207,30,
    0,0,0
]
```

What we need to do is convert each number to binary, ensure that it is 8 characters and print them out. For example, the fourth entry is 121. In JavaScript, we can use: 

```javascript
let x = 121;
x.toString(2);
// 1111001 
```

This is kind of what we need, but it isn't 8 characters yet. So we need to pad it left with zeroes:

```javascript
let x = 121;
x.toString(2).padLeft(8,'0');
// 01111001 
```

We then replace the ones and zeroes with the emoji:

```javascript
let x = 121;
x.toString(2).padStart(8,'0').
    replaceAll('1','😀').
    replaceAll('0','🍾');
// 🍾😀😀😀😀🍾🍾😀
```

Doing this for all the numbers gives us the desired result:

```javascript
let data = [
    0,0,0,121,231,143,195,118,216,
    195,54,223,195,182,216,121,231,143,
    0,0,0,3,15,30,97,155,183,49,153,179,
    1,157,187,3,207,30,0,0,0
];
let out = '';
// map each number to its binary, 
// padded with 0
data = data.map(
    d => d.toString(2).padStart(8, '0')
);
// add them all to the string out, 
// with a line break after
// each three items
data.forEach((i, k) => {
    out += (k % 3 === 2) ? i + "\n" : i)
})
// replace numbers with emoji
out = out.replaceAll('0', '🍾').
          replaceAll('1', '😄');
console.log(out);
```

Did you get it? Did you find a better way? 

<!-- enddetails -->