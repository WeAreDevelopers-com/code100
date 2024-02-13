# Cat pics challenge

You have a [JSON dataset of cat pictures](catdata.json), each with a file name, dimensions and alternative text that starts with the name of the cat and a description of what it looks like. 

Write a solution that shows: 

* the amount of unique cat names
* the width of the widest image
* the height of the tallest image
* all the formats the images are in and how many there are

For example, if the dataset were to be: 

```JSON
[
    {
        "width":200,"height":300,
        "filename":"5klvugfffl.gif",
        "alt":"Whiskers: ginger cat."
    },
    {
        "width":800,"height":600,
        "filename":"fpocczf87fl.jpg",
        "alt":"Bootsy: grey cat."
    },
    {
        "width":400,"height":900,
        "filename":"5pocczf87fl.jpg",
        "alt":"Whiskers: white cat."
    },
    {
        "width":200,"height":300,
        "filename":"5k9kof87fl.webp",
        "alt":"Mortimer: tabby cat."
    }
]
```

The result you should create is: 

```JSON
{
  uniquenames: 3,
  widest: 800,
  tallest: 900,
  formats: { gif: 1, jpg: 2, webp: 1 }
}
```
