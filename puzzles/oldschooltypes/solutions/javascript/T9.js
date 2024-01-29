const T9 = {
    messagepattern: /^[0-9\-]+$/,
    messageerror: '🚫 Invalid code. Valid codes must contain only numbers and .',
    textpattern: /^[a-z\s]+$/,
    texterror: '🚫 Invalid text. Valid texts must contain only a-z or space',
    notdetectedmessage: `🚫 This is not a valid message or code`,
    delimiter: '-',
    keycodes: {
        "0": " ", "2": "abc", "3": "def",
        "4": "ghi", "5": "jkl", "6": "mno",
        "7": "pqrs", "8": "tuv", "9": "wxyz"
    },
    decode: message => {
        if (!T9.messagepattern.test(message)) {
            return T9.messageerror;
        } else {
            let result = [];
            message.split(T9.delimiter).forEach(item => {
                result.push(T9.keycodes[item[0]][item.length-1]);
            })
            return result.join('');
        }
    },
    encode: text => {
        if (!T9.textpattern.test(text)) {
            return T9.texterror;            
        } else {
            return text.split('').map(letter => {
                let str = '';
                Object.keys(T9.keycodes).forEach(key => {
                    if (T9.keycodes[key].includes(letter)) {
                        str = key.repeat(T9.keycodes[key].indexOf(letter) + 1);
                    };
                });
                return str;
            }).join(T9.delimiter);
        } 
    },
    translate: msg => {
        if (T9.messagepattern.test(msg)) { return T9.decode(msg); }
        if (T9.textpattern.test(msg)) { return T9.encode(msg); }
        if (!T9.messagepattern.test(msg) && !T9.textpattern.test(msg)) {
            return T9.notdetectedmessage;
        }
    }
}

console.log(T9.decode(T9.encode('maximum effort for a text')));
console.log(T9.decode('999-666-88-0-2-777-33-0-666-555-3'));
console.log(T9.encode('we are developers'));
console.log(T9.encode('hello'));
console.log(T9.encode('maximum effort for a text'));
console.log(T9.translate('world'));
console.log(T9.translate('9-33-0-2-777-33-0-3-33-888-33-555-666-7-33-777-7777'))