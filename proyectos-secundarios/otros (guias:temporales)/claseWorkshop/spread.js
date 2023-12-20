// Unir Arrays o Objetos:
// Puedes utilizar el spread para combinar elementos de diferentes arrays u objetos en uno solo.

// javascript

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combinedArray = [...array1, ...array2]; // [1, 2, 3, 4, 5, 6]


// También puedes combinar objetos de manera similar.
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let combinedObject = { ...obj1, ...obj2 }; // { a: 1, b: 2, c: 3, d: 4 }


// Pasar Argumentos a Funciones:
// Puedes usar el spread para pasar un array como argumentos individuales a una función.
function sum(a, b, c) {
    return a + b + c;
}

let valores = [1, 2, 3];
let resultado = sum(...valores); // 6


// En este ejemplo, el spread toma los elementos del array valores y los pasa como argumentos individuales a la función sum.
// Clonar Objetos:
// Similar a la copia superficial de arrays, puedes utilizar el spread para clonar objetos.


let originalObj = { a: 1, b: 2 };
let clonedObj = { ...originalObj };


// Este enfoque realiza una copia superficial del objeto.

// Crear Objetos Literales:
// Puedes usar el spread para crear nuevos objetos literales basados en uno existente.

let obj5 = { a: 1, b: 2 };
let obj6 = { ...obj5, c: 3 };
// obj2 es { a: 1, b: 2, c: 3 }