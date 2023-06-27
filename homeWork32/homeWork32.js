
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