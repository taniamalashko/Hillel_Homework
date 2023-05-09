do {
    elementsQuantity = parseInt(prompt('How many elements do you want in your array?'));
} while (isNaN(elementsQuantity) || !elementsQuantity || elementsQuantity < 2);

array = [];

for (i = 0; i < elementsQuantity; i++) {
    do {
        elementOfArray = parseInt(prompt('Please enter the number for your array.'));
    } while (isNaN(elementOfArray) || !elementOfArray);
    array[i] = elementOfArray; 
}

document.write(`<p>Your array is [${array}]</p>`);

len = array.length;
arrayLength = array.length;

for (j = 0; j < arrayLength - 1; j++) {
    for (it = 0; it < arrayLength - 1 - j; it++) {
        if (array[it] > array[it + 1]) {
            variable = array[it];
            array[it] = array[it + 1];
            array[it + 1] = variable;
        }
    }
}

document.write(`<p>If you sort your array in ascending order, you get [${array}]</p>`);

array.splice(1, 3);

document.write(`<p>And if you remove elements from the second to the fourth inclusive from this array, you will get [${array}]</p>`);


