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
localStorage.getItem('catalogoJuegos') && (catalogo = JSON.parse(localStorage.getItem('catalogoJuegos'))); // Operador AND

// ------------ MOSTRAR JUEGOS (Muestra el catálogo completo de videojuegos.) ------------

document.getElementById('mostrarJuegos').addEventListener('click', mostrarJuegos); // Al hacer clic en el botón con el ID 'mostrarJuegos', dispara una función.

let interfazMostrarJuegos = false; // Variable auxiliar que sirve como interruptor, para saber si el 'catalogo' se está mostrando o no.

function mostrarJuegos(e) {  
  e.preventDefault(); // Al hacer clic, no se actualiza el URL de la página, por lo que evita errores.

  mostrarUnoSacarElResto(1); // Muestra la interfaz correspondiente y quita las demás.

  if (catalogo.length === 0) { // Nos aseguramos que 'catalogo' no esté vacío.
    Swal.fire({ // Si está vacío, imprimir este mensaje.
      title: "CATÁLOGO VACÍO",
      text: "Por favor, agrega algún juego.",
      icon: "error"
    });
  }
  else { // Si no está vacío, continuar con el proceso normal.
    if (!interfazMostrarJuegos) {
      interfazMostrarJuegos = !interfazMostrarJuegos; // Si no se está mostrando la interfaz, mostrarlo.
  
      const container = document.createElement("div"); // Crea el contenedor.
      container.classList.add('contenedorMostrarJuegos'); // Le agrega la clase al contenedor.

      container.innerHTML=`<h2> Mostrar Juegos </h2><br>`; // Agrega título al contenedor.
  
      catalogo.forEach((juego) => { // Crea la 'card' de cada juego con sus datos, para poder verlos.
        const card = document.createElement("div");
        card.classList.add('cardJuego');
    
        const nombre = document.createElement("h3");
        nombre.textContent = `${juego.nombre.toUpperCase()}`;
        card.appendChild(nombre);
  
        const precio = document.createElement("p");
        precio.textContent = `$${juego.precio}`;
        card.appendChild(precio);
    
        const plataforma = document.createElement("p");
        plataforma.textContent = `${juego.plataforma.toUpperCase()}`;
        card.appendChild(plataforma);
    
        const anio = document.createElement("p");
        anio.textContent = `${juego.anio}`;
        card.appendChild(anio);
    
        container.appendChild(card);
    
        actualizarSection2Funciones(container); // Agrega el 'container' correspondiente, en la section2-funciones.
      });
    }
    else {
      interfazMostrarJuegos = !interfazMostrarJuegos; // Si se está mostrando la interfaz, dejar de mostrarlo.
  
      const container = document.querySelector('.contenedorMostrarJuegos');
      container.remove(); // Elimina la interfaz.
    }
  }
}

// ------------ BUSCAR JUEGO (Muestra el videojuego que coincida con el nombre de algún videojuego del catálogo.) ------------

document.getElementById('buscarJuego').addEventListener('click', buscarJuego); // Al hacer clic en el botón con el ID 'buscarJuego', dispara una función.

let interfazBuscarJuego = false; // Variable auxiliar que sirve como interruptor, para saber si el 'catalogo' se está mostrando o no.

