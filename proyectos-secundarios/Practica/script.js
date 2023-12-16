//========================================= CLASE 5 - OBJETO =========================================

/*

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

*/

//========================================= CLASE 6 - ARRAY =========================================

/*

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

*/

//========================================= CLASE 7 - FUNCIONES ORDEN SUPERIOR I =========================================

/*

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

*/

//========================================= CLASE 8 - FUNCIONES ORDEN SUPERIOR II =========================================

/*

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

  año: (4 digitos)
  mes: (0-11)
  dia del mes: (1-31)
  hora: 0-23
  minutos: (0-59)
  segundos: (0-59)
  mili-segundos: (0-999)

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

*/

//========================================= CLASE 9 - DOM =========================================

/*

//DOM: Modelo de Objeto de Documento. Define la estructura lógica de los documentos y el modo en que se accede y manipula. El DOM organiza un documento como una estructura de nodos en un árbol, donde cada parte del documento es representada por un nodo.

Tipos de nodos:

Element Nodes   (Nodos de Elemento):    Elementos HTML, como <p>, <div>, <span>, etc.
Attribute Nodes (Nodos de Atributo):    Atributos de un elemento HTML. Por ejemplo, el atributo href de un enlace (<a>).
Text Nodes      (Nodos de Texto):       Contenido de texto dentro de un elemento. Por ejemplo, el texto dentro de un párrafo (<p>).
Comment Nodes   (Nodos de Comentario):  Comentarios en el código HTML.
Document Nodes  (Nodos de Documento):   Representan el documento en sí.

//Ejemplo de como un archivo HTML es dividido y clasificado en los distintos nodos del árbol.

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

// No estoy seguro de que estos ejemplos estén correctamente implementados.

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

// En resumen, la línea de código completa está asignando el valor 36 a un elemento de formulario con el ID "edad". Si "edad" es un campo de entrada, por ejemplo, el valor en ese campo se establecerá en 36. Esto puede ser útil para predefinir o actualizar el valor de un campo de entrada en una página web mediante JavaScript.

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

//========================================= CLASE 12 - OPERADORES AVANZADOS I =========================================

/*

//------------ Operador ++ (Sugar Syntax) ------------
Se puede usar '++' para simplificar el código.

  let num = 10

  num = num + 1
  num += 1
  num++

//------------ Operador Ternario ------------
Se puede usar 'condicion ? caso1 : caso2' para acortar el IF-ELSE.

  let temperatura = 31
  if (temperatura > 30) {
    alert("Día caluroso!")
  } 
  else {
    alert("Día agradable")
  }

  temperatura > 30 ? alert("Día caluroso!") : alert("Día agradable")

//------------ Operador Lógico AND ------------
Operador AND. Trata de ejecutar (o retornar) algo sólo si la condición es verdadera. 'condicion && accion'

  const carrito = []
  if (carrito.length === 0) {
    console.log("El carrito está vacío!")
  }
  carrito.length === 0 && console.log("El carrito está vacío!")

  const usuario = {
    nombre: "John Doe",
    edad: 14
  }
  const registroIngreso = usuario.edad >= 18 && new Date()
  console.log(registroIngreso)      // FALSE

//------------ Operador OR & Nullish Coalescing ------------
Operador OR. Consta de dos operandos y no de una condición explícita. Si no es 'Falsy' (si es distinto de: 0, null, undefined, NaN, false, o string vacío), el operador OR ( || ) retorna operando1. De lo contrario, retorna operando2. 'operando1 || operando2'

  console.log( 0 || "Falsy")              // Falsy
  console.log( 40 || "Falsy")             // 40
  console.log( null || "Falsy")           // Falsy
  console.log( undefined || "Falsy")      // Falsy
  console.log( "Hola Mundo" || "Falsy")   // Hola Mundo
  console.log( "" || "Falsy")             // Falsy
  console.log( NaN || "Falsy")            // Falsy
  console.log( true || "Falsy")           // true
  console.log( false || "Falsy")          // Falsy

  const usuario1 = { 
    nombre: "John Doe", 
    edad: 14
  }
  const usuario2 = null
  console.log( usuario1 || "El usuario no existe" )     // { nombre: 'John Doe', edad: 14 }
  console.log( usuario2 || "El usuario no existe" )     // El usuario no existe

Operador Nullish Coalescing. A diferencia del operador OR, admite más valores como ‘verdaderos’.

  console.log( 0 ?? "Nullish")              // 0
  console.log( 40 ?? "Nullish")             // 40
  console.log( null ?? "Nullish")           // Nullish
  console.log( undefined ?? "Nullish")      // Nullish
  console.log( "Hola Mundo" ?? "Nullish")   // Hola Mundo
  console.log( "" ?? "Nullish")             // ""
  console.log( NaN ?? "Nullish")            // NaN
  console.log( true ?? "Nullish")           // true
  console.log( false ?? "Nullish")          // false

//------------ Acceso Condicional a un objeto/propiedad ------------
Si intentamos acceder a un objeto que no existe naturalmente obtendremos un error. Pero, si usamos el operador ? sobre la referencia de un objeto para condicionar su acceso podemos tener un mejor control de errores en la ejecución.

  const usuario = null
  console.log( usuario.nombre || "El usuario no existe" )      // Error: "No se pueden leer propiedades de NULL"
  console.log( usuario?.nombre || "El usuario no existe")      // "El usuario no existe"

  const usuario = { 
    nombre: "John Doe", 
    edad: 22,
    cursos: {
      javascript: "aprobado" 
    }
  }
  console.log( usuario?.cursos?.javascript || "La propiedad no existe")       // "aprobado"
  console.log( usuario?.trabajos?.coderhouse || "La propiedad no existe")     // "La propiedad no existe"

//------------ Desestructuración ------------
Es una técnica que nos permite declarar variables donde guardar propiedades de un objeto de forma rápida y directa. 'let { prop } = objeto'

En vez de utilizar:
  const usuario = { 
    nombre: "John Doe", 
    edad: 32
  }
  let nombre = usuario.nombre 
  let edad = usuario.edad

Podemos usar:
  const { nombre, edad } = usuario
  console.log(nombre)             // "John Doe" 
  console.log(edad)               // 32 

  const { telefono } = usuario    // undefined

Si queremos acceder a propiedas más internas... 'let { prop: {propInt} } = objeto'
  const usuario = { 
    nombre: "John Doe", 
    edad: 32,
    telefono: {
      cel: 113334444, 
      casa: null, 
      trabajo: 113325555
    } 
  }
  const { nombre, telefono: {trabajo} } = usuario
  console.log(nombre)       // "John Doe" 
  console.log(trabajo)      // 113325555

//------------ Desestructuración: Alias ------------
Podemos declarar la variable con un nombre alternativo tras haber desestructurado el objeto.

  const item = { 
    item_id: 432,
    product_name: "Some product",
    price_per_unit: 5600 
  }

  const {
    item_id: id,
    product_name: nombre,
    price_per_unit: precio 
  } = item

  console.log(id)         // 432 
  console.log(nombre)     // "Some product"
  console.log(precio)     // 5600

//------------ Desestructuración en parámetros ------------
Si en una función recibimos objetos por parámetros, también es posible desestructurarlos directamente en el llamado, definiendo esto al declarar la función.

  const producto = { 
    id: 10,
    nombre: "Curso Javascript",
    precio: 12500 
  }
  const desestructurar = ( item ) => {
    const {id, nombre} = item 
    console.log(id, nombre)
  }
  desestructurar(producto)    // 10 Curso Javascript

  const desestructurar = ( {id, nombre} ) => { 
    console.log(id, nombre)
  }
  desestructurar(producto)    // 10 Curso Javascript

  window.addEventListener('click', ( {x, y} ) => {
    console.log(x, y)
  })

//------------ Desestructuración de arrays ------------
Es posible desestructurar arrays de forma similar, usando corchetes [] en vez de llaves. La diferencia con la desestructuración de objetos es que la de arrays es posicional.

  const nombres = ["Juan", "Julieta", "Carlos", "Mariela"]
  const [a, b] = nombres
  console.log(a)              // "Juan" 
  console.log(b)              // "Julieta"

Si queremos acceder a otras posiciones, o mejor dicho omitir las primeras, podemos hacerlo dejando espacios vacíos con comas:

  const nombres = ["Juan", "Julieta", "Carlos", "Mariela"]
  const [,, a, b] = nombres
  console.log(a)              // "Carlos" 
  console.log(b)              // "Mariela"

*/

