class SellButton extends HTMLElement{
    constructor(){
        
        super();
    }

    connectedCallback(){
        let shadowRoot = this.attachShadow({mode:'open'});
        const template = document.querySelector('#sellBtn');
        const instance = template.content.cloneNode(true);
        shadowRoot.appendChild(instance);
    
        
    }
}
window.customElements.define('sell-button',SellButton)