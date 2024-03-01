
# Amsterdam CODE100 Quiz and Knowledge rounds

## Pseudo Code Quizround

These rounds are run on Slido and challengers need to pick an answer on their phones. This means both understanding the question and speed are of the essence.

### Question 1

You are given the following pseudo code:

```lisp   
FUNCTION WHAT(PICS):
    P = 0, L = 0, S = 0, INDEX = 0
    ALLPICS = LENGTH of PICS
    LOOP INDEX FROM 0 to ALLPICS:
        NOW = PICS[INDEX]
        IF NOW["w"] IS equal to NOW["h"]: INCREMENT S by 1
        IF NOW["w"] IS greater than NOW["h"]: INCREMENT L by 1
        IF NOW["w"] IS less than NOW["h"]: INCREMENT P by 1
    PRINT "P:" + P + "L:" + L + "S:" + S
DATA = [
  {h:770,w:84},{w:942,h:38},{h:358,w:77},{h:644,w:7},
  {w:74,h:74},{w:662,h:57},{h:630,w:42},{w:210,h:91}
]
WHAT(DATA)
```

What is the result of the call of WHAT with this data?

* P:7 L:0 S:1
* P:5 L:1 S:2
* P:4 L:3 S:1 (correct answer)
* P:3 L:3 S:2

**Explanation:** This is an array of image data with width and height and the function counts if the images are portrait, landscape or square. The trick to find out fast is to realise that there is only one square one (`{w:74,h:74}`) and then count the landscape ones (wider than high). Originally, I planned to also ask for this in the [cat puzzle challenge](/puzzles/catpics/), so this was a leftover.

### Question 2

You are given the following pseudo code:

```lisp
I = 0
OUTPUT = ""
WHILE I < 400:
IF I DIVIDED BY 40 IS AN INTEGER:
    ADD LINEBREAK TO OUTPUT
IF RANDOM() IS less than 0.5:
    ADD "╱" TO OUTPUT
ELSE:
    ADD "╲" TO OUTPUT
I = I + 1
ENDWHILE
PRINT OUTPUT
```

What does this program do when RANDOM() returns a random number between 0 and 1?

* It adds slashes to special characters
* It generates a JSDOC comment so you can send a pull request
* It prints out a diagonal maze (correct answer)
* It generates ASCII waves

