class AirPodsCard extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
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
            </style>
            <div class="card">
                <img>
                <h3></h3>
                <p class="price"></p>
                <p class="description"></p>
            </div>
        `;
        this.render();
    }
    render() {
        const shadow = this.shadowRoot;
        shadow.querySelector('img').src = this.getAttribute('img') ;
        shadow.querySelector('h3').textContent = this.getAttribute('title') ;
        shadow.querySelector('.price').textContent = this.getAttribute('price') ;
        shadow.querySelector('.description').textContent = this.getAttribute('description') ;
    }
}
window.customElements.define('airpods-card', AirPodsCard);
