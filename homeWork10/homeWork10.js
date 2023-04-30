operator = prompt('Which operator do you want to use? (+ - / *)');

while (operator !== '+' && operator !== '-' && operator !== '/' && operator !== '*') {
    operator = prompt('Which operator do you want to use? (+ - / *)');
}

howMuchOperands = Math.floor(+prompt('How much operands do you want to use? (it\'s must be a number more then 1, less then 7)'));

while (isNaN(howMuchOperands) || !howMuchOperands || howMuchOperands >= 7 || howMuchOperands <= 1) {
    howMuchOperands = Math.floor(+prompt('How much operands do you want to use? (it\'s must be a number more then 1, less then 7)'));
}

result = +prompt('Enter your first operand.');
operations = 1;

while (operations < howMuchOperands) {
    newOperand = +prompt('Enter one more operand.');
        while (isNaN(newOperand) && !newOperand) {
            newOperand = +prompt('Enter one more operand.');
        }
            if (operator === '+') {
                result += newOperand;
            } else if (operator === '-') {
                result -= newOperand;
            } else if (operator === '*') {
                result *= newOperand;
            } else if (operator === '/') {
                result /= newOperand;
            }
    operations++;
}

alert(`Your result of ${operator} action is ${result}!`);

