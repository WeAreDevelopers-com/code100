---
title: Manchester CODE100 Pseudo Code Quiz Round
layout: challenge
---

# Manchester CODE100 Quiz and Knowledge rounds

## Pseudo Code Quiz Round

These rounds are run on Slido and challengers need to pick an answer on their phones. This means both understanding the question and speed are of the essence.

### Question 1

You are given the following pseudo code:

```
Function MYSTERY takes inputs num and x:
  Calculate 10 to the power of x and assign it to n
  Multiply num by n
  Round the result to the nearest integer
  Divide the result by n
  Return the result
End Function
```

What does this function do?

* Turns num into the nearest integer close to x
* Rounds num to x decimal places (correct answer)
* Rounds num to 10 digits in total
* Converts numbers to decimal from hex or binary

### Question 2

You are given the following pseudo code:

```
Function CALCULATE_REMAINDERS takes inputs x and y:
    Initialize originalX as x
    Create an empty list called remainders

    While x is less than or equal to twice the value of originalX:
        Calculate the remainder of y divided by x
        Add the remainder to the list remainders
        Increment x by 1
        Increment y by 1

    Calculate the sum of remainders

    Return the sum of remainders
End Function
```

If X were 5, and Y were 17, what would this function return?

* 6
* 12
* 16 (correct answer)
* 2

See [codepen](https://codepen.io/Dan-Cranney/pen/rNbvrNV). 

### Question 3

You are given the following pseudo code:

```
Function CALCULATE_TOTAL_INVESTMENT takes input x:
    Set earnings to 0

    For each month from 1 to x:
        Add the value of month to earnings

    Calculate totalInvestmentRounded as the rounded-up value of earnings divided by 10

    Return totalInvestmentRounded
End Function
```

If x were 6, what would this function return?

* 21
* 2.1
* 3 (correct answer)
* 23

See [codepen](https://codepen.io/Dan-Cranney/pen/vYMrrWG). 

### Question 4

You are given the following pseudo code:

```
Function CONVERT takes inputs output and value:
    Initialize result as an empty string

    If output is equal to 'A':
        Set result as (value - 32) * 5 / 9

    If output is equal to 'B':
        Set result as value * 9 / 5 + 32

    Return result
End Function
```

* Converts from one currency to another
* Converts from pounds and ounces to grams
* Converts an arbitrary number to a string
* Converts a value from celsius to fahrenheit (correct answer)

See [codepen](https://codepen.io/Dan-Cranney/pen/BaEPMzK).


### Question 5

You are given the following pseudo code:

```
Function CRACK_THE_CODE takes input:
    Initialize result as an empty string

    For each character i in input:
        Get the Unicode code point of i
        Decrement the code point by i
        Convert the modified code point to its corresponding character
        Append the resulting character to result
    
    Return result
End Function
```

Which input would correctly return “Manchester”?

* Mnediftufs
* Laoemlz{n{
* Ftfybrbdry
* Mbpfljy{m{ (correct answer)

See [codepen](https://codepen.io/Dan-Cranney/pen/XWQBQbj). 

