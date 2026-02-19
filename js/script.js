/* 
========================================
   JAVASCRIPT PRINCIPAL
   Proyecto: Maestra de Danza
========================================
*/

document.addEventListener('DOMContentLoaded', function () {

    // 1. MENÚ MÓVIL
    // ==========================================
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li a');

    // Toggle menú al hacer clic en el botón hamburguesa
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Animación simple del icono (opcional)
        const icon = menuToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Cerrar menú al hacer clic en un enlace
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.querySelector('i').classList.remove('fa-times');
            menuToggle.querySelector('i').classList.add('fa-bars');
        });
    });

    // 2. NAVBAR SCROLL EFFECT
    // ==========================================
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. FILTRADO DE PROYECTOS
    // ==========================================
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remover clase active de todos los botones
            filterBtns.forEach(b => b.classList.remove('active'));
            // Agregar al presionado
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    // Pequeña animación de entrada al filtrar
                    card.style.opacity = '0';
                    setTimeout(() => card.style.opacity = '1', 50);
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 4. VENTANA MODAL DE PROYECTOS
    // ==========================================
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modal-body');
    const closeModal = document.querySelector('.close-modal');
    const openModalBtns = document.querySelectorAll('.open-modal');

    openModalBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = btn.getAttribute('data-id');
            const projectData = document.getElementById(`project-${projectId}`).innerHTML;

            modalBody.innerHTML = projectData;
            modal.style.display = 'flex'; // Usamos flex para centrar
            document.body.style.overflow = 'hidden'; // Evitar scroll de fondo
        });
    });

    // Función cerrar modal
    function closeProjectModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restaurar scroll
        // Detener videos al cerrar (si es iframe)
        const iframes = modalBody.querySelectorAll('iframe');
        iframes.forEach(iframe => {
            const src = iframe.src;
            iframe.src = src; // Reiniciar src detiene el video
        });
    }

    closeModal.addEventListener('click', closeProjectModal);

    // Cerrar al hacer clic fuera del contenido
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeProjectModal();
        }
    });

    // 5. ANIMACIONES DE SCROLL (Intersection Observer)
    // ==========================================
    // Elementos a animar: .reveal-left, .reveal-right (definidos en HTML)
    // Añadimos clases CSS para soportar esto si queremos

    // (Opcional, si quieres agregar más dinamismo)
});
