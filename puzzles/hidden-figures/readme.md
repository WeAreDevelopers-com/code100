# Hidden figures challenge

The end goal of this challenge is to add all the numbers and number words together.

You get the text of a story about Maths and the name of the numbers to find:

```json
{
"numbers":
[
    "one","two","three","four","five","six",
    "seven","eight","nine","ten","eleven",
    "twelve"
],
"story": "Once upon a time, in the ancient land of Sumer …"
}
```

So, if the story would say: 

```text
The Commodore 64 was the one computer to be available to all
it's 1985 release made the three kids in our household jealous
as we couldn't afford it with a father working three shifts in
a factory. 
```

The result we expect from your code is `2056`.

64 + 
"one" = 1 +
1985 + 
"three" = 3
"three" = 3
=> 64 + 1 + 1985 + 3 + 3 = 2056
```

