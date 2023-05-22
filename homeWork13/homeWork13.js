arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

positiveElements = [];
negativeElements = [];

doublePositiveNumbers = [];
unpairedPositiveNumbers = [];

sumOfPositiveElements = 0;
sumDoublePositiveNumbers = 0;
sumUnpairedPositiveNumbers = 0;
productOfPositiveNumbers = 1;

maxElement = minElement = 0;


for (i = 0; i < arr.length; i++) {

    if (arr[i] > 0) {
        sumOfPositiveElements += arr[i];
        productOfPositiveNumbers *= arr[i];
        positiveElements.push(arr[i]);

        if (arr[i] % 2 === 0) {
            doublePositiveNumbers.push(arr[i]);
            sumDoublePositiveNumbers += arr[i];
        } else {
            unpairedPositiveNumbers.push(arr[i]);
            sumUnpairedPositiveNumbers += arr[i];
        }

    } else {
        negativeElements.push(arr[i]);
    }

    if (arr[i] > maxElement) {
        maxElement = arr[i];
    } else if (arr[i] < minElement) {
        minElement = arr[i];
    }
}

indexOfMax = arr.indexOf(maxElement);
indexOfMin = arr.indexOf(minElement);

quantityOfPositiveElements = positiveElements.length;
quantityOfNegativeElements = negativeElements.length;

quantityOfDoublePositiveElements = doublePositiveNumbers.length;
quantityOfUnpairedPositiveElements = unpairedPositiveNumbers.length;

 newArr = [];

for (i = 0; i < arr.length; i++) {
    if (arr[i] !== maxElement) {
        newArr[i] = 0;
    } else {
        newArr[i] = arr[i];
    }
}

console.log(`Given an array [${arr}], the sum of its positive elements is equal to ${sumOfPositiveElements}, and their quantity is equal to ${quantityOfPositiveElements}. Its minimum element ${minElement}
has an index ${indexOfMin} and its maximum element ${maxElement} has an index ${indexOfMax}. The quantity of its negative elements is equal to ${quantityOfNegativeElements}. The quantity of paired
positive elements is equal to ${quantityOfDoublePositiveElements}, their sum is equal to ${sumDoublePositiveNumbers}, and the quantity of unpaired ones is equal to ${quantityOfUnpairedPositiveElements} their sum is ${sumUnpairedPositiveNumbers}. The
product of positive numbers is equal ${productOfPositiveNumbers}. If we reset all numbers except the largest one, we get an array [${newArr}].`)
