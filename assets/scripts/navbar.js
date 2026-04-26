/* =============================================
   NAVBAR LOGIC (T13 - Mobile Menu)
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('.header__toggle');
    const navMenu = document.querySelector('.header__nav');
    const navLinks = document.querySelectorAll('.header__link');

    if (!toggleBtn || !navMenu) return;

    // Toggle menu
    toggleBtn.addEventListener('click', () => {
        const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
        toggleBtn.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('header__nav--open');
        
        // Prevent body scroll when menu is open
        if (!isExpanded) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            toggleBtn.setAttribute('aria-expanded', 'false');
            navMenu.classList.remove('header__nav--open');
            document.body.style.overflow = '';
        });
    });
});
