// Animation au défilement - Affichage des éléments quand l'utilisateur fait défiler la page
document.addEventListener('DOMContentLoaded', function () {
    const elementsToShow = document.querySelectorAll('.fade-in');

    function checkVisibility() {
        elementsToShow.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                el.classList.add('visible');
            } else {
                el.classList.remove('visible');
            }
        });
    }

    // Écouter le défilement
    window.addEventListener('scroll', checkVisibility);

    // Vérifier immédiatement si des éléments sont visibles au chargement
    checkVisibility();
});

// Menu mobile - Toggle du menu pour les petits écrans
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav ul');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// Ajouter un effet de survol sur les boutons
const buttons = document.querySelectorAll('.cta-button');

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.05)';
        button.style.transition = 'transform 0.3s';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});
