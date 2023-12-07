//===========================================================================================================================================

// ---- Función Constructora ----
function Juego(nombre, precio, platf, anio) {
  this.nombre = nombre;
  this.precio = precio;
  this.plataforma = platf;
  this.anio = anio;
}

// ---- Objetos, Atributos & Array ----
const minecraft = new Juego( 'MINECRAFT', 12000, 'PC',  2011);
const fifa      = new Juego( 'FIFA',      24000, 'PC',  2023);
const pokemon   = new Juego( 'POKEMON',   64000, 'NS',  2022);
const spiderman = new Juego( 'SPIDERMAN', 90000, 'PS5', 2023);
const gta       = new Juego( 'GTA',       50000, 'PS5', 2013);

const catalogo = [minecraft, fifa, pokemon, spiderman, gta];

// ============ ELIMINAR JUEGO (Verifica que el juego esté en el array. Si está, lo elimina.) ============

function eliminarJuego(juego){
  if (catalogo.includes(juego)){
    const auxIndex = catalogo.indexOf(juego);
    catalogo.splice(auxIndex, 1);
    return `El juego llamado '${juego.nombre}' ha sido ELIMINADO del catálogo.`;
  }
  else {
    return `El juego llamado '${juego.nombre}' no EXISTE en el catálogo.`;
  }
}

//===========================================================================================================================================

// ============ MOSTRAR JUEGOS (Muestra el catálogo completo de videojuegos.) ============

let botonMostrarJuegos = document.getElementById('mostrarJuegos');  // boton 'Mostrar Juegos'
botonMostrarJuegos.addEventListener('click', mostrarJuegos);

let mostrandoJuegos = false;  // variable auxiliar para saber si se está mostrando el catálogo o no

