class HolaAdri extends HTMLElement {

    constructor(){
        super()
        this.attachShadow({ mode: 'open' });


    }
    connectedCallback(){
        this.innerHTML = '<h1>HOLA ESTAMOS WEB COMPONENTS</h1>'


    }
}
window.customElements.define('Hola',Hola Adriana)
class MiElemento extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      const template = document.getElementById('mi-template');
      const clone = template.content.cloneNode(true);
      this.shadowRoot.appendChild(clone);
    }
  }