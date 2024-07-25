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