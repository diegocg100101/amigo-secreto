// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigosLista = []

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Limpia el texto en pantalla si se vuelve a iniciar
    limpiar('resultado')

    // Obtiene el valor de la entrada
    let amigo = document.querySelector('#amigo').value;

    // Valida que el nombre sea válido
    if(amigo) {
        // Inserta nombre a la lista
        amigosLista.push(amigo);

        // Muestra el último valor agregado de la lista
        mostrarTexto('listaAmigos', amigosLista[amigosLista.length - 1]);

        // Limpia el campo
        limpiar('amigo')
    } else {
        limpiar('amigo')
        alert('Por favor ingresa un nombre válido');
    }
}

// Función para elegir un nombre de forma aleatoria
function sortearAmigo() {
    // Valida que se hayan ingresado al menos un nombre
    if(amigosLista.length > 0) {
        // Genera un número aleatorio con del tamaño de la lista
        let numeroAleatorio = Math.floor(Math.random() * amigosLista.length);

        // Muestra el nombre correspondiente al índice
        mostrarTexto('resultado', 'El amigo sorteado es: ' + amigosLista[numeroAleatorio]);

        // Limpia la lista
        limpiar('listaAmigos')

        // Reinicia la lista
        amigosLista = []
    } else {
        limpiar('resultado')
        alert('No se han ingresado nombres');
    }
}


// Función para limpiar los elementos ingresados
function limpiar(elemento) {
    document.getElementById(elemento).value = ''
    document.getElementById(elemento).innerHTML = ''
}

// Función para añadir texto a las listas
function mostrarTexto(elemento, valor) {
    let mostrarAmigos = document.getElementById(elemento);
    let elementoResultado = document.createElement('li');
    elementoResultado.appendChild(document.createTextNode(valor));
    mostrarAmigos.appendChild(elementoResultado);
}