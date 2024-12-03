class TestimonialCarousel extends HTMLElement {
  constructor() {
    super();

    // Crear Shadow DOM
    const shadowRoot = this.attachShadow({ mode: 'open' });

    // Importar el template
    const template = document.querySelector('#testimonialTemplate');
    const instance = template.content.cloneNode(true);
    shadowRoot.appendChild(instance);

    // Referencias a elementos
    this.testimonials = [
      {
        img: 'img/imagen.jpg',
        text: 'Excelente servicio y calidad.',
        avatar: 'img/persona1.jpg',
        name: 'María Pérez',
        profession: 'Diseñadora Gráfica',
      },
      {
        img: 'img/fondo1.jpg',
        text: 'Me encantó la atención al cliente.',
        avatar: 'img/persona3.jpg',
        name: 'Carlos Gómez',
        profession: 'Programador',
      },
      {
        img: 'img/fonfo.jpg',
        text: 'Recomendado al 100%.',
        avatar: 'IPHONE.png',
        name: 'Ana Torres',
        profession: 'Marketing',
      },
    ];
    this.currentIndex = 0;

    // Elementos del DOM
    this.testimonialImage = shadowRoot.querySelector('#testimonialImage');
    this.testimonialText = shadowRoot.querySelector('#testimonialText');
    this.clientAvatar = shadowRoot.querySelector('#clientAvatar');
    this.clientName = shadowRoot.querySelector('#clientName');
    this.clientProfession = shadowRoot.querySelector('#clientProfession');
    this.prevButton = shadowRoot.querySelector('#prevButton');
    this.nextButton = shadowRoot.querySelector('#nextButton');

    // Agregar eventos
    this.prevButton.addEventListener('click', () => this.showPrevious());
    this.nextButton.addEventListener('click', () => this.showNext());

    // Inicializar el testimonio
    this.updateTestimonial();
  }

  // Mostrar testimonio anterior
  showPrevious() {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
    this.updateTestimonial();
  }

  // Mostrar siguiente testimonio
  showNext() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    this.updateTestimonial();
  }

  // Actualizar el testimonio en pantalla
  updateTestimonial() {
    const testimonial = this.testimonials[this.currentIndex];
    this.testimonialImage.src = testimonial.img;
    this.testimonialText.textContent = `"${testimonial.text}"`;
    this.clientAvatar.src = testimonial.avatar;
    this.clientName.textContent = testimonial.name;
    this.clientProfession.textContent = testimonial.profession;
  }
}

// Registrar el componente
customElements.define('testimonial-carousel', TestimonialCarousel);
