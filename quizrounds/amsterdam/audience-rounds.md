
# Amsterdam CODE100 Quiz and Knowledge rounds

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