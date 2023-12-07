//===========================================================================================================================================

// ------------ FUNCIÓN CONSTRUCTORA ------------
function Juego(nombre, precio, platf, anio) {
  this.nombre     = nombre;
  this.precio     = precio;
  this.plataforma = platf;
  this.anio       = anio;
}

// ------------ OBJETOS, ATRIBUTOS & ARRAY ------------
const minecraft = new Juego( 'MINECRAFT', 12000, 'PC',  2011);
const fifa      = new Juego( 'FIFA',      24000, 'PC',  2023);
const pokemon   = new Juego( 'POKEMON',   64000, 'NS',  2022);
const spiderman = new Juego( 'SPIDERMAN', 90000, 'PS5', 2023);
const gta       = new Juego( 'GTA',       50000, 'PS5', 2013);

let catalogo = [minecraft, fifa, pokemon, spiderman, gta];

//===========================================================================================================================================

// Al entrar a la página, si hay una KEY en el localStorage llamado 'catalogoJuegos', lo obtenemos, lo pasamos de JSON a Objeto y lo asignamos al 'catalogo'. Esto está hecho para que, al agregar/eliminar un juego, ese cambio quede guardado en el localStorage. Por lo tanto, al salir y entrar de la página, el cambio sigue estando.
if (localStorage.getItem('catalogoJuegos')) {
  catalogo = JSON.parse(localStorage.getItem('catalogoJuegos'));
}

// ------------ MOSTRAR JUEGOS (Muestra el catálogo completo de videojuegos.) ------------

// Al hacer clic en el botón con el ID 'mostrarJuegos', dispara una función.
document.getElementById('mostrarJuegos').addEventListener('click', mostrarJuegos);  

let interfazMostrarJuegos = false;  // Variable auxiliar que sirve como interruptor, para saber si el 'catalogo' se está mostrando o no.

function mostrarJuegos(evento) {  
  evento.preventDefault();  // Al hacer clic, no se actualiza el URL

  mostrarUnoSacarElResto(1);

  if (!interfazMostrarJuegos){
    interfazMostrarJuegos = !interfazMostrarJuegos; // Si no se está mostrando, mostrarlo

    const container = document.createElement("div")
    container.classList.add('contenedorMostrarJuegos')

    container.innerHTML=`<h2> Mostrar Juegos </h2><br>`

    catalogo.forEach((juego) => {

      const card = document.createElement("div")
      card.classList.add('cardJuego')
  
      const nombre = document.createElement("h3")
      nombre.textContent = `${juego.nombre.toUpperCase()}`
      card.appendChild(nombre)

      const precio = document.createElement("p")
      precio.textContent = `$${juego.precio}`
      card.appendChild(precio)
  
      const plataforma = document.createElement("p")
      plataforma.textContent = `${juego.plataforma.toUpperCase()}`
      card.appendChild(plataforma)
  
      const anio = document.createElement("p")
      anio.textContent = `${juego.anio}`
      card.appendChild(anio)
  
      container.appendChild(card)
  
      const section2funciones = document.querySelector('.section2-funciones')
      section2funciones.appendChild(container)
    })
  }
  else {
    interfazMostrarJuegos = !interfazMostrarJuegos;  // si se está mostrando, dejar de mostrarlo

    const container = document.querySelector('.contenedorMostrarJuegos')
    container.remove();
  }
}

// ------------ BUSCAR JUEGO (Muestra el videojuego que coincida con el nombre de algún videojuego del catálogo.) ------------

document.getElementById('buscarJuego').addEventListener('click', buscarJuego);

let interfazBuscarJuego = false;