function buscarJuego(e) {
  e.preventDefault(); // Al hacer clic, no se actualiza el URL de la página, por lo que evita errores.

  mostrarUnoSacarElResto(2); // Muestra la interfaz correspondiente y quita las demás.

  if (!interfazBuscarJuego) {
    interfazBuscarJuego = !interfazBuscarJuego; // Si no se está mostrando la interfaz, mostrarlo.

    const container = document.createElement("div"); // Crea el contenedor.
    container.classList.add('contenedorBuscarJuego'); // Le agrega la clase al contenedor.

    const form = document.createElement("form"); // Crea el form con el HTML dentro.
    form.innerHTML=
    `
    <h2> Buscar Juego </h2><br>
    <input id="nombreJuegoBuscado" type="text" placeholder="Escribe el nombre de un juego..."><br><br>
    <button type="submit" id="botonNombreJuegoBuscado">BUSCAR</button>
    `;

    container.appendChild(form);
    
    actualizarSection2Funciones(container); // Agrega el 'container' correspondiente, en la section2-funciones.

    document.getElementById('botonNombreJuegoBuscado').addEventListener('click', buscarJuegoPorNombre); // Al hacer clic en el botón con el ID 'botonNombreJuegoBuscado', dispara una función.

    function buscarJuegoPorNombre(e){
      e.preventDefault(); // Al hacer clic, no se actualiza el URL de la página, por lo que evita errores.

      const containerJuegoBuscado = document.querySelector('.contenedorJuegoBuscado'); 
      containerJuegoBuscado && containerJuegoBuscado.remove(); // Para evitar crear varias 'card' de juegos buscados, primero se elimina el que existe (si existe) y luego se crea el otro 'card'. Operador AND. 

      let nombreJuegoBuscado = document.getElementById('nombreJuegoBuscado').value.toUpperCase(); // Se guarda el input del juego buscado.
      const juegosFiltrados = catalogo.filter((juego) => juego.nombre.toUpperCase() === nombreJuegoBuscado); // Se filtra aquel o aquellos juegos que coincidan con el nombre del input. 
      
      limpiarInputs('buscar'); // Limpia los campos de entrada (inputs).

      const container = document.createElement("div"); // Crea el contenedor.
      container.classList.add('contenedorJuegoBuscado'); // Le agrega la clase al contenedor.
      
      if (juegosFiltrados.length !== 0) { // Si algún juego coincide con el nombre, crea la 'card' de cada juego con sus datos.

        juegosFiltrados.forEach((juego) => {
          const card = document.createElement("div");
          card.classList.add('cardJuego');
      
          const nombre = document.createElement("h3");
          nombre.textContent = `${juego.nombre}`;
          card.appendChild(nombre);
      
          const precio = document.createElement("p");
          precio.textContent = `$${juego.precio}`;
          card.appendChild(precio);
      
          const plataforma = document.createElement("p");
          plataforma.textContent = `${juego.plataforma}`;
          card.appendChild(plataforma);
      
          const anio = document.createElement("p");
          anio.textContent = `${juego.anio}`;
          card.appendChild(anio);
      
          container.appendChild(card);
      
          actualizarSection2Funciones(container); // Agrega el 'container' correspondiente, en la section2-funciones.
        })
      }
      else {
        Swal.fire({ 
          title: "JUEGO NO ENCONTRADO",
          text: "No se encontró algún juego que coincida con el nombre escrito. Por favor, busca otro distinto.",
          icon: "error"
        });
      }
    }
  }
  else {
    interfazBuscarJuego = !interfazBuscarJuego; // Si se está mostrando la interfaz, dejar de mostrarlo.

    const container = document.querySelector('.contenedorBuscarJuego');
    container.remove(); // Elimina la interfaz.

    const containerJuegoBuscado = document.querySelector('.contenedorJuegoBuscado');
    containerJuegoBuscado && containerJuegoBuscado.remove(); // Elimina la interfaz del juego buscado, si hay. Operador AND.
  }
}

// ------------ AGREGAR JUEGO (Agrega un videojuego del catálogo.) ------------
document.getElementById('agregarJuego').addEventListener('click', agregarJuego); // Al hacer clic en el botón con el ID 'agregarJuego', dispara una función.

let interfazAgregarJuego = false; // Variable auxiliar que sirve como interruptor, para saber si el 'catalogo' se está mostrando o no.