//========================================= CLASE 13 - OPERADORES AVANZADOS II =========================================
/*

//------------ Operador Spread (...) ------------

Es una herramienta que nos permite, como su nombre indica, desparramar un array u objeto. En otras palabras, cambiar la forma en la que presentamos este array u objeto.

Unir Arrays o Objetos
También puedes combinar objetos de manera similar
Pasar Argumentos a Funciones
Clonar ObjetosCrear Objetos Literales

--- Spread de Arrays ---

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combinedArray = [...array1, ...array2]; // [1, 2, 3, 4, 5, 6]

------

const nombres = ["Juan", "Julieta", "Carlos", "Mariela"]

console.log(nombres) // ["Juan", "Julieta", "Carlos", "Mariela"]
console.log(...nombres) // Juan Julieta Carlos Mariela

------

const numeros = [4, 77, 92, 10, 3, -32, 54, 11]
console.log( Math.max(numeros) ) // NaN

const numeros = [4, 77, 92, 10, 3, -32, 54, 11]
console.log( Math.max(...numeros) ) // 92

--- Spread de Objetos ---

const usuario1 = { 
  nombre: "Juan",
  edad: 24,
  curso: "Javascript" 
}

const usuario3 = { 
  ...usuario1,
  curso: "ReactJS",
  email: "juan@doe.com" 
}

console.log(usuario3) // { nombre: 'Juan', edad: 24, curso: 'ReactJS', email: 'juan@doe.com' }

------------ Rest parameters ------------

function sumar(...numeros) {
  return numeros.reduce((acc, n) => acc + n, 0)
}

console.log( sumar(4, 2) ) // 6
console.log( sumar(10, 15, 30, 5) ) // 60
console.log( sumar(100, 300, 50) ) // 450

*/

