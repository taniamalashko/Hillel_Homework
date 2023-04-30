// Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).

from20To30 = 20;
strinfFrom20To30 = '';

while (from20To30 <= 30) {
    strinfFrom20To30 += `${from20To30} `;
    from20To30 += 0.5;
}

console.log(strinfFrom20To30);


// Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

dollars = 10;
hryvnasInOneDollar = 27;

while (dollars <= 100) {
    dollarsToHryvnas = dollars * hryvnasInOneDollar;
    console.log(`Where is ${dollarsToHryvnas} hryvnas in ${dollars} dollars.`);
    dollars += 10;
}


// Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

n = 88;
integer = 1;

while (integer <= 100) {
        if (integer ** 2 <= n){
            console.log(integer);
        }
    integer++;
}


// Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

initialInteger = 74;
divisor = 2;

while (divisor <= initialInteger) {
        if ( initialInteger % divisor === 0){
            console.log(`${initialInteger} is not prime number`);
            break;
        } else if (divisor === initialInteger) {
            console.log(`${initialInteger} is prime number`);
            break;
        } 
    divisor++;
}


// Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

givenNumber = 243;

while (givenNumber / 3 !== 1) {
    if (givenNumber % 3 !== 0) {
        console.log('This number can not be obtained by raising three to the power');
        break;
    }
    givenNumber /= 3;
    if (givenNumber / 3 === 1) {
        console.log('This number can be obtained by raising three to the power');
    }
}