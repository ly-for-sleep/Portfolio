window.addEventListener("load", function() {
    // On attend exactement 2.5 secondes (la fin de l'animation du texte)
    setTimeout(() => {
        const loader = document.getElementById("loader");
        const allContent = document.querySelectorAll('main, header, section, footer');
        
        if (loader) {
            // Le fond noir s'efface progressivement
            loader.style.opacity = "0";
            
            // On attend la fin du fondu du fond (0.8s) pour cacher le loader techniquement
            setTimeout(() => {
                loader.style.visibility = "hidden";
            }, 800);
        }
        
        // On fait apparaître toutes les sections du site
        allContent.forEach(el => {
            el.classList.add("content-visible");
        });
        
    }, 1500); 
});