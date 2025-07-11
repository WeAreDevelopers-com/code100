# Berlin 2025 CODE100

## Pseudo Code Questions (5)

### 1. Given the function, which input will return true?

```
Function isNumberValid(num)
    While num > 1
        If num mod 3 ≠ 0 then
            Return false
        End If
        num = num / 3
    End While
    Return num == 1
End Function
```

- 6
- 18
- 28
- 243

**Answer**: 4 - 243 is correct, as the function checks if the input is a power of 3. 243 is 3x3x3x3x3.

**Codepen:** [https://codepen.io/Daniel-Cranney/pen/ZYYeOQe](https://codepen.io/Daniel-Cranney/pen/ZYYeOQe)

### 2. What will this function return when the input is [3, 1, 4, 1, 5]?

```
Function countNums(nums)
    count = 0
    For each n in nums
        If n == 1 then
            count = count + 1
        End If
    End For
    Return count
End Function
```

- 1
- 2
- 3
- 4

**Answer**: 2 - 2 is correct, as the function only counts 1's.

**Codepen:** [https://codepen.io/Daniel-Cranney/pen/NPPpRxv](https://codepen.io/Daniel-Cranney/pen/NPPpRxv)

### 3. Given the function, which string will return true?

```
Function checkString(str)
    Set seen to empty set
    For each char in str
        If char in seen then
            Return true
        Else
            Add char to seen
        End If
    End For
    Return false
End Function
```

- computer
- mouse
- notebook
- table

**Answer**: 3 - Notebook will return true, as the function checks for duplicates in the string.

**Codepen:** [https://codepen.io/Daniel-Cranney/pen/WbbpGZM](https://codepen.io/Daniel-Cranney/pen/WbbpGZM)

### 4. What input will return 'HELLO'?

```
Function decodeLetters(nums)
    alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    output = ""
    For each n in nums
        index = floor(n / 2)
        output = output + alphabet[index - 1]
    End For
    Return output
End Function
```

- [8, 5, 12, 12, 15]
- [18, 12, 26, 26, 32]
- [14, 10, 20, 20, 28]
- [16, 10, 24, 24, 30]

**Answer**: 4 - [16, 10, 24, 24, 30] will return "HELLO", as each of the numbers/2 and minus 1 will return [7, 4, 11, 11, 14] (the position for each in the alphabet when zero-indexed)

**Codepen:** [https://codepen.io/Daniel-Cranney/pen/XJJMMyL](https://codepen.io/Daniel-Cranney/pen/XJJMMyL)

### 5. What will this function return when given [5, 8, 10]?

```
Function addNums(nums)
    total = 0
    For each n in nums
        If n mod 2 == 0 then
            total = total + n
        End If
    End For
    Return total
End Function
```

- 5
- 8
- 18
- 0

**Answer**: 3 - The function will return the sum of even numbers, so 10 + 8 = 18, and 5 is ignored.

**Codepen:** [https://codepen.io/Daniel-Cranney/pen/NPPpgNP](https://codepen.io/Daniel-Cranney/pen/NPPpgNP)

## Pair programming round

### X-Men united

Your challenge is to turn this array of numbers:

```javascript
[3, 12, 16, 40,36, 66, 65]
```

Into the X-Men logo:

```
⚫️⚫️⚫️⚫️⚫️🔴🔴🔴🔴⚫️⚫️⚫️⚫️⚫️
⚫️⚫️⚫️🔴🔴⚫️⚫️⚫️⚫️🔴🔴⚫️⚫️⚫️
⚫️⚫️🔴⚫️⚫️⚫️⚫️⚫️⚫️⚫️⚫️🔴⚫️⚫️
⚫️🔴⚫️🔴⚫️⚫️⚫️⚫️⚫️⚫️🔴⚫️🔴⚫️
⚫️🔴⚫️⚫️🔴⚫️⚫️⚫️⚫️🔴⚫️⚫️🔴⚫️
🔴⚫️⚫️⚫️⚫️🔴⚫️⚫️🔴⚫️⚫️⚫️⚫️🔴
🔴⚫️⚫️⚫️⚫️⚫️🔴🔴⚫️⚫️⚫️⚫️⚫️🔴
🔴⚫️⚫️⚫️⚫️⚫️🔴🔴⚫️⚫️⚫️⚫️⚫️🔴
🔴⚫️⚫️⚫️⚫️🔴⚫️⚫️🔴⚫️⚫️⚫️⚫️🔴
⚫️🔴⚫️⚫️🔴⚫️⚫️⚫️⚫️🔴⚫️⚫️🔴⚫️
⚫️🔴⚫️🔴⚫️⚫️⚫️⚫️⚫️⚫️🔴⚫️🔴⚫️
⚫️⚫️🔴⚫️⚫️⚫️⚫️⚫️⚫️⚫️⚫️🔴⚫️⚫️
⚫️⚫️⚫️🔴🔴⚫️⚫️⚫️⚫️🔴🔴⚫️⚫️⚫️
⚫️⚫️⚫️⚫️⚫️🔴🔴🔴🔴⚫️⚫️⚫️⚫️⚫️
```

Some hints:

- Think in zeroes and ones 
- 8 is a nice number of characters to work with
- Mirroring is fun

Possible solution:

```javascript
import { readFileSync, writeFile } from 'fs';
let pixels = JSON.parse(readFileSync('xmen.json', 'utf8'));

pixels = pixels.map((row) => {
    return row.toString(2).padStart(7, '0');
})

pixels.map((row, i) => {
    pixels[i] = pixels[i] + pixels[i].split('').
    reverse().join('');
});

pixels = pixels.
            concat([...pixels].reverse()).
            join('\n').
            replaceAll('0', '⚫️').
            replaceAll('1', '🔴');
writeFile('xmen.txt', pixels, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File has been saved!');
});
console.log(pixels);
```

### Tie Breaker Pair Round

What does the page visibility API do?

- Return the area of the document that is visible in the browser
- Return how many elements are in the DOM but not active
- Detect if a tab is the active one or not 
- Return all the elements with “visibility: hidden”

**Answer** 3 

## Quiz round Questions (7)

### 1. What's next in this sequence?

```
1,10,11,100,101
```

* 1010
* 111
* 110 
* 1000

**Answer**: 3 - 110 is correct, this is counting in binary

### 2. How is the text in this HTML example aligned?

```html
<p align="center" 
   style="text-align:right;display:flex;justify-content=center">
   Text
</p>
```

1. Centered
1. Right 
1. Left
1. 25% of the screen

**Answer**: 3 - Left: align is overuled by text-align and flex overules left-align, but there is a typo a "=center" (should be ":center")

### 3. What does CSRF stand for?

1. Cascading Style React Foundation
1. Complete Security Review Fatigue
1. Cross-Site Requirement Files
1. Cross-Site Request Forgery

**Answer**: 4 -  Cross-Site Request Forgery

### 4. Which one of the following is not a native CSS function?

1. calc()
1. cross-fade()
1. random() 
1. tan()

**Answer**: 3 - random() is not a function in CSS - [cross-fade()](https://developer.mozilla.org/en-US/docs/Web/CSS/cross-fade) is new-ish but does exist.

### 5. How many of the following are W3C standards/proposals?

1. SVG *
1. JSX
1. VML
1. VoiceXML *
1. EPUB *

**Answer** 3 - VoiceXML, EPUB and SVG

### 6. Which of the following is not a security acronym?

1. Cross Site Scripting
1. SQLite spoofing
1. Man-in-the-Middle Attack
1. SQL injection
1. Slopsquatting

**Answer** 2 - there is no SQLite spoofing

### 7. What is not an accessibility requirement for online products?

1. Images must have alternative text
1. Animations must be possible to control
1. Videos need captions
1. Nothing should flash more than three times in a second.
1. Content be 400% zoomable without losing information
1. Links must be only referenced once
1. Text have enough contrast to be readable

**Answer** 6 - Links must have unique names, but can be referenced several rimes

## Final code challenge 

### Cracking the Code

This challenge is about decrypting a message. You  get a encrypted message:

```
f14h2f27o2y11 u42s12f14u14a36 u42j6w27a2 l38g12y5 j5h23 
q14r2b27n2w11 p42w12l14q14x36 m35r2t31 d38f12h5 
q40i12r13c14 m14e2d27x2m11 n42p12c14k14q36 h11j5t14 
l36i11v12w5m14n40 j36a14n40 b40f2d24g2x11a31 h38q12c5
```

And you get a key sentence to decrypt the message:

```
the quick brown fox jumps over the lazy dog
```

Here are some examples of encrypted words using this method: 

* `test` could be `h0n2i24q0`
* `code` could be `q7i12s40d2`
* `box` could be `d10l12x18`
* `we are developers` could be `o13l2 k36v11o2 e40t2q27t2n35m12k23r2n11p24`

Some hints: 

* Words encrypted this way only contain the letters a to z
* The key sentence is known to contain all letters of the alphabet
* Letters in the encryption don't actually do much

What's the message?

Possible solution:

```javascript
import { readFileSync } from 'fs';
let data = readFileSync('challenge.json', 'utf8');
let message = JSON.parse(data).message;
let key = JSON.parse(data).key;

const decode = (message, key) => {
    let words = message.split(' ');
    let decoded = [];
    words.forEach(word => {
        word = word.split(/[a-z]/).map((char) => {
            return char ? key[char] : '';
        });
        decoded.push(word.join(''));
    });
    return decoded.join(' ');
};

console.log(decode(message, key));
```

### Tie Breaker Final Round

Which one returns true?

```javascript
function isWeAreDevelopers(str) {
    let WeAreDevelopers = new RegExp('\/\/\> 20[0-9]{2}');
    return WeAreDevelopers.test(str);
}
```

- isWeAreDevelopers( '\/\/\> 1999' )
- isWeAreDevelopers( '//> 2023' )
- isWeAreDevelopers( '\\> 2024' )
- isWeAreDevelopers( '> 2024' )

**Answer**: The second one is the only true one. 

## Audience Rounds

### Audience Round 1

Given the following HTML:

```html
<div id="test2">
    <span id="1_price"></span>
</div>
```

How many of the following do return an error?

- window.test2
- window.1_price
- document.querySelector('#1_price')
- document.getElementById('1_price')
- window['1_price']

**Answer**: 2 - the first, the fourth and the fifth work. CSS allows for IDs to start with a number, but JS does not allow variables to be named like that, so the automatic conversion from ID to global fails. 

### Audience Round 2

What is AGI?

- Augmented Graphics Interface
- Artificially Generated Intelligence
- A Generalist Indian
- Artificial General Intelligence

**Answer**: Option 4 

### Audience Round 3

What is next in the sequence? 

8, 11, 5, 4, 9, 1 … 

- 3
- 10
- 7
- 2
- 6
- 12

**Answer**: 7 - it is the numbers 1 to 12 in alphabetical order
