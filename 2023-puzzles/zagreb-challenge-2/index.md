# Crew manifest challenge - what's the job?

Get the full dataset of a crew manifest of various ficticious spacecraft from the following endpoint:

[https://devrel.wearedevelopers.com/code100-puzzles/009-zagreb/crews.json](https://devrel.wearedevelopers.com/code100-puzzles/009-zagreb/crews.json)

The structure of the file is the following (this is an excerpt):

```JSON
[
    { "name": "Philip J. Fry", "ship": "Planet Express Ship", "job": "Delivery Boy", "age": 25 },
    { "name": "Luke Skywalker", "ship": "Millennium Falcon", "job": "Jedi", "age": -1 },
    { "name": "Marvin", "ship": "Heart of Gold", "job": "Paranoid Android", "age": 30 },
    { "name": "Pavel Chekov", "ship": "USS Enterprise NCC-1701", "job": "Navigator", "age": 22 },
    { "name": "Doctor John A. Zoidberg", "ship": "Planet Express Ship", "job": "Doctor", "age": 86 },
    { "name": "Kaylee Frye", "ship": "Serenity", "job": "Mechanic", "age": 23 },
    { "name": "Simon Tam", "ship": "Serenity", "job": "Doctor", "age": 28 }
]
```

# Challenge 2: 

Show a list of the jobs of all the crew members over 25 years old. No duplicates and in alphabetical order.

For the demo sample above here, this would be: 

```json
["Doctor", "Paranoid Android"]
```

### Actual data used in the competition

- [Coding puzzle (input)](crews.json)
- [Result (output)](challenge-2-result.json)

<!-- details -->
<!-- summary -->
## Explanation
<!-- endsummary -->

This is not a tough one. The only thing to take care of is to ensure that you don't assume data, but test it's value. Not every crew member in the dataset had a job, so this could be a stumbling block. Other than that:

- create a new jobs array
- loop through the crew array
- check if the person is over 25 and has a job
- add it to the array
- make the array unique, sort it, and join it into a string 

<!-- enddetails -->

<!-- details -->

<!-- summary -->
## Code solutions
<!-- endsummary -->

There are many ways to solve this. [This JavaScript solution](challenge-2.js) can help as an example:

```javascript

const jobsByAge =  (crews) => {
    let jobs = [];
    crews.forEach((person) => {
        if (person.age > 25 && person.job) {
            jobs.push(person.job);
        }
    });
    console.log(
        JSON.stringify(
            [...new Set(jobs)].sort()
        )
    );
}
```

<!-- enddetails -->
