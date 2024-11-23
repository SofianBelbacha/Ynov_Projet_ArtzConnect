import { gsap } from "gsap";

// Animation pour le titre et sous-titre
gsap.from(".masthead-heading", {
    y: 50, // Départ en bas
    opacity: 0, // Départ invisible
    duration: 1.5, // Durée de l'animation
    ease: "power3.out", // Transition douce
    delay: 0.5, // Délai avant le début
});

gsap.from(".masthead-subheading", {
    y: 50,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
    delay: 0.7,
});

// Animation pour le bouton
gsap.from(".btn-demarrer", {
    scale: 0.8,
    opacity: 0,
    duration: 1.2,
    ease: "elastic.out(1, 0.3)",
    delay: 1,
});

const carousel = document.querySelector("#videoCarousel");

carousel.addEventListener("slide.bs.carousel", () => {
    gsap.fromTo(".masthead-heading", 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" }
    );

    gsap.fromTo(".masthead-subheading",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.2 }
    );
});
