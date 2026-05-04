// On s'assure qu'il n'y a qu'un seul écouteur d'événement au chargement
window.addEventListener("load", function() {
    const loaderText = document.querySelector('.loader-text');
    const progressFill = document.querySelector('.progress-fill'); 
    
    // 1. On affiche uniquement le message "Welcome"
    if (loaderText) {
        loaderText.textContent = "Welcome";
    }
    
    // 2. On attend 2,5 secondes (2500 ms) avant de déclencher la fin du chargement
    setTimeout(() => {
        finishLoading();
    }, 750);

    // Fonction de fin de chargement (inchangée)
    function finishLoading() {
        const loader = document.getElementById("loader");
        const allContent = document.querySelectorAll('main, header, section, footer');
        
        // Disparition progressive de l'écran de chargement
        if (loader) {
            loader.style.opacity = "0";
        }
        
        setTimeout(() => {
            // Retrait définitif du loader une fois transparent
            if (loader) {
                loader.style.visibility = "hidden";
            }
            // Affichage de tous les éléments du portfolio
            allContent.forEach(el => el.classList.add("content-visible"));
        }, 500); // Ce délai doit correspondre à la durée de 'transition: opacity' du CSS de #loader
    }
});