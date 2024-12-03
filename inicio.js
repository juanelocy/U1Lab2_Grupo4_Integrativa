// Obtener el template de la navbar
const template = document.getElementById('navbar-template');
const navbarComponent = document.querySelector('navbar-component');

// Cuando el componente es insertado en el DOM, clonar el template y agregarlo
if (template && navbarComponent) {
    navbarComponent.innerHTML = template.innerHTML;
}
