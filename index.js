var sidnav = document.querySelector(".side-navbar")

function showsidenav(){
    sidnav.style.left="0"
}

function hidesidenav(){
    sidnav.style.left="-45%"
}

window.addEventListener("scroll", function() {
    var navbar = document.querySelector('.navbar');
    var chooseSection = document.querySelector('.impression');
    var chooseSectionPosition = chooseSection.getBoundingClientRect().top;

    // Check if .choose-section is in the viewport
    if (chooseSectionPosition <= 0) {
        navbar.classList.add('white-bg'); // Change background to white
    } else {
        navbar.classList.remove('white-bg'); // Restore original background
    }
});

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function updateSlides() {
    slides.forEach((slide, index) => {
        slide.classList.remove('center', 'left', 'right', 'hidden-left', 'hidden-right');

        if (index === currentSlide) {
            slide.classList.add('center'); // Focused in the center
        } else if (index === (currentSlide - 1 + totalSlides) % totalSlides) {
            slide.classList.add('left'); // Slide to the left
        } else if (index === (currentSlide + 1) % totalSlides) {
            slide.classList.add('right'); // Slide to the right
        } else if (index < currentSlide) {
            slide.classList.add('hidden-left'); // Hidden slide on the left
        } else {
            slide.classList.add('hidden-right'); // Hidden slide on the right
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlides();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlides();
}

// Initialize and update slides
updateSlides();

// Automatic transition every 3 seconds
let autoSlideInterval = setInterval(nextSlide, 3000);

// Add click event listeners to slides
slides.forEach((slide, index) => {
    slide.addEventListener('click', () => {
        if (slide.classList.contains('right')) {
            clearInterval(autoSlideInterval); // Reset auto slide interval
            nextSlide();
            autoSlideInterval = setInterval(nextSlide, 3000); // Restart auto sliding
        } else if (slide.classList.contains('left')) {
            clearInterval(autoSlideInterval); // Reset auto slide interval
            prevSlide();
            autoSlideInterval = setInterval(nextSlide, 3000); // Restart auto sliding
        }
    });
});
