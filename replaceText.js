import { copyText } from "./copiarTexto.js";
import {autosize} from "./saltoLinea.js";

export function reemplazarTexto (newStr){
    const section = document.querySelector('[data-section]');


    section.innerHTML="";
    const texto=document.createElement("p");
    const botonCopiar=document.createElement("button");
    const divCopiar=document.createElement("div");

    texto.classList.toggle("resultado");
    botonCopiar.classList.toggle("Btn");
    botonCopiar.classList.toggle("copiar");
    divCopiar.classList.toggle("divCopiar");

    botonCopiar.innerText="Copiar";
    texto.innerText=newStr;

    divCopiar.appendChild(texto);
    divCopiar.appendChild(botonCopiar);

    section.appendChild(divCopiar);

    const copiarBTN = document.querySelector('.copiar');
    copiarBTN.addEventListener("click",copyText);
    
    autosize(section);
}

