const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let phrase = [];
    let newDict = {};
    let goodDict = {};
    for (let [key, value] of Object.entries(MORSE_TABLE)) {
			newDict[value] = key.replace(/[.]/g, '10').replace(/[-]/g, '11').padStart(10, '0');
    }
    newDict[' '] =  '**********';
    
    for (let [key, value] of Object.entries(newDict)) {
			goodDict[value] = key;
    }
    
    let str = '';
    for (let i = 0; i < expr.length; i+=10) {
    	phrase.push(expr.slice(i, i+10))
    }
    
		for (let i of phrase) {
    	str += goodDict[i]
    }
        
    return str;
}

module.exports = {
    decode
}