function buscarJuego(evento) {
  evento.preventDefault();

  mostrarUnoSacarElResto(2);

  if (!interfazBuscarJuego){
    interfazBuscarJuego = !interfazBuscarJuego;

    const container = document.createElement("div")
    container.classList.add('contenedorBuscarJuego')

    const form = document.createElement("form")
    form.innerHTML=
    `
    <h2> Buscar Juego </h2><br>
    <input id="nombreJuegoBuscado" type="text" placeholder="Escribe el nombre de un juego..."><br><br>
    <button type="submit" id="botonNombreJuegoBuscado">BUSCAR</button>
    `

    container.appendChild(form)
    
    const section2funciones = document.querySelector('.section2-funciones')
    section2funciones.appendChild(container)

    let botonBuscar = document.getElementById('botonNombreJuegoBuscado');
    botonBuscar.addEventListener('click', buscarJuegoSegunNombre);

    function buscarJuegoSegunNombre(evento){
      evento.preventDefault();

      const containerJuegoBuscado = document.querySelector('.contenedorJuegoBuscado')
      if (containerJuegoBuscado) {
        containerJuegoBuscado.remove();
      }

      let nombreJuegoBuscado = document.getElementById('nombreJuegoBuscado').value;
      const juegosFiltrados = catalogo.filter((juego) => juego.nombre.toUpperCase() === nombreJuegoBuscado.toUpperCase());
      
      limpiarInputs('buscar');

      const container = document.createElement("div");
      container.classList.add('contenedorJuegoBuscado');
      
      if (juegosFiltrados.length !== 0){
        juegosFiltrados.forEach((juego) => {
          const card = document.createElement("div")
          card.classList.add('cardJuego')
      
          const nombre = document.createElement("h2")
          nombre.textContent = `${juego.nombre}`
          card.appendChild(nombre)
      
          const precio = document.createElement("p")
          precio.textContent = `$${juego.precio}`
          card.appendChild(precio)
      
          const plataforma = document.createElement("p")
          plataforma.textContent = `${juego.plataforma}`
          card.appendChild(plataforma)
      
          const anio = document.createElement("p")
          anio.textContent = `${juego.anio}`
          card.appendChild(anio)
      
          container.appendChild(card)
      
          const section2funciones = document.querySelector('.section2-funciones')
          section2funciones.appendChild(container)
        })
      }
      else {
        alert('Ningún juego coincide con el nombre escrito. Por favor, busca otro distinto.');
      }
    }
  }
  else {
    interfazBuscarJuego = !interfazBuscarJuego;

    const container = document.querySelector('.contenedorBuscarJuego')
    container.remove();

    const containerJuegoBuscado = document.querySelector('.contenedorJuegoBuscado')
    if (containerJuegoBuscado) {
      containerJuegoBuscado.remove();
    }
  }
}

// ------------ AGREGAR JUEGO (Agrega un videojuego del catálogo.) ------------
document.getElementById('agregarJuego').addEventListener('click', agregarJuego);

let interfazAgregarJuego = false;

function agregarJuego(evento) {
  evento.preventDefault();

  mostrarUnoSacarElResto(3);


  if (!interfazAgregarJuego){
    interfazAgregarJuego = !interfazAgregarJuego;

    const container = document.createElement("div")
    container.classList.add('contenedorAgregarJuego')

    const form = document.createElement("form")
    form.innerHTML=
    `
    <h2> Agregar Juego </h2><br>
    <input id="nombreJuegoAAgregar" type="text" placeholder="Escribe un nombre..."><br><br>
    <input id="precioJuegoAAgregar" type="number" placeholder="Escribe un precio..."><br><br>
    <input id="platfJuegoAAgregar" type="text" placeholder="Escribe una plataforma..."><br><br>
    <input id="anioJuegoAAgregar" type="number" placeholder="Escribe un año..."><br><br>
    <button type="submit" id="botonJuegoAAgregar">AGREGAR</button>
    `

    container.appendChild(form)
    
    const section2funciones = document.querySelector('.section2-funciones')
    section2funciones.appendChild(container)

    let botonJuegoAAgregar = document.getElementById('botonJuegoAAgregar');
    botonJuegoAAgregar.addEventListener('click', agregarJuegoNuevo);

    function agregarJuegoNuevo(evento){
      evento.preventDefault();

      let nombreJuegoNuevo = document.getElementById('nombreJuegoAAgregar').value.toUpperCase();
      let precioJuegoNuevo = document.getElementById('precioJuegoAAgregar').value;
      let platfJuegoNuevo = document.getElementById('platfJuegoAAgregar').value.toUpperCase();
      let anioJuegoNuevo = document.getElementById('anioJuegoAAgregar').value;

      if(nombreJuegoNuevo === '' || isNaN(precioJuegoNuevo) || platfJuegoNuevo === '' || isNaN(anioJuegoNuevo)){
        alert("Por favor, completa los campos e ingresa valores válidos. Gracias.")
        return
      }

      const juego = new Juego(nombreJuegoNuevo, precioJuegoNuevo, platfJuegoNuevo, anioJuegoNuevo);

      if (catalogo.some( (juegoIncluido) => juegoIncluido.nombre === juego.nombre) ){
        alert(`El juego llamado '${juego.nombre}' ya EXISTE en el catálogo.`);
      }
      else {
        catalogo.push(juego);
        localStorage.setItem('catalogoJuegos', JSON.stringify(catalogo));
        alert(`El juego llamado '${juego.nombre}' ha sido AGREGADO al catálogo.`);

        limpiarInputs('agregar');
      }
    }
  }
  else {
    interfazAgregarJuego = !interfazAgregarJuego;

    const container = document.querySelector('.contenedorAgregarJuego')
    container.remove();
  }
}

// ------------ ELIMINAR JUEGO (Elimina un videojuego del catálogo.) ------------

document.getElementById('eliminarJuego').addEventListener('click', eliminarJuego);

let interfazEliminarJuego = false;

