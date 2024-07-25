/**
 * This function is executed when the DOM content is loaded.
 * It adds event listeners to the menu toggle and menu close buttons.
 */
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the menu toggle, menu close, and full screen menu elements
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const fullScreenMenu = document.getElementById('full-screen-menu');

    /**
     * This function is executed when the menu toggle button is clicked.
     * It displays the full screen menu by setting its display property to 'flex'.
     */
    menuToggle.addEventListener('click', function() {
        fullScreenMenu.style.display = 'flex';
    });

    /**
     * This function is executed when the menu close button is clicked.
     * It hides the full screen menu by setting its display property to 'none'.
     */
    menuClose.addEventListener('click', function() {
        fullScreenMenu.style.display = 'none';
    });
});

window.addEventListener('scroll', function() {
    const scrollToTopButton = document.querySelector('.scroll-to-top');
    const footer = document.querySelector('footer');
    const footerRect = footer.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    if (window.scrollY > 300 && footerRect.top > viewportHeight) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

document.querySelector('.scroll-to-top').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
