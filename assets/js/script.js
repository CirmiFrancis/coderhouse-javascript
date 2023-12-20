// ==================================== CAROUSEL COLORS ====================================
let slidesBorderColor = document.getElementById('carousel-border-color');

function eliminarBordes(variable) {
    variable.classList.remove("border-white");
    variable.classList.remove("border-red");
    variable.classList.remove("border-orange");
    variable.classList.remove("border-yellow");
    variable.classList.remove("border-green");
    variable.classList.remove("border-cyan");
    variable.classList.remove("border-blue");
    variable.classList.remove("border-purple");
}

function cambiarColorBorde(variable) {
    switch (variable) {
  
        case 'white':
            eliminarBordes(slidesBorderColor);
            slidesBorderColor.classList.add("border-white");
            break;
        
        case 'red':
            eliminarBordes(slidesBorderColor);
            slidesBorderColor.classList.add("border-red");
            break;

        case 'orange':
            eliminarBordes(slidesBorderColor);
            slidesBorderColor.classList.add("border-orange");
            break;

        case 'yellow':
            eliminarBordes(slidesBorderColor);
            slidesBorderColor.classList.add("border-yellow");
            break;

        case 'green':
            eliminarBordes(slidesBorderColor);
            slidesBorderColor.classList.add("border-green");
            break; 

        case 'cyan':
            eliminarBordes(slidesBorderColor);
            slidesBorderColor.classList.add("border-cyan");
            break;

        case 'blue':
            eliminarBordes(slidesBorderColor);
            slidesBorderColor.classList.add("border-blue");
            break;

        case 'purple':
            eliminarBordes(slidesBorderColor);
            slidesBorderColor.classList.add("border-purple");
            break;
  
        default:
            break;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let colores = ["white", "red", "orange", "yellow", "green", "cyan", "blue", "purple"];
    let indiceColor = 0;

    function procesoCambiarColor() {
        cambiarColorBorde(colores[indiceColor]);
        indiceColor = (indiceColor + 1) % colores.length; // El porcentaje sirve para crear un bucle infinito, ya que del último elemento pasa al primero nuevamente.
    }

    let intervalo = setInterval(procesoCambiarColor, 3000);
});

// ==================================== SNOWFALL ====================================
snowFall.snow(document.querySelector("body"));




// ==================================== CLASE JUEGO ====================================
class Juego {
    constructor(nombre, precio) {

    }
}

// ==================================== Buscador ====================================
