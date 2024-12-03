class MyTag extends HTMLElement {
    constructor() {
        super();

        // Clonar el contenido del template
        const template = document.getElementById('my-tag-template');
        const content = template.content.cloneNode(true);

        // Shadow DOM y adjuntar el contenido clonado
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(content);

        this.render();
    }

    render() {
        const title = this.shadowRoot.querySelector('h3');
        const img = this.shadowRoot.querySelector('img');
        const tags = this.shadowRoot.querySelector('.tags');

        title.textContent = this.getAttribute('title') ;
        img.src = this.getAttribute('img') ;
        img.alt = this.getAttribute('title');

        tags.innerHTML = `
            <div class="tag"><strong>Nombre:</strong> ${this.getAttribute('Nombre') }</div>
            <div class="tag"><strong>Científico:</strong> ${this.getAttribute('Cientifico') }</div>
            <div class="tag"><strong>Tipo:</strong> ${this.getAttribute('Tipo') }</div>
            <div class="tag"><strong>Color:</strong> ${this.getAttribute('Color') }</div>
        `;
    }
}

window.customElements.define('my-tag', MyTag);
