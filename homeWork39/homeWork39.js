const emojis = ['😂','😮','👹','😭','😍'];
const counts = {};

const wrap = document.querySelector('#wrap');

emojis.forEach(el => {
    counts[el] = 0;
  });

emojis.forEach(el => {
    const div = createDiv(el);
    wrap.appendChild(div);
})

function createDiv(emoji) {
    let div = document.createElement('div');

    div.innerHTML = `
        <div class="emoji">${emoji}</div>
        <div class="count">${counts[emoji]}</div>`;
    
    div.querySelector('.emoji').addEventListener('click', () => {
        addCount(div.querySelector('.count'))
    });

    return div
}

function addCount(count) {
    count.innerText = parseInt(count.innerText) + 1;
}
