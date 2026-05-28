document.addEventListener('DOMContentLoaded', () => {
    const btnGrid = document.getElementById('btn-grid');
    const btnList = document.getElementById('btn-list');
    const container = document.getElementById('docs-container');

    // Vérification de sécurité pour éviter les erreurs si les éléments n'existent pas
    if (btnGrid && btnList && container) {
        
        // Passage en mode Mosaïque
        btnGrid.addEventListener('click', () => {
            container.classList.remove('list-view');
            container.classList.add('grid-view');
            btnGrid.classList.add('active');
            btnList.classList.remove('active');
        });

        // Passage en mode Liste
        btnList.addEventListener('click', () => {
            container.classList.remove('grid-view');
            container.classList.add('list-view');
            btnList.classList.add('active');
            btnGrid.classList.remove('active');
        });
        
    }
});