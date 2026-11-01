document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#contactForm');

    if (!form) {
        return;
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        document.querySelector('#notice').classList.remove('d-none');
        form.reset();
    });
});
