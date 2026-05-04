document.addEventListener('DOMContentLoaded', function() {
    // Ce code s'exécutera uniquement quand tout le HTML sera chargé
    VANTA.NET({
        el: ".hero-section",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x2563eb,
        backgroundColor: 0x0d1117,
        points: 15.00,
        maxDistance: 22.00,
        spacing: 16.00
    });
});