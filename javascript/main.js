let lastScrollY = window.scrollY;
const menuBarre = document.querySelector('.menu-barre');
const popupMenu = document.querySelector('.popup-menu');
let isMenuOpen = false;


function changeBackgroundColor(sectionId) {
    const sectionColors = {
        'presentation': '#ffffff',
        'timeline': '#394032',
    };

    const color = sectionColors[sectionId];
    if (color) {
        document.body.style.backgroundColor = color;
        localStorage.setItem('backgroundColor', color);
    }
}


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


function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    menuBarre.classList.toggle('open');
    popupMenu.classList.toggle('open');
}


const sectionsToAnimate = document.querySelectorAll('.presentation-section, .timeline-section');


const observer = new IntersectionObserver((entries) => {
    let isAnySectionVisible = false;

    entries.forEach(entry => {
        const section = entry.target;

        if (entry.isIntersecting) {
            isAnySectionVisible = true;

            if (!section.classList.contains('visible')) {
                section.classList.add('visible');
            }

            changeBackgroundColor(section.id);
        } else {

        }
    });

    if (!isAnySectionVisible && window.scrollY < 50) {
        changeBackgroundColor('presentation');
    }
}, { threshold: 0.5 });

sectionsToAnimate.forEach(section => observer.observe(section));

window.addEventListener('scroll', handleScroll);
menuBarre.addEventListener('click', toggleMenu);

window.onload = function () {
    const savedColor = localStorage.getItem('backgroundColor');
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
    } else {
        changeBackgroundColor('presentation');
    }
};
