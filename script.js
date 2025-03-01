// Function to open the modal and set the clicked image
function openModal(imageElement) {
    const modal = new bootstrap.Modal(document.getElementById('imageModal'));
    const modalImage = document.querySelector('.modal-img');
    modalImage.src = imageElement.src;
    modal.show();
}

// Hrader
const header = document.querySelector(".page-header");
const toggleClass = "is-sticky";

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 150) {
        header.classList.add(toggleClass);
    } else {
        header.classList.remove(toggleClass);
    }
});


// Animating Number Counters
document.addEventListener("DOMContentLoaded", () => {
    const stats = document.querySelectorAll('.stat');

    stats.forEach(stat => {
        const updateStat = () => {
            const target = +stat.getAttribute('data-target');
            const current = +stat.innerText;
            const increment = Math.ceil(target / 100);

            if (current < target) {
                stat.innerText = current + increment;
                setTimeout(updateStat, 30);
            } else {
                stat.innerText = target;
            }
        };

        updateStat();
    });
});