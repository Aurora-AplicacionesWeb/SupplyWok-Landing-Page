// team-slider.js is kept to host the team video modal functionality.
// The carousel slider functionality has been removed.

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

