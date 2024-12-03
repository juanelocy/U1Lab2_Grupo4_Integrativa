class PhoneCard extends HTMLElement {
    constructor() {
        super();

        // Crear el shadow DOM
        const shadow = this.attachShadow({ mode: 'open' });

        // Plantilla del template
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                .card {
                    border-radius: 10px;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
                    background: white;
                    width: 300px;
                    padding: 20px;
                    text-align: center;
                }
                .card img {
                    width: 100%;
                    height: 300px;
                    object-fit: cover;
                    border-radius: 10px;
                }
                .card h3 {
                    margin: 10px 0;
                    font-size: 1.5em;
                    color: #333;
                }
                .card p {
                    margin: 5px 0;
                    color: #555;
                }
                .price {
                    font-size: 1.2em;
                    color: #007bff;
                    margin: 10px 0;
                }
                .btn {
                    display: inline-block;
                    padding: 10px 20px;
                    font-size: 1em;
                    color: white;
                    background-color: #007bff;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    text-decoration: none;
                }
                .btn:hover {
                    background-color: #0056b3;
                }
            </style>
            <div class="card">
                <img>
                <h3></h3>
                <p class="price"></p>
                <p class="description"></p>
                <button class="btn">Ver más</button>
            </div>
        `;

        // Clonar y adjuntar el template al shadow DOM
        shadow.appendChild(template.content.cloneNode(true));

        // Asignar atributos dinámicos
        this.render();
    }

    render() {
        const shadow = this.shadowRoot;

        const img = shadow.querySelector('img');
        const title = shadow.querySelector('h3');
        const price = shadow.querySelector('.price');
        const description = shadow.querySelector('.description');

        img.src = this.getAttribute('img') || 'placeholder.jpg';
        img.alt = this.getAttribute('title') || 'Teléfono Apple';
        title.textContent = this.getAttribute('title') || 'Teléfono Apple';
        price.textContent = this.getAttribute('price') || 'Precio no disponible';
        description.textContent = this.getAttribute('description') || 'Descripción no disponible';
    }
}

// Registrar el componente personalizado
customElements.define('phone-card', PhoneCard);
