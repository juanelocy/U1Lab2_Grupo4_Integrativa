class PhoneCard extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
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
            </style>
            <div class="card">
                <img>
                <h3></h3>
                <p class="price"></p>
                <p class="description"></p>
                
            </div>
        `;


        shadow.appendChild(template.content.cloneNode(true));

        
        this.render();
    }

    render() {
        const shadow = this.shadowRoot;

        const img = shadow.querySelector('img');
        const title = shadow.querySelector('h3');
        const price = shadow.querySelector('.price');
        const description = shadow.querySelector('.description');

        img.src = this.getAttribute('img');
        img.alt = this.getAttribute('title');
        title.textContent = this.getAttribute('title');
        price.textContent = this.getAttribute('price');
        description.textContent = this.getAttribute('description');
    }
}

customElements.define('phone-card', PhoneCard);
