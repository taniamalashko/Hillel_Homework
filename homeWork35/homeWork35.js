const textField = document.querySelector('#textField');
const ghost = document.querySelector('#ghost');

textField.onfocus = function() {
    ghost.style.display = 'flex';
}

textField.onblur = function() {
    ghost.style.display = 'none';
}

console.dir(textField)