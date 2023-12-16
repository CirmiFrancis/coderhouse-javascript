//===== Convertir el Texto del Título en Mayúscula =====

const titulo = document.getElementById('titulo');

titulo.addEventListener('input', function() {
    this.value = this.value.toUpperCase();
});

//===== Sistema de Notas =====

function Nota(titulo, texto) {
    this.titulo = titulo;
    this.texto = texto;
}

let nota1 = new Nota('TERMINAR TERCER PRE-ENTREGA', 
                      'Para antes del jueves, tengo que terminar la tercer pre-entrega del curso de JS.');
let nota2 = new Nota('TERMINAR PROYECTO FLEXBOX + GRID', 
                      'Proyecto que estoy realizando con el fin de repasar los conceptos de Flexbox y GRID, a pesar de que prefiera usar Bootstrap.');
let nota3 = new Nota('ARRANCAR PROYECTO FINAL', 
                      'Ya tengo pensado qué voy a hacer, voy a arrancarlo luego de entregar la tercer pre-entrega. Trabajaré con Bootstrap, SASS, varias librerías y, por supuesto, con HTML, CSS y JS.');

const listaNotas = [];

let nroNota = 1 // para que cada nota tenga un nro diferente asignado en la sessionStorage
let seccionNotas = document.querySelector('.listaNotas');   // obtenemos la clase listaNotas del HTML (div)
let botonCrearNota = document.getElementById('crearNota');  // obtenemos el id crearNota del HTML (button)
botonCrearNota.addEventListener('click', crearNota);    // creamos un evento para que, al clickear en el botón, se dispare la función crearNota

function crearNota(evento) {
    evento.preventDefault();    // para que al apretar el botón, no modifique el enlace

    let tituloNota = document.querySelector('input').value;     // para obtener el valor del input
    let textoNota = document.querySelector('textarea').value;   // para obtener el valor del textarea
    
    listaNotas.push(new Nota(tituloNota, textoNota));   // agregamos al array, un nuevo objeto 'Nota' con los dos valores anteriores

    let objetoComoJSON = JSON.stringify(new Nota(tituloNota, textoNota));   // pasamos a JSON el nuevo objeto 'Nota'
    sessionStorage.setItem(`nota${nroNota}`, objetoComoJSON );    // guardamos en el sessionStorage

    if (tituloNota !== '' && textoNota !== '') {    // si los campos no están vacíos...
        let nuevaNota = document.createElement('div');  // creamos un elemento div y la asignamos a una variable para poder manipularla
        nuevaNota.className = `nota ${nroNota}`;  // les agrega la clase 'nota' + el nro correspondiente

        let tituloNotaSeccion = document.createElement('p');
        if (tituloNota.length > 20) {
            let tituloNotaCorto = tituloNota.substring(0, 20) + '...';
            tituloNotaSeccion.textContent = tituloNotaCorto;
            nroNota += 1
        }
        else {
            tituloNotaSeccion.textContent = tituloNota;
            nroNota += 1
        }
        
        nuevaNota.appendChild(tituloNotaSeccion);

        seccionNotas.appendChild(nuevaNota);
    }
}

function agregarNota(){
    //listaNotas.push(nota);

    //let nota = new Nota(tituloNota, textoNota)

    //let nuevaListaNotas = document.getElementsByClassName('listaNotas');
    //let botonCrearNota = document.getElementById('crearNota');

    let nuevaNota = document.createElement('div');  
    nuevaNota.className = 'nota';   
    nuevaNota.id = 'notaFuncional'; // les agrega el id 'notaFuncional', haciendo referencia a aquellas creadas y agregadas a la lista

    // Crear un párrafo y establecer su contenido
    let parrafo = document.createElement('p');
    parrafo.textContent = 'Trabajos a realizar';

    // Añadir el párrafo al div
    nuevaNota.appendChild(parrafo);

    // Añadir el div al contenedor de notas
    contenedorNotas.appendChild(nuevaNota);
}

//===== Actualiza el  =====

let cantidadDeNotas = document.getElementById('cantidadDeNotas');
cantidadDeNotas.innerHTML = `<h4>Cantidad de Notas: ${nroNota} / 10</h4>`;