function agregarJuego(e) {
  e.preventDefault(); // Al hacer clic, no se actualiza el URL de la página, por lo que evita errores.

  mostrarUnoSacarElResto(3); // Muestra la interfaz correspondiente y quita las demás.

  if (!interfazAgregarJuego) {
    interfazAgregarJuego = !interfazAgregarJuego; // // Si no se está mostrando la interfaz, mostrarlo.

    const container = document.createElement("div"); // Crea el contenedor.
    container.classList.add('contenedorAgregarJuego'); // Le agrega la clase al contenedor.

    const form = document.createElement("form"); // Crea el form con el HTML dentro.
    form.innerHTML=
    `
    <h2> Agregar Juego </h2><br>
    <input id="nombreJuegoAAgregar" type="text"   placeholder="Escribe un nombre..."><br><br>
    <input id="precioJuegoAAgregar" type="number" placeholder="Escribe un precio..."><br><br>
    <input id="platfJuegoAAgregar"  type="text"   placeholder="Escribe una plataforma..."><br><br>
    <input id="anioJuegoAAgregar"   type="number" placeholder="Escribe un año..."><br><br>
    <button type="submit" id="botonJuegoAAgregar">AGREGAR</button>
    `;

    container.appendChild(form);
    
    actualizarSection2Funciones(container); // Agrega el 'container' correspondiente, en la section2-funciones.

    document.getElementById('botonJuegoAAgregar').addEventListener('click', agregarJuegoNuevo); // Al hacer clic en el botón con el ID 'botonJuegoAAgregar', dispara una función.

    function agregarJuegoNuevo(e){
      e.preventDefault(); // Al hacer clic, no se actualiza el URL de la página, por lo que evita errores.

      let nombreJuegoNuevo = document.getElementById('nombreJuegoAAgregar').value.toUpperCase(); // Guardamos en variables los 'input'.
      let precioJuegoNuevo = document.getElementById('precioJuegoAAgregar').value;
      let platfJuegoNuevo  = document.getElementById('platfJuegoAAgregar').value.toUpperCase();
      let anioJuegoNuevo   = document.getElementById('anioJuegoAAgregar').value;

      if(nombreJuegoNuevo === '' || isNaN(precioJuegoNuevo) || platfJuegoNuevo === '' || isNaN(anioJuegoNuevo)) {
        Swal.fire({ 
          title: "CAMPOS ERRÓNEOS",
          text: "Por favor, completa los campos e ingresa valores válidos. Gracias.",
          icon: "error"
        });
        return;
      } // Nos aseguramos de que los 'input' no estén vacíos.

      const juego = new Juego(nombreJuegoNuevo, precioJuegoNuevo, platfJuegoNuevo, anioJuegoNuevo); // Creamos un nuevo objeto del tipo Juego, asignándole como parámetros los 'input' correspondientes, ingresados por el usuario.

      if (catalogo.some((juegoIncluido) => juegoIncluido.nombre === juego.nombre)) { 
        Swal.fire({ 
          title: "JUEGO EXISTENTE",
          text: `El juego llamado '${juego.nombre}' ya existe en el catálogo.`,
          icon: "error"
        });
      } // Nos aseguramos de que el nombre del juego no exista.
      else {
        catalogo.push(juego);
        localStorage.setItem('catalogoJuegos', JSON.stringify(catalogo));

        Swal.fire({ 
          title: "JUEGO AGREGADO",
          text: `El juego llamado '${juego.nombre}' ha sido agregado al catálogo.`,
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        });

        limpiarInputs('agregar');  // Limpia los campos de entrada (inputs).
      } // El juego se agrega al 'catalogo' y se guarda en el localStorage.
    }
  }
  else {
    interfazAgregarJuego = !interfazAgregarJuego; // Si se está mostrando la interfaz, dejar de mostrarlo.

    const container = document.querySelector('.contenedorAgregarJuego');
    container.remove(); // Elimina la interfaz.
  }
}

// ------------ ELIMINAR JUEGO (Elimina un videojuego del catálogo.) ------------

document.getElementById('eliminarJuego').addEventListener('click', eliminarJuego); // Al hacer clic en el botón con el ID 'eliminarJuego', dispara una función.

