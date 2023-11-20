const keycodes = {
    "0": " ", "2": "abc", "3": "def",
    "4": "ghi", "5": "jkl", "6": "mno",
    "7": "pqrs", "8": "tuv", "9": "wxyz"
};

const decode = message => {
    let result = [];
    message.split('-').forEach(item => {
        console.log(item);
        result.push(keycodes[item[0]][item.length-1]);
    })
    return result.join('');
};

const encode = text => {
    return text.split('').map(letter => {
        let str = '';
        Object.keys(keycodes).forEach(key => {
            if (keycodes[key].includes(letter)) {
                str = key.repeat(keycodes[key].indexOf(letter) + 1);
            };
        });
        return str;
    }).join('-');
};

console.log(decode('9-33-0-2-777-33-0-3-33-888-33-555-666-7-33-777-7777'))
console.log(encode('sore thumbs'))