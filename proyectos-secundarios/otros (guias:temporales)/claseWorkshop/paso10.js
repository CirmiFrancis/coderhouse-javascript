
// El "spread" en JavaScript se utiliza para descomponer elementos de un iterable, como un array, 
// y expandirlos en otro contexto. Se representa con tres puntos (...). Puedes usar el spread para copiar
//  elementos de un array, objeto o iterable en otro array, objeto o iterable. En tu código, podrías 
//  utilizar el spread para asegurarte de que estás trabajando
//  con una copia de la lista de tareas al filtrarlas, para evitar efectos secundarios no deseados.


let ListaTareas = [];

// tomamos elemento input
let respuesta = document.getElementById("ValorTareas");
let buscador = document.getElementById("BuscadorTareas");

// tomamos elemento botón
let boton = document.getElementById("agregarLista");

// tomamos elemento div
let resultado = document.getElementById("resultado");
let resultado2 = document.getElementById("resultado2");


// cargamos el valor almacenado en localStorage al cargar la página
window.onload = function () {
    let valorGuardado = localStorage.getItem("tareaGuardada");
    if (valorGuardado) {
        ListaTareas = JSON.parse(valorGuardado);
        mostrarTareas();
    }
};

// elemento botón se le agrega evento "click"
boton.addEventListener("click", function () {
    // tomamos el valor del input
    let valorinput = respuesta.value;

    // Verificamos si la tarea ya existe en la lista
    if (!existeTareaEnLista(valorinput)) {
        // Si no existe, creamos un objeto tarea
        let TareaObjeto = {
            tarea: valorinput,
            fecha: new Date().toLocaleString()
        };

        // Agregamos la tarea al array ListaTareas
        ListaTareas.push(TareaObjeto);

        // Mostramos y almacenamos las tareas
        mostrarTareas();
        guardarEnLocalStorage();
    } else {
        alert("La tarea ya existe en la lista.");
    }

    // Limpiar el input
    respuesta.value = "";
});

// Función para verificar si la tarea ya existe en la lista
function existeTareaEnLista(valorTarea) {
    return ListaTareas.some(function (tarea) {
        return tarea.tarea.toLowerCase() === valorTarea.toLowerCase();
    });
}

// Función para guardar la lista en localStorage
function guardarEnLocalStorage() {
    localStorage.setItem("tareaGuardada", JSON.stringify(ListaTareas));
}

//Mostramos las tareas que vamos guardando
function mostrarTareas() {
    resultado.innerHTML = "";
    if (ListaTareas.length > 0) {
        resultado.innerHTML += "<ul>";
        ListaTareas.forEach(function (tarea) {
            resultado.innerHTML += `<li>Tarea: ${tarea.tarea}, Fecha: ${tarea.fecha}</li>`;
        });
        resultado.innerHTML += "</ul>";
    }
}

// Agregamos evento de entrada para el buscador
buscador.addEventListener("input", function () {
    // Filtramos las tareas según la cadena de búsqueda
    let cadenaBusqueda = buscador.value.toLowerCase();
    let tareasFiltradas = [...ListaTareas].filter(function (tarea) {
        return tarea.tarea.toLowerCase().includes(cadenaBusqueda);
    });

    // Mostramos las tareas filtradas
    mostrarTareasFiltradas(tareasFiltradas);
});

// Función para mostrar las tareas filtradas
function mostrarTareasFiltradas(tareas) {
    resultado2.innerHTML = "";
    if (tareas.length > 0) {
        resultado2.innerHTML += "<ul>";
        tareas.forEach(function (tarea) {
            resultado2.innerHTML += `<li>Tarea: ${tarea.tarea}, Fecha: ${tarea.fecha}</li>`;
        });
        resultado2.innerHTML += "</ul>";
    } else {
        resultado2.innerHTML = "No se encontraron tareas que coincidan con la búsqueda.";
    }
}