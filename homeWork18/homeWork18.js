const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, characters) {
    let randomSymbols = '';
    for (let i = 0; i < length; i++) {
        randomSymbols += characters[Math.floor(Math.random() * characters.length)];
    }
    return randomSymbols
}

let k = generateKey(16, characters);

console.log(k);