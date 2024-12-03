class MyTag extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const title = this.getAttribute('title') || 'Título no disponible';
        const img = this.getAttribute('img') || 'placeholder.jpg';
        const nombre = this.getAttribute('nombre') || 'Nombre no especificado';
        const cientifico = this.getAttribute('cientifico') || 'Científico no especificado';
        const tipo = this.getAttribute('tipo') || 'Tipo no especificado';
        const color = this.getAttribute('color') || 'Color no especificado';

        this.innerHTML = `
            <style>
                .card {
                    border-radius: 10px;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
                    overflow: hidden;
                    margin: 20px;
                    width: 300px;
                    padding: 20px;
                    text-align: center;
                    font-family: Arial, sans-serif;
                }
                .card img {
                    width: 100%;
                    border-radius: 5px;
                }
                .tags {
                    text-align: left;
                    margin-top: 10px;
                    font-size: 1em;
                }
                .tag {
                    margin-bottom: 5px;
                }
                .btn {
                    background-color: #868686;
                    border-radius: 5px;
                    color: rgb(33, 32, 32);
                    padding: 10px 20px;
                    text-transform: uppercase;
                    cursor: pointer;
                    margin-top: 10px;
                }
            </style>
            <div class="card">
                <h3>${title}</h3>
                <img src="${img}" alt="${title}">
                <div class="tags">
                    <div class="tag"><strong>Nombre:</strong> ${nombre}</div>
                    <div class="tag"><strong>Científico:</strong> ${cientifico}</div>
                    <div class="tag"><strong>Tipo:</strong> ${tipo}</div>
                    <div class="tag"><strong>Color:</strong> ${color}</div>
                </div>
                <button class="btn">VER MÁS</button>
            </div>
        `;
    }
}

customElements.define('my-tag', MyTag);
