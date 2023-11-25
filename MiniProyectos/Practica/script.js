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

//length (calcula tamaño)

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

//========================================= CLASE 10 - EVENTOS =========================================
/*
// EVENTO

En JavaScript, un evento es una acción que ocurre en el documento web (página). Como hacer clic en un botón, mover el mouse, cargar una página, etc. Cuando se produce un evento, el navegador web envía una señal al código JS para ejecutar una función específica en respuesta al evento.

Por ejemplo:
Si queremos que una función se ejecute cuando un usuario hace clic en un botón especifico, asignamos la función a la propiedad onClick del botón. Cuando el usuario hace clic en el botón, la página manda una señal al código JavaScript y se ejecuta la función que armamos.

Sintaxis:

  elemento.evento = function() {
    // Código a ejecutar cuando se produce el evento
  }

'elemento': es el elemento HTML al que queremos asignar el evento.
'evento': es el nombre del evento que queremos que se ejecute, como "onClick", "onLoad", "onMouseOver", etc.

============================================================

// MÉTODO VIEJO  (Se usa en sistemas anteriores al 2015)

Seleccionamos el botón y el título utilizando el método getElementById().  Es necesario crear el h1 en HTML, sino no funciona.

  let boton = document.getElementById("boton");
  let titulo = document.getElementById("titulo");

Asignamos la función al evento onClick del botón

  boton.onclick = function() {
    //Cambiamos el contenido del título
    titulo.innerHTML = "Nuevo texto";
  }

============================================================

// MÉTODO NUEVO (Nace en em6 2015 y es que usamos ahora)

addEventListener() es un método que nos permite agregar una función a un evento específico en un elemento HTML. Cuando se produce el evento, la función se ejecuta automáticamente.

Sintaxis:

  elemento.addEventListener(evento, funcion);

'elemento': es el elemento HTML al que se le desea agregar el evento.
'evento': es el nombre del evento que se desea asignar, como "click", "load", "submit", "keyup", etc.
'funcion': es la función que se va a ejecutar cuando se produzca el evento.

Por ejemplo:
Si queremos agregar un evento de clic a un botón con ID "mi-boton", se puede usar addEventListener() 
de la siguiente manera:

  let boton = document.getElementById("mi-boton");   //hay que crear un boton en html con el id 'mi-boton'

  boton.addEventListener("click", function() {
    console.log("¡Hiciste clic en el botón!");
    alert("evento detectado, mira la consola")
  });

============================================================

// MÉTODO OBSOLETO (No se recomienda escribir JS dentro de HTML)

  <div class="card">
    <h2>Evento Click</h2>
    <p>Presiona el botón para ver la alerta:</p>
    <button onclick="alert('¡Haz hecho clic en el botón!')">Haz clic aquí</button>
  </div>

============================================================

// -------- EVENTOS DE MOUSE --------

click, mouseover, mouseout, mousemove


CLICK:     este evento se activa cuando el usuario HACE CLIC en un elemento con el mouse.
MOUSEOVER: este evento se activa cuando el mouse ENTRA en un elemento.
MOUSEOUT:  este evento se activa cuando el mouse SALE de un elemento.
MOUSEMOVE: este evento se activa cuando el mouse SE MUEVE dentro de un elemento.

También existen otros eventos como MOUSEDOWN y MOUSEUP, entre otros.

Ejemplo de MOUSEMOVE:
Usamos el parámetro 'event' para obtener las coordenadas del mouse en la pantalla y las muestra en la consola.

  let elemento = document.getElementById("miElemento");

  elemento.addEventListener("mousemove", function(event) {
    console.log("El mouse estaen la posición x: " + event.clientX + " y en la posición y: " + event.clientY);
  });

// -------- EVENTOS DE TECLADO --------
                              
input, change, submit


INPUT: este evento se activa cuando se cambia el valor de un elemento de entrada.
Es útil cuando necesitas realizar alguna acción mientras el usuario está ingresando información en un campo de texto o área de texto. 
Podemos usarlo, por ejemplo, para mostrar una vista previa en tiempo real de lo que el usuario está escribiendo, para validar el contenido de un campo de texto a medida que el usuario lo escribe.

Ejemplo de INPUT:
                                                                                              
  let inputField = document.getElementById('miCampoDeTexto');

  inputField.addEventListener('input', function(event) {
    console.log('Valor del campo de texto cambiado:', event.target.value);
  });

CHANGE: este evento también se activa cuando se cambia el valor de un elemento de entrada, pero a diferencia del evento input, el evento change se dispara después de que el usuario terminó de interactuar con el texto.
Es útil, por ejemplo, para validar el contenido de un campo de texto después de que el usuario haya terminado de escribir o para actualizar un campo de texto con el contenido ingresado antes de enviar el formulario.

SUBMIT: este evento se activa cuando se envía un formulario, ya sea haciendo clic en un botón de enviar o presionando la tecla 'Enter' en un campo de texto.   

Ejemplo de SUBMIT:
El método preventDefault() sirve para detener el envío del formulario y evitar que la página se recargue. 

  let form = document.getElementById('miFormulario'); //es necesario crear el formulario en HTML para que funcione

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Detener el envío del formulario
    console.log('Formulario enviado');
  });

*/

