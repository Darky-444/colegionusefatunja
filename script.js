// script.js

let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.video-item');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    document.querySelector('.video-gallery').scrollLeft = slides[currentIndex].offsetLeft;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Inicializa la galería para que se muestre el primer video
document.addEventListener('DOMContentLoaded', () => {
    showSlide(0);
});
