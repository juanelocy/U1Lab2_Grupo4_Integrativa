
// Cargar e insertar el template
fetch('encabezado.html')
.then(response => response.text())
.then(html => {
    const template = document.createElement('div');
    template.innerHTML = html;

    // Insertar el navbar en el contenedor
    const navbar = template.querySelector('#navbar-template').content.cloneNode(true);
    document.getElementById('navbar-container').appendChild(navbar);

    // Detectar página actual y asignar "active" dinámicamente
    const currentPath = window.location.pathname.split('/').pop(); // Obtiene el nombre del archivo
    const navLinks = document.querySelectorAll('.nav-item.nav-link');

    navLinks.forEach(link => {
        // Verifica si el href coincide con el path actual
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
})
.catch(error => console.error('Error al cargar el template:', error));