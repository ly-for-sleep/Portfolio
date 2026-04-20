// On s'assure qu'il n'y a qu'un seul écouteur d'événement au chargement
window.addEventListener("load", function() {
    const progressFill = document.querySelector('.progress-fill');
    const loaderText = document.querySelector('.loader-text');
    
    // Tes 5 messages
    const messages = [
        "BOOTING...", 
        "CHECKING CONNEXION...",
        "LOADING_RESOURCES...", 
        "FINALIZING...", 
        "STARTING"
    ];
    
    let width = 0;
    
    // Intervalle défini sur 55ms (55ms * 100 = 5500ms, soit 5,5 secondes)
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            finishLoading();
        } else {
            width++;
            progressFill.style.width = width + '%';
            
            // Répartition des 5 messages sur les 100% (tranches de 20%)
            let currentMessage = "";
            if (width < 20) {
                currentMessage = messages[0];
            } else if (width < 40) {
                currentMessage = messages[1];
            } else if (width < 60) {
                currentMessage = messages[2];
            } else if (width < 80) {
                currentMessage = messages[3];
            } else {
                currentMessage = messages[4];
            }

            // Affichage du message combiné avec le pourcentage dynamique
            loaderText.textContent = `${currentMessage} [${width}%]`;
        }
    }, 30);

    function finishLoading() {
        const loader = document.getElementById("loader");
        const allContent = document.querySelectorAll('main, header, section, footer');
        
        // Disparition progressive de l'écran de chargement
        loader.style.opacity = "0";
        
        setTimeout(() => {
            // Retrait définitif du loader une fois transparent
            loader.style.visibility = "hidden";
            // Affichage de tous les éléments du portfolio
            allContent.forEach(el => el.classList.add("content-visible"));
        }, 500); // Ce délai doit correspondre à la durée de 'transition: opacity' du CSS de #loader
    }
});