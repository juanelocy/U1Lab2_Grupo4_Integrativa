document.addEventListener('DOMContentLoaded', () => {//Este evento asegura que el código se ejecute únicamente después de que el contenido HTML del documento haya sido completamente cargado
    //script para cargar el mapa desde el template en contact.html
    const mapContainer = document.getElementById('map-container'); //referencia
    const mapTemplate = document.getElementById('map-template').content.cloneNode(true); //localiza un elemento y copia completamente todo el contendio relacionado
    mapContainer.appendChild(mapTemplate); //inserta la copia del contenido del template en el contenedor elegido
});