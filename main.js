let lastScrollY = window.scrollY; // Position initiale du scroll
const menuBarre = document.querySelector('.menu-barre'); // Bouton hamburger
const popupMenu = document.querySelector('.popup-menu'); // Menu popup
let isMenuOpen = false; // État du menu (ouvert/fermé)

// Fonction pour changer la couleur de fond du body en fonction de la section
function changeBackgroundColor(sectionId) {
    const sectionColors = {
        'presentation': '#ffffff', // couleur de la section présentation
        'timeline': '#394032', // couleur de la section timeline
    };

    const color = sectionColors[sectionId];
    if (color) {
        document.body.style.backgroundColor = color;
    }
}

// Fonction pour gérer le scroll fluide
function handleScroll() {
    const currentScrollY = window.scrollY;

    if (!isMenuOpen) {
        if (currentScrollY > lastScrollY) {
            menuBarre.classList.add('hidden');
        } else {
            menuBarre.classList.remove('hidden');
        }
    }

    lastScrollY = currentScrollY;
}

// Fonction de gestion du clic sur le bouton du menu
function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    menuBarre.classList.toggle('open');
    popupMenu.classList.toggle('open');
}

// Observer uniquement les sections Présentation et Timeline
const sectionsToAnimate = document.querySelectorAll('.presentation, .timeline-section');

// Création de l'observateur pour détecter les sections visibles
const observer = new IntersectionObserver((entries) => {
    let isAnySectionVisible = false;

    entries.forEach(entry => {
        const section = entry.target;

        if (entry.isIntersecting) {
            isAnySectionVisible = true;
            section.classList.add('visible'); // Activer l'animation de fade-in
            changeBackgroundColor(section.id); // Changer la couleur en fonction de l'ID
        } else {
            section.classList.remove('visible'); // Réinitialisation après transition
        }
    });

    // Si aucune section n'est visible (par exemple en haut de la page), appliquer Présentation
    if (!isAnySectionVisible && window.scrollY < 50) {
        changeBackgroundColor('presentation');
    }
}, { threshold: 0.5 }); // Déclenche à 50% de la section visible

// Observer les sections Présentation et Timeline
sectionsToAnimate.forEach(section => observer.observe(section));

// Écouteurs d'événements pour scroll et menu
window.addEventListener('scroll', handleScroll);
menuBarre.addEventListener('click', toggleMenu);
