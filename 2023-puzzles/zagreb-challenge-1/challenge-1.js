// get the JSON data from the URL
fetch('https://devrel.wearedevelopers.com/code100-puzzles/009-zagreb/crews.json').then((response) => {
    return response.json();
}).then((data) => {
    shipsAndCrewnumbers(data);
}).catch((err) => {
    console.log(err);
});

const shipsAndCrewnumbers = (crews) => {

    // Create a new ships object
    let ships = {};
    
    // loop through the crew array and create a new key for each ship
    // add an array to each ship key
    // push the person into the array
    crews.forEach((person) => {
        if (!ships[person.ship]) {
            ships[person.ship] = [];
        }
        ships[person.ship].push(person);
    });
    
    let result = [];
    // Display all the ships and the amount of people in them
    Object.keys(ships).forEach((ship) => {
        result.push({ship: ship, crewcount: ships[ship].length})
    });
    console.log(JSON.stringify(result));
}
    