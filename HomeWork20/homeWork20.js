function sumFunc() {
    let sum = 0;
    return function calcSum (num) {
        return sum += num;
    }
}
const sum = sumFunc();

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));
