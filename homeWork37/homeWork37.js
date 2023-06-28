function randomNum() {
    return Math.floor(Math.random() * (11 - 1) + 1)
}
console.log(randomNum());

const catImage = document.querySelector('#kitty');

catImage.src = `/Hillel_Homework/homeWork37/kotiki/pngwing.com (${randomNum()}).png`