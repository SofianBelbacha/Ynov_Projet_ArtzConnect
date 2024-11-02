// assets/bootstrap.js
import { startStimulusApp } from '@symfony/stimulus-bridge';
import * as Turbo from "@hotwired/turbo";
Turbo.start();
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tooltip } from 'bootstrap';


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
export const app = startStimulusApp(require.context(
    '@symfony/stimulus-bridge/lazy-controller-loader!./controllers',
    true,
    /\.(j|t)sx?$/
));


// Import uniquement les composants nécessaires de Bootstrap

// Initialisation des tooltips après le chargement via Turbo
document.addEventListener('turbo:load', function (e) {
    // Activer les tooltips Bootstrap globalement
    let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new Tooltip(tooltipTriggerEl);
    });
});


// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);
