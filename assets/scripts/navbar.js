/* =============================================
   NAVBAR LOGIC (T13 - Mobile Menu)
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('.header-toggle');
    const navMenu = document.querySelector('.header-nav');
    const navLinks = document.querySelectorAll('.header-link');

    if (!toggleBtn || !navMenu) return;

    // Toggle menu
    toggleBtn.addEventListener('click', () => {
        const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
        toggleBtn.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('header-nav--open');
        
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
            navMenu.classList.remove('header-nav--open');
            document.body.style.overflow = '';
        });
    });
});
