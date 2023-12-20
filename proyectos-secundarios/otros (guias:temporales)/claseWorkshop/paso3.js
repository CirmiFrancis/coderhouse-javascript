//Eliminamos el console para mostrar valores



//tomamos elemento input
let respuesta = document.getElementById("ValorTareas")

//tomamos elemento boton
let boton = document.getElementById("agregarLista")

//tomamos elemento div
let resultado = document.getElementById("resultado");


//elemento boton se le agrega evento "click"
boton.addEventListener("click",function() {

    //tomamos el valor del input
    let valorinput = respuesta.value;
    
    //Le damos al elemento resultado el valor del input
    resultado.innerHTML = valorinput
    
    respuesta.value = ""
});





