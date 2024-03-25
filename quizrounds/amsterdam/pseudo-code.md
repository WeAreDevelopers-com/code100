
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
