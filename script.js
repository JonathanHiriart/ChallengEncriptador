// Se ejecuta cuando se ha cargado completamente el DOM
document.addEventListener('DOMContentLoaded', function () {
    // Obtener referencias a elementos del DOM
    var textoEncriptado = document.getElementById('txtEncriptado');
    var botonCopiar = document.getElementById('botonCopiar');
    var input = document.getElementById('txtextoOriginal');

    // Verificar que los elementos existen
    if (textoEncriptado && botonCopiar && input) {
        console.log("Todos los elementos se han encontrado.");
        // Ocultar elementos al cargar la página
        // textoEncriptado.style.display = 'none';
        // botonCopiar.style.display = 'none';

        // Resto de tu script...
    } else {
        console.error("Alguno de los elementos no se ha encontrado.");
        console.log("Texto Encriptado:", textoEncriptado);
        console.log("Botón Copiar:", botonCopiar);
        console.log("Input:", input);
    }
});

// Obtener referencias a elementos del DOM fuera del evento 'DOMContentLoaded'
var textoEncriptado = document.getElementById('txtEncriptado');
var botonCopiar = document.getElementById('botonCopiar');
var input = document.getElementById('txtextoOriginal');

// Ocultar elementos al cargar la página
// textoEncriptado.style.display = 'none';
// botonCopiar.style.display = 'none';

// Agregar un evento de escucha al evento 'input' para validar el contenido ingresado
input.addEventListener('input', function () {
    // Obtener el valor del campo de entrada
    var text = this.value;

    // Eliminar acentos utilizando una expresión regular
    var cleanText = text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    // Filtrar solo letras minúsculas
    cleanText = cleanText.replace(/[^a-z\s]/g, '');

    // Asignar el valor limpio al campo de entrada
    this.value = cleanText;
});

// Se ejecuta cuando se ha cargado completamente el DOM
document.addEventListener('DOMContentLoaded', function () {
    // Obtener referencias a elementos del DOM
    var textoEncriptado = document.getElementById('txtEncriptado');
    var botonCopiar = document.getElementById('botonCopiar'); // Asegúrate de que el botón tenga este ID en el HTML
    var input = document.getElementById('txtextoOriginal');

    if (textoEncriptado && botonCopiar && input) {
        // Ocultar el textarea de texto encriptado y el botón de copiar al cargar la página
        // textoEncriptado.style.display = 'none';
        // botonCopiar.style.display = 'none';

        // Agregar un evento de escucha al evento 'input' para validar el contenido ingresado
        input.addEventListener('input', function () {
            var text = this.value;
            var cleanText = text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            cleanText = cleanText.replace(/[^a-z\s]/g, '');
            this.value = cleanText;
        });
    } else {
        console.error("Alguno de los elementos no se ha encontrado.");
    }
});

// Función para encriptar el texto
function Encriptar() {
    // Obtener referencias a elementos del DOM
    var textarea = document.getElementById('txtextoOriginal');
    var textoOriginal = textarea.value;
    var textoEncriptado = "";
    var letraEncriptada = "";

    // Recorrer cada letra del texto original
    for (let i = 0; i < textoOriginal.length; i++) {
        const letra = textoOriginal[i];
        letraEncriptada = "";

        // Encriptar cada letra según la lógica definida
        switch (letra) {
            case "a":
                letraEncriptada = "ai";
                break;
            case "e":
                letraEncriptada = "enter";
                break;
            case "i":
                letraEncriptada = "imes";
                break;
            case "o":
                letraEncriptada = "ober";
                break;
            case "u":
                letraEncriptada = "ufat";
                break;
            default:
                letraEncriptada = letra;
                break;
        }

        // Construir el texto encriptado
        textoEncriptado = textoEncriptado + letraEncriptada;
    }

    // Mostrar el texto encriptado en el textarea correspondiente
    var txtEncriptado = document.getElementById('txtEncriptado');
    if (txtEncriptado) {
        txtEncriptado.style.display = 'block';
        document.getElementById('botonCopiar').style.display = 'block';
        txtEncriptado.value = textoEncriptado;
    } else {
        console.error("No se encontró el elemento con ID 'txtEncriptado'");
    }
}

// Función para desencriptar el texto
function DesEncriptar() {
    var input = document.getElementById('txtextoOriginal');
    var textoEncriptado = input.value;
    var Matriz2 = [
        { letra: "a", valor: "ai" },
        { letra: "e", valor: "enter" },
        { letra: "i", valor: "imes" },
        { letra: "o", valor: "ober" },
        { letra: "u", valor: "ufat" }
    ];

    // Reemplazar cada valor encriptado con la letra correspondiente
    for (let i = 0; i < Matriz2.length; i++) {
        if (textoEncriptado.includes(Matriz2[i].valor)) {
            textoEncriptado = textoEncriptado.replaceAll(Matriz2[i].valor, Matriz2[i].letra);
        }
    }
    
    // Mostrar el texto desencriptado en la consola
    console.log("El texto Desencriptado es...", textoEncriptado);
    var txtEncriptado = document.getElementById('txtEncriptado');
    txtEncriptado.value = textoEncriptado;
}

// Función para copiar el texto encriptado al portapapeles
function Copiar() {
    var txtEncriptado = document.getElementById('txtEncriptado');
    var txtextoOriginal = document.getElementById('txtextoOriginal');
    
    // Seleccionar el texto del elemento
    txtEncriptado.select();
    txtEncriptado.setSelectionRange(0, 99999); // Para dispositivos móviles

    try {
        // Copiar el texto al portapapeles utilizando la API de Clipboard
        navigator.clipboard.writeText(txtEncriptado.value)
            .then(function () {
                console.log('Texto copiado al portapapeles:', txtEncriptado.value);
            })
            .catch(function (err) {
                console.error('Error al intentar copiar al portapapeles:', err);
            });
    } catch (err) {
        console.error('Error al intentar copiar al portapapeles:', err);
    }

    // Limpiar el texto original
    txtextoOriginal.value = '';
}
