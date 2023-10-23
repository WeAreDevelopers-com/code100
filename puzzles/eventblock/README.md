# Puzzle: Event Block

The challenge here is to turn [this JSON object](events.json):

```JSON
{
    "columns": 64,
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

The rules are that the location needs to be centered in the block, the name on the left and the date on the right. Each need to have spaces surrounding them. 

Happy coding! 
