import { reemplazarTexto } from "./replaceText.js";


export function encriptar(){
    const texto = document.querySelector('[data-input-form]');
    const inputTexto = texto.value;
    
    console.log(inputTexto);

    
    let newStr = inputTexto.replace(/\a|e|i|o|u/gi, function(match) {
      if (match === "i") {
        return "imes";
      } if (match === "e") {
        return "enter";
      }
      if (match === "a") {
        return "ai";
      }
      if (match === "o") {
        return "ober";
      }
      if (match === "u") {
        return "ufat";
      }
    });

    reemplazarTexto(newStr);
  }