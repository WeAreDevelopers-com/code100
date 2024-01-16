---
title: CODE100 - the puzzles 
layout: challenge
---

# CODE100 Puzzle - Hitting the chimney!

This time the puzzle is about Santa hitting the chimney when delivering presents. You get points in a coordinate system that are the drop points of presents and you should sort them into different arrays: those that landed in the chimney, those that landed outside and those that landed on the chimney.

![Ilustration showing points in the circle as grey, points outside the circle as black and points on the circle as green](targets.png)

You get the [following JSON dataset](coordinatesystem.json) of a coordinate system with a certain height and with and a circle in its center with a radius of 75 pixels that is 10 pixels wide. 

The `droppoints` array contains the coordinates of the dropped presents, and your task is to sort them into different arrays. Copy all points that are inside the circle into the `innerPoints` array, all the ones outside the circle into the `outerPoints` array and all that landed on the chimney into the `onChimneyPoints` array. Store the size of each of the arrays in `inside`, `outside` and `chimnney` and return all of them as a JSON object.

For example, the original dataset is: 

```json
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

```json
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

<!-- details -->
<!-- summary -->
## Solution
<!-- endsummary -->

You can also see this as a [video on YouTube](https://youtu.be/nyChqqdKaXg):

{% include youtube.html id="nyChqqdKaXg" %}

The main trick was to find out which coordinates are inside, on our outside the chimney circle. We can do that by calculating the distance of the point to the centre. If the distance is smaller than the radius, the point is inside the circle, if it is larger, it is outside. If it is exactly the radius minus and plus half the `chimneyWidth`, it is on the circle.</p>

You can see this in the following example. Click the circle to see a line from its center to and move your mouse around. The circle gets green when you are inside it, black when you are on it, and red when you are outside of it.

{% include pythagoras.html %}

Finding the distance of the point to the center is based on old geometry, specifically the [Euclidean distance](https://en.wikipedia.org/wiki/Euclidean_distance) based on the good old [Pythagorean theorem](https://en.wikipedia.org/wiki/Pythagorean_theorem).

{% include smallimage.html alt="Pythagorean theorem" src="/hitting-the-chimney/220px-Pythagorean.svg.png" %}

In this case, `a` is the difference of the horizontal coordinate of point to the center of the circle, `b` the vertical one and we can calculate the distance using the following where `150` is half the size of the coordinate system:

```
√(x - 150)² + (y - 150)²
```

You can see this in action when you click your mouse in the earlier interactive example. Once the logic is obvious, we can convert it to our language of choice to solve the puzzle. We [used JavaScript](solutions/javascript/presentdrop.js):

```javascript
import { readFileSync, write, writeFile } from 'fs';
const drops = JSON.parse(readFileSync('coordinatesystem.json', 'utf8'));
drops.droppoints.forEach(c => {
    let [x ,y] = [c[0], c[1]];
    let distance = Math.floor(Math.sqrt(
        (x - drops.width / 2) ** 2 + 
        (y - drops.height / 2) ** 2
    ));
    let inside = drops.chimneyRadius - drops.chimneyWidth / 2;
    let outside = drops.chimneyRadius + drops.chimneyWidth / 2;
    if (distance > outside) {
        drops.outerPoints.push([x , y]);
    } else if (distance &Lt; inside) {
        drops.innerPoints.push([x , y]);
    } else if (distance >= inside && distance &Lt;= outside){
        drops.onChimneyPoints.push([x , y]);
    }
});
drops.inside = drops.innerPoints.length;
drops.outside = drops.outerPoints.length;
drops.chimney = drops.onChimneyPoints.length;
// remove the unnecessary keys
['width', 'height', 'droppoints','chimneyWidth','chimneyRadius'].forEach(
    k => delete drops[k]
);    
console.log((drops));
```

And the result is [this JSON object](solutions/javascript/result.json):

```json
{
    "inside":37,
    "outside":141,
    "chimney":20,
    "innerPoints":[[202,112] …],
    "outerPoints":[[127,37] …],
    "onChimneyPoints":[[113,84] …]
}
```

And that's it. Did you solve it differently? Are you looking for more complex puzzles and want to take part in the CODE100 challenge? Check out <a href="https://code100.dev">code100.dev</a>!    

<!-- enddetails -->
