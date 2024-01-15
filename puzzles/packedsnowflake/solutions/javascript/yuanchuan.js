let data = ["❄️","3x32",46,"6x32",46,"❄️","3x32",95,92,47,"2x32",92,47,95,"❄️","4x32",95,92,47,92,47,95,"❄️",95,92,95,92,95,92,47,92,47,95,47,95,47,95,"❄️",32,47,32,47,95,47,92,47,92,95,92,32,92,"❄️","4x32",95,47,92,47,92,95,"❄️","4x32",47,92,"2x32",47,92,"❄️","3x32",39,"6x32",39,"❄️"]

function print(data) {
    return data.reduce((out, item) => {
      switch (true) {
        case item === '❄️':
          return out + '\n';
        case typeof item === 'number':
          return out + String.fromCharCode(item);
        case (/x/.test(item)): {
          let [n, c] = item.split('x');
          return out + String.fromCharCode(c).repeat(n);
        }
      }
    }, '');
  }
// get the JSON data from the URL
fetch('https://devrel.wearedevelopers.com/code100-puzzles/010-packedsnowflake/data.json').then((response) => {
    return response.json();
}).then((data) => {
    console.log(print(data));
}).catch((err) => {
    console.log(err);
});