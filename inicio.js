  // Obtener el template del carrusel
  const carouselTemplate = document.getElementById('carousel-template');
  const carouselContainer = document.getElementById('carousel-container');

  // Clonar el contenido del template y añadirlo al contenedor
  carouselContainer.appendChild(carouselTemplate.content.cloneNode(true));
