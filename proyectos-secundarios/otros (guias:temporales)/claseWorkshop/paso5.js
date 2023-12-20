//Utilizamos objetos y JSON


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
        let objetoguardado = JSON.parse(valorGuardado)
        resultado.innerHTML = `Tarea: ${objetoguardado.tarea}, Fecha: ${objetoguardado.fecha}`;
        
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


    // le damos al elemento resultado el valor del input
    resultado.innerHTML = `Tarea: ${TareaObjeto.tarea}, Fecha: ${TareaObjeto.fecha}`;
    
    // guardamos el valor en localStorage
    localStorage.setItem("tareaGuardada", JSON.stringify(TareaObjeto));

    // Limpiar el input
    respuesta.value = "";
});



