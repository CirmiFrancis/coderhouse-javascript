//=================================== PARTE I - INGRESAR COMO ADMINISTRADOR ===================================

let sesionIniciada = 0
let nombreUsuario = 'admin'
let contraseniaUsuario = '1234'

function compararDatos(nombre,contrasenia){
  let nombreIngresado = prompt('Ingresa un nombre: ');
  let contraseniaIngresada = prompt('Ingresa una contraseña: ');

  if (nombre === nombreIngresado && contrasenia === contraseniaIngresada){
    alert('Datos correctos. Iniciando...');
    sesionIniciada = 1;
  }
  else {
    alert('Datos incorrectos.');
  }
}

alert('¡Bienvenido usuario!');
alert('Poco a poco estamos completando el catálogo de videojuegos de nuestra tienda y necesitamos tu ayuda para agilizar el proceso.');
alert('Antes que nada, debes de iniciar sesión como administrador. Estos son los datos:');
alert('Usuario: admin; Contraseña: 1234');

while (sesionIniciada !== 1){
  compararDatos(nombreUsuario,contraseniaUsuario);
}

alert('¡Ahora sí! Ya puedes abrir la consola, continuaremos por ahí.');

//=================================== PARTE II - ADMINISTRAR CATÁLOGO ===================================

// ============ CREAR JUEGO ============

// ---- Función Constructora ----
function Juego(nombre, precio, platf, tag, anio, dev) {
  this.nombre = nombre;
  this.precio = precio;
  this.plataforma = platf;
  this.genero = tag;
  this.anio = anio;
  this.desarrollador = dev;

  this.aumentarPrecio = function () {
    this.precio = Math.round(this.precio * 1.05);
    return `El precio del juego '${this.nombre}' aumentó a $${this.precio}.`;
  };

  this.bajarPrecio = function () {
    this.precio = Math.round(this.precio - this.precio * 0.05);
    return `El precio del juego '${this.nombre}' bajó a $${this.precio}.`;
  };
}

// ---- Objetos & Atributos ----
const minecraft = new Juego( 'Minecraft', 12000, 'PC',  'Sandbox', 2011, 'Mojang Studios' );
const fifa      = new Juego( 'FIFA',      24000, 'PC',  'Sports',  2023, 'Electronic Arts' );
const pokemon   = new Juego( 'Pokemon',   64000, 'NS',  'RPG',     2022, 'Game Freak' );
const spiderman = new Juego( 'Spiderman', 90000, 'PS5', 'Action',  2023, 'Insomniac Games' );
const gta       = new Juego( 'GTA',       50000, 'PS5', 'Sandbox', 2013, 'Rockstar Games' );

// ============ CREAR ARRAY, CON JUEGOS DENTRO ============

const catalogo = [minecraft, fifa, pokemon, spiderman, gta];

//console.table(catalogo);

// ============ AGREGAR JUEGO (Verifica que el juego esté en el array. Si no está, lo agrega.) ============

function agregarJuego(juego){
  if (catalogo.includes(juego)){
    return `El juego llamado '${juego.nombre}' ya EXISTE en el catálogo.`;
  }
  else {
    catalogo.push(juego);
    return `El juego llamado '${juego.nombre}' ha sido AGREGADO al catálogo.`;
  }
}

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

// ============ DEVOLVER LA CANTIDAD DE JUEGOS ============

function cuantosJuegosHay(){
  return `Hay un total de ${catalogo.length} juegos en el catálogo.`;
}

// ============ BUSCAR UN JUEGO POR: NOMBRE (Antes de la comparación, transforma todo en MAYUS y elimina espacios.) ============

function buscarJuego(nombre) {
  const juegoEncontrado = catalogo.find((juego) => juego.nombre.toUpperCase() === nombre.toUpperCase().trim());
  if (juegoEncontrado) {
    return juegoEncontrado;
  } 
  else {
    return `Juego con nombre '${nombre}' no encontrado.`;
  }
}

//buscarJuego(' minecraft ');
//buscarJuego('FiFa ');
//buscarJuego(' pokeMON');

// ============ FILTRAR JUEGOS POR: PRECIO, PLATAFORMA, GENERO Y AÑO ============

// ---- Precio ----
function filtrarPorPrecio(precio1, precio2){
  return catalogo.filter((juego) => precio1 <= juego.precio && juego.precio <= precio2);
}

