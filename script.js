const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

// Check if elements exist to prevent errors
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !bar.contains(e.target)) {
        nav.classList.remove('active');
    }
});

// Close menu when clicking a nav link
const navLinks = document.querySelectorAll('#navbar li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}); 