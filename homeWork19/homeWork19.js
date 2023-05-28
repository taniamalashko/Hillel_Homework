//1
const arr = [true, 'cool', 'rabbit', 1, 12, undefined, 33, null, ':)', 99, ['shoes', 'dress']];

function averageOfArrayNumbers(array) {
    let numbers = [];
    let sum = 0;

    for (let i = 0; i <= arr.length; i++) {
        if (!isNaN(array[i]) && typeof(array[i]) === 'number') {
            numbers.push(array[i]);
            sum += array[i];
        }
    }

    return sum / numbers.length;
}

let a = averageOfArrayNumbers(arr);

console.log(a);

//2
let x, y, znak
do {
    x = +prompt('Please enter first number')
} while (isNaN(x) && !x);

do {
    znak = prompt('please enter your operator(+, -, *, /, %, ^)')
} while (!['+', '-', '*', '/', '%', '^'].includes(znak));

do {
    y = +prompt('Please enter second number')
} while (isNaN(y) && !y);

function doMath(a, znak, b) {
    let result = a
    switch (znak) {
        case '+' :
            result += b;
            break
        case '-' :
            result -= b;
            break
        case '*' :
            result *= b;
            break
        case '/' :
            result /= b;
            break
        case '%' :
            result %= b;
            break
        case '^' :
            result **= b;
            break
    }
    return result;
}

let r = doMath(x, znak, y);
alert(`Your result is ${r}`);

//3
function createTwoDimensionalArray() {
    let mainArrayLength;
    let mainArr = [];

    do {
        mainArrayLength = +prompt('How many arrays do you want in main array?');
    } while (typeof mainArrayLength !== 'number' || mainArrayLength === 0);

    for (let i = 0; i < mainArrayLength; i++) {
        let nestedArrayLength;
        let nestedArray = [];

        do {
            nestedArrayLength = +prompt(`How many items do you want in ${i + 1} array?`);
        } while (typeof nestedArrayLength !== 'number' || nestedArrayLength === 0);

        for (let i = 0; i < nestedArrayLength; i++) {
            let nestedArrayElement = prompt('Which element do you want to add in your nested array?');
            nestedArray.push(nestedArrayElement);
        }

        mainArr.push(nestedArray);
    }

    return mainArr;
}

newArray = createTwoDimensionalArray();
console.log(newArray);

//4
let stringToChange;
let quantityOfSymbols;
const symbolsToDelete = [];

do {
    stringToChange = prompt('Please enter your string');
} while (!stringToChange || stringToChange.trim() === '');

do {
    quantityOfSymbols = +prompt('How much elements do you want to delete?');
} while (typeof quantityOfSymbols !== 'number' || quantityOfSymbols === 0);

for (let i = 0; i < quantityOfSymbols; i++) {
    let symbol;
    do {
        symbol = prompt('Enter your symbol, it must contain one element.').toLowerCase();
    } while (symbol.length > 1 || symbol.trim() === '');
    symbolsToDelete.push(symbol);
}

function delElFromStr(string, arrWithEl) {
    let newString = '';
    for (let i = 0; i < string.length; i++) {
        if (!arrWithEl.includes(string[i].toLowerCase())) {
            newString += string[i];
        }
    }
    return newString;
}

let changedString = delElFromStr(stringToChange, symbolsToDelete);

alert(changedString);




