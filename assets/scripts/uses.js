document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.uses-tab');
    const panes = document.querySelectorAll('.uses-pane');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and panes
            tabs.forEach(t => t.classList.remove('active'));
            panes.forEach(p => p.classList.remove('active'));

            // Add active class to clicked tab
            tab.classList.add('active');

            // Find corresponding pane and make it active
            const targetId = tab.getAttribute('data-tab');
            const targetPane = document.querySelector(`.uses-pane[data-pane="${targetId}"]`);
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });
});

/* =============================================
   USES SECTION — INLINE VIDEO PLAYBACK
   ============================================= */
function playUsesVideo(facadeEl) {
    const videoId = facadeEl.getAttribute('data-video-id');
    const container = facadeEl.parentElement; // .uses-visual

    const iframe = document.createElement('iframe');
    iframe.className = 'uses-video-iframe';
    iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
    iframe.title = 'SupplyWok product demo video';
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
    iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
    iframe.setAttribute('allowfullscreen', '');

    container.innerHTML = '';
    container.appendChild(iframe);
}
