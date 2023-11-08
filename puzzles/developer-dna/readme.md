# Puzzle: Developer DNA

Welcome to another [CODE100](https://code100.dev) puzzle. The challenge is to [take this JSON dataset](dnadata.json):

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
             💻 💖              
           💻      💖           
         💻          💖         
       💻             💖        
      💻               💖       
      💻               💖       
       💻             💖        
         💻          💖         
           💻      💖           
             💻 💖              
           💖      💻           
         💖          💻         
       💖             💻        
      💖               💻       
      💖               💻       
       💖             💻        
         💖          💻         
           💖      💻           
             💖 💻  
```

Some hints: 

* The `cols` property is the overall amount of chars on each line and the DNA sequence should be centered in it.
* At its peak, this wave has 15 characters between the different emoji

Did you find a good solution? Create a pull request or comment [on the Developer DNA gist](https://gist.github.com/codepo8/31b9ad820c03916941c294c404831829).

