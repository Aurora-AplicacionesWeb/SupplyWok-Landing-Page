document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.team-slider-track');
    const leftBtn = document.querySelector('.team-slider-btn--left');
    const rightBtn = document.querySelector('.team-slider-btn--right');

    if (!track || !leftBtn || !rightBtn) return;

    // Calculate scroll step based on card size + gap
    const getScrollStep = () => {
        const firstCard = track.querySelector('.team-card');
        if (firstCard) {
            const cardWidth = firstCard.getBoundingClientRect().width;
            // Get gap from computed style
            const computedStyle = window.getComputedStyle(track);
            const gap = parseFloat(computedStyle.columnGap || computedStyle.gap) || 24;
            return cardWidth + gap;
        }
        return 300; // Fallback
    };

    leftBtn.addEventListener('click', () => {
        track.scrollBy({
            left: -getScrollStep(),
            behavior: 'smooth'
        });
    });

    rightBtn.addEventListener('click', () => {
        track.scrollBy({
            left: getScrollStep(),
            behavior: 'smooth'
        });
    });

    // Optional: Hide/Disable arrow buttons at bounds
    const toggleButtons = () => {
        const scrollLeft = track.scrollLeft;
        const maxScroll = track.scrollWidth - track.clientWidth;

        // Give a 5px threshold for zoom/rounding issues
        leftBtn.style.opacity = scrollLeft <= 5 ? '0.3' : '1';
        leftBtn.style.pointerEvents = scrollLeft <= 5 ? 'none' : 'auto';

        rightBtn.style.opacity = scrollLeft >= maxScroll - 5 ? '0.3' : '1';
        rightBtn.style.pointerEvents = scrollLeft >= maxScroll - 5 ? 'none' : 'auto';
    };

    // Event listeners for bounds checking
    track.addEventListener('scroll', toggleButtons);
    window.addEventListener('resize', toggleButtons);
    
    // Initial call to set initial button states
    // Use setTimeout to ensure rendering and scroll bounds are set
    setTimeout(toggleButtons, 100);
});
