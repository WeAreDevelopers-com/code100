# How does it feel? Challenge

You get a [JSON dataset](dataset.json) with dates and labels:

```json
[
    {"date": "21/4/1728", "label": "brown"},
    {"date": "13/4/1281", "label": "purple"},
    {"date": "21/10/2241", "label": "red"},
    {"date": "7/1/1176", "label": "brown"},
    {"date": "9/6/1660", "label": "orange"},
    {"date": "18/12/2651", "label": "brown"},
    // … lots more …    
}
```

Your job is to find out how many Mondays are there and how many are labeled `blue`.

The result has to be a JSON object with both. For example:

```json
{"mondays":30,"bluemondays":4}
```
