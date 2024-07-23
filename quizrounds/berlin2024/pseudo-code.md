---
title: Berlin 2024 CODE100 Pseudo Code Quiz Round
layout: challenge
---

# Berlin 2024 CODE100 Quiz and Knowledge rounds

## Pseudo Code Quiz Round

These rounds are run on Slido and challengers need to pick an answer on their phones. This means both understanding the question and speed are of the essence.

### Question 1

This function runs for each item in an array, [4, 6, 8, 7]. Which number will return true?

```lisp
Function OPTIMUS(num)
    For each number i from 2 to sqrt(num)
        If num is divisible by i then
            Return false
        End If
    End For
    Return true
End Function
```

Question options

* 4
* 6
* 8
* 7 (correct answer)

This function will iterate over numbers in an array, and check if the number is a prime number. In this example, 7 is a prime number so will return true. See [the prime number CodePen](https://codepen.io/Daniel-Cranney/pen/WNBBNmE). 

(The optimus name was a giveaway…)

### Question 2

Select the ‘nums’ input that will return ‘HUNDRED’.

```lisp 
Function convertNumbersToWord(nums)
    Set alphabet to "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    Set result to an empty string
    For each num in nums
        If (num is greater than or equal to 1) and 
           (num is less than or equal to 26) then
            Append alphabet[num - 1] to result
        Else
            Return "Invalid number in input"
    End For
    Return result
End Function
```

Question options

* [7, 20, 13, 3, 17, 4, 3]
* [8, 21, 14, 4, 18, 5, 4] (correct)
* [6, 19, 12, 2, 16, 3, 2]
* [9, 22, 15, 5, 19, 6, 5]

Notes: The correct answer is [8, 21, 14, 4, 18, 5, 4]. `H` is the 8th item in the alphabet string, but there is a `-1` in there… See the [one hundred CodePen](https://codepen.io/Daniel-Cranney/pen/qBGGEbW).

### Question 3

Based on the function below, which pair of strings will return true? 

```lisp
Function checkDatesDistance(date1, date2)
    diffTime = absolute difference in time 
               between date1 and date2    
    diffDays = convert diffTime to days    
    If diffDays equals 100 then
        Return true
    Else
        Return false
    End If
End Function
```

Question options:

* new Date("2024-04-08"), new Date("2024-06-09") (correct)
* new Date("2024-02-01"), new Date("2024-02-02")
* new Date("2024-01-01"), new Date("2024-01-30")
* new Date("2024-02-01"), new Date("2024-12-31")

Notes: The first option is correct as the two dates are 100 days apart. See the [100 days CodePen](https://codepen.io/Daniel-Cranney/pen/qBGGEbW).

### Question 4

If numbers is `[9, 50, 27, 49]`, then which one will be returned by the function?

```lisp
Function findMatchingMultiple(numbers)
    For i from 1 to infinity
        For each number in numbers
            product = i * number
            If product equals 100 then
                Return number
            End If
        End For
    End For
    Return false
End Function
```

Question options:

* 9
* 50 (correct answer)
* 99
* 72

Notes: This counts from 1, and multiplies this number by each item in the array. If the result is 100, it should return the number from the array, ie: 50 (* 2). See [the double codepen](https://codepen.io/Daniel-Cranney/pen/gOJNyra).

### Question 5

Based on the function below, which year will return `6`?

```lisp
Function calculateCenturiesPassed(year)
    Set currentYear to 2024
    diffYears = difference in years between 
                currentYear and year
    centuriesPassed = diffYears / 100 
    centuriesPassed = roundDown(centuriesPassed)
    Return centuriesPassed
End Function

Question options:

* 1824
* 1948
* 1736
* 1366 (correct)

Notes : This function takes an input, year, and calculates how many centuries have passed between year and 2024, and return the number.

