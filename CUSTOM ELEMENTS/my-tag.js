class myTag extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            ${this.templateCss()}
            ${this.template()}
        `;
    }

    template() {
        // Mapeo de atributos con valores predeterminados
        const title = this.getAttribute('title') || 'Título no disponible';
        const synopsis = this.getAttribute('synopsis') || 'Sinopsis no disponible.';
        const duration = this.getAttribute('duration') || 'Duración desconocida';
        const genre = this.getAttribute('genre') || 'Género no definido';
        const img = this.getAttribute('img') || 'placeholder.jpg'; // Imagen predeterminada
        const director = this.getAttribute('director') || 'Director no especificado';
        const protagonist1 = this.getAttribute('protagonist1') || 'Protagonista 1 no especificado';
        const protagonist2 = this.getAttribute('protagonist2') || 'Protagonista 2 no especificado';
        const protagonist3 = this.getAttribute('protagonist3') || 'Protagonista 3 no especificado';
        const backgroundColor = this.getAttribute('background-color') || '#fff';

        return `
            <div class="card" style="background-color: ${backgroundColor}">
                <h3>${title}</h3>
                <img src="${img}" alt="${title}">
                <p>${synopsis}</p>
                <div class="tags">
                    <span class="tag">Duración: ${duration}</span>
                    <br><hr>
                    <span class="tag">Género: ${genre}</span>
                    <br><hr>
                    <span class="tag">${director}</span>
                    <br><hr>
                    <span class="tag">${protagonist1}</span>
                    <br><hr>
                    <span class="tag">${protagonist2}</span>
                    <br><hr>
                    <span class="tag">${protagonist3}</span>
                    <br><hr>
                </div>
            </div>
            <br/>
        `;
    }

    templateCss() {
        return `
            <style>
            .card {
                border-radius: 10px;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
                overflow: hidden;
                margin: 20px;
                width: 300px;
                padding: 20px;
                display: inline-block;
            }
            .card h3 {
                font-size: 1.5em;
                margin-bottom: 10px;
            }
            
            .card img {
                width: 100%;
                border-radius: 5px;
            }
            
            .card p {
                margin-bottom: 10px;
            }
            
            .tags {
                margin-bottom: 10px;
            }
            
            .tag {
                color: #000;
                border-radius: 3px;
                padding: 3px 6px;
                margin-right: 5px;
                font-size: 0.8em;
            }
            </style>
        `;
    }
}

window.customElements.define('my-tag', myTag);
