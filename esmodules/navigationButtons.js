export function createNavigationButtons(total, currentIndex) {
    const buttons = [];
  
    const prevButton = document.createElement('button');
    prevButton.className = 'nav-button nav-button-prev';
    prevButton.textContent = '❮';
    buttons.push(prevButton);
  
    const nextButton = document.createElement('button');
    nextButton.className = 'nav-button nav-button-next';
    nextButton.textContent = '❯';
    buttons.push(nextButton);
  
    const navDots = Array.from({ length: total }, (_, index) => {
      const dot = document.createElement('button');
      dot.className = `nav-button ${index === currentIndex ? 'active' : ''}`;
      return dot;
    });
  
    return [...buttons, ...navDots];
  }
  