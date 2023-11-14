# Puzzle solution explanation: Developer DNA

In this [CODE100](https://code100.dev) puzzle we asked you to [take this JSON dataset](dnadata.json):

```JSON
{
    "cols": 30,
    "sine": [
     "-0.93", "-0.60", "-0.33", "-0.13", "0.00",
     "0.00", "-0.13", "-0.33", "-0.60", "-0.93"
    ],
    "parts": ["💻", "💖"]
}
```

And turn into this construct:

```
              💻💖              
           💻      💖           
         💻          💖         
        💻            💖        
       💻              💖       
       💻              💖       
        💻            💖        
         💻          💖         
           💻      💖           
              💻💖              
              💖💻              
           💖      💻           
         💖          💻         
        💖            💻        
       💖              💻       
       💖              💻       
        💖            💻        
         💖          💻         
           💖      💻           
              💖💻            
```

We got quite some good answers on the [on the Developer DNA gist](https://gist.github.com/codepo8/31b9ad820c03916941c294c404831829) in various languages, but [here's ours in JavaScript](solutions/javascript/dnadata.js).


```JavaScript
const dnadata = {
    "cols": 30,
    "sine": [
     '-0.93', '-0.60', '-0.33', '-0.13', '0.00',
     '0.00', '-0.13', '-0.33', '-0.60', '-0.93'
    ],
    "parts": ["💻", "💖"]
}

let {cols, sine, sin, parts} = dnadata;
let mid = dnadata.cols / 2;
```

The first bit is to grab some variables from the dataset and define the midpoint of the colums.

```Javascript

[[0,1],[1,0]].forEach((i) => {
```

In essence, we will repeat the same construct twice, once showing the computers on the left and the hearts on the right and then the other way around. Here we use an array with indices of parts array. Other people solving this did a for loop with 1 to 2 and reversed the array. 

```Javascript
    dnadata.sine.forEach((value) => {
        const line = Array(dnadata.cols).fill(" ");
```

We then loop through the `sine` array and assemble the pattern. This could be done by adding to a string, but it is as easy to define an array of spaces and set the array items accordingly. This ensures that each line will be `cols` characters long.

```Javascript
        let sine = Math.round(mid/2 * value);
        let left = Math.floor(mid/2 - sine);
        let right = Math.floor(mid/2 + sine) + mid;
```

We then calculate the wave by multiplying the array value with half the mid section. This gives us the amplitude shown in the example. The left item needs to be subtracted from the sine value, and the right one added. We also need to add another value of `mid` to get the correct amount for the right emoji location.


```Javascript
        line[left] = parts[i[0]];
        line[right] = parts[i[1]];
        console.log(line.join(''));
    });
});
```

We set the array item values to the different parts emoji and join the array to a string before logging it out.

Got a better solution? [Add to the gist](https://gist.github.com/codepo8/31b9ad820c03916941c294c404831829) or [here](https://github.com/WeAreDevelopers-com/code100/tree/main/puzzles/developer-dna)! 