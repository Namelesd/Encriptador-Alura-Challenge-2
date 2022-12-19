import { desencriptar } from "./desencriptar.js";
import { encriptar } from "./encriptar.js";
import { autosize } from "./saltoLinea.js";

const  encriptarBTN = document.querySelector('[data-form-btn]');
const desencriptarBTN = document.querySelector('[data-form-btnd]');
var textarea = document.querySelector('[data-input-form]');

textarea.addEventListener('keydown', autosize);
encriptarBTN.addEventListener("click",encriptar);
desencriptarBTN.addEventListener("click",desencriptar);









