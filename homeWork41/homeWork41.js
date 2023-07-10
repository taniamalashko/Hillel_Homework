const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let activeIndex = 0;

prevButton.addEventListener('click', showPrevSlide);

nextButton.addEventListener('click', showNextSlide);

function showNextSlide () {
    if (activeIndex === slides.length - 1) {
        return
    }

    activeIndex++
    slidesContainer.style.transform = `translateX(-${activeIndex * 100}%)`;
}

function showPrevSlide () {
    if (activeIndex === 0) {
        return
    }

    activeIndex--
    slidesContainer.style.transform = `translateX(-${activeIndex * 100}%)`;
}