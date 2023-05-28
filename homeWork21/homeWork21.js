const array = [
    [
    ['some text', true, [1,2,3,4, [10, 20]]],
    ],
    [
    [1, 2, 3, [100, 200]],
    ['name', 'age']
    ],
];

function deepClone(array) {
    let copyOfArray = []
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            copyOfArray.push(deepClone(array[i]));
        } else {
            copyOfArray.push(array[i]);
        }
    }
    return copyOfArray
}

const clonedArray = deepClone(array);

console.log(clonedArray);
