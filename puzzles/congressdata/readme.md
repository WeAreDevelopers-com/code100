# WeAreDevelopers World Congress Session analysis

You get a [dataset containing all sessions](data.json) of the WeAreDevelopers World Congress. 

Write a script that returns a JSON object with the following properties:

* `sessions`: the amount of overall sessions
* `streamedSessions`: the amount of sessions that were streamed (that have a stream provider)
* `moreThanOneSpeaker`: the amount of sessions that had more than one speaker
* `types`: an array of all the types of sessions without repeats
* `longestTitle`: the longest session title as a string
* `averageTitleLength`: the average title length

For example:

```json
{
  "sessions": 300,
  "streamedSessions": 100,
  "moreThanOneSpeaker": 20,
  "types": [
    "Keynote",
    "Random waffling",
    "Moshpit"
    "Virtual Talk"
  ],
  "longestTitle": "How to deal with unclean data without going bonkers",
  "averageTitleLength": 13
}
```

Good luck! 

