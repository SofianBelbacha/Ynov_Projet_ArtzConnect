// assets/bootstrap.js
import { startStimulusApp } from '@symfony/stimulus-bridge';
import * as Turbo from "@hotwired/turbo";
Turbo.start();  // Initialisation de Turbo

import 'bootstrap/dist/css/bootstrap.min.css';  // Importation de Bootstrap CSS
import { Tooltip } from 'bootstrap';  // Importation de Bootstrap Tooltip
import AOS from 'aos';  // Importation de AOS (Animation On Scroll)
import 'aos/dist/aos.css';  // Styles AOS

// Démarre l'application Stimulus et charge les contrôleurs depuis le répertoire controllers
export const app = startStimulusApp(require.context(
    '@symfony/stimulus-bridge/lazy-controller-loader!./controllers',  // Charge tous les contrôleurs depuis assets/controllers
    true, // Inclut les sous-dossiers
    /\.(j|t)sx?$/  // Charge tous les fichiers JS/TS
));

// Initialisation des tooltips Bootstrap après le chargement de la page via Turbo
document.addEventListener('turbo:load', function () {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new Tooltip(tooltipTriggerEl);
    });
});

// Initialisation de AOS
AOS.init();
