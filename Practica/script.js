//========================================= CLASE 5 - OBJETO =========================================

alert('¡Hola! Gracias por participar en este desafío. Necesito que abras las consola y estés atento a la misma. ¡Suerte!')

console.log('==========================================================')

//Creando personajes y mostrando sus datos

function Personaje(nombre, clase){  //OBJETO CONSTRUCTOR o FUNCIÓN CONSTRUCTORA
  this.nombre = nombre,
  this.clase = clase,
  this.saludar = function(){
    console.log('Me llamo ' + this.nombre + ' y soy un ' + this.clase)
  }
}

let personaje1 = new Personaje('Francis', '*Guerrero*')
let personaje2 = new Personaje('Nahuel', '*Arquero*')

personaje1.saludar()
personaje2.saludar()

//Creando un enemigo y mostrando sus datos

let enemigo1 = { //OBJETO LITERAL
  nombre: 'Claudio',
  clase: '*Mago*'
}

console.log('Tu enemigo es ' + enemigo1.nombre + ' y es un ' + enemigo1.clase)
console.log('==========================================================')

//Creando un objeto y mostrando sus propiedades

const objeto = {
  nombre: 'Poción',
  descripcion: 'Cura 50 PV.'
}

for (const propiedad in objeto){
  console.log(objeto[propiedad])
}

console.log('==========================================================')

//Creando armas y mejorando una de ellas

function Arma (tipo, ataque, durabilidad){
  this.tipo = tipo,
  this.ataque = ataque,
  this.durabilidad = durabilidad

  this.mejorar = function(){
    this.ataque += 1 
  }
}

let arma1 = new Arma("Espada", 10, 100)
let arma2 = new Arma("Arco", 8, 200)
let arma3 = new Arma("Báculo", 3, 1000)

console.log(arma1)
console.log('Mejorando arma...')
arma1.mejorar()
console.log(arma1)
console.log('==========================================================')

//========================================= CLASE 6 - ARRAY =========================================

//Declarando un par de ARRAYS

const listaActores = [personaje1, personaje2, enemigo1]
const listaArmas = [arma1, arma2, arma3]

//Modificando la durabilidad de un arma

console.log(listaArmas[1])

listaArmas[1].durabilidad -= 20 

console.log('Arco, durabilidad modificada...')
console.log(listaArmas[1])

//Transformando un arma en otra

function convertirArma(arma){
  arma.tipo = 'Lanza',
  arma.ataque = 13,
  arma.durabilidad = 60
}

convertirArma(listaArmas[1])

console.log('Arco, transformado en una Lanza...')
console.log(listaArmas[1])
console.log('==========================================================')

//Mostrar todas las armas

console.log('Las armas son:')

for (let i=0; i<3; i++) {
  console.log(listaArmas[i])
}

console.log('==========================================================')

//length (calcula tamanio)

function calcularTamanio(lista){
  return lista.length
}

console.log(`La cantidad de actores son: ${calcularTamanio(listaActores)}`)
console.log(`La cantidad de armas son: ${calcularTamanio(listaArmas)}`)
console.log('==========================================================')

//push (agrega al final) & unshift (agrega al inicio)

listaArmas.push(new Arma("Hacha", 17, 10))
console.log('Hacha agregada. La cantidad de armas, en total, son: ' + calcularTamanio(listaArmas))
console.log(listaArmas[3])

listaArmas.unshift(new Arma("Cuchillo", 7, 30))
console.log('Cuchillo agregado. La cantidad de armas, en total, son: ' + calcularTamanio(listaArmas))
console.log(listaArmas[0])

//pop (elimina al final) & shift (elimina al inicio)

listaArmas.pop()
console.log('Última arma eliminada. La cantidad de armas, en total, son: ' + calcularTamanio(listaArmas))

listaArmas.shift()
console.log('Primer arma eliminada. La cantidad de armas, en total, son: ' + calcularTamanio(listaArmas))

console.log(listaArmas)
console.log('==========================================================')

//slice (retorna desde-hasta)

console.log('Las dos últimas armas son: ')
console.log(listaArmas.slice(1,3))

//splice (agrega, elimina, y/o reemplaza elementos)

let enemigo2 = {
  nombre: 'Hernán',
  clase: '*Guerrero*'
}

let enemigo3 = {
  nombre: 'Legolas',
  clase: '*Arquero*'
}

listaActores.splice(2, 1, enemigo2, enemigo3)
console.log('Los nuevos actores son: ')
console.log(listaActores)

//concat (une dos o más arrays)

const listaTotal = listaActores.concat(listaArmas)
console.log('La lista total, con actores y armas, es la siguiente: ')
console.log(listaTotal)
console.log('==========================================================')

//join (une todos los elementos de un array en una cadena)

const armasFalsas = ['Espadón', 'Ballesta', 'Látigo', 'Boomerang']
const armasString = armasFalsas.join(' y ')
console.log(armasString)
console.log('==========================================================')

//indexOf (retorna la posición de un elemento específico, número) & includes (permite saber si un elemento existe, booleano)

console.log(armasFalsas.indexOf('Ballesta'))
console.log(armasFalsas.indexOf('Boomerang'))
console.log(armasFalsas.indexOf('Espada'))

console.log(armasFalsas.includes('Ballesta'))
console.log(armasFalsas.includes('Boomerang'))
console.log(armasFalsas.includes('Espada'))

console.log('==========================================================')

//Otras cosas

