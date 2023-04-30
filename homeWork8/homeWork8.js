// Вивести на сторінку в один рядок через кому числа від 10 до 20.

i = 10;
stringFromTenToTwenty = '';

while (i <= 20) {
    stringFromTenToTwenty += `${i}`;
        if (i < 20){
            stringFromTenToTwenty += ', ';
        }
    i++;
}

document.write(`<p>Numbers from ten to twenty : ${stringFromTenToTwenty}</p>`);


// Вивести квадрати чисел від 10 до 20.

numberToSquired = 10;
stringOfSquiredNumbers = '';

do {
    squiredNumber = numberToSquired ** 2;
    stringOfSquiredNumbers += `${squiredNumber}`;
        if (numberToSquired < 20){
            stringOfSquiredNumbers += ', ';
        }
    numberToSquired++;
} while (numberToSquired <= 20);

document.write(`<p>Square of numbers from ten to twenty : ${stringOfSquiredNumbers}</p>`);


// Вивести таблицю множення на 7.

numberMultiplier = 1;
numberToMultiply = 7;
multiplicationTable = '';

do {
    multiplicationTable += `<br>${numberToMultiply}*${numberMultiplier}=${numberMultiplier*numberToMultiply}`;
    numberMultiplier++;
} while (numberMultiplier <= 10);

document.write(`<p>Multiplication table for seven : ${multiplicationTable}</p>`);


// Знайти суму всіх цілих чисел від 1 до 15.

numberToAdd = 1;
outputNumber = 0;

while (numberToAdd <= 15) {
    outputNumber += numberToAdd;
    numberToAdd++;
}

document.write(`<p>The sum of all integers from one to fifteen is ${outputNumber}</p>`);


// Знайти добуток усіх цілих чисел від 15 до 35.

numberForMultiply = 1;
multiplier = 15;

while (multiplier <= 30) {
    numberForMultiply *= multiplier;
    multiplier++;
}

document.write(`<p>Product of integers from fifteen to thirty is ${numberForMultiply}</p>`);


// Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

addNumber = 1;
numberOutput = 0;

while (addNumber <= 500) {
    numberOutput += addNumber;
    addNumber++;
        if (addNumber > 500) {
            numberOutput /= 500;
        }
}

document.write(`<p>The sum of all integers from one to five hundred is ${numberOutput}</p>`);


// Вивести суму лише парних чисел в діапазоні від 30 до 80.

initialNumber = 30;
sumOfPairedNumbers = 0;

while (initialNumber <= 80) {
        if (initialNumber % 2 === 0) {
            sumOfPairedNumbers += initialNumber;
        }
    initialNumber++;
}

document.write(`<p>The sum of paired numbers from thirty to fifty is ${sumOfPairedNumbers}</p>`);


// Вивести всі числа в діапазоні від 100 до 200 кратні 3.

numberToCheck = 100;
multiplesOfThree = '';

while (numberToCheck <= 200) {
        if (numberToCheck % 3 === 0) {
            multiplesOfThree += `${numberToCheck}; `;
        }
    numberToCheck++;
}

document.write(`<p>Numbers from one hundred to two hundred multiples of three: ${multiplesOfThree}</p>`);


// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
// Визначити кількість його парних дільників.
// Знайти суму його парних дільників.

naturalNumber = 344;
numberDivisor = 1;
stringOfNumberDivisors = '';
stringOfPairedDivisors = '';
sumOfPairedDivisors = 0;

while (numberDivisor <= naturalNumber) {
        if (naturalNumber % numberDivisor === 0) {
            stringOfNumberDivisors += `${numberDivisor}; `;
        }
        if (naturalNumber % numberDivisor === 0 && numberDivisor % 2 === 0) {
            stringOfPairedDivisors += `${numberDivisor}; `;
            sumOfPairedDivisors += numberDivisor;
        }
    numberDivisor++;
}

document.write(`<p>Divisors of ${naturalNumber}: ${stringOfNumberDivisors}<br>
Of which pairs: ${stringOfPairedDivisors} and their sum is ${sumOfPairedDivisors}</p>`);


// Надрукувати повну таблицю множення від 1 до 10.
numberForTable = 1;
multiplierForTable = 1;
resultForTable = numberForTable * multiplierForTable;
table = '';

while (numberForTable <= 10) {
    table += `<br>${numberForTable} * ${multiplierForTable} = ${resultForTable}<br>`;
    if (multiplierForTable === 10) {
        numberForTable++;
        multiplierForTable = 0;
    }
    multiplierForTable++;
}

document.write(`Multiplication table:${table}`)




