function initializeSearch() {
    const searchContainer = document.querySelector('.search-container');
    const searchInput = document.querySelector('.search-input');
    const clearIcon = document.querySelector('.clear-icon');
    const separator = document.querySelector('.separator');
    const browseIcon = document.querySelector('.browse-icon');
    const navbar = document.getElementById('mainNav');
    const toggler = document.querySelector('.navbar-toggler');

    if (searchContainer) {
        searchContainer.addEventListener('click', function() {
            searchContainer.classList.toggle('active');
            searchContainer.classList.toggle('collapsed');
        });

        document.addEventListener('click', function(event) {
            if (!searchContainer.contains(event.target)) {
                searchContainer.classList.add('collapsed');
                searchContainer.classList.remove('active');
                clearIcon.style.display = 'none';
                separator.style.display = '';
                browseIcon.style.display = '';
            }
        });

        searchInput.addEventListener('input', function() {
            if (searchInput.value.length > 0) {
                clearIcon.style.display = 'block';
                separator.style.display = 'none';
                browseIcon.style.display = 'none';
            } else {
                clearIcon.style.display = 'none';
                separator.style.display = '';
                browseIcon.style.display = '';
            }
        });

        clearIcon.addEventListener('click', function() {
            searchInput.value = '';
            clearIcon.style.display = 'none';
            separator.style.display = '';
            browseIcon.style.display = '';
        });

        toggler.addEventListener('click', function() {
            navbar.classList.toggle('navbar-open');
        });
    }
    // Fonction pour ajouter la classe "scrolled" lorsque l'utilisateur descend de 50px
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

}

// Exécute la fonction d'initialisation lors du chargement de la page
//document.addEventListener("DOMContentLoaded", initializeSearch);

// Si vous utilisez Turbo (Symfony UX)
document.addEventListener("turbo:load", initializeSearch);

// Si vous utilisez Turbolinks
//document.addEventListener("turbolinks:load", initializeSearch);