//========================================= CLASE 14 - LIBRERÍAS =========================================
/*

¿Qué son las librerías?

Son códigos pre-escritos que facilitan el desarrollo de aplicaciones. Podemos pensar las librerías como pequeños programas escritos por terceros que podemos incorporar a nuestra aplicación para resolver problemas determinados.
Se incorporan descargando archivos o a través de CDN.

¡Es importante aprender a leer documentación!

------

Algunas librerías:

  - Sweet Alert: reemplaza el alert() tradicional, haciéndolo customizable y más atractivo.

  - Toastify JS: permite mostrar mensajes de notificación personalizados.

  - Luxon: permite trabajar con fechas y horas de una forma sencilla. Con Luxon puedes formatear, parsear, sumar y restar fechas, entre otras funciones.

*/

//========================================= CLASE 15 - ASINCRONÍA & PROMESAS =========================================
/*

//------------------------ ASINCRONÍA ------------------------

La programación sincrónica funciona de manera lineal, ejecutando una acción y después otra. Sólo podemos realizar una tarea a la vez y cada tarea es bloqueante de la siguiente.

La programación asincrónica, por otro lado, permite que múltiples tareas sucedan a la vez. Al comenzar una acción, nuestro programa sigue en ejecución; y cuando la acción termina nuestro programa es informado y consigue acceso al resultado correspondiente.

------ setTimeout ------
Es una función que ejecuta una operación después de un cierto tiempo especificado. Permite realizar acciones asincrónicamente. La función recibe dos parámetros: una función de callback y un valor numérico que representa milisegundos.

  setTimeout(fn, time)

  setTimeout(()=> {
  console.log("Proceso asincrónico")
  }, 3000)

EJEMPLO: 'Inicia Proceso' y 'Fin proceso' se muestran en la consola inmediatamente, en cambio, 'Mitad de proceso' se muestra a los 2 segundos.

  console.log("Inicia proceso")
  setTimeout(()=> { 
    console.log("Mitad de proceso")
  }, 2000)
  console.log("Fin proceso")

  // Inicia proceso
  // Fin proceso
  // Mitad de proceso - tras 2 segundos

EJEMPLO 2: al hacer clic en 'btn', añadimos a 'popup' la clase 'popup-active', la cual se remueve a los 2.5 segundos. Esta función es similar a lo que vimos en SweetAlert y Toastify.

  const btn = document.querySelector('#boton')
  const popup = document.querySelector('#popup-mensaje')

  btn.addEventListener('click', () => { 
    popup.classList.add('popup-active')

    setTimeout(() => { 
      popup.classList.remove('popup-active')
    }, 2500) 
  })

------ clearTimeout ------
Es una función que cancela la ejecución de una operación programada con 'setTimeout'.

EJEMPLO: el timeout generado nunca llega a ejecutarse porque es removida antes de que transcurran 2 segundos.

  console.log("Inicio")

  const fin = setTimeout(() => {
    console.log("fin")
  }, 2000)

  clearTimeout(fin)

------ setInterval ------
Es una función que ejecuta repetidamente una operación a intervalos de tiempo regulares.

------ clearInterval ------
Es una función que detiene la ejecución de operaciones programadas con 'setInterval'.

EJEMPLO: seteamos un intervalo que suma repetidamente en 1 a la variable 'counter', imprimiendo, también, por consola el valor de la variable, cada 1000 milisegundos (un segundo). Al ser igual o mayor a 5, removemos el intervalo y avisamos por consola.

  let counter = 0
  const interval = setInterval(() => {
    counter++
    console.log("Counter: ", counter)
  
    if (counter >= 5) { 
      clearInterval(interval) 
      console.log("Se removió el intervalo")
    }
  }, 1000)

------ Callback ------
Función que se pasa como argumento a otra función y se ejecuta después de que se complete alguna operación.

------ Call Stack (pila) ------
Es una lista donde se apilan las distintas tareas a ejecutar por nuestro programa. Javascript es un lenguaje single threaded, o de un único hilo, lo que significa que tiene un único stack o pila de ejecución.
Es una estructura de datos que registra las llamadas a funciones en ejecución. Funciona en un principio de último en entrar, primero en salir (Last In, First Out - LIFO). 

------ Event Loop ------
Es la herramienta que permite la sincronización entre nuestro call stack con estas tareas asincrónicas que funcionan en un thread aparte. Si el stack está vacío, el Event Loop envía la primera función que esté en la callback queue al call stack y comienza a ejecutarse.
Es un mecanismo que maneja la ejecución de código asíncrono en JavaScript, garantizando que el call stack se mantenga despejado para evitar bloqueos.

------ Loupe ------
http://latentflip.com/loupe/
Es una visualización que nos ayuda a comprender cómo interactúan entre sí call stack, event loop y callback queue. Podemos escribir código sincrónico y asincrónico y ver cómo es el funcionamiento de estas piezas en conjunto.

//------------------------ PROMESAS ------------------------

Es un objeto de Javascript que representa un evento a futuro. Es una acción asincrónica que se puede completar en algún momento y producir un valor, y notificar cuando esto suceda.

------ Promise, Resolve & Reject ------

Una promesa puede ser resuelta o rechazada, y cuenta con tres estados posibles: PENDING, FULFILLED & REJECTED.

  new Promise( (resolve, reject) => {
    //cuerpo de la promesa
  })

En principio, una promesa se retorna con estado pending, entendiendo que el valor a generar aún no fue resuelto.

  const eventoFuturo = () => {
    return new Promise( (resolve, reject) => {
      //cuerpo de la promesa
    }) 
  }
  console.log( eventoFuturo() ) // Promise { <pending> }

Si el cuerpo de la promesa llama a resolve(), la promesa cambiará su estado a FULFILLED, con el valor enviado a resolve().
Si la promesa llama a reject(), cambiará su estado a REJECTED con el valor enviado al reject().

  const eventoFuturo = (res) => {
    return new Promise( (resolve, reject) => {
      if (res === true) {
          resolve('Promesa resuelta')
      } else {
          reject('Promesa rechazada')
      } 
    })
  }
  console.log( eventoFuturo(true) ) // Promise { 'Promesa resuelta' }
  console.log( eventoFuturo(false) ) // Promise { <rejected> 'Promesa rechazada' }

El mismo caso agregando un delay con 'setTimeout':

  const eventoFuturo = (res) => {
    return new Promise( (resolve, reject) => {
      setTimeout( () => {
          res ? resolve('Promesa resuelta') : reject('Promesa rechazada')
      }, 2000) 
    })
  }
  console.log( eventoFuturo(true) ) // Promise { <pending> }
  console.log( eventoFuturo(false) ) // Promise { <pending> }

------ .then(), .catch() & .finally() ------

Al llamado de una función que retorne una promesa, podemos concatenar el método .then() o .catch(), los cuales reciben una función por parámetro con la cual se captura el valor de la promesa:

.then() : Si la promesa es resuelta, su valor de retorno se captura dentro del .then(), recibiendo por parámetro de su función ese valor.

  eventoFuturo(true)
    .then( (response) => {
      console.log(response) // Promesa resuelta 
    })

.catch() : si la promesa es rechazada, su valor se captura dentro de un .catch() siguiendo la misma lógica.

  eventoFuturo(false) 
    .catch( (error) => {
      console.log(error) // Promesa rechazada 
    })

Para cada promesa podemos definir una estructura para trabajar los distintos casos posibles. Cada promesa sólo puede resolverse o rechazarse una única vez.

  eventoFuturo(true)
    .then( (response) => {
      console.log(response) // Promesa resuelta
    })
    .catch( (error) => {
      console.log(error)
    })

  eventoFuturo(false)
    .then( (response) => {
      console.log(response)
    })
    .catch( (error) => {
      console.log(error) // Promesa rechazada
    })

.finally() : es un método que recibe una función la cual se ejecutará siempre al finalizar la secuencia, sin importar si se haya resuelto o no la promesa.

  eventoFuturo(true)
    .then( (response) => {
      console.log(response)
    })
    .catch( (error) => {
      console.log(error)
    })
    .finally( () => {
      console.log("Fin del proceso")
    })
  // Promesa resuelta
  // Fin del proceso

*/