function eliminarJuego(evento) {
  evento.preventDefault();

  mostrarUnoSacarElResto(4);

  if (!interfazEliminarJuego){
    interfazEliminarJuego = !interfazEliminarJuego;

    const container = document.createElement("div")
    container.classList.add('contenedorEliminarJuego')

    const form = document.createElement("form")
    form.innerHTML=
    `
    <h2> Eliminar Juego </h2><br>
    <input id="nombreJuegoAEliminar" type="text" placeholder="Escribe el juego que quieres eliminar..."><br><br>
    <button type="submit" id="botonJuegoAEliminar">ELIMINAR</button>
    `

    container.appendChild(form)
    
    const section2funciones = document.querySelector('.section2-funciones')
    section2funciones.appendChild(container)

    let botonJuegoAEliminar = document.getElementById('botonJuegoAEliminar');
    botonJuegoAEliminar.addEventListener('click', eliminarJuegoPorNombre);

    function eliminarJuegoPorNombre(evento){
      evento.preventDefault();

      let nombreJuegoAEliminar = document.getElementById('nombreJuegoAEliminar').value.toUpperCase();
      let cantidadJuegos = catalogo.length;

      catalogo.forEach((juego) => {
        if (juego.nombre === nombreJuegoAEliminar){
          const auxIndex = catalogo.indexOf(juego);
          catalogo.splice(auxIndex, 1);
          localStorage.setItem('catalogoJuegos', JSON.stringify(catalogo));
        }
      });

      if (cantidadJuegos !== catalogo.length){
        alert(`El juego llamado '${nombreJuegoAEliminar}' ha sido ELIMINADO del catálogo.`);
      }
      else {
        alert(`El juego llamado '${nombreJuegoAEliminar}' no EXISTE en el catálogo.`);
      }
      limpiarInputs('eliminar');
    }
  }
  else {
    interfazEliminarJuego = !interfazEliminarJuego;

    const container = document.querySelector('.contenedorEliminarJuego')
    container.remove();
  }
}

// ------------ FUNCIONES REUTILIZABLES ------------

// Se puede utilizar en: MOSTRAR / BUSCAR / AGREGAR / ELIMINAR. Sirve para mostrar la interfaz correspondiente y sacar el resto. No confundir con 'mostrarJuegos'.
function mostrarUnoSacarElResto(numero) { // Elegir un número del 1 al 4, según qué subsección querés mostrar.
  // Subsección 1
  if (interfazMostrarJuegos && numero !== 1){ 
    interfazMostrarJuegos = false;
    const containerMostrarJuegos = document.querySelector('.contenedorMostrarJuegos')
    containerMostrarJuegos.remove();
  }
  // Subsección 2
  if (interfazBuscarJuego && numero !== 2){ 
    interfazBuscarJuego = false;
    const containerBuscarJuego = document.querySelector('.contenedorBuscarJuego')
    containerBuscarJuego.remove();
    const containerJuegoBuscado = document.querySelector('.contenedorJuegoBuscado')
    if (containerJuegoBuscado) {
      containerJuegoBuscado.remove();
    }
  }
  // Subsección 3
  if (interfazAgregarJuego && numero !== 3){ 
    interfazAgregarJuego = false;
    const containerAgregarJuego = document.querySelector('.contenedorAgregarJuego')
    containerAgregarJuego.remove();
  }
  // Subsección 4
  if (interfazEliminarJuego && numero !== 4){ 
    interfazEliminarJuego = false;
    const containerEliminarJuego = document.querySelector('.contenedorEliminarJuego')
    containerEliminarJuego.remove();
  }
}

// Se puede utilizar en: BUSCAR / AGREGAR / ELIMINAR. Sirve para limpiar los 'input', al hacer clic en el botón correspondiente.
function limpiarInputs(parametro) { // Escribir como parámetro la subsección en la que quieras limpiar el/los 'input'.
  switch (parametro) {

      case 'buscar':
          let inputJuegoBuscado = document.getElementById('nombreJuegoBuscado');
          inputJuegoBuscado.value = '';
          break;

      case 'agregar':
          let inputNombreJuegoNuevo = document.getElementById('nombreJuegoAAgregar');
          inputNombreJuegoNuevo.value = '';
          let inputPrecioJuegoNuevo = document.getElementById('precioJuegoAAgregar');
          inputPrecioJuegoNuevo.value = '';
          let inputPlataformaJuegoNuevo = document.getElementById('platfJuegoAAgregar');
          inputPlataformaJuegoNuevo.value = '';
          let inputAnioJuegoNuevo = document.getElementById('anioJuegoAAgregar');
          inputAnioJuegoNuevo.value = '';
          break;

      case 'eliminar':
          let inputNombreJuegoAEliminar = document.getElementById('nombreJuegoAEliminar');
          inputNombreJuegoAEliminar.value = '';
          break;

      default:
          break;
  }
}