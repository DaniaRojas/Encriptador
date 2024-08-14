function encriptar() {
    let texto = document.getElementById("texto").value;
   let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
   let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto
                        .replace(/e/gi, "enter")
                        .replace(/i/gi, "imes")
                        .replace(/o/gi, "ober")
                        .replace(/u/gi, "ufat")
                        .replace(/a/gi, "ai");

if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado con éxito";
    parrafo.textContent = "";
} else {
    alert("Debes ingresar un texto");
}
}

function desencriptar() {
    let texto = document.getElementById("texto").value;

    let textoCifrado = texto
                .replace(/enter/gi, "e")
                .replace(/imes/gi, "i")
                .replace(/ober/gi, "o")
                .replace(/ufat/gi, "u")
                .replace(/ai/gi, "a");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
    } else {
        alert("Debes ingresar un texto");
    }
}
