//utilizamos array y ciclos


let ListaTareas = []


// tomamos elemento input
let respuesta = document.getElementById("ValorTareas");

// tomamos elemento botón
let boton = document.getElementById("agregarLista");

// tomamos elemento div
let resultado = document.getElementById("resultado");




// cargamos el valor almacenado en localStorage al cargar la página
window.onload = function () {
    
    let valorGuardado = localStorage.getItem("tareaGuardada");
    if (valorGuardado) {

        ListaTareas = JSON.parse(valorGuardado)

        mostrarTareas()
        
    }
};






// elemento botón se le agrega evento "click"
boton.addEventListener("click", function () {
    // tomamos el valor del input
    let valorinput = respuesta.value;

    //creamos un objeto
    //propiedad 1 ; valor tarea
    //propiedad 2 : fecha de la tarea
    let TareaObjeto = {
        
        tarea:valorinput,
        fecha:new Date().toLocaleString()
    }

    //agregamos un array donde agregar cada lista de tareas
    ListaTareas.push(TareaObjeto)

    console.log(ListaTareas)

    // le damos al elemento resultado el valor del input
    resultado.innerHTML = `Tarea: ${TareaObjeto.tarea}, Fecha: ${TareaObjeto.fecha}`;
    
    // guardamos el valor en localStorage
    localStorage.setItem("tareaGuardada", JSON.stringify(ListaTareas));

    // Limpiar el input
    respuesta.value = "";

    mostrarTareas()
});


//Mostramos las tareas que vamos guardando
let mostrarTareas = () => {

    //Limpiamos contenido actual
    resultado.innerHTML= "";

    //recorremos la lista del array y la mandamos al html
    ListaTareas.forEach(function (tarea) {

        resultado.innerHTML += ` Tarea: ${tarea.tarea}, Fecha: ${tarea.fecha} <br/> `;

    })



}