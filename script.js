document.addEventListener("DOMContentLoaded", () => {
    /*** Sélection des éléments ***/
    const filterLinks = document.querySelectorAll(".dropdown-menu a");
    const photos = document.querySelectorAll(".photo");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeLightbox = document.querySelector(".close");
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    /*** FILTRAGE DES PHOTOS ***/
    filterLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const filter = link.dataset.filter;

            photos.forEach(photo => {
                photo.style.display = (filter === "all" || photo.dataset.theme === filter) ? "block" : "none";
            });
        });
    });

    /*** LIGHTBOX (MODE PLEIN ÉCRAN) ***/
    photos.forEach(photo => {
        photo.addEventListener("click", () => {
            lightboxImg.src = photo.querySelector("img").src;
            lightbox.classList.add("visible");
        });
    });

    /*** FERMETURE DU LIGHTBOX ***/
    closeLightbox.addEventListener("click", () => {
        lightbox.classList.remove("visible");
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove("visible");
        }
    });

    /*** MODE SOMBRE / CLAIR ***/
    // Vérifie si un mode est stocké dans le localStorage
    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-theme");
        themeToggle.textContent = "🌙 Mode Sombre";
    }

    themeToggle.addEventListener("click", () => {
        body.classList.toggle("light-theme");

        if (body.classList.contains("light-theme")) {
            localStorage.setItem("theme", "light");
            themeToggle.textContent = "🌙 Mode Sombre";
        } else {
            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "☀️ Mode Clair";
        }
    });
});
