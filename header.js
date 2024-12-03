class NavbarComponent extends HTMLElement {
    constructor() {
      super();
  
      // Crear Shadow DOM
      const shadowRoot = this.attachShadow({ mode: 'open' });
  
      // Obtener el template
      const template = document.getElementById('navbar-template');
      const templateContent = template.content;
       // Crear enlaces de CSS
    const links = [
      'https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css', // Bootstrap
      'https://fonts.gstatic.com', // Preconnect para fuentes
      'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap', // Google Fonts
      'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css', // Font Awesome
      'lib/animate/animate.min.css', // Animate.css (si está local)
      'lib/owlcarousel/assets/owl.carousel.min.css', // Owl Carousel (si está local)
      'lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css', // Tempusdominus (si está local)
      'css/style.css' // Tu propio archivo de estilo (si está local)
    ];

    // Iterar y crear cada <link> y añadirlo al Shadow DOM
    links.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      shadowRoot.appendChild(link);
    });
      // Clonar el contenido del template
      const clone = document.importNode(templateContent, true);
  
      // Añadir el contenido clonado al Shadow DOM
      shadowRoot.appendChild(clone);
    }
  }
  
  
  // Registrar el componente
  customElements.define('navbar-component', NavbarComponent);
  