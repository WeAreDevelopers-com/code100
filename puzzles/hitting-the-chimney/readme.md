# CODE100 Puzzle - Hitting the chimney!

This time the puzzle is about Santa hitting the chimney when delivering presents. You get points in a coordinate system that are the drop points of presents and you should sort them into different arrays: those that landed in the chimney, those that landed outside and those that landed on the chimney.

![Ilustration showing points in the circle as grey, points outside the circle as black and points on the circle as green](targets.png)

You get the [following JSON dataset](coordinatesystem.json) of a coordinate system with a certain height and with and a circle in its center with a radius of 75 pixels that is 10 pixels wide. 

The `droppoints` array contains the coordinates of the dropped presents, and your task is to sort them into different arrays. Copy all points that are inside the circle into the `innerPoints` array, all the ones outside the circle into the `outerPoints` array and all that landed on the chimney into the `onChimneyPoints` array. Store the size of each of the arrays in `inside`, `outside` and `chimnney` and return all of them as a JSON object.

For example, the original dataset is: 

```JSON
{
    "width": 300,
    "height": 300,
    "chimneyWidth": 10,
    "chimneyRadius": 75,
    "inside": 0,
    "outside": 0,
    "chimney": 0,
    "innerPoints": [],
    "outerPoints": [],
    "onChimneyPoints": [],
    "droppoints": [[127,37],[202,112],[113,84], … ] 
}
```

Your result should be something like: 

```JSON

{
    "inside": 30,
    "outside": 120,
    "chimney": 4,
    "innerPoints": [[157, 170],[169,170],[131,166], … ],
    "outerPoints": [[90,279], [16,247], [242,140],[72,209], … ],
    "onChimneyPoints": [[208,102] [208,102] … ],
}
```

We're sad to report that with this dataset, `20` presents landed on the chimney. 

Good luck! You can submit your solution here [or on this gist](https://gist.github.com/codepo8/4e5f3efe95f9dc443fba7314e1f680c6). If you want to use JavaScript to solve it, we also prepared a [Codepen](https://codepen.io/codepo8/pen/Rwdbwbg)