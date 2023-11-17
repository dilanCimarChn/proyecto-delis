document.addEventListener("DOMContentLoaded", function () {
    // Llamamos a la función para establecer el color inicial en el primer botón
    toggleColor(1);
  });
  
  // Función que se llama al hacer clic en un botón
  function toggleColor(buttonNumber) {
    const buttons = document.querySelectorAll('.button');
  
    buttons.forEach((button, index) => {
      if (index + 1 === buttonNumber) {
        button.classList.add('selected');
      } else {
        button.classList.remove('selected');
      }
    });
  }
  