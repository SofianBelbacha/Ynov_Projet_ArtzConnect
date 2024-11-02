import './bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
// Importer Bootstrap Icons via CDN
//import 'bootstrap-icons/font/bootstrap-icons.css';

// Importer SimpleLightbox CSS
//import 'simplelightbox/dist/simple-lightbox.min.css';
import './styles/app.css';
import './styles/main.css';
import './bootstrap';
import './js/main.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    duration: 5000, // Durée de l'animation en millisecondes
    once: true // Animation jouée une seule fois
});


console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');
