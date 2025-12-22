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