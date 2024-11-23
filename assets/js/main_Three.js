import * as THREE from "three";

const canvas = document.querySelector("#background-canvas");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Ajouter des particules
const particleGeometry = new THREE.BufferGeometry();
const particleCount = 5000;
const particlePositions = new Float32Array(particleCount * 3);

for (let i = 0; i < particleCount * 3; i++) {
    particlePositions[i] = (Math.random() - 0.5) * 500; // Réparties aléatoirement
}

particleGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(particlePositions, 3)
);

const particleMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 1,
    blending: THREE.AdditiveBlending,
    transparent: true,
});

const particles = new THREE.Points(particleGeometry, particleMaterial);
scene.add(particles);

camera.position.z = 50;

// Animation des particules
const animate = () => {
    requestAnimationFrame(animate);

    particles.rotation.y += 0.002; // Rotation lente
    particles.rotation.x += 0.001; // Rotation lente

    renderer.render(scene, camera);
};

animate();

// Ajustement du canvas au redimensionnement de la fenêtre
window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        renderer.setAnimationLoop(null); // Arrête l'animation
    } else {
        renderer.setAnimationLoop(animate); // Redémarre l'animation
    }
});
