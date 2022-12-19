

export function copyText() {

    var textarea = document.querySelector(".resultado");
    var texto = textarea.textContent;
    // Creamos un elemento de entrada temporal
    console.log(texto);
    navigator.clipboard.writeText(texto);
  
    // Mostramos un mensaje de éxito al usuario
    alert('Texto copiado al portapapeles');
  }