for (let i=0; i<listaArmas.length; i++) {
  console.log(listaArmas[i].tipo + " tiene un ataque de " + listaArmas[i].ataque);
}

console.log('==========================================================')

for (const arma of listaArmas) {
  console.log(arma);
}

console.log('==========================================================')

//========================================= CLASE 7 - FUNCIONES ORDEN SUPERIOR I =========================================
//Las funciones de orden superior son aquellas que pueden recibir otras funciones como argumentos o devolver funciones como resultado

//Creando un casco, con funciones

const casco =  {
  pieza: 'Casco',
  defensa: 7,

  equipar: function() {
    console.log('Casco equipado.')
  },

  desequipar: function() {
    console.log('Casco desequipado.')
  },

  mejorar: function() {
    this.defensa += 1,
    console.log('Casco mejorado.')
  }
};

console.log(casco)
casco.equipar(); 
casco.desequipar(); 
casco.mejorar();
console.log(casco)
console.log('==========================================================')

//forEach, agarra cada elemento del array y lo retorna en la consola PERO con los nombres en mayúscula

for (const arma of armasFalsas) {
  console.log(arma);
}

console.log('==========================================================')

armasFalsas.forEach(function(arma) {
  console.log(arma.toUpperCase())
})

console.log('==========================================================')

//map, similar al forEach pero crea un nuevo array (no trabaja en el mismo array)

const armasFalsas2 = armasFalsas.map(function(arma) {
  return arma.toLowerCase()
})

console.log(armasFalsas)
console.log(armasFalsas2)
console.log('==========================================================')

//find, devuelve el primer elemento que cumpla una condición especificada: que tenga el mismo nombre escrito

function encontrarEn(lista,nombre){
  if (lista.find((arma) => arma === nombre)){
    console.log(`Arma encontrada. ${nombre} se encuentra en la lista ${lista.join(', ')}.`)
  }
  else{
    console.log(`Arma NO encontrada. ${nombre} NO se encuentra en la lista ${lista.join(', ')}.`)
  }
}

encontrarEn(armasFalsas, 'Látigo')

console.log('==========================================================')

//filter, filtra aquellos elementos que cumplan una condición especificada: que el largo sea mayor a 7 caracteres

function filtrarEn(lista){
  return lista.filter((arma) => arma.length > 7)
}

console.log(filtrarEn(armasFalsas))
console.log('==========================================================')

//reduce, se usa para reducir un array a un único valor. Se procesa cada elemento de los array y se combinan en un solo valor

function totalAtaque(lista){
  return lista.reduce((total, valorActual) => total + valorActual);
}

console.log(listaArmas)

const listaAtaqueArmas = listaArmas.map((arma) => arma.ataque)
console.log(listaAtaqueArmas)
console.log(totalAtaque(listaAtaqueArmas))

const listaDurabilidadArmas = listaArmas.map((arma) => arma.durabilidad)
console.log(listaDurabilidadArmas)
console.log(totalAtaque(listaDurabilidadArmas))

console.log('==========================================================')

//sort, ordena los elementos de la lista. En este caso, de forma ascendente.

function ordenAscendente(lista){
  return lista.sort((a,b) => a - b)
}

console.log(ordenAscendente(listaAtaqueArmas))
console.log(ordenAscendente(listaDurabilidadArmas))
console.log('==========================================================')

//some, similar al 'any' en otros lenguajes. Devuelve un booleano dependiendo de si algún elemento cumple cierta condición

function hayArmaFuerte(){
  return listaArmas.some((arma) => arma.ataque >= 10 && arma.durabilidad >= 100)
}

console.log(hayArmaFuerte())
console.log('==========================================================')

//========================================= CLASE 8 - FUNCIONES ORDEN SUPERIOR II =========================================

//Math, facilita la resolución de problemas matemáticos predefinidos

console.log(Math)
console.log(Math.PI)
console.log(Math.E)
console.log(Math.abs(-1))
console.log(Math.round(9.5))        //redondea al más cercano
console.log(Math.ceil(9.1))         //redondea para arriba
console.log(Math.floor(9.9))        //redondea para abajo
console.log(Math.pow(2,3))          //potenciación, 2 elevado a 5 (base,exponente)
console.log(Math.sqrt(9))           //raíz cuadrada
console.log(Math.random())          //devuelve un número entre 0 (inclusive) y 1 (exclusivo)
console.log('==========================================================')

//max & min

console.log( Math.max(55, 13, 0, -25, 93, 4) ) // 93
console.log( Math.min(55, 13, 0, -25, 93, 4) ) // -25
console.log('==========================================================')

//Date (Fecha)

/* 
  año: (4 digitos)
  mes: (0-11)
  dia del mes: (1-31)
  hora: 0-23
  minutos: (0-59)
  segundos: (0-59)
  mili-segundos: (0-999)
*/

const fecha = new Date()

console.log(fecha)

console.log("Hoy es " + fecha.toLocaleDateString())

const anio = fecha.getFullYear()
const mes = fecha.getMonth()
const dia = fecha.getDate()

console.log(anio)
console.log(mes)
console.log(dia)

const nacimiento = new Date(1998,9,28,14,30,0,0)

console.log(nacimiento)

const fechaRandom = new Date("December 25, 2023")

console.log(fechaRandom.toDateString())
console.log(fechaRandom.toLocaleString())
console.log(fechaRandom.toLocaleDateString())
console.log(fechaRandom.toTimeString())

console.log('==========================================================')

//.trim(), es un método que sirve para eliminar espacios en blanco de una cadena de texto