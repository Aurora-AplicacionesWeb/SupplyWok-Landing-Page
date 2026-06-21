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

function playTeamVideo() {
    // Create modal overlay
    const modal = document.createElement('div');
    modal.id = 'video-modal';
    modal.innerHTML = `
        <div class="video-modal-backdrop" id="video-modal-backdrop">
            <div class="video-modal-content">
                <button class="video-modal-close" id="video-modal-close" aria-label="Cerrar video">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
                <div class="video-modal-frame">
                    <iframe
                        src="https://www.youtube-nocookie.com/embed/V8HEQALGMGo?autoplay=1&rel=0"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    // Prevent page scroll while modal is open
    document.body.style.overflow = 'hidden';

    // Animate in
    requestAnimationFrame(() => {
        modal.querySelector('.video-modal-backdrop').classList.add('video-modal--visible');
    });

    const closeModal = () => {
        const backdrop = modal.querySelector('.video-modal-backdrop');
        backdrop.classList.remove('video-modal--visible');
        document.body.style.overflow = '';
        setTimeout(() => modal.remove(), 300);
    };

    document.getElementById('video-modal-close').addEventListener('click', closeModal);
    document.getElementById('video-modal-backdrop').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeModal();
    });
    document.addEventListener('keydown', function onEsc(e) {
        if (e.key === 'Escape') { closeModal(); document.removeEventListener('keydown', onEsc); }
    });
}