/* 

-------- EJERCICIO --------

---- A RESOLVER ----

  let form = document.getElementById('miformulario')

  form.addEventListener('submit', function(event){
      event.preventDefault() //detiene el envio del formulario

      if(event.target.value === null){  //event.target.value hace referencia al valor de todo el formulario, lo cual no tiene sentido
          confirm('queres enviar el formulario vacio?')
      }
      else{
          alert('hola pepe')
      }
  })

---- RESUELTO ----

  let form = document.getElementById('miformulario')

  form.addEventListener('submit', function(event){
      event.preventDefault() //detiene el envio del formulario

      let inputValue = document.getElementById('micampodetexto').value;

      if(inputValue === ''){  //inputValue hace referencia al valor de 'micampodetexto', lo cual tiene sentido
          confirm('queres enviar el formulario vacio?')
      }
      else{
          alert('hola pepe')
      }
  })

// En este caso, hay 2 diferencias a tener en cuenta:
-La primera es que se declara una variable llamada 'inputValue', que recibe el valor del ID 'micampodetexto'
-La segunda es la comparación en el IF, donde se compara el 'inputValue' con '' (cadena vacía)

Además, acá se está obteniendo explícitamente el valor del campo de texto con la declaración del 'inputValue', en cambio, con el 'event.target' no queda especificado, al referirse al formulario en sí y no a un campo en específico.

*/

//========================================= CLASE 11 - STORAGE & JSON =========================================

/*

//================== STORAGE ==================

Local Storage:   los datos quedan guardados de forma indefinida (o hasta que se borren los datos de navegación).
Session Storage: los datos quedan guardados temporalmente, hasta que el usuario cierra la ventana.

Estos almacenamientos almacenan: Clave, Valor || Key, Value.
Siendo la Clave/Key la forma de identificarlo, y el Valor/Value el contenido real que se quiere almacenar.

---- setItem() ----
Sirve para almacenar información.

  localStorage.setItem(clave, valor)
  localStorage.setItem('unNumero', 20);

  sessionStorage.setItem(clave, valor)
  sessionStorage.setItem('unNumero', 20);

---- getItem() ----
Sirve para acceder a la información almacenada.

  let numero = localStorage.getItem('unNumero');
  console.log(numero);

  let numero = sessionStorage.getItem('unNumero');
  console.log(numero);

  let email = sessionStorage.getItem('email');
  console.log(typeof email);   //string

---- removeItem() ----
Elimina una información especificada.

  localStorage.removeItem('bienvenida'); 
  sessionStorage.removeItem('esValido'); 

---- clear() ----
Elimina toda la información.

  localStorage.clear()
  sessionStorage.clear()

---- CICLO FOR ----
Para recorrer el Storage, NO PODEMOS USAR 'FOR...OF' ni 'FOR...IN', sino de la siguiente forma:

  for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    console.log("Clave: "+ clave);
    console.log("Valor: "+ localStorage.getItem(clave));
  }

*/

/*

//================== JSON ==================

Si queremos almacenar la información de un objeto en un storage, hay que tener en cuenta que tanto la clave como el valor se almacenan en STRINGS, por lo que hay que transforma el objeto a JSON.

JavaScript Object Notation (JSON) es un formato basado en texto plano, para representar datos estructurados con la sintaxis de objetos de JavaScript. Es comúnmente utilizado para enviar y almacenar datos en aplicaciones web.
JSON es un string con un formato específico.

---- stringify ----
Acepta un objeto como parámetro y devuelve la forma de texto JSON equivalente.

  const producto1 = { id: 2, producto: "Arroz" }; 
  const enJSON = JSON.stringify(producto1);

  console.log(enJSON); // {"id":2,"producto":"Arroz"} 
  console.log(typeof producto1); // object 
  console.log(typeof enJSON); // string

  localStorage.setItem("producto1", enJSON); // Se guarda {"id":2,"producto":"Arroz"}

---- parse ----
Recibe un texto JSON como parámetro y devuelve el objeto JavaScript correspondiente.

  const enJSON = '{"id":2,"producto":"Arroz"} '; 
  const producto1 = JSON.parse(enJSON);

  console.log(typeof enJSON); // string 
  console.log(typeof producto1); // object 
  console.log(producto1.producto); // Arroz

  const producto2 = JSON.parse(localStorage.getItem("producto1"));

  console.log(producto2.id); // 2


-------- EJERCICIO (incompleto) --------

const inputNombre = document. querySelector ("#nombre")
const inputEdad = document. querySelector ("#edad")
const inputEmail = document.querySelector ("#email")
const botonEnviar = document .querySelector ("#guardar")
const botonTraer = document.querySelector ("#traer")

botonEnviar.addEventListener('click', guardarFormulario)

function guardarFormulario(){
  const datosDelFormulario = {
    nombre: inputNombre.value, 
    edad: inputEdad.value, 
    email: inputEmail.value
  }
  let resultado = JSON.stringify(datosDelFormulario)
  localStorage.setItem("datosForm", resultado) 
  console.log(resultado)
  alert("ya se guardaron los datos en el storage")
}

function cargarFormulario() {

  const formulario = document.getElementById('miformulario');
  const datosJSON = localStorage.getItem('datosForm');

  if(datosJSON) {
    const datosDelFormulario = JSON.parse(datosJSON)

    formulario.nombre.value = datosDelFormulario.nombre
  }
}

*/