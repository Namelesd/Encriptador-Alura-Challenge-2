import { reemplazarTexto } from "./replaceText.js";

export function desencriptar(){
    const texto = document.querySelector('[data-input-form]');
    const inputTexto = texto.value;
  

    
    let newStr = inputTexto.replace(/\imes|enter|ai|ober|ufat/gi, function(match) {
      if (match === "imes") {
        return "i";
      } if (match === "enter") {
        return "e";
      }
      if (match === "ai") {
        return "a";
      }
      if (match === "ober") {
        return "o";
      }
      if (match === "ufat") {
        return "u";
      }
    });

    reemplazarTexto(newStr);

  }