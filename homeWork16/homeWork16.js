function deleteElement(array, element) {
    if (array.indexOf(element) !== -1) {
        array.splice(array.indexOf(element), 1);
    } else {
        console.log('element does not exist');
    }
}