let interfazEliminarJuego = false; // Variable auxiliar que sirve como interruptor, para saber si el 'catalogo' se está mostrando o no.

function eliminarJuego(e) {
  e.preventDefault(); // Al hacer clic, no se actualiza el URL de la página, por lo que evita errores.

  mostrarUnoSacarElResto(4); // Muestra la interfaz correspondiente y quita las demás.

  if (!interfazEliminarJuego) {
    interfazEliminarJuego = !interfazEliminarJuego; // Si no se está mostrando la interfaz, mostrarlo.

    const container = document.createElement("div"); // Crea el contenedor.
    container.classList.add('contenedorEliminarJuego'); // Le agrega la clase al contenedor.

    const form = document.createElement("form"); // Crea el form con el HTML dentro.
    form.innerHTML=
    `
    <h2> Eliminar Juego </h2><br>
    <input id="nombreJuegoAEliminar" type="text" placeholder="Escribe el juego que quieres eliminar..."><br><br>
    <button type="submit" id="botonJuegoAEliminar">ELIMINAR</button>
    `;

    container.appendChild(form);
    
    actualizarSection2Funciones(container); // Agrega el 'container' correspondiente, en la section2-funciones.

    document.getElementById('botonJuegoAEliminar').addEventListener('click', eliminarJuegoPorNombre); // Al hacer clic en el botón con el ID 'botonJuegoAEliminar', dispara una función.

    function eliminarJuegoPorNombre(e){
      e.preventDefault(); // Al hacer clic, no se actualiza el URL de la página, por lo que evita errores.

      let nombreJuegoAEliminar = document.getElementById('nombreJuegoAEliminar').value.toUpperCase(); // Obtenemos el nombre del juego a eliminar, ingresado por el usuario en el 'input'.
      let cantidadJuegos = catalogo.length; // Guardamos el número de juegos actuales en el 'catalogo'.

      catalogo.forEach((juego) => {
        if (juego.nombre === nombreJuegoAEliminar) {
          const auxIndex = catalogo.indexOf(juego);
          catalogo.splice(auxIndex, 1);
          localStorage.setItem('catalogoJuegos', JSON.stringify(catalogo));
        }
      }); // Si algún juego coincide con el nombre ingresado, se elimina del 'catalogo' y se elimina, también, del localStorage.

      if (cantidadJuegos !== catalogo.length) { // Nos aseguramos de que el juego haya sido eliminado.
        Swal.fire({ 
          title: "JUEGO ELIMINADO",
          text: `El juego llamado '${nombreJuegoAEliminar}' ha sido eliminado del catálogo.`,
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        });
      }
      else {
        Swal.fire({ 
          title: "JUEGO NO EXISTENTE",
          text: `El juego llamado '${nombreJuegoAEliminar}' no existe en el catálogo.`,
          icon: "error"
        });
      }
      limpiarInputs('eliminar');  // Limpia los campos de entrada (inputs).
    }
  }
  else {
    interfazEliminarJuego = !interfazEliminarJuego; // Si se está mostrando la interfaz, dejar de mostrarlo.

    const container = document.querySelector('.contenedorEliminarJuego');
    container.remove(); // Elimina la interfaz.
  }
}

// ------------ REPRODUCIR/PAUSAR MÚSICA ------------

// Botón de música ubicado en la parte inferior derecha de la pantalla. Al hacer clic una vez, se activa la música. Al volver a clickearlo, se pausa.
document.getElementById('imagenBoton').addEventListener('click', function () {
  let reproductor = document.getElementById('reproductor');

  if (reproductor.paused) {
    reproductor.play();
    imagenBoton.src = "./assets/media/soundOn-icon.png";
  }
  else {
    reproductor.pause();
    imagenBoton.src = "./assets/media/soundOff-icon.png";
  }
});

// ------------ FUNCIONES REUTILIZABLES ------------

