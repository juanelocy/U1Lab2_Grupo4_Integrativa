class ProductServicesSection extends HTMLElement {
    connectedCallback() {
        this.render();
        this.setupAnimation();
    }

    render() {
        this.innerHTML = `
        <style>
            .product-services-container {
                padding: 2rem 1rem;
                text-align: center;
                font-family: 'Roboto', sans-serif;
                color: #333;
            }

            .product-services-container h6 {
                display: inline-block;
                background-color: #FEF1EF;
                color: #F9A392;
                text-transform: uppercase;
                padding: 0.25rem 0.5rem;
                border-radius: 0.25rem;
                margin-bottom: 1rem;
            }

            .product-services-container h1 {
                font-size: 2.5rem;
                font-weight: 500;
                margin-bottom: 3rem;
            }

            .service-cards {
                display: flex;
                justify-content: center;
                flex-wrap: wrap; /* Permite que las tarjetas se envuelvan si no caben en una fila */
            }

            .service-card {
                position: relative;
                margin: 1rem; /* Espaciado entre las tarjetas */
                width: calc(20% - 1rem); /* Ajusta el ancho según el número de tarjetas en fila */
                opacity: 0;
                transform: translateY(50px);
                transition: opacity 0.8s, transform 0.8s;
                border-radius: 0.5rem;
                overflow: hidden; /* Para que la imagen no sobresalga */
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }

            .service-card.visible {
                opacity: 1;
                transform: translateY(0);
            }

            .service-card img {
                width: 100%;
                height: auto; /* Mantiene la proporción de la imagen */
            }

            .service-text {
                padding: 1.5rem;
                background-color: rgba(255, 255, 255, 0.9);
            }

            .service-text h4 {
                font-size: 1.5rem;
                font-weight: 500;
                margin-bottom: 0.5rem;
            }

            .service-text p {
                margin-bottom: 1.5rem;
            }

            .service-text .btn {
                background-color: #F9A392;
                color: #fff;
                border-radius: 0.25rem;
                padding: 0.75rem 1.5rem;
                transition: background-color 0.3s;
                text-decoration: none;
            }

            .service-text .btn:hover {
                background-color: #FEF1EF;
                color: black;

            }
        </style>

        <div class="product-services-container">
          <h6 >Servicios de la Tienda</h6>
          <h1>Servicios Disponibles en Apple Store</h1>

          <div class="service-cards">
              <div class="service-card">
                  <img src="img/st3.jpg" alt="Asesoramiento">
                  <div class="service-text">
                      <h4>Asesoramiento</h4>
                      <p>Brindar asesoría sobre productos y soluciones tecnológicas, ayudando a los clientes a elegir su dispositivo.</p>
                      <a href="#" class="btn">Ver mas</a>
                  </div>
              </div>
              <div class="service-card">
                  <img src="img/st1.jpg" alt="Servicio Técnico">
                  <div class="service-text">
                      <h4>Servicio Técnico</h4>
                      <p>Recibir asistencia técnica para resolver problemas con sus dispositivos, incluyendo reparaciones y diagnósticos.</p>
                      <a href="#" class="btn">Ver mas</a>
                  </div>
              </div>
              <div class="service-card">
                  <img src="img/st2.jpg" alt="Personalizacion">
                  <div class="service-text">
                      <h4>Personalización</h4>
                      <p>Adaptar y configurar los productos Apple según las preferencias y necesidades individuales de cada usuario.</p>
                      <a href="#" class="btn">Ver mas</a>
                  </div>
              </div>
        
          </div>

        </div>
      `;
        this.setupAnimation();
    }

    setupAnimation() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        const serviceCards = this.querySelectorAll('.service-card');
        serviceCards.forEach(card => {
            observer.observe(card);
        });
    }
}

customElements.define('product-services-section', ProductServicesSection);
