import { testimonials } from './testimonialsData.js';
import { createNavigationButtons } from './navigationButtons.js';

export class TestimonialCarousel {
  constructor(container) {
    this.container = container;
    this.currentIndex = 0;
    this.testimonials = testimonials;

    this.render();
    this.attachEventListeners();
  }

  render() {
    this.container.innerHTML = `
      <div class="carousel">
        <div class="image-container">
          <img id="testimonialImage" src="${this.testimonials[0].img}" alt="Testimonial">
        </div>
        <div class="content-container">
          <h3>Testimonios</h3>
          <h1>Lo que dicen nuestros clientes</h1>
          <div class="client-info">
            <img id="clientAvatar" src="${this.testimonials[0].avatar}" alt="Client">
            <div>
              <div id="clientName">${this.testimonials[0].name}</div>
              <div id="clientProfession">${this.testimonials[0].profession}</div>
            </div>
          </div>
          <p class="testimonial-text" id="testimonialText">"${this.testimonials[0].text}"</p>
          <div class="navigation-buttons"></div>
        </div>
      </div>
    `;

    // Crear botones de navegación
    const navButtonsContainer = this.container.querySelector('.navigation-buttons');
    navButtonsContainer.append(...createNavigationButtons(this.testimonials.length, 0));
  }

  attachEventListeners() {
    const prevButton = this.container.querySelector('.nav-button-prev');
    const nextButton = this.container.querySelector('.nav-button-next');
    const navButtons = this.container.querySelectorAll('.nav-button');

    prevButton.addEventListener('click', () => this.showPrevious(navButtons));
    nextButton.addEventListener('click', () => this.showNext(navButtons));
  }

  showPrevious(navButtons) {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
    this.updateTestimonial(navButtons);
  }

  showNext(navButtons) {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    this.updateTestimonial(navButtons);
  }

  updateTestimonial(navButtons) {
    const testimonial = this.testimonials[this.currentIndex];
    this.container.querySelector('#testimonialImage').src = testimonial.img;
    this.container.querySelector('#testimonialText').textContent = `"${testimonial.text}"`;
    this.container.querySelector('#clientAvatar').src = testimonial.avatar;
    this.container.querySelector('#clientName').textContent = testimonial.name;
    this.container.querySelector('#clientProfession').textContent = testimonial.profession;

    navButtons.forEach((button, index) => {
      button.classList.toggle('active', index === this.currentIndex);
    });
  }
}
