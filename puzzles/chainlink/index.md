---
title: CODE100 - the puzzles - Chainlink
layout: challenge
--- 

# Chainlink challenge

[![chainlink logo](chainlink-logo.jpg)](https://chain.link)

Given a string `s`, where `*` represents a star…

Remove the star along with its closest non-star character to its left in a single operation.

The task is to perform this operation until all stars have been removed and to return the string that remains.

## Assumptions

* Input `s` is always a string and the characters are lowercase only
* There will be no consecutive stars (eg “ab***f”) - every star will be followed by a character or be the end of the string.
* Assume `s` has a length larger than 0 and smaller than 1000

## Examples (test cases!)

```
chainlink → chainlink
chaa*inlinn*k → chainlink
abc*de*f  → abdf
a*b*c*d →  d
abcd → abcd
abc*de*  → abd
```

You can use [this JSON object](tests.json) to test your function. 

Submit your solutions at [this gist](https://gist.github.com/codepo8/cdc70adf1740540d07ff9b24783ae1dd) - we'll pick the one we like the best and get you something nice. 

