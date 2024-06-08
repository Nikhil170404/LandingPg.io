document.addEventListener("DOMContentLoaded", function() {
    var navbarToggler = document.querySelector('.navbar-toggler');
    var mainMenu = document.getElementById('main-menu');

    navbarToggler.addEventListener('click', function() {
        mainMenu.classList.toggle('show');
    });

    // Intersection Observer for animations
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'none';
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('section, .hero-text, .hero-image, .feature, .advantage, .faq-item, footer').forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Dark mode toggle button
    const darkModeToggle = document.querySelector('.dark-mode-toggle');

    // Event listener for the toggle button
    darkModeToggle.addEventListener('click', function() {
        // Toggle the 'dark-mode' class on the body
        document.body.classList.toggle('dark-mode');
    });
});

