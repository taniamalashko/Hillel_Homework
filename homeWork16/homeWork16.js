function deleteElement(array, element) {
    for (i = 0; i < array.length; i++) {
        if (array[i] === element) {
            array.splice(i, 1);
        }
    }
    return array;
}
