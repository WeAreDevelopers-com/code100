---
title: Manchester CODE100 Audience Shout Out Rounds
layout: challenge
---

# Manchester CODE100 Quiz and Knowledge rounds

## Audience Shout Out Rounds

### Shoutout Block 1

Given the following CSS and HTML, what will the web site show?

```HTML
<style>
    body { color: black; }
    p { color: blue; display: inline }
</style>

<p>Hello <p style="color: green">green</p> World</p>
```

Answers: 

* A blue text “Hello green world” with the word green in green
* Styles in the body are invalid, nothing will be shown
* Hello green world in black
* “Hello green world” in the colours blue, green and black (correct answer)

**Solution:** You can’t nest `p` elements, that’s why the blue isn’t applied to the last Word.

### Shoutout Block 1

Given the following JavaScript, what will be logged to the console?

```javascript
const calculator = {
    value: 0,
    add(num) { this.value += num;return this; },
    pow(num) { this.value **= num; return this; },
    getValue() { return this.value; }
};
console.log(calculator.add(5).pow(3).getValue())
```

Answers: 

* Nothing, this is invalid JS
* 15
* 125 (correct answer)
* 5

### Shoutout Block 3

Which of the following lines of JavaScript will return a string without errors?

Answers: 

* console.log(42.toString());
* console.log((42).toString()); (correct answer)
* console.log("42"..toString());
* console.log((42)..toString());

The other options will all return syntax errors, despite looking correct at first to many.

### Shoutout Block 4

4. Which of the following is a deprecated HTML element?

Answers: 

* ​<​iframe>
* ​<​legend>
* ​<​picture>
* ​<​strike> (correct answer)

Despite all being older elements, strike is the only one deprecated in the MDN web docs.