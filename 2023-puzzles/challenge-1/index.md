---
title: CODE100 - the puzzles
layout: challenge
---

## Add numbers from string
The puzzle is a string containing any amount of characters which can be either a letter or a digit. If there is a number with more than 1 digit, this should be counted as a whole number - not as separate digits.

### Example puzzle

```
world20congresss23
```

### Example solution

```
43  // not 7
```

**The solution you should submit is the sum of these numbers.**

### Actual data used in the competition

- [Coding puzzle (input)](puzzle.json)
- [Result (output)](result.json)

<details>

<summary>Explanation</summary>

The trick here is go through the string character by character and see what is a number or not. 
When you encounter a number, add them up until you get to the next non-number character. 
Once you're at the end, sum up all the numbers.

</details>

<details>

<summary>Code solutions</summary>

We had quite a few submissions here, and the shortest one uses Regular Expressions for this.

For example, [this JavaScript solution](solutions/javascript/solution-2.js) is more or less a one-liner:

```javascript
let solution = 0;
puzzle.split(/\D/).forEach(
    v => { solution += +v} 
);
```

* You define solution as 0
* you split the puzzle string at any numeric string
* you loop over the results and add the integer value to solution (`+v` is shorter for `parseInt(v,10)`)

Other submissions:

* [The same approach in PHP](solutions/php/solution-1.php)
* [A JavaScript solution by Phil Nash using match()](solutions/javascript/philnash.js)
* [A looping JavaScript solution not using RegEx](solutions/javascript/solution-3.js)
* [A JavaScript solution using reduce()](solutions/javascript/solution-1.js)

</details>