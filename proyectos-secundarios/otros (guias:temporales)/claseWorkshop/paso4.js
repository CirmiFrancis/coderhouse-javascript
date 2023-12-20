//Utilizamos localstorage


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
        resultado.innerHTML = valorGuardado;
    }
};

// elemento botón se le agrega evento "click"
boton.addEventListener("click", function () {
    // tomamos el valor del input
    let valorinput = respuesta.value;

    // le damos al elemento resultado el valor del input
    resultado.innerHTML = valorinput;

    // guardamos el valor en localStorage
    localStorage.setItem("tareaGuardada", valorinput);

    // Limpiar el input
    respuesta.value = "";
});