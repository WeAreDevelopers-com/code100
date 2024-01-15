# Packed snowflake

Welcome to another CODE100 puzzle. This time your task, should you want to take it on, is to create an ASCII art snowflake. Here is the data you can use to do so:

```JSON
[
    "❄️","3x32",46,"6x32",
    46,"❄️","3x32",95,92,47,"2x32",92,
    47,95,"❄️","4x32",95,92,47,
    92,47,95,"❄️",95,92,95,92,95,92,47,92,47,95,
    47,95,47,95,"❄️",32,47,32,47,95,47,92,47,92,95,
    92,32,92,"❄️","4x32",95,47,92,47,
    92,95,"❄️","4x32",47,92,"2x32",47,
    92,"❄️","3x32",39,"6x32",39,"❄️"
]
```

The result should look like this:

```
   .      .
   _\/  \/_
    _\/\/_
_\_\_\/\/_/_/_
 / /_/\/\_\ \
    _/\/\_
    /\  /\
   '      '
```

## Solution

Here is what we came up with to solve this puzzle. 

When looking at the data, we can see numbers, snowflakes and strings that are something like "3x32". This is where the "packed" snowflake comes in. 

The numbers are the ASCII character codes of each of the snowflake parts.

```JSON
[
    "❄️","3x32",46,"6x32",
    46,"❄️","3x32",95,92,47,"2x32",92,
…]
```

When we [look these up](https://www.ascii-code.com/), we can see that `46` is a period `.`, `95` is `_` and `32` is a space. Instead of repeating characters like this space three times, the dataset describes this as `3x32`. This is a very simple way to make the dataset smaller, hence "packed snowflake". We need to undo this if we want to paint the snowflake again. The last thing that might be puzzling are the snowflakes. If we check the final outcome we want to have, it should become pretty obvious that those are linebreaks. 

Time to code. Let's use JavaScript.

```javascript
// get the JSON data from the URL
fetch('https://wearedevelopers-com.github.io/code100/puzzles/packedsnowflake/data.json').then((response) => {
    return response.json();
}).then((data) => {
    drawASCII(data);
}).catch((err) => {
    console.log(err);
});

// create a new string
let str = '';
const drawASCII = data => {
    // loop through the data array
    data.forEach(code => {
        // if the current item is a string
        if (typeof code === 'string') {
            // if it is the snowflake, add a linebreak
            if (code === '❄️') {
                str += '\n';
            // if it isn't the snowflake,
            // it must be a packed string…
            } else {
                // get the character code and 
                // the amount of times the character 
                // should be repeated
                let chunks = code.split('x');
                // add the correct character to 
                // the final string and repeat 
                // it as often as needed
                let char = String.fromCharCode(chunks[1]) 
                str += char.repeat(+chunks[0]);
            }
            // if the current item is a number
            // add the character with this 
            // charcode to the string
        } else {
            str += String.fromCharCode(code);
        }
    })
    // let it snow
    console.log(str);
}
```

Got a better, faster and simpler way? Tell us about it on the Gist.

