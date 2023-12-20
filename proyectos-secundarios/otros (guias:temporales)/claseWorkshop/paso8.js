//agregamos metodo filter

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

    // creamos un objeto tarea
    let TareaObjeto = {
        tarea: valorinput,
        fecha: new Date().toLocaleString()
    };

    // agregamos la tarea al array ListaTareas
    ListaTareas.push(TareaObjeto);

    // le damos al elemento resultado el valor del input
    resultado.innerHTML = `Tarea: ${TareaObjeto.tarea}, Fecha: ${TareaObjeto.fecha}`;

    // guardamos el valor en localStorage
    localStorage.setItem("tareaGuardada", JSON.stringify(ListaTareas));

    // Limpiar el input
    respuesta.value = "";

    mostrarTareas();
});

//Mostramos las tareas que vamos guardando
let mostrarTareas = () => {
    // Limpiamos contenido actual
    resultado.innerHTML = "";

    // Si hay tareas en la lista, las mostramos como una lista
    if (ListaTareas.length > 0) {
        resultado.innerHTML += "<ul>";
        ListaTareas.forEach(function (tarea) {
            resultado.innerHTML += `<li>Tarea: ${tarea.tarea}, Fecha: ${tarea.fecha}</li>`;
        });
        resultado.innerHTML += "</ul>";
    }
};

// Agregamos evento de entrada para el buscador
buscador.addEventListener("input", function () {
    // Filtramos las tareas según la cadena de búsqueda
    let cadenaBusqueda = buscador.value.toLowerCase();

    //creamos variables para filtrar nombre de lista y filtrarlo
    let tareasFiltradas = ListaTareas.filter(function (tareaBuscada)
     {
        return tareaBuscada.tarea.toLowerCase().includes(cadenaBusqueda);
    });

    // Mostramos las tareas filtradas
    mostrarTareasFiltradas(tareasFiltradas);
});


// Función para mostrar las tareas filtradas
function mostrarTareasFiltradas(tareas) {
    // Limpiamos el contenido actual de resultado
    resultado2.innerHTML = "";

    // Verificamos si hay tareas en la lista filtrada
    if (tareas.length > 0) {
        // Si hay tareas, creamos una lista desordenada (<ul>)
        resultado2.innerHTML += "<ul>";

        // Recorremos cada tarea filtrada y la mostramos como un elemento de lista (<li>)
        tareas.forEach(function (tarea) {
            resultado2.innerHTML += `<li>Tarea: ${tarea.tarea}, Fecha: ${tarea.fecha}</li>`;
        });

        // Cerramos la lista desordenada
        resultado2.innerHTML += "</ul>";
    } else {
        // Si no hay tareas, mostramos un mensaje indicando que no se encontraron tareas que coincidan con la búsqueda
        resultado2.innerHTML = "No se encontraron tareas que coincidan con la búsqueda.";
    }
}