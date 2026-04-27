/* =============================================
   FAQ ACCORDION LOGIC (T11)
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq__item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq__question');
    
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('faq__item--active');

      // Close all other items
      faqItems.forEach(i => {
        i.classList.remove('faq__item--active');
        i.querySelector('.faq__question').setAttribute('aria-expanded', 'false');
        i.querySelector('.faq__icon').textContent = '+';
      });

      // Open clicked item if it wasn't already active
      if (!isActive) {
        item.classList.add('faq__item--active');
        question.setAttribute('aria-expanded', 'true');
        item.querySelector('.faq__icon').textContent = '×';
      }
    });
  });
});
