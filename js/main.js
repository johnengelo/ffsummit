document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const fullScreenMenu = document.getElementById('full-screen-menu');
    const scrollToTopButton = document.querySelector('.scroll-to-top');
    const footer = document.querySelector('footer');

    menuToggle.addEventListener('click', function() {
        fullScreenMenu.style.display = 'flex';
        checkScrollToTopButtonVisibility();
    });

    menuClose.addEventListener('click', function() {
        fullScreenMenu.style.display = 'none';
        checkScrollToTopButtonVisibility();
    });

    window.addEventListener('scroll', checkScrollToTopButtonVisibility);

    scrollToTopButton.addEventListener('click', function(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    function checkScrollToTopButtonVisibility() {
        const footerRect = footer.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const isFooterVisible = footerRect.top < viewportHeight && footerRect.bottom >= 0;
        const isFullScreenMenuVisible = fullScreenMenu.style.display === 'flex';

        if (window.scrollY > 300 && !isFooterVisible && !isFullScreenMenuVisible) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    }

    // Initial check
    checkScrollToTopButtonVisibility();
});
