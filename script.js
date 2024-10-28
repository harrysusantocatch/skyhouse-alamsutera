let currentSlide = 0;

// Function to detect screen size and set the appropriate image prefix
function setSlideImages() {
    const isMobile = window.innerWidth <= 768; // Assuming 768px as mobile breakpoint
    const prefix = isMobile ? 'mobile' : 'web';

    // Set image sources based on screen size
    document.getElementById('slide-1').src = `assets/img/slide/${prefix}-1.jpg`;
    document.getElementById('slide-2').src = `assets/img/slide/${prefix}-2.jpg`;
    document.getElementById('slide-3').src = `assets/img/slide/${prefix}-3.jpg`;
}

// Function to move the slides
function moveSlide(direction) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    currentSlide += direction;

    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    const slideWidth = document.querySelector('.slide').clientWidth;
    slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

// Set images on initial load and on window resize
window.addEventListener('load', setSlideImages);
window.addEventListener('resize', setSlideImages);
