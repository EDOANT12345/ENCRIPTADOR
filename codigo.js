
// función para encriptar la palabra
function encriptar(palabra) {

 
    let encriptado = "";
    for (let i = 0; i < palabra.length; i++) {
      let letra = palabra.charAt(i);
      switch (letra) {
        case "e":
          encriptado += "enter";
          break;
        case "i":
          encriptado += "imes";
          break;
        case "a":
          encriptado += "ai";
          break;
        case "o":
          encriptado += "ober";
          break;
        case "u":
          encriptado += "ufat";
          break;
        default:
          encriptado += letra;
      }
    }
    return encriptado;
  }
  
  // función para desencriptar la palabra
  function desencriptar(palabra) {

    

   
    let desencriptado = "";
    for (let i = 0; i < palabra.length; i++) {
      let letra = palabra.charAt(i);
      if (letra === "e") {
        desencriptado += "e";
        i += 4;
      } else if (letra === "i") {
        desencriptado += "i";
        i += 3;
      } else if (letra === "a") {
        desencriptado += "a";
        i += 1;
      } else if (letra === "o") {
        desencriptado += "o";
        i += 3;
      } else if (letra === "u") {
        desencriptado += "u";
        i += 3;
      } else {
        desencriptado += letra;
      }
    }
    return desencriptado;
  }

  


  
 // función para copiar el texto al portapapeles
  function copiarTexto(texto) {
  const textoNormalizado = texto.normalize("NFD");
  const tieneAcentos = /[^\u0000-\u007F]/.test(textoNormalizado);

  if (tieneAcentos) {
    alert('No se permiten letras o palabras con acento.');
    return;
  }

  const input = document.createElement("textarea");
  input.value = texto;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
  alert('El texto se ha copiado al portapapeles.');

  document.getElementById("texto").value = "";
  document.getElementById("resultado").innerHTML = "";
}

  
  // evento del botón de encriptar
  document.getElementById("encriptar").addEventListener("click", function() {
    const texto = document.getElementById("texto").value.toLowerCase();
    
    const textoNormalizado = texto.normalize("NFD");
    const tieneAcentos = /[^\u0000-\u007F]/.test(textoNormalizado);
    
    if (tieneAcentos) {
      alert('No se permiten letras o palabras con acento en el texto a encriptar.');
      return;
    }
    
    const encriptado = encriptar(texto);
    document.getElementById("resultado").innerHTML = encriptado;
  });
  
  
  // evento del botón de desencriptar
  document.getElementById("desencriptar").addEventListener("click", function() {
    const texto = document.getElementById("texto").value.toLowerCase();
    
    const textoNormalizado = texto.normalize("NFD");
    const tieneAcentos = /[^\u0000-\u007F]/.test(textoNormalizado);
    
    if (tieneAcentos) {
      alert('No se permiten letras o palabras con acento en el texto a desencriptar.');
      return;
    }
    
    const desencriptado = desencriptar(texto);
    document.getElementById("resultado").innerHTML = desencriptado;
  });
  
  
  // evento del botón de copiar
  document.getElementById("copiar").addEventListener("click", function() {
    const texto = document.getElementById("resultado").innerHTML;
    copiarTexto(texto);
  });
  
 





  
  