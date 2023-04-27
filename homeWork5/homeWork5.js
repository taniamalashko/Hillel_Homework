let firstNumber = parseFloat(prompt('Please enter your first number!'));
let secondNumber = parseFloat(prompt('Please enter your second number!'));
let thirdNumber = parseFloat(prompt('Please enter your third number!'));
let average = (firstNumber + secondNumber + thirdNumber)/3;
if(!average){
    alert('Oops, it looks like you did not enter a number, or you entered the wrong character!')
}else{
    alert(`Your average is ${average}!`)
}