class TarjetaProducto extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        let shadowRoot = this.attachShadow({mode: 'open'});
        const template = document.querySelector('#tarjeta');
        const instance = template.content.cloneNode(true);
        shadowRoot.appendChild(instance);
    }
}
window.customElements.define('tarjeta-producto', TarjetaProducto);
