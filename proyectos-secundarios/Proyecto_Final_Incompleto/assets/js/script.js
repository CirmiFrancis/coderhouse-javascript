/*
Lista de Cosas a hacer:
-Hacer funcionar el buscador
-Hacer funcionar el hacer click en un juego y que se agregue al carrito y al localStorage
-Hacer funcionar el poder ver el carrito de compras con el boton superior derecho
-Asegurarse de que solo se pueda agregar el mismo juego una sola vez
-Botones de limpiar juegos y comprar juegos en el carrito
-Mostrar lista de juegos agregados
-Mostrar precio total
-Consumir API de juegos o clima

Opcional:
-Filtrar por precios
*/

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
        this.nombre = nombre;
        this.precio = precio;
    }
}

const aw2    = new Juego("Alan Wake 2",            34.39);
const bg3    = new Juego("Baldur's Gate 3",        53.99);
const ce     = new Juego("Celeste",                19.99);
const cp2077 = new Juego("Cyberpunk 2077",         29.99);
const er     = new Juego("EA Sports FC 24",        27.99);
const ea24   = new Juego("Elden Ring",             35.99);

const ff7r   = new Juego("Final Fantasy 7 Remake", 34.99);
const fh5    = new Juego("Forza Horizon 5",        29.99);
const gow    = new Juego("God of War",             24.99);
const gta5   = new Juego("Grand Theft Auto V",     19.99);
const hk     = new Juego("Hollow Knight",          7.49 );
const mk1    = new Juego("Mortal Kombat 1",        34.99);

const niera  = new Juego("Nier: Automata",         15.99);
const phasmo = new Juego("Phasmophobia",           11.99);
const rdr2   = new Juego("Red Dead Redemption 2",  19.79);
const re4    = new Juego("Resident Evil 4",        29.99);
const sek    = new Juego("Sekiro",                 29.99);
const sf6    = new Juego("Street Fighter 6",       39.59);

const spi    = new Juego("Spider-Man",             35.99);
const terr   = new Juego("Terraria",               4.99 );

let listaJuegos = [aw2,bg3,ce,cp2077,er,ea24,ff7r,fh5,gow,gta5,hk,mk1,niera,phasmo,rdr2,re4,sek,sf6,spi,terr]

// ==================================== ELEMENTO JUEGO ====================================

let divAW2 = document.getElementById('aw2');
let divBG3 = document.getElementById('bg3');
let divCE = document.getElementById('ce');
let divCP2077 = document.getElementById('cp2077');
let divEA24 = document.getElementById('ea24');
let divER = document.getElementById('er');

let divFF7R = document.getElementById('ff7r');
let divFH5 = document.getElementById('fh5');
let divGOW = document.getElementById('gow');
let divGTA5 = document.getElementById('gta5');
let divHK = document.getElementById('hk');
let divMK1 = document.getElementById('mk1');

let divNIERA = document.getElementById('niera');
let divPHASMO = document.getElementById('phasmo');
let divRDR2 = document.getElementById('rdr2');
let divRE4 = document.getElementById('re4');
let divSEK = document.getElementById('sek');
let divSF6 = document.getElementById('sf6');

let divSPI = document.getElementById('spi');
let divTERR = document.getElementById('terr');



// ==================================== BUSCADOR (Filtros) ====================================

let buscarJuego = document.getElementById('buscarJuego');
// let btnBuscar = document.getElementById('btnBuscar');

// btnBuscar.addEventListener('click', function() {
//     alert('Buscar juego.');
// })

buscarJuego.addEventListener('input', function() {
    let cadenaBusqueda = buscarJuego.value.toLowerCase();
    let juegosFiltrados = [...listaJuegos].filter(function (juego) {
        return juego.nombre.toLowerCase().includes(cadenaBusqueda);
    });

    mostrarJuegosFiltrados(juegosFiltrados);
})

function mostrarJuegosFiltrados(juegos) {
    resultado2.innerHTML = "";
    if (juegos.length > 0) {
        resultado2.innerHTML += "<ul>";
        juegos.forEach(function (juego) {
            resultado2.innerHTML += `<li>Tarea: ${juego.tarea}, Fecha: ${juego.fecha}</li>`;
        });
        resultado2.innerHTML += "</ul>";
    } else {
        resultado2.innerHTML = "No se encontraron tareas que coincidan con la búsqueda.";
    }
}




// ==================================== CARRITO DE COMPRAS ====================================

let listaCarritoCompras = []

let btnAgregar = document.getElementById('agregarCarrito');

btnAgregar.addEventListener('click', function() {
    Swal.fire({
        title: "JUEGO AGREGADO",
        text: "Revisa el carrito de compras para ver la lista completa.",
        icon: "success"
      });
})




