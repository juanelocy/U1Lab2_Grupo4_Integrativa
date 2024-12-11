class AppleSalesSection extends HTMLElement {
  connectedCallback() {
    this.render();
    this.setupAnimation();
  }

  render() {
    this.innerHTML = `
      <style>
        .apple-sales-container {
          max-width: 1140px;
          margin: 0 auto;
          padding: 3rem 1rem;
          font-family: 'Roboto', sans-serif;
          color: #333;
        }
        .row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
        }
        .col {
          flex: 1;
          padding: 1rem;
        }
        img {
          max-width: 100%;
          height: auto;
          border-radius: 0.5rem;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        h6 {
          display: inline-block;
          background-color: #ccc;
          color: #F9A392;
          text-transform: uppercase;
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          margin-bottom: 0.5rem;
        }
        h1 {
          color: #333;
          margin-bottom: 1rem;
        }
        p {
          border-left: 4px solid #F9A392;
          padding-left: 1rem;
          margin-bottom: 1rem;
          text-align: justify;
        }
        .stats {
          display: flex;
          justify-content: space-between;
        }
        .stat-box {
          background-color: ;
          text-align: center;
          padding: 1rem;
          border-radius: 0.5rem;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          flex: 1;
          margin: 0 0.5rem;
        }
        .stat-number {
          font-size: 2.5rem;
          font-weight: bold;
          color: #333;
        }
        .stat-label {
          text-transform: uppercase;
          font-size: 0.875rem;
          color: black;
        }
        @media (max-width: 768px) {
          .row {
            flex-direction: column;
          }
          .col {
            flex: none;
            width: 100%;
          }
        }
        .fade-in {
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }
        .fade-in.visible {
          opacity: 1;
        }
      </style>
      <div class="apple-sales-container fade-in">
        <div class="row">
          <div class="col">
            <img src="img/imagen.jpg" alt="Productos Apple">
          </div>
          <div class="col">
            <h6 class="d-inline-block bg-light text-primary text-uppercase py-1 px-2">Sobre Nuestros Productos</h6>
            <h1>Descubre la Innovación Apple</h1>
            <p>
              En nuestra tienda, ofrecemos una amplia gama de productos Apple, desde los últimos iPhones hasta las potentes MacBooks.
              Cada dispositivo está diseñado para brindar una experiencia única y satisfacer las necesidades de nuestros clientes más exigentes.
            </p>
            <div class="stats">
              <div class="stat-box">
                <div class="stat-number  text-primary text-uppercase py-1 px-2" data-target="5">0</div>
                <div class="stat-label">Años de Experiencia</div>
              </div>
              <div class="stat-box">
                <div class="stat-number text-primary text-uppercase py-1 px-2" data-target="10000">0</div>
                <div class="stat-label">Clientes Satisfechos</div>
              </div>
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
          this.animateNumbers();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    observer.observe(this.querySelector('.fade-in'));
  }

  animateNumbers() {
    const numberElements = this.querySelectorAll('.stat-number');
    numberElements.forEach(el => {
      const target = parseInt(el.getAttribute('data-target'), 10);
      let current = 0;
      const increment = target / 100;
      const updateNumber = () => {
        if (current < target) {
          current += increment;
          el.textContent = Math.round(current).toLocaleString();
          requestAnimationFrame(updateNumber);
        } else {
          el.textContent = target.toLocaleString();
        }
      };
      updateNumber();
    });
  }
}

customElements.define('apple-sales-section', AppleSalesSection);