// Se puede utilizar en: MOSTRAR / BUSCAR / AGREGAR / ELIMINAR. Sirve para mostrar la interfaz correspondiente y sacar el resto. No confundir con 'mostrarJuegos'.
function mostrarUnoSacarElResto(numero) { // Elegir un número del 1 al 4, según qué subsección querés mostrar.
  // Subsección 1
  if (interfazMostrarJuegos && numero !== 1) { 
    interfazMostrarJuegos = false;
    const containerMostrarJuegos = document.querySelector('.contenedorMostrarJuegos');
    containerMostrarJuegos.remove();
  }
  // Subsección 2
  if (interfazBuscarJuego && numero !== 2) { 
    interfazBuscarJuego = false;
    const containerBuscarJuego = document.querySelector('.contenedorBuscarJuego');
    containerBuscarJuego.remove();
    const containerJuegoBuscado = document.querySelector('.contenedorJuegoBuscado');
    containerJuegoBuscado && containerJuegoBuscado.remove(); // Operador AND.
  }
  // Subsección 3
  if (interfazAgregarJuego && numero !== 3) { 
    interfazAgregarJuego = false;
    const containerAgregarJuego = document.querySelector('.contenedorAgregarJuego');
    containerAgregarJuego.remove();
  }
  // Subsección 4
  if (interfazEliminarJuego && numero !== 4) { 
    interfazEliminarJuego = false;
    const containerEliminarJuego = document.querySelector('.contenedorEliminarJuego');
    containerEliminarJuego.remove();
  }
}

// Se puede utilizar en: BUSCAR / AGREGAR / ELIMINAR. Sirve para limpiar los 'input', al hacer clic en el botón correspondiente.
function limpiarInputs(parametro) { // Escribir como parámetro la subsección en la que quieras limpiar el/los 'input'.
  switch (parametro) {

      case 'buscar':
          let inputJuegoBuscado   = document.getElementById('nombreJuegoBuscado');
          inputJuegoBuscado.value = '';
          break;

      case 'agregar':
          let inputNombreJuegoNuevo       = document.getElementById('nombreJuegoAAgregar');
          inputNombreJuegoNuevo.value     = '';
          let inputPrecioJuegoNuevo       = document.getElementById('precioJuegoAAgregar');
          inputPrecioJuegoNuevo.value     = '';
          let inputPlataformaJuegoNuevo   = document.getElementById('platfJuegoAAgregar');
          inputPlataformaJuegoNuevo.value = '';
          let inputAnioJuegoNuevo         = document.getElementById('anioJuegoAAgregar');
          inputAnioJuegoNuevo.value       = '';
          break;

      case 'eliminar':
          let inputNombreJuegoAEliminar   = document.getElementById('nombreJuegoAEliminar');
          inputNombreJuegoAEliminar.value = '';
          break;

      default:
          break;
  }
}

// Se puede utilizar en: BUSCAR / AGREGAR / ELIMINAR. Sirve para agregar el contenedor correspondiente an 'section2-funciones'.
function actualizarSection2Funciones(container) {
  const section2funciones = document.querySelector('.section2-funciones');
  section2funciones.appendChild(container);
}

// ==================================== BORDES DE COLORES ====================================
let sectionTop = document.getElementById('sectionTop'); // Guardamos como variable la sección que tendrá bordes de colores

function eliminarBordes(variable) { // Elimina del borde cualquier clase que haga referencia a un color
    variable.classList.remove("bgc-white");
    variable.classList.remove("bgc-red");
    variable.classList.remove("bgc-orange");
    variable.classList.remove("bgc-yellow");
    variable.classList.remove("bgc-green");
    variable.classList.remove("bgc-cyan");
    variable.classList.remove("bgc-blue");
    variable.classList.remove("bgc-purple");
}