function mostrarJuegos(evento) {
  evento.preventDefault();

  if (!mostrandoJuegos){
    mostrandoJuegos = true; // si no se está mostrando, mostrarlo

    //catalogo.forEach((juego) => { // guardar cada juego del catalogo en el sessionStorage 
    //  guardarEnSessionStorage(juego);
    //})

    const container = document.createElement("div")
    container.classList.add('contenedorMostrarJuegos')

    container.innerHTML=`<h2> Mostrar Juegos </h2><br>`

    catalogo.forEach((juego) => {
      const card = document.createElement("div")
      card.classList.add('cardJuego')
  
      const nombre = document.createElement("h2")
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
    mostrandoJuegos = false;  // si se está mostrando, dejar de mostrarlo

    const container = document.querySelector('.contenedorMostrarJuegos')
    container.remove();
  }
}

// ============ BUSCAR JUEGO (Muestra el videojuego que coincida con el nombre de algún videojuego del catálogo.) ============

let botonBuscarJuego = document.getElementById('buscarJuego');
botonBuscarJuego.addEventListener('click', buscarJuego);

let buscandoJuego = false;
let catalogoFiltrado = catalogo;

function buscarJuego(evento) {
  evento.preventDefault();

  if (!buscandoJuego){
    buscandoJuego = true;

    const container = document.createElement("div")
    container.classList.add('contenedorBuscarJuego')

    const form = document.createElement("form")
    form.innerHTML=
    `
    <h2> Buscar Juego </h2><br>
    <input id="nombreJuegoBuscado" type="text" placeholder="Escribe el nombre de un juego..."><br><br>
    <button type="submit" id="botonNombreJuegoBuscado">BUSCAR</button>
    <button type="submit" id="limpiarJuegos">LIMPIAR</button>
    `

    container.appendChild(form)
    
    const section2funciones = document.querySelector('.section2-funciones')
    section2funciones.appendChild(container)

    let limpiarJuegosBuscados = document.getElementById('limpiarJuegos');
    limpiarJuegosBuscados.addEventListener('click', function(evento) {
      evento.preventDefault();

      const containers = document.querySelectorAll('.contenedorJuegoBuscado');

      if (containers.length > 0) {
        containers.forEach(function(container) {
          container.remove();
        });
        alert('Búsqueda limpiada.');
      } 
      else {
        alert('No hay ninguna búsqueda para limpiar.');
      }
    });

    let botonBuscar = document.getElementById('botonNombreJuegoBuscado');
    botonBuscar.addEventListener('click', buscarJuegoSegunNombre);
    
    let buscandoJuegoPorNombre = false;

    function buscarJuegoSegunNombre(evento){
      evento.preventDefault();

      if (!buscandoJuegoPorNombre){

        let nombreJuegoBuscado = document.getElementById('nombreJuegoBuscado').value;
        const juegosFiltrados = catalogo.filter((juego) => juego.nombre.toUpperCase() === nombreJuegoBuscado.toUpperCase().trim());
        
        let inputJuegoBuscado = document.getElementById('nombreJuegoBuscado');
        inputJuegoBuscado.value = '';

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
  }
  else {
    buscandoJuego = false;

    const container = document.querySelector('.contenedorBuscarJuego')
    container.remove();

    const container2 = document.querySelector('.contenedorJuegoBuscado')
    if (container2){
      container2.remove();
    }
  }
}

// ============ AGREGAR JUEGO (Agrega un videojuego del catálogo.) ============
let botonAgregarJuego = document.getElementById('agregarJuego');
botonAgregarJuego.addEventListener('click', agregarJuego);

let agregandoJuego = false;

function agregarJuego(evento) {
  evento.preventDefault();

  if (!agregandoJuego){
    agregandoJuego = true;

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
    
    let agregandoJuegoNuevo = false;

    function agregarJuegoNuevo(evento){
      evento.preventDefault();

      if (!agregandoJuegoNuevo){

        let nombreJuegoNuevo = document.getElementById('nombreJuegoAAgregar').value;
        let precioJuegoNuevo = document.getElementById('precioJuegoAAgregar').value;
        let platfJuegoNuevo = document.getElementById('platfJuegoAAgregar').value;
        let anioJuegoNuevo = document.getElementById('anioJuegoAAgregar').value;

        if(nombreJuegoNuevo === '' || isNaN(precioJuegoNuevo) || platfJuegoNuevo === '' ||isNaN(anioJuegoNuevo)){
          alert("Por favor, completa los campos e ingresa valores válidos. Gracias.")
          return
        }

        const juego = new Juego(nombreJuegoNuevo, precioJuegoNuevo, platfJuegoNuevo, anioJuegoNuevo);

        if (catalogo.includes(juego)){
          alert(`El juego llamado '${juego.nombre}' ya EXISTE en el catálogo.`);
        }
        else {
          catalogo.push(juego);
          alert(`El juego llamado '${juego.nombre}' ha sido AGREGADO al catálogo.`);

          let inputNombreJuegoNuevo = document.getElementById('nombreJuegoAAgregar');
          let inputPrecioJuegoNuevo = document.getElementById('precioJuegoAAgregar');
          let inputPlataformaJuegoNuevo = document.getElementById('platfJuegoAAgregar');
          let inputAnioJuegoNuevo = document.getElementById('anioJuegoAAgregar');
          inputNombreJuegoNuevo.value = '';
          inputPrecioJuegoNuevo.value = '';
          inputPlataformaJuegoNuevo.value = '';
          inputAnioJuegoNuevo.value = '';
        }
      }
      
    }
  }
  else {
    agregandoJuego = false;

    const container = document.querySelector('.contenedorAgregarJuego')
    container.remove();
  }
}

// ============ ELIMINAR JUEGO (Elimina un videojuego del catálogo.) ============

let botonEliminarJuego = document.getElementById('eliminarJuego');
botonEliminarJuego.addEventListener('click', eliminarJuego);

let eliminandoJuego = false;

function eliminarJuego(evento) {
  evento.preventDefault();

  if (!eliminandoJuego){
    eliminandoJuego = true;

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
    
    let eliminandoJuegoPorNombre = false;

    function eliminarJuegoPorNombre(evento){
      evento.preventDefault();

      if (!eliminandoJuegoPorNombre){

        let nombreJuegoAEliminar = document.getElementById('nombreJuegoAEliminar').value.toUpperCase();
        let cantidadJuegos = catalogo.length;

        catalogo.forEach((juego) => {
          if (juego.nombre === nombreJuegoAEliminar){
            const auxIndex = catalogo.indexOf(juego);
            catalogo.splice(auxIndex, 1);
          }
        });

        if (cantidadJuegos !== catalogo.length){
          alert(`El juego llamado '${nombreJuegoAEliminar}' ha sido ELIMINADO del catálogo.`);
        }
        else {
          alert(`El juego llamado '${nombreJuegoAEliminar}' no EXISTE en el catálogo.`);
        }
      }

      let inputNombreJuegoAEliminar = document.getElementById('nombreJuegoAEliminar');
      inputNombreJuegoAEliminar.value = '';
    }
  }
  else {
    eliminandoJuego = false;

    const container = document.querySelector('.contenedorEliminarJuego')
    container.remove();
  }
}



/* CAMBIAR EL BACKGROUND-COLOR DEL BOTON SELECCIONADO

let miVariable = true; // Puedes cambiar esto según tu lógica

const miDiv = document.getElementById('miDiv');

function cambiarColor() {
  if (miVariable) {
    miDiv.classList.add('colorCambiado');
  } else {
    miDiv.classList.remove('colorCambiado');
  }
}

// Llamamos a la función al cargar la página o en respuesta a algún evento
cambiarColor();
*/