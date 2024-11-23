// assets/app.js
import './bootstrap.js';  // Initialisation de Bootstrap et autres

// Importation des fichiers CSS
import './styles/app.css';
import './styles/main.css';
import './styles/Interface_user.css';

// Importation des fichiers JS personnalisés
import './js/main.js';
import './js/interface_user.js';

// Initialisation de AOS (Animation On Scroll)
import AOS from 'aos';
import 'aos/dist/aos.css';

import './js/main_GSAP.js';
import './js/main_Three.js';

AOS.init({
    duration: 5000, // Durée de l'animation en millisecondes
    once: true      // Animation jouée une seule fois
});

console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');
