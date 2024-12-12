export function createNavigationButtons(total, currentIndex) {
    const buttons = []; // Arreglo para almacenar los botones que se crearán.

    // Crear el botón de navegación "anterior".
    const prevButton = document.createElement('button');
    prevButton.className = 'nav-button nav-button-prev'; // Se le asigna una clase para estilizarlo.
    prevButton.textContent = '❮'; // Texto del botón (una flecha hacia la izquierda).
    buttons.push(prevButton); // Se agrega el botón al arreglo.

    // Crear el botón de navegación "siguiente".
    const nextButton = document.createElement('button');
    nextButton.className = 'nav-button nav-button-next'; // Clase para estilizar el botón.
    nextButton.textContent = '❯'; // Texto del botón (una flecha hacia la derecha).
    buttons.push(nextButton); // Se agrega el botón al arreglo.

    // Crear los puntos de navegación (indicadores) para cada testimonio.
    const navDots = Array.from({ length: total }, (_, index) => {
        const dot = document.createElement('button'); // Crear un botón para cada punto.
        dot.className = `nav-button ${index === currentIndex ? 'active' : ''}`; 
        // Si el índice actual corresponde al testimonio visible, se marca como "activo".
        return dot; // Devuelve el botón creado.
    });

    // Combinar los botones de "anterior" y "siguiente" con los indicadores.
    return [...buttons, ...navDots]; // Se retorna un arreglo con todos los elementos.
}
