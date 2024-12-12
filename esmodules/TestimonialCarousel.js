// Importamos los datos de testimonios y la función para crear botones de navegación
import { testimonials } from './testimonialsData.js';
import { createNavigationButtons } from './navigationButtons.js';

// Clase para manejar el carrusel de testimonios
export class TestimonialCarousel {
  constructor(container) {
    // Inicializamos las propiedades de la clase
    this.container = container; // Contenedor principal del carrusel
    this.currentIndex = 0; // Índice del testimonio actual (comienza en el primero)
    this.testimonials = testimonials; // Lista de testimonios importados

    // Renderizamos la interfaz y configuramos los eventos
    this.render();
    this.attachEventListeners();
  }

  // Método para renderizar el carrusel en el contenedor
  render() {
    // Insertamos el HTML dinámico dentro del contenedor principal
    this.container.innerHTML = `
      <div class="carousel">
        <!-- Contenedor de la imagen principal del testimonio -->
        <div class="image-container">
          <img id="testimonialImage" src="${this.testimonials[0].img}" alt="Testimonial">
        </div>

        <!-- Contenedor del contenido textual del testimonio -->
        <div class="content-container">
          <h3>Testimonios</h3>
          <h1>Lo que dicen nuestros clientes</h1>
          <!-- Información del cliente -->
          <div class="client-info">
            <img id="clientAvatar" src="${this.testimonials[0].avatar}" alt="Client">
            <div>
              <div id="clientName">${this.testimonials[0].name}</div>
              <div id="clientProfession">${this.testimonials[0].profession}</div>
            </div>
          </div>
          <!-- Texto del testimonio -->
          <p class="testimonial-text" id="testimonialText">"${this.testimonials[0].text}"</p>
          <!-- Contenedor para los botones de navegación -->
          <div class="navigation-buttons"></div>
        </div>
      </div>
    `;

    // Creamos los botones de navegación utilizando la función importada
    const navButtonsContainer = this.container.querySelector('.navigation-buttons');
    navButtonsContainer.append(...createNavigationButtons(this.testimonials.length, 0));
  }

  // Método para configurar los eventos de los botones de navegación
  attachEventListeners() {
    // Referenciamos los botones de navegación previos y siguientes
    const prevButton = this.container.querySelector('.nav-button-prev');
    const nextButton = this.container.querySelector('.nav-button-next');
    const navButtons = this.container.querySelectorAll('.nav-button'); // Todos los botones de navegación (indicadores)

    // Configuramos el evento para el botón "anterior"
    prevButton.addEventListener('click', () => this.showPrevious(navButtons));
    // Configuramos el evento para el botón "siguiente"
    nextButton.addEventListener('click', () => this.showNext(navButtons));
  }

  // Método para mostrar el testimonio anterior
  showPrevious(navButtons) {
    // Calculamos el índice anterior (circular, vuelve al final si está en el primero)
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
    // Actualizamos el testimonio mostrado
    this.updateTestimonial(navButtons);
  }

  // Método para mostrar el siguiente testimonio
  showNext(navButtons) {
    // Calculamos el índice siguiente (circular, vuelve al inicio si está en el último)
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    // Actualizamos el testimonio mostrado
    this.updateTestimonial(navButtons);
  }

  // Método para actualizar la información del testimonio mostrado
  updateTestimonial(navButtons) {
    // Obtenemos el testimonio actual utilizando el índice
    const testimonial = this.testimonials[this.currentIndex];

    // Actualizamos la imagen principal del testimonio
    this.container.querySelector('#testimonialImage').src = testimonial.img;
    // Actualizamos el texto del testimonio
    this.container.querySelector('#testimonialText').textContent = `"${testimonial.text}"`;
    // Actualizamos el avatar del cliente
    this.container.querySelector('#clientAvatar').src = testimonial.avatar;
    // Actualizamos el nombre del cliente
    this.container.querySelector('#clientName').textContent = testimonial.name;
    // Actualizamos la profesión del cliente
    this.container.querySelector('#clientProfession').textContent = testimonial.profession;

    // Actualizamos la clase 'active' en los botones de navegación (indicadores)
    navButtons.forEach((button, index) => {
      button.classList.toggle('active', index === this.currentIndex);
    });
  }
}
