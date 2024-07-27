document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const fullScreenMenu = document.getElementById('full-screen-menu');
    const scrollToTopButton = document.querySelector('.scroll-to-top');
    const footer = document.querySelector('footer');
    const menuLinks = document.querySelectorAll('.full-screen-menu a');

    const checkScrollToTopButtonVisibility = () => {
        const footerRect = footer.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const isFooterVisible = footerRect.top < viewportHeight && footerRect.bottom >= 0;
        const isFullScreenMenuVisible = fullScreenMenu.style.display === 'flex';

        scrollToTopButton.style.display = (window.scrollY > 300 && !isFooterVisible && !isFullScreenMenuVisible) ? 'block' : 'none';
    };

    menuToggle.addEventListener('click', () => {
        fullScreenMenu.style.display = 'flex';
        document.body.classList.add('no-scroll');
        checkScrollToTopButtonVisibility();
    });

    menuClose.addEventListener('click', () => {
        fullScreenMenu.style.display = 'none';
        document.body.classList.remove('no-scroll');
        checkScrollToTopButtonVisibility();
    });

    window.addEventListener('scroll', checkScrollToTopButtonVisibility);

    scrollToTopButton.addEventListener('click', (event) => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            fullScreenMenu.style.display = 'none';
            document.body.classList.remove('no-scroll');
            menuToggle.classList.remove('collapsed');
            checkScrollToTopButtonVisibility();
        });
    });

    // Initial check
    checkScrollToTopButtonVisibility();
});

const sendMail = (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:sam@fullyfundedcrc.com?subject=${encodeURIComponent('Inquiry from ' + name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

    window.location.href = mailtoLink;
};
