// Función para manejar el menú hamburguesa
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        // Función para cerrar el menú
        function closeMenu() {
            mainNav.classList.remove('active');
        }

        // Función para abrir/cerrar el menú
        function toggleMenu(event) {
            event.stopPropagation(); // Evita que el clic se propague
            mainNav.classList.toggle('active');
        }

        // Evento de clic en el botón del menú
        menuToggle.addEventListener('click', toggleMenu);

        // Cerrar el menú al hacer clic fuera de él
        document.addEventListener('click', function(event) {
            if (mainNav.classList.contains('active') && 
                !mainNav.contains(event.target) && 
                !menuToggle.contains(event.target)) {
                closeMenu();
            }
        });

        // Cerrar el menú al hacer clic en un enlace
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // Cerrar el menú al cambiar el tamaño de la ventana a desktop
        window.addEventListener('resize', function() {
            if (window.innerWidth > 480) {
                closeMenu();
            }
        });
    }
}); 