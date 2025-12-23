// Functionality 1: Mobile Menu Toggle
// This listens for a click on the menu button to show/hide the navbar
const menuBtn = document.getElementById('menu-btn');
const navbar = document.getElementById('navbar');

menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Functionality 2: Show/Hide Content (Read More)
// This toggles the visibility of the extra text in the About section
const toggleBtn = document.getElementById('toggle-btn');
const moreText = document.getElementById('more-text');

toggleBtn.addEventListener('click', () => {
    if (moreText.classList.contains('hidden-content')) {
        moreText.classList.remove('hidden-content');
        toggleBtn.textContent = "Read Less";
    } else {
        moreText.classList.add('hidden-content');
        toggleBtn.textContent = "Read More";
    }
});

// Functionality 3: Close mobile menu when clicking a navigation link
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navbar.classList.contains('active')) {
            navbar.classList.remove('active');
        }
    });
});

// Functionality 4: Slideshow
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
let currentSlide = 0;

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    if (n >= slides.length) {
        currentSlide = 0;
    } else if (n < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = n;
    }
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

prevBtn.addEventListener('click', () => {
    showSlide(currentSlide - 1);
});

nextBtn.addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

// Auto-play slideshow every 4 seconds
setInterval(() => {
    showSlide(currentSlide + 1);
}, 4000);