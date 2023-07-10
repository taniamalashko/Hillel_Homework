let array = [1, 2, 3, [1.1, 1.2, 1.3]];

function renderList(arr) {
    const  ul = document.createElement('ul');

    arr.forEach(el => {
        const li = document.createElement('li');
        if (Array.isArray(el)) {
            li.appendChild(renderList(el))
        } else {
            li.innerText = el;
        }
        ul.appendChild(li);
    })
    return ul
}

document.body.appendChild(renderList(array));