//========================================= CLASE 16 - AJAX & FETCH =========================================

/*

//------------------------ AJAX (Asynchronous JavaScript and XML) ------------------------

------ AJAX ------ 

Es una técnica de desarrollo web que utiliza varias tecnologías, como: JavaScript, HTML, CSS, XML y XMLHttpRequest, para crear aplicaciones web interactivas y dinámicas. La característica principal de AJAX es la capacidad de realizar solicitudes asíncronas al servidor web sin recargar la página completa. Esto permite la actualización de partes específicas de una página sin la necesidad de cargarla nuevamente.

Ejemplo: Gmail usa AJAX, ya que para actualizar los mails recibidos, no recarga toda la página y solamente actualiza esa parte.

------ Modelo Cliente-Servidor ------

- Frontend: Navegador web (HTML, CSS, JS) 
- Backend: Servidor & Base de Datos (Node JS, PHP, Laravel | MySQL, PostgreSQL)

Las apps consumen recursos provistos por algún servidor (back-end), o envía datos a éste para almacenarlos de forma persistente. Es fundamental aprender a dominar los métodos para realizar este intercambio de información y comprender el protocolo implicado.

------ Peticiones HTTP ------

El mecanismo por el cual se piden y proveen datos a través de internet es HTTP (HyperText Transfer Protocol).
Cuando emitimos una orden al navegador, hace una petición (o request) HTTP a algún servidor. Luego, la recibirá, procesará y nos devolverá una respuesta con información que utilizaremos en la aplicación.
Estas peticiones que debemos hacer están definidas por varias partes:
- Una URL o dirección: nos comunicamos con un servidor para pedir información a través de una URL.
- Un método (GET, POST, PUT, DELETE).
  * GET:    Para obtener información (o recurso) del servidor. Suelen ser las más utilizadas.
  * POST:   Para enviar información al servidor para crear algún recurso.
  * PUT:    Para crear o modificar algún recurso en el servidor.
  * DELETE: Para eliminar algún recurso en el servidor.
- Headers. 
- Body.
- Parámetros (Query Params o URL Params).
  * Query Params: son datos adicionales que se incluyen en una URL después del símbolo de interrogación ('?' o '?q'). Estos parámetros están compuestos por pares clave-valor y se utilizan para enviar información adicional al servidor a través de la URL.
  Ejemplo: https://ejemplo.com/pagina?nombre=Juan&edad=25
  * URL Params: es un término más general y puede referirse tanto a los parámetros de consulta como a cualquier parte de la URL que contiene información específica. Los parámetros de URL también pueden incluir segmentos de la URL que contienen valores variables.
  Ejemplo: https://ejemplo.com/pagina/:id
  Esta sintaxis permite enviar parámetros directamente en la forma de segmentos de la URL, es decir separados por / .

  https://www.domain.com/page?key1=value1&key2=value2

  '?':      empieza el query string
  'key1':   nombre de variable
  '=':      separador de valor
  'value1': valor de la propiedad
  '&':      separador
  'key2':   nombre de variable 2
  '=':      separador de valores
  'value2': valor de la propiedad 2

------ API (Application Programming Interfaces) ------

Es una aplicación web construida en base a la arquitectura API REST, a la cual podemos solicitar y enviar información desde el cliente. Generalmente, nos comunicamos con aplicaciones de este tipo y es la tendencia actual de desarrollo.
La ventaja de este modelo es que está orientado a recursos y define métodos claros para solicitar y enviar información.

Hay muchas APIs disponibles que podemos utilizar para acceder a distintos recursos útiles para nuestra aplicación:
- Servicios de contenido (CMS), 
- Plataformas de pago, 
- Servicios de e-mail, 
etcétera.

Existe una API que sirve para hacer pruebas de peticiones, llamada JSONPlaceholder. En esta podremos notar que existen distintas rutas que podemos usar:
- GET:      /posts
- GET:      /posts/1
- GET:      /posts/1/comments
- GET:      /comments?postId=1
- POST:     /posts
- PUT:      /posts/1
- PATCH:    /posts/1
- DELETE:   /posts/1
Descargué la extensión 'Thunder Client' para experimentar con la página 'https://jsonplaceholder.typicode.com/'.

Una API suele tener una URL base (el dominio donde está alojada la aplicación) y luego puede tener varios endpoints, es decir, distintas secciones a las que podemos acceder.

//------------------------ FETCH ------------------------

Javascript nos ofrece el método fetch() para hacer peticiones HTTP a algún servicio externo. Como estas peticiones son asincrónicas, convenientemente el método fetch() trabaja con promesas.
  
  fetch(url, config)

Por defecto el método fetch hace peticiones del tipo GET. 

Usando la API de JSON Placeholder como ejemplo, podemos ver que, según la documentación, para obtener una lista de posts debemos hacer una petición del siguiente tipo.

  fetch('https://jsonplaceholder.typicode.com/posts')
    .then( (response) => response.json() );
    .then( (json) => console.log(json) );

Para trabajar con la resolución de la petición, debemos hacerlo dentro del .then() correspondiente:

  console.log( fetch('https://jsonplaceholder.typicode.com/posts') ) 
  // Promise {<pending>}

  fetch('https://jsonplaceholder.typicode.com/posts')
    .then( (resp) => console.log(resp) )
  // Response

------ Response ------

LLamar a fetch() retorna una promesa que resuelve en un objeto Response que contiene información sobre la respuesta del servidor, como su código de estado y headers.
Para acceder al contenido de la respuesta debemos dar un paso adicional, y por eso es que se ven dos .then() concatenados.

Generalmente, se transfieren datos en formato JSON. Por lo tanto, para obtener el contenido de la respuesta debemos aplicar el método .json() a ese objeto. Éste retorna a su vez una Promesa, por lo que capturamos su contenido (los datos enviados por la API) en un segundo .then()

  fetch('https://jsonplaceholder.typicode.com/posts') 
    .then( (resp) => resp.json() )
    .then( (data) => {
      console.log(data) 
    })

En el parámetro data tenemos el contenido de la respuesta de nuestra petición. En este caso, la API nos responde con un array de 100 elemento donde cada elemento es un post.

Trabajar con APIs nos ofrece un entorno claro sobre cómo comunicarnos y obtener respuestas con recursos. Sin embargo, cada API define qué responder, qué formato darle a los datos que envía y cómo estructurarlos. Por lo tanto, siempre debemos analizar las respuestas obtenidas para ver qué datos utilizar de ellas.

En este caso, cada elemento tiene propiedades: body, id, title, userId. Para acceder a sus objetos y propiedades podemos hacer:

  fetch('https://jsonplaceholder.typicode.com/posts' )
    .then( (resp) => resp.json() ) 
    .then( (data) => {
      console.log( data[0].title ) 
      console.log( data[0].body )

Para volcarlo al DOM...

  // HTML
  <h2>Posts!</h2> 
    <hr/>
    <ul id="listado"> 
    </ul>

  // JavaScript
  const lista = document.querySelector('#listado')
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then( (resp) => resp.json() )
    .then( (data) => {
      data.forEach((post) => {
        const li = document.createElement('li')
        li.innerHTML = 
        `
          <h4>${post.title}</h4>
          <p>${post.body}</p>
        `
        lista.append(li)
      })
    })

------ Enviando datos con post ------

La API de JSON Placeholder también nos permite simular peticiones POST, es decir, podemos hacer una petición para enviar datos a la API. Al ser una simulación, no se crean recursos realmente en el servidor, pero sí obtenemos una respuesta aceptando el POST.

Dijimos que el segundo parámetro del método .fetch() es un objeto de configuración. En éste podemos definir el método, los headers y el body de la petición. Si bien fetch trae valores por defecto para esto (como el método que es GET), podemos modificarlo a
discreción según sea necesario.

  fetch('https://jsonplaceholder.typicode.com/posts', 
  {
    method: 'POST',
    body: JSON.stringify({
      title: 'Coderhouse', 
      body: 'Post de prueba', 
      userId: 1,
    }), 
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }, 
  })
    .then((response) => response.json()) 
    .then((data) => console.log(data))

- method: ‘POST’. Significa que el método de la petición será POST. Si no lo modificamos será de tipo GET por defecto.
- headers: En este caso se agrega una propiedad ‘Content-type’, con el valor que nos indica la documentación de la API. Si no se agrega la petición sería rechazada por el servidor.
- body: Aquí se adjuntan los datos a enviar al servidor. En este caso se envía un objeto con la forma { title, body, userId }. El body debe enviarse en formato JSON, por eso lo vemos envuelto en un JSON.stringify().

Por lo general, al hacer un POST obtenemos una respuesta que nos envía una copia del recurso creado en el servidor.

------ Rutas Relativas ------

Si la URL utilizada no contiene el prefijo ‘https:’, la ruta es relativa. Así, podemos hacer una petición a algún archivo local en formato JSON usando fetch.

  // data.json
  [
    {"nombre": "Producto 1", "precio": 1500, "id": 1}, 
    {"nombre": "Producto 2", "precio": 2500, "id": 2}, 
    {"nombre": "Producto 3", "precio": 3500, "id": 3}, 
    {"nombre": "Producto 4", "precio": 4500, "id": 4}, 
    {"nombre": "Producto 5", "precio": 5500, "id": 5}
  ]

  const lista = document.querySelector('#listado')
  fetch('/data.json')
    .then( (res) => res.json()) 
    .then( (data) => {
      data.forEach((producto) => {
        const li = document.createElement('li') 
        li.innerHTML = 
        `
          <h4>${producto.nombre}</h4> 
          <p>${producto.precio}</p> 
          <p>Código: ${producto.id}</p> 
          <hr/>
        `
        lista.append(li) 
      })
    })

------ Async-Await ------

Trabajar con promesas facilita mucho el control de los procesos asincrónicos. Sin embargo, en procesos extensos se puede dificultar el trabajo escribiendo todo dentro de varios .then().

Por suerte, las promesas se pueden trabajar como si escribiéramos código sincrónico con: async-await.

La sentencia await nos permite establecer un punto de espera en el código. Aplicado como prefijo a una promesa (en este caso, el return del fetch) se bloquea la ejecución de la siguiente instrucción hasta que la promesa se resuelva.
Así, agregando esta sentencia podemos ver que ahora en la variable vemos el objeto Response, o sea la promesa resuelta:

  const resp = await 
  fetch('https://jsonplaceholder.typicode.com/posts') 
  console.log(resp) // Response

Pero await sólo puede utilizarse dentro de una función asincrónica, y se agrega como prefijo a la función asincrónica. Aquí es donde entra la sentencia async, la cual sirve para declarar una función como asincrónica, y se agrega como prefijo a la función.
Así, dentro de una función async podemos utilizar la sentencia await vista previamente. Esto nos permite esperar a que se resuelvan las promesas vistas para continuar con la instrucción siguiente.

  async function pedirPosts() { }
  // o
  const pedirPosts = async () => { }

El resultado es una sintaxis que se asemeja a la escritura sincrónica tradicional. Obtenemos el mismo resultado que antes, pero con una sintaxis más clara. El async-await funcionan de la mano. Recordamos que es una herramienta adicional que puede facilitar la escritura, no es una obligación.

  const pedirPosts = async () => {
      const resp = await
  fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await resp.json()
    data.forEach((post) => {
      const li = document.createElement('li')
      li.innerHTML = 
      `
        <h4>${post.title}</h4>
        <p>${post.body}</p>
      `
      lista.append(li)
    })
  }
  pedirPosts()

*/

