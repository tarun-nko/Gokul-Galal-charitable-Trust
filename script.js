// Function to open the modal and set the clicked image
function openModal(imageElement) {
    const modalElement = document.getElementById('imageModal');
    if (modalElement) {
        const modal = new bootstrap.Modal(modalElement);
        const modalImage = document.querySelector('.modal-img');
        if (modalImage) {
            modalImage.src = imageElement.src;
        }
        modal.show();
    }
}

// Header Sticky Scroll
const header = document.querySelector(".page-header");
const toggleClass = "is-sticky";

if (header) {
    window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 100) {
            header.classList.add(toggleClass);
        } else {
            header.classList.remove(toggleClass);
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    // Auto-close mobile menu when a nav link or CTA button is clicked
    const navbarCollapse = document.getElementById("navbarNav");
    if (navbarCollapse) {
        const menuLinks = navbarCollapse.querySelectorAll(".nav-link, .c-botton");
        menuLinks.forEach(link => {
            link.addEventListener("click", () => {
                if (navbarCollapse.classList.contains("show") && typeof bootstrap !== "undefined") {
                    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse, { toggle: false });
                    bsCollapse.hide();
                }
            });
        });

        // Close mobile menu when clicking outside the header
        document.addEventListener("click", (e) => {
            const pageHeader = document.querySelector(".page-header");
            if (pageHeader && !pageHeader.contains(e.target) && navbarCollapse.classList.contains("show") && typeof bootstrap !== "undefined") {
                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse, { toggle: false });
                bsCollapse.hide();
            }
        });
    }

    // Animating Number Counters
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