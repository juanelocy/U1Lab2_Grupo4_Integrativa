class MyTag extends HTMLElement {
    constructor() {
        super();

        // Clonar el contenido del template
        const template = document.getElementById('my-tag-template');
        const content = template.content.cloneNode(true);

        // Asignar contenido al elemento
        this.appendChild(content);

        // Personalizar el contenido
        this.render();
    }

    render() {
        const card = this.querySelector('.card');
        const title = this.querySelector('h3');
        const img = this.querySelector('img');
        const synopsis = this.querySelector('p');
        const tags = this.querySelector('.tags');

        title.textContent = this.getAttribute('title') || 'Título no disponible';
        img.src = this.getAttribute('img') || 'placeholder.jpg';
        img.alt = this.getAttribute('title') || 'Imagen no disponible';
        synopsis.textContent = this.getAttribute('Tipo') || 'Sinopsis no disponible.';
        tags.innerHTML = `
            
            <span class="tag">${this.getAttribute('Nombre') || 'Director no especificado'}</span>
            <br><hr>
            <span class="tag">${this.getAttribute('Cientifico') || 'Protagonista 1 no especificado'}</span>
            <br><hr>
            <span class="tag">${this.getAttribute('Tipo') || 'Protagonista 2 no especificado'}</span>
            <br><hr>
            <span class="tag">${this.getAttribute('Color') || 'Protagonista 3 no especificado'}</span>
        `;
    }
}

window.customElements.define('my-tag', MyTag);
