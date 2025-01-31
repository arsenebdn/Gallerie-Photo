document.addEventListener("DOMContentLoaded", () => {
    // Sélection des éléments nécessaires
    const filterLinks = document.querySelectorAll(".dropdown-menu a");
    const photos = document.querySelectorAll(".photo");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeLightbox = document.querySelector(".close");

    // FONCTION DE FILTRAGE
    filterLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const filter = link.getAttribute("data-filter");

            photos.forEach(photo => {
                if (filter === "all" || photo.dataset.theme === filter) {
                    photo.style.display = "block";
                } else {
                    photo.style.display = "none";
                }
            });
        });
    });

    // OUVERTURE DE L'IMAGE EN PLEIN ÉCRAN (LIGHTBOX)
    photos.forEach(photo => {
        photo.addEventListener("click", () => {
            const imgSrc = photo.querySelector("img").src;
            lightboxImg.src = imgSrc;
            lightbox.classList.add("visible");
        });
    });

    // FERMETURE DU LIGHTBOX
    closeLightbox.addEventListener("click", () => {
        lightbox.classList.remove("visible");
    });

    // FERMETURE EN CLIQUANT EN DEHORS DE L'IMAGE
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove("visible");
        }
    });

});
