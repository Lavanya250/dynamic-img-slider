let slideIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;
const indicators = document.querySelectorAll('.indicator');

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);
document.querySelectorAll('.indicator').forEach(indicator => {
    indicator.addEventListener('click', (event) => {
        slideIndex = parseInt(event.target.getAttribute('data-slide'));
        updateSlider();
    });
});

function nextSlide() {
    slideIndex = (slideIndex + 1) % totalSlides;
    updateSlider();
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
}

function updateSlider() {
    const percentage = -(slideIndex * 100);
    slides.style.transform = `translateX(${percentage}%)`;
    updateIndicators();
}

function updateIndicators() {
    indicators.forEach((indicator, index) => {
        if (index === slideIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

updateSlider();