//========================================= CLASE 17 - FRAMEWORKS & NODE JS =========================================

/*

//------------------------ NODE JS ------------------------

Es un entorno adicional de ejecución para Javascript. Es un programa que permite ejecutar código JavaScript por fuera del navegador. Con él podemos construir desde aplicaciones de línea de comandos (consola) hasta servidores HTTP para potenciar aplicaciones web.

------ NPM (Node Package Manager) ------

Es un repositorio de módulos de Node. 
Muchos de esos programas que incorporamos a nuestros proyectos están escritos como paquetes, o módulos, de Node. En el repositorio NPM se listan y alojan para descargarlos e integrarlos a las APPs de forma sencilla.

El comando 'npm init' crea un archivo llamado package.json que contiene información sobre nuestra app, como nombre, autor, versión, dependencias, etcétera.

//------------------------ FRAMEWORKS ------------------------

------ React JS, Angular y Vue JS ------

React JS, Angular y Vue Js trabajan con componentes. 
Un componente es un conjunto de elementos que conforman una unidad funcional (un header, un footer, un carousel, etcétera). Pensar en componentes permite dividir nuestra app en diferentes piezas y trabajarlas por separado, integrándose en una estructura mayor para formar la app. Este enfoque nos permite desarrollar la lógica de comportamiento de cada componente de forma modular, sin interferir en la lógica de los otros.

- React JS: es la más popular y la más flexible. Está respaldada por mucha documentación. Requiere de librerías de terceros.
- Angular: tiene una curva de aprendizaje empinada. Es usada por muchas empresas por lo completa que es. Utiliza Typescript.
- Vue JS: es más fácil de aprender y sencillo de integrar. No compite ni a nivel empresarial ni a nivel comunidad con las otras.

------ SPA (Simple Page Application) ------

Aplicación de una sola página, es una web app que consiste de un único archivo HTML que se carga al ingresar al sitio, y el resto de la navegación y cambios de página se da mediante modificación dinámica del DOM con Javascript.

Una SPA tiene el propósito de brindar una experiencia más fluida al usuario, mejorando la performance y velocidad. Esto se logra ya que todos los códigos de HTML, JavaScript, y CSS se cargan una sola vez o los recursos necesarios se cargan dinámicamente cuando lo requiera la página, normalmente como respuesta a las acciones del usuario.

Arquitectura: 
Cliente <--> Servidor <--> Base de Datos

Router:
Controla e interpreta cada solicitud del usuario. En una SPA los cambios de URL no significan cargar nuevos archivos html, sino que son captados por un router que entiende qué modificar del DOM para representar una nueva vista.

MVC (Modelo - Vista - Controlador):
Es un patrón de arquitectura de software que separa los datos de una aplicación de su representación, y el módulo encargado de gestionar los eventos y la comunicación. Define, por un lado, componentes para la representación de la información y, por otro lado, para la interacción del usuario
Usuario <--> Vista <--> Controlador <--> Modelo

------ Fullstack con JS: MERN, MEAN Y MEVN STACK ------

La sigla MERN viene de: 
- MongoDB: un sistema de base de datos NoSQL orientado a documentos y de código abierto, 
- Express: un framework para Node.js que sirve para crear aplicaciones de backend en menos tiempo, 
- React: un framework de frontend para crear aplicaciones web, 
- Node: un entorno en tiempo de ejecución multiplataforma para la capa del servidor basado en JavaScript. 
Puedes reemplazar React por Angular o Vue, y eso da MEAN y MEVN.

*/