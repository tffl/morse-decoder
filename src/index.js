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
    let message = '';

    for (let i = 0; i < expr.length; i += 10) {
        const binary = expr.slice(i, i + 10);
        if (binary === '**********') {
            message += ' ';
            continue;
        }

        let morseCode = '';

        for (let m = 0; m < 10; m += 2) {
            const pair = binary.slice(m, m + 2);
            if (pair === '10') {
                morseCode += '.';
            } else if (pair === '11') {
                morseCode += '-';
            }
        }

        message += MORSE_TABLE[morseCode] || '';
    }

    return message;
}

module.exports = {
    decode
}