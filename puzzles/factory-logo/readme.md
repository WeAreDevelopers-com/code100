# Factory Records Logo Challenge

This challenge asks you to return the amount of black pixels in the factory records logo with the following dimensions:

![Factory logo with dimensions](factory-records.png)

You get a [JSON dataset](dataset.json) with the dimensions:

```json
{
    "halls": [100,100],
    "chimney": [35,120],
    "connect": [25,35],
    "roofs": [100,70] 
}
```

The result of your code should be a number rounded down to the nearest integer. So if your result were to be `23538.7`, you should return `23538`.