// Створити клас SuperMath.

// Додати до екземпляра метод - check(obj), параметр obj якого має властивості X, Y, znak. Метод повинен підтвердити у користувача, чи хоче він зробити дію znak c Х і У. Якщо хоче, зробити математичну дію znak (яка описана в прототипі), інакше - запитати введення нових даних через метод input() класу SuperMath.



// Приклад об'єкта: `obj = {X:12, Y:3, znak: “/”}`, можливі варіанти znak => `+ - / * %`.

// При введенні znak потрібно перевірити коректність введення на можливі математичні дії.



// p = new SuperMath();
// p.check(obj); // --> no p.input() -> 3 prompt -> рахує
const OPERATIONS = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '/': (x, y) => x / y,
    '*': (x, y) => x * y,
    '%': (x, y) => x % y,
}

class SuperMath{
    constructor(){
        this.input()
    }

    input(){
        do {
            this.x = +prompt('Please enter your X')
        } while (isNaN(this.x));
        do {
            this.y = +prompt('Please enter your Y')
        } while (isNaN(this.y));
        do {
            this.znak = prompt('Please enter your znak (+, -, /, *, %)')
        } while (!['+', '-', '/', '*', '%'].includes(this.znak));

        return this
    }

    check(){
        let userConfirm = confirm(`Do you want to do ${this.znak} operation with ${this.x} and ${this.y}?`);

        return userConfirm ? `Result: ${OPERATIONS[this.znak](this.x, this.y)}` : this.input().check();
    }

}

let p = new SuperMath();

p.check();