*Explainer:* This is a very old one-liner that used to be done on BASIC on Commodore 64. I [blogged about it in detail](https://christianheilmann.com/2024/01/19/10-print-chr205-5-rnd1goto-10-in-javascript/).

### Question 3

You are given the following pseudo code:

```lisp
FUNCTION CHEESE():
    K = S = I = 0,
    WHILE I < 1000000:
        IF I MOD 2 EQUALS 0:
            S = S + 4/K
        ELSE:
            S = S - 4/K
        K = K + 2
        I = I + 1
    RETURN S
```

What does the function do?

* Fibonacci Sequence
* Easing function
* Create a sine curve
* Calculate an approximation of PI (correct answer)

**Explanation:** originally I had the need for PI in another challenge and didn't want to show it or it's approximated value. This is one way of doing that of many. 
_Egg on my face moment_: the day after CODE100, one of the challengers, Jim de Vries, pinged me on LinkedIn pointing out that as I start with 0 as K this doesn't work as I am dividing by zero in the first iteration. It's pseudo code, so I think my imaginary parser is forgiving in that regard. Well spotted, though!  

### Question 4

You are given the following pseudo code:

```lisp
FUNCTION WHAT(NUMBER):
    LET PARTS = NUMBER.SPLIT_INTO_SINGLE_DIGITS()
    PARTS = PARTS.SORT()
    SUM = 0
    ALLNUMBERS = LENGTH of PARTS
    LOOP I FROM 0 to ALLNUMBERS - 1:
        SUM = SUM + PARTS[I]
    END LOOP
    RETURN SUM === LAST OF PARTS;
END FUNCTION
```

Calling WHAT with the following values: `734`, `1432`, `200030017010`, `396`, `111923` returns what? 

* true, false, false, true, true
* true, false, true, true, false (Correct answer)
* all true
* false, false, true, true, true

**Explanation:** The moderator hated reading this one out and it feels pretty random. What this does is take the largest single digit in a number string and validates if the sum of all the others makes up that number. So, in the case of `734` this means it takes the `7` and checks of `3 + 4` makes up `7`, which it does. 

### Question 5

You are given the following pseudo code:

```lisp
FUNCTION WHAT(X, Y, X1, Y1):
    E  = (X1 - X) * (X1 - X)
    E = E + (Y1 - Y) * (Y1 - Y)
    R = E;
    WHILE (R * R is greater than E):
        R = (R + E / R) / 2;
    RETURN R;
```

What does the function do?

* Return the area of a rectangle between X,Y and X1, Y1
* Calculate the distance between points X,Y and X1, Y1 (correct answer)
* Return the shared area of two of a circles with X,Y and X1, Y1 as their centre
* Return the average number of all four

**Explanation:** another leftover from the [hitting the chimney](/puzzles/hitting-the-chimney/) challenge where we neded that. As there is no `Math.sqrt()` in Pseudo Code, this uses the [Babylonian method](https://www.geeksforgeeks.org/square-root-of-a-perfect-square/). And yes, I did use Copilot to turn the JavaScript solution into pseudo code. 

## Knowledge Questions 

These were pretty straight forward multiple choice questions. Some were submitted by Daniel Cranney, most by me, though. 

1. Which of these was created most recently?

    * Go (GoLang)
    * Flutter (correct answer)
    * JavaScript
    * Swift

1. What is the purpose of the ‘else’ statement in an if-else statement?

    * To handle errors
    * To restart the server
    * To execute a block of code when the first condition isn’t met (correct answer)
    * To update global state

1. What is a tool to sync large amount of files on remote servers and the local machine?

    * fsync
    * rsync (correct answer)
    * nsync
    * fileput

    **Comment:** OK, I see myself out - bye, bye, bye…

1. What is the term for a named block of code that performs a specific task?

    * Lambda
    * In-line function
    * Blueprint
    * Package (correct answer)

    **Comment:** Lambda has no name.

1. Which of these is the correct definition for the term ‘algorithm’?

    * A random sequence of letters
    * A magical formula that writes code by itself
    * A set of instructions or rules to solve a problem or perform a task (correct answer)
    * A machine learning device

1. What does the ‘I’ in API stand for?

    * interface (correct answer)
    * interactive
    * intellectual
    * interview

1. Which of the following is not a web performance acronym?


    * CLS
    * FCP
    * FLD (correct answer)
    * FID

    **Comment:** Cumulative Layout Shift, First Contentful Paint, First Input Delay. FLD was a demo scene effect called [Flexible Line Distance](https://codebase64.org/doku.php?id=base:fld), again on Commmodore 64. 

1. Which of the following browsers is not based on Chromium

    * Samsung Internet
    * Safari (correct answer)
    * Brave
    * Microsoft Edge

1. Which console method doesn’t exist in browsers?

    * console.warn()
    * console.parse() (correct answer)
    * console.table()
    * console.assert()

1. What does the acronym SVG stand for?

    * So Very Graphical
    * Sustainable Velocity Graphics
    * Sizeable Vector Graphics
    * Scalable Vector Graphics

## Audience Shout Out Rounds

### Shoutout Block 1

How many arrays with how many elements does this `console.log()` return?

```javascript
function A() { return [[1,2,3],[4,5,6],[7,8,9]] }
function B() { return [1,2,2,5] }
function C() { return [1,4,4,2,[1,1]] }
console.log( [...new Set( 
    [ B(), C(), A() ].map (
        e => e.flat() 
    ).flat() 
) ] )
```

Answers: 

* Three arrays with 3 elements
* One Array with 9 elements (correct answer)
* Seven arrays with 9 elements
* One array with 19 elements

**Solution:** One array with 9 elements. Each array gets flattened into a single one and the result is turned into a Set, returning only the unique elements. The last `flat()` turns it into one array. It is the classic question of "If you have 1 hay stack and you add two haystacks to it, how many do you get?"

### Shoutout Block 2

What does the following CSS do?

```css
img:not([alt]){
  border: 2px solid firebrick;
}
```

Answers: 

* Nothing, it’s a syntax error
* Pads all German images that have been uploaded lately
* Flags up images without alternative text by adding a border around them
* Adds a red border around all images without an alt attribute (correct answer)

**Solution:** the not() selector checks if an image has an `alt` attribute and if it does not it adds a border around it. You can still provide other ways to give an image alternative text than the `alt` attribute, hence it's not the third option.

### Shoutout Block 3

How many of the following are not valid named CSS colours:

Powderblue, Papayawhip, Honeydew,  Peru, Greysmoke
Blanchedalmond, Pistachio, Chocolate, Snow, Bisque
Gainsboro, Milkshake, Lavender, Peachpuff, Ivory, Ebony

Answers: 

* All are valid
* 4 (right answer)
* 8
* 7

Solution: Greysmoke, Milkshake, Ebony and Pistachio are made up. Amazing if you think about Ivory being a valid one. If you feel like playing a game with named colours, I (made one some time ago](https://codepo8.github.io/css-colour-names/). 


### Shoutout Block 4

What does the following CSS do?

```css
a[href^=http]::after {
  content: " ↗";
}
```

Answers: 

* Syntax error, this doesn’t do anything
* Checks if links are valid and hides those that aren’t
* Adds an arrow to each link using http instead of https as the protocol
* Adds an arrow after each external link in the document (correct answer)

**Solution:** The selector matches links with an `href` attribute that starts with `http` and adds an arrow after them. Unless you have gopher or ftp links that should match them all. 