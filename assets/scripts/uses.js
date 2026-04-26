document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.uses__tab');
    const panes = document.querySelectorAll('.uses__pane');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and panes
            tabs.forEach(t => t.classList.remove('active'));
            panes.forEach(p => p.classList.remove('active'));

            // Add active class to clicked tab
            tab.classList.add('active');

            // Find corresponding pane and make it active
            const targetId = tab.getAttribute('data-tab');
            const targetPane = document.querySelector(`.uses__pane[data-pane="${targetId}"]`);
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });
});
