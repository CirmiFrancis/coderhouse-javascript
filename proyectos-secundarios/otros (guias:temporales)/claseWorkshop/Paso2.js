//Eliminamos el prompt para ingresar valores


//tomamos elemento input
let respuesta = document.getElementById("ValorTareas")

//tomamos elemento boton
let boton = document.getElementById("agregarLista")


//elemento boton se le agrega evento "click"
boton.addEventListener("click",function() {

    //tomamos el valor del input
    let valorinput = respuesta.value;
    
    console.log(valorinput)
});

//boton.onclick = () => console.log(respuesta.value);

//respuesta.addEventListener("keydown", function(event) {
//    if (event.key === "Enter") {
        // Si la tecla presionada es Enter, realiza la misma lógica que el evento click del botón
//        manejarEvento();
//    }
//});