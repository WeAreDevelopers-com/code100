---
title: LIVE days knowledge questions
layout: challenge
---

# LIVE days knowledge and pseudo code rounds

## Webdev Day 18/09/2024


Which of these was invented most recently?
  
  1. XHTML
  2. CSS
  3. JavaScript
  4. HTMX (correct answer)

**Notes:** Carson Gross first released HTMX in 2020.

Which of these is NOT a deprecated HTML tag?

  1. `<big>`
  2. `<multicol>`
  3. `<copyright>` (correct answer)
  4. `<ilayer>`

**Notes:** Copyright is a fictional tag. The others are real. but deprecated.

Which language was the majority of Wordpress built with?

  1. JavaScript
  2. Ruby
  3. PHP  (correct answer)
  4. Go

### Pseudo Code question:

```lisp
Function findImportantLetter(inputString)
    Set letterCount to an empty dictionary
    Set importantLetter to an empty string
    Set maxCount to 0
    For each letter in inputString
        Convert letter to uppercase
        If letter is in "ABCDEFGHIJKLMNOPQRSTUVWXYZ" then
            Increment letterCount[letter] by 1
        End If
    End For
    For each letter in letterCount
        If letterCount[letter] is greater than maxCount then
            Set maxCount to letterCount[letter]
            Set importantLetter to letter
        End If
    End For
    Return importantLetter
End Function
```

If inputString is “WeAreDevelopers”, what will findImportantLetter() return?

* E (correct answer)
* A
* D
* V

[See code in JS](https://codepen.io/Daniel-Cranney/pen/MWMRYQJ) - it's just a fancy way to count the most used character in the string.
