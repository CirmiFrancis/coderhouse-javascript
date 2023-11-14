// Voy a simular una Tienda Online de Videojuegos. Esta tienda vende exclusivamente copias físicas.
// Al ingresar, la Tienda te pedirá que crees una 'Cuenta', ingresando un 'Nombre' y una 'Contraseña'.
// Una vez que hayas ingresado, podrás 'Consultar Catálogo' de los Videojuegos que hay en la tienda, además de 'Agregar Videojuego' y 'Sacar Videojuego' del catálogo. También podrás 'Filtrar' a tu gusto, según varias preferencias.
// La información que mostrará cada Videojuego es: 'Nombre', 'Descripción', 'Precio', 'Desarrollador', 'Año' y 'Categoría'.

//=================================== PARTE I - CUENTA ===================================

alert('Bienvenido al Simulador de Tienda de Videojuegos. Hecho por Francis Cirmi.')
alert('Es tu primer día trabajando en la tienda online y deberás asegurarte de que todo funcione correctamente.')
alert('Desde agregar nuevos videojuegos al catálogo hasta confirmar las compras de los clientes.')
alert('Por ser tu primera vez, te iré ayudando en cada paso, así que tranquilo ;)')
alert('Bien. ¡Comencemos!')

alert('...')

let sesionIniciada = 0
let nombreUsuario = 'admin'
let contraseniaUsuario = '1234'

alert('Por favor, inicia sesión como administrador.')

function compararDatos(nombre,contrasenia){
  let nombreIngresado = prompt('Ingresa un nombre: ')
  let contraseniaIngresada = prompt('Ingresa una contraseña: ')

  if (nombre === nombreIngresado && contrasenia === contraseniaIngresada){
    alert('Datos correctos. Iniciando...')
    sesionIniciada = 1
  }
  else {
    alert('Datos incorrectos.')
  }
}

compararDatos(nombreUsuario, contraseniaUsuario)

alert('...')
alert('¿No lo recuerdas?')
alert('Y eso que es sencillo...')
alert('Usuario: admin; Contraseña: 1234')

while (sesionIniciada !== 1){
  compararDatos(nombreUsuario,contraseniaUsuario)
}

alert('¡Hola, admin! Bienvenido/a.')

//=================================== PARTE II - CATÁLOGO ===================================

const catalogo = [Minecraft, Fifa, CallofDuty, HollowKnight, ]

function Juego (nombre, desc, precio, dev, anio, tag){
  this.nombre = nombre,
  this.descripcion = desc,
  this.precio = precio
  this.desarrollador = dev,
  this.anio = anio,
  this.categoria = tag

  this.mejorar = function(){
    this.ataque += 1 
  }
}

const minecraft = 
new Juego('Minecraft', 'Supervivencia en un mundo abierto.', 12000, Mojang, 2011, ['Survival', 'Sandbox'] )
const fifa = 
new Juego('EA Sports FC 24', 'Fútbol.', 12000, Mojang, 2011, ['Survival', 'Sandbox'] )
const callofduty = 
new Juego('Call of Duty: Modern Warfare 3', '', 12000, Mojang, 2011, ['Survival', 'Sandbox'] )
const pokemon = 
new Juego('Leyendas Pokémon: Arceus', '', 12000, Mojang, 2011, ['Survival', 'Sandbox'] )
const mario = 
new Juego('Super Mario Bros. Wonder', '', 12000, Mojang, 2011, ['Survival', 'Sandbox'] )
const zelda = 
new Juego('The Legend of Zelda: Tears of the Kingdom', '', 12000, Mojang, 2011, ['Survival', 'Sandbox'] )
const finalfantasy = 
new Juego('Final Fantasy VII Remake', '', 12000, Mojang, 2011, ['Survival', 'Sandbox'] )
const darksouls = 
new Juego('Dark Souls III', '', 12000, Mojang, 2016, ['Survival', 'Sandbox'] )
const nierautomata = 
new Juego('Nier: Automata', '', 12000, Mojang, 2011, ['Survival', 'Sandbox'] )
const hollowknight = 
new Juego('Hollow Knight', '', 12000, Mojang, 2011, ['Survival', 'Sandbox'] )


