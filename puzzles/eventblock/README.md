# Puzzle: Event Block

The challenge here is to turn [this JSON object](events.json):

```JSON
{
    "columns": 80,
    "padChar": "·",
    "events": [
        { "name": "Code 100", "location": "Zagreb, Croatia", "date": "29.11.2023" },
        { "name": "LIVE", "date": "ongoing" },
        { "name": "Coffee With Developers", "location": "various", "date": "ongoing"} ,
        { "name": "World Congress","location": "Berlin, Germany", "date":"17-19.07.2024" }
    ]
}
```

Into a block like this:

```
································································
· Code 100 ············ Zagreb, Croatia ··········· 29.11.2023 ·
· LIVE ··············································· ongoing ·
· Coffee With Developers ·· various ·················· ongoing ·
· World Congress ······ Berlin, Germany ········ 17-19.07.2024 ·
································································
```

The rules are that the location needs to be centered in the 80 columns wide block, the name on the left and the date on the right. Each need to have spaces surrounding them. (and no, this demo isn't the right amount of chars).

Happy coding! 

You can submit your comments, explain and link to your solutions [in this gist](https://gist.github.com/codepo8/84248aea816544c8e730c8dffb975c0e). 
