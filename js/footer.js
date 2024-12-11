// Función para cargar un template y añadirlo al DOM
function loadTemplate(file, containerId) {
    fetch(file)
        .then(response => response.text())
        .then(html => {
            const template = document.createElement('div');
            template.innerHTML = html;

            const content = template.querySelector('template').content.cloneNode(true);
            document.getElementById(containerId).appendChild(content);
        })
        .catch(error => console.error(`Error al cargar el template ${file}:`, error));
}

// Cargar el encabezado
loadTemplate('footer.html', 'footer-container');