---
title: CODE100 - the puzzles 
layout: challenge
---

# Manchester United

This puzzle is about getting information about Manchester from three different datasets in three different formats.

You get a JSON dataset explaining from which URL you can get the information and what format it is in. In this case, you get a list of actors, actresses and producers from the world for film and stage, a list of movies set in or about Manchester and a list of bands. 

```json
{
  "acting":{
    "format":"csv",
    "URL":"https:// … .csv"
  },
  "movies": {
    "format":"json",
    "URL":"https:// … .json"
  },
  "bands": {
    "format":"HTML",
    "URL":"https:// … .html"
  }
}  
```

What we expect from you as the result of your coding is a dataset with the numbers of each in JSON format. For example:

```json
{ 
  "movies": 20, 
  "acting": 50, 
  "bands": 23 
}
```

Happy uniting! 

<!-- details -->
<!-- summary -->
## Solution explanation
<!-- endsummary -->

<!-- enddetails -->

