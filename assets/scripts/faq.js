/* =============================================
   FAQ ACCORDION LOGIC (T11)
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('faq-item--active');

      // Close all other items
      faqItems.forEach(i => {
        i.classList.remove('faq-item--active');
        i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        i.querySelector('.faq-icon').textContent = '+';
      });

      // Open clicked item if it wasn't already active
      if (!isActive) {
        item.classList.add('faq-item--active');
        question.setAttribute('aria-expanded', 'true');
        item.querySelector('.faq-icon').textContent = '×';
      }
    });
  });
});