function cambiarColorBorde(variable) { // Según el nombre de la variable, se agrega una clase que añade el color correspondiente
    switch (variable) {
  
        case 'white':
            eliminarBordes(sectionTop);
            sectionTop.classList.add("bgc-white");
            break;
        
        case 'red':
            eliminarBordes(sectionTop);
            sectionTop.classList.add("bgc-red");
            break;

        case 'orange':
            eliminarBordes(sectionTop);
            sectionTop.classList.add("bgc-orange");
            break;

        case 'yellow':
            eliminarBordes(sectionTop);
            sectionTop.classList.add("bgc-yellow");
            break;

        case 'green':
            eliminarBordes(sectionTop);
            sectionTop.classList.add("bgc-green");
            break; 

        case 'cyan':
            eliminarBordes(sectionTop);
            sectionTop.classList.add("bgc-cyan");
            break;

        case 'blue':
            eliminarBordes(sectionTop);
            sectionTop.classList.add("bgc-blue");
            break;

        case 'purple':
            eliminarBordes(sectionTop);
            sectionTop.classList.add("bgc-purple");
            break;
  
        default:
            break;
    }
}

document.addEventListener("DOMContentLoaded", function () { // Al
    let colores = ["white", "red", "orange", "yellow", "green", "cyan", "blue", "purple"]; // Array con los nombres de los colores que tendrán los bordes
    let indiceColor = 0; // Posición dentro del array

    function procesoCambiarColor() { 
        cambiarColorBorde(colores[indiceColor]); // Comparamos el elemento correspondiente del array con los 'case'
        indiceColor = (indiceColor + 1) % colores.length; // El porcentaje sirve para crear un bucle infinito, ya que del último elemento pasa al primero nuevamente.
    }

    let intervalo = setInterval(procesoCambiarColor, 1500); // El color dura 1.5 segundos
});

// ==================================== API: CLIMA ====================================
const result = document.querySelector('.result');
const form = document.querySelector('.getWeather');
const nameCountry = document.querySelector('#country');
const nameCity = document.querySelector('#city');

form.addEventListener('submit', (e) => { // Verificamos que no estén los campos vacíos. Si están completados, llamamos a la función 'callAPI'
  e.preventDefault();

  if (nameCity.value === '' || nameCountry.value === '') { // Si está vacío, mostramos un sweetalert
    Swal.fire({ 
      title: "COMPLETAR AMBOS CAMPOS",
      icon: "error",
      showConfirmButton: false,
      timer: 1500,
    });
    return;
  }

  callAPI(nameCity.value, nameCountry.value);
})

function callAPI(city, country){ // Usando Promesas, obtenemos la data en forma de JSON. Además, en caso de que la ciudad NO se encuentre, mostramos un sweetalert, y SI se encuentra, limpiamos el form para mostrar el nuevo form con el clima del lugar correspondiente
  const apiId = '8180a3805aca63026a7b2267233dcc48';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiId}`;

  fetch(url)
      .then(data => {
          return data.json();
      })
      .then(dataJSON => {
          if (dataJSON.cod === '404') {
            Swal.fire({
              title: "CIUDAD NO ENCONTRADA",
              icon: "error",
              showConfirmButton: false,
              timer: 1500,
            });
          } 
          else {
            result.innerHTML = ''; // Limpia el form
            showWeather(dataJSON);
          }
      })
      .catch(error => {
        console.log(error);
      })
}

function showWeather(data){ // Obtiene los datos especificados y los muestra
    const {name, main:{temp}, weather:[arr]} = data;
    const degrees = kelvinToCentigrade(temp);
    const content = document.createElement('div');

    content.innerHTML = `
      <h4>${name}</h4>
      <img src="https://openweathermap.org/img/wn/${arr.icon}@2x.png" alt="icon">
      <h3>${degrees}°C</h3>
    `;

    result.appendChild(content);
}

function kelvinToCentigrade(temp){ // Pasa de grados Kelvin a Centigrados
    return parseInt(temp - 273.15);
}

//===========================================================================================================================================