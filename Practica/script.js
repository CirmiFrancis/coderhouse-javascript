//========================================= CLASE 5 - OBJETO =========================================

//alert('¡Hola! Gracias por participar en este desafío. Necesito que abras las consola y estés atento a la misma. ¡Suerte!')

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

//========================================= CLASE 9 - DOM =========================================

//DOM: Modelo de Objeto de Documento. Define la estructura lógica de los documentos y el modo en que se accede y manipula. El DOM organiza un documento como una estructura de nodos en un árbol, donde cada parte del documento es representada por un nodo.

/*
Tipos de nodos:

Element Nodes   (Nodos de Elemento):    Elementos HTML, como <p>, <div>, <span>, etc.
Attribute Nodes (Nodos de Atributo):    Atributos de un elemento HTML. Por ejemplo, el atributo href de un enlace (<a>).
Text Nodes      (Nodos de Texto):       Contenido de texto dentro de un elemento. Por ejemplo, el texto dentro de un párrafo (<p>).
Comment Nodes   (Nodos de Comentario):  Comentarios en el código HTML.
Document Nodes  (Nodos de Documento):   Representan el documento en sí.
*/

//Ejemplo de como un archivo HTML es dividido y clasificado en los distintos nodos del árbol.

/*
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="miDiv">
    <p>Hola, <span>mundo</span>!</p>
  </div>
</body>
</html>
*/

/*
Document Node (#document)
  Element Node (html)
    Element Node (head)
      ...
    Element Node (body)
      Element Node (div)
        Element Node (p)
          Text Node (Hola, )
          Element Node (span)
            Text Node (mundo)
          Text Node (!)
*/

//document

//getElementById() - TRAER ELEMENTO ID
//getElementsByClassName() - TRAER ELEMENTO CLASE
//getElementsByTagName() - TRAER ELEMENTO ETIQUETA

//innerHTML - La propiedad se utiliza para acceder o modificar el contenido HTML de un elemento.

let miDiv = document.getElementById("miDiv");                                                                           // Obtiene el ID del HTML y lo guarda en una variable
miDiv.innerHTML += "<h2>Titulo H2 - JavaScript</h2> <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>";  // Modifica y agrega nuevo contenido (lo escrito entre comillas) al contenido ya existente (+=).

//innerText - Se utiliza para acceder o modificar el contenido de texto puro de un elemento, sin interpretar o renderizar HTML.

let miTexto = document.getElementById("miTexto");                           // Obtiene el ID del HTML y lo guarda en una variable
miTexto.innerText = "Hola, este es un nuevo texto generado en JavaScript."; // Modifica el texto de la variable

//createElement() - Es un método que se utiliza para crear un nuevo elemento HTML. Toma como argumento el nombre del elemento.
//textContent     - Es una propiedad que se utiliza para obtener o establecer el contenido de texto de un elemento.
//querySelector   - Es un método que se utiliza para seleccionar el primer elemento que coincida con un selector CSS especificado.
//insertBefore    - Es un método del DOM que se utiliza para insertar un nodo antes de otro nodo hijo dentro de un nodo padre. 

let nuevoTexto = document.createElement("p");                                   // Crea un nuevo elemento <p>
nuevoTexto.textContent = "Este es mi nuevo párrafo generado antes del botón.";  // Agrega texto al nuevo elemento
let etiquetaMain = document.querySelector("main");                              // Encuentra el elemento main
let boton = document.getElementById("miBoton");                                 // Encuentra el botón
etiquetaMain.insertBefore(nuevoTexto, boton);                                   // Inserta el nuevo elemento <p> antes del botón

//append()      - Este método se utiliza para agregar uno o varios nodos o fragmentos de nodos al final de un elemento.
//appendChild() - Se utiliza para agregar un nodo hijo al final de un elemento específico.

let otroTexto = document.getElementById("miDiv");                                 // Encuentra por ID y lo guarda en variable.
otroTexto.append("Nuevo texto generado al final.", document.createElement("p"));  // Crea elemento <p> e inserta un texto al final.

let nodoPadre = document.getElementById("miTexto");                               // Encuentra un ID y lo guarda en una variable
let nodoHijo = document.createElement("p");                                       // Crea un elemento <p> en una variable
nodoHijo.textContent = "Nuevo texto generado después del otro texto generado.";   // Agrega texto al elemento <p>
nodoPadre.appendChild(nodoHijo);                                                  // Agrega un nodo hijo al nodo padre.

/* No estoy seguro de que estos ejemplos estén correctamente implementados. */

//console.dir() - Se utiliza para imprimir en la consola una representación detallada de un objeto JavaScript. Proporciona una vista más estructurada y jerárquica del objeto en la consola del navegador.

// --EJEMPLO--

const productos = [{ id: 1,  nombre: "Arroz", precio: 125},
                  {  id: 2,  nombre: "Fideo", precio: 70},
                  {  id: 3,  nombre: "Pan"  , precio: 50},
                  {  id: 4,  nombre: "Flan" , precio: 100}]


for (const producto of productos) {
    let contenedor = document.createElement("div")
    //Definimos el innerHTML del elemento con una plantilla de texto
    contenedor.innerHTML = `<h3> ID:        ${producto.id}      </h3>
                            <p>  Producto:  ${producto.nombre}  </p>
                            <b>  $          ${producto.precio}  </b>`
    document.body.appendChild(contenedor)
}

console.dir(productos)
console.log(productos)

//value

//document.getElementById("edad").value = 36

/*
En resumen, la línea de código completa está asignando el valor 36 a un elemento de formulario con el ID "edad". Si "edad" es un campo de entrada, por ejemplo, el valor en ese campo se establecerá en 36. Esto puede ser útil para predefinir o actualizar el valor de un campo de entrada en una página web mediante JavaScript.
*/