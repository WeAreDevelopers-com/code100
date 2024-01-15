// get the JSON data from the URL
fetch('https://devrel.wearedevelopers.com/code100-puzzles/009-zagreb/crews.json').then((response) => {
    return response.json();
}).then((data) => {
    jobsByAge(data);
}).catch((err) => {
    console.log(err);
});

const jobsByAge =  (crews) => {
    // create a new jobs array
    let jobs = [];
    // loop through the crew array
    crews.forEach((person) => {
    // check if the person is over 25 and has a job
        if (person.age > 25 && person.job) {
    // add it to the array
            jobs.push(person.job);
        }
    });
    // make the array unique, sort it, and join it into a string 
    console.log(JSON.stringify([...new Set(jobs)].sort()));
}