//console.table(filtrarPorPrecio(0, 50000))
//console.table(filtrarPorPrecio(50000, 100000))
//console.table(filtrarPorPrecio(12000, 12000))

// ---- Plataforma ----
function filtrarPorPlataforma(plataforma){
  return catalogo.filter((juego) => juego.plataforma === plataforma.toUpperCase().trim());
}

const filtrarPC = filtrarPorPlataforma('PC');
const filtrarNS = filtrarPorPlataforma('NS');
const filtrarPS5 = filtrarPorPlataforma('PS5');

//console.table(filtrarPorPlataforma(' pc '))
//console.table(filtrarPorPlataforma('Ns '))
//console.table(filtrarPorPlataforma(' pS5'))

// ---- Genero ----
function filtrarPorGenero(genero){
  return catalogo.filter((juego) => juego.genero.toUpperCase() === genero.toUpperCase().trim());
}

const filtrarSandbox = filtrarPorGenero('Sandbox');
const filtrarSports = filtrarPorGenero('Sports');
const filtrarRPG = filtrarPorGenero('RPG');
const filtrarAction = filtrarPorGenero('Action');

//console.table(filtrarPorGenero(' sandbox '))
//console.table(filtrarPorGenero('SPORTs '))
//console.table(filtrarPorGenero(' Rpg'))

// ---- Año ----
function filtrarPorAnio(anio1, anio2){
  return catalogo.filter((juego) => anio1 <= juego.anio && juego.anio <= anio2);
}

//console.table(filtrarPorAnio(2011, 2020))
//console.table(filtrarPorAnio(2021, 2030))
//console.table(filtrarPorAnio(2023, 2023))

// ============ ORDENAR POR PRECIO Y AÑO, DE FORMA ASCENDENTE/DESCENDENTE ============

// ---- Precio ----
function ordenarAscendentePrecio(){
  return catalogo.sort((juego1, juego2) => juego1.precio - juego2.precio);
}

function ordenarDescendentePrecio(){
  return catalogo.sort((juego1, juego2) => juego2.precio - juego1.precio);
}

//console.table(ordenarAscendentePrecio())
//console.table(ordenarDescendentePrecio())

// ---- Año ----
function ordenarAscendenteAnio(){
  return catalogo.sort((juego1, juego2) => juego1.anio - juego2.anio);
}

function ordenarDescendenteAnio(){
  return catalogo.sort((juego1, juego2) => juego2.anio - juego1.anio);
}

//console.table(ordenarAscendenteAnio())
//console.table(ordenarDescendenteAnio())

// ============ JUEGO MÁS CARO & JUEGO MÁS BARATO ============

// ---- Juego más caro ----

function masCaro(){
  let juegoMasCaro = catalogo[0];
  for (let i = 1; i < catalogo.length; i++) {
    if (catalogo[i].precio > juegoMasCaro.precio) {
      juegoMasCaro = catalogo[i];
    }
  }
  return juegoMasCaro;
}

// ---- Juego más barato ----

function masBarato(){
  let juegoMasBarato = catalogo[0];
  for (let i = 1; i < catalogo.length; i++) {
    if (catalogo[i].precio < juegoMasBarato.precio) {
      juegoMasBarato = catalogo[i];
    }
  }
  return juegoMasBarato;
}

// ============ MOSTRAR TODAS LAS FUNCIONES PERSONALIZADAS ============

function todasLasFunciones(){
  return 'Juego(a,b,c,d,e,f), agregarJuego(a), eliminarJuego(a), cuantosJuegosHay(), buscarJuego(a), filtrarPorPrecio(a,b), filtrarPorPlataforma(a), filtrarPorGenero(a), filtrarPorAnio(a,b), ordenarAscendentePrecio(), ordenarDescendentePrecio(), ordenarAscendenteAnio(), ordenarDescendenteAnio(), masCaro(), masBarato()';
}

//=====================================================================

console.log('...')
console.log('¡Hola admin!');
console.log('Antes de experimentar con el código, recomiendo utilizar estas dos funciones:')
console.log('"console.table(catalogo)", para ver el catálogo de videojuegos actual en formato tabla.')
console.log('"todasLasFunciones()", para ver todas las funciones que se pueden utilizar.')
console.log('También recomiendo que leas el código interno.')
console.log('...')