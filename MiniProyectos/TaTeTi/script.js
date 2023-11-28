// Ta-Te-Ti que se juega en consola. No está terminado, faltó aumentar el nivel de la IA (ya que coloca símbolos aleatoriamente) y optimizar el código.

// Variables globales
let simboloJugador;
let simboloIA;
let hayGanador = false;
let primerTurnoIA;
let cantidadPosicionesOcupadas;

// Función que decide quién arranca a jugar (primer turno) y con qué símbolo (cara o cruz).
function quienArranca(){
    let numeroAleatorio = Math.round(Math.random());

    if (numeroAleatorio === 0){
        console.log('Arranca el JUGADOR. Tu símbolo es: X (cruz).');
        simboloJugador = 'X';
        simboloIA = 'O';
        cantidadPosicionesOcupadas = -1;
        imprimirDatos()
    }
    else if (numeroAleatorio === 1){
        console.log('Arranca la IA. Tu símbolo es: O (cara).');
        primerTurnoIA = true;
        simboloJugador = 'O';
        simboloIA = 'X';
        cantidadPosicionesOcupadas = 0;
        jugarIA();
    }
}

// Es la parte lógica del tablero del ta-te-ti. Este array va a ser sobre el cual vamos a operar internamente. Por ejemplo: para identificar las posiciones ocupadas, ya sea con cara o con cruz.
// Podría haberlo implementado como MATRIZ, pero cuando se me ocurrió, ya lo tenía avanzado.
const tableroLogico = [0,1,2,
                       3,4,5,
                       6,7,8]

// Esta función anónima filtra las posiciones ocupadas del tablero. Lo hice como función en vez de una constante normal porque necesito que el array se vaya actualizando.
const tableroLogicoFiltrado = function(){
    return tableroLogico.filter( x => x !== 'X' && x !== 'O' )
}

// Es la parte vistosa del tablero del ta-te-ti. NO es la parte lógica, sino que está hecho para que sea más intuitivo para jugar.
function crearTablero(){
    console.log('');
    console.log(`  ${tableroLogico[0]}  ||  ${tableroLogico[1]}  ||  ${tableroLogico[2]}  `);
    console.log('=====||=====||=====');
    console.log(`  ${tableroLogico[3]}  ||  ${tableroLogico[4]}  ||  ${tableroLogico[5]}  `);
    console.log('=====||=====||=====');
    console.log(`  ${tableroLogico[6]}  ||  ${tableroLogico[7]}  ||  ${tableroLogico[8]}  `);
    console.log('');
}

// Esta función corresponde a la parte lógica del turno del jugador.
function jugarJugador(posicion){
    // Si el tablero lógico incluye la posición elegida por el jugador...
    if (tableroLogico.includes(posicion)){
        // Imprimimos en pantalla la posición elegida por el JUGADOR, colocamos el símbolo y mostramos el nuevo tablero.
        console.log('');
        console.log(`El Jugador eligió la posición: ${posicion}`);
        tableroLogico.splice(tableroLogico[posicion], 1, simboloJugador);
        cantidadPosicionesOcupadas += 1;
        crearTablero();
        comprobarVictoria();

        if (hayGanador !== true){
            //console.log('...Pensando...');
            setTimeout(jugarIA, 1000);
        }
    }
    // De lo contrario, imprimir un mensaje.
    else {
        console.log('Posición no válida. Vuelve a jugar y elige otra posición.');
    }
}

// Mejorar la IA. 

// Si arranca, que juegue siempre en el medio e intente ganar por las esquinas. Que juegue agresivo. 
// Si no arranca, que intente jugar en el medio (si puede) o por las esquinas y denegar al jugador. Que juegue defensivo.
// Que priorice jugar para ganar y no evitar que gane el jugador. Es decir, si puede hacer ta-te-ti o denegarle el ta-te-ti al jugador, que priorice hacerlo para ganar. No es necesario denegarle.

// TENGO QUE AGREGAR 2 FUNCIONALIDADES:
//  - Cuando hay 2 simbolos de la IA, que intente hacer ta-te-ti
//  - Cuando hay 2 simbolos del jugador, que la IA intente evitar el ta-te-ti

// Esta función corresponde a la parte lógica del turno de la IA.
function jugarIA(){




    

    // Detecta si hay 2 símbolos iguales, ya sea: en la FILA, en la COLUMNA o en DIAGONAL.
    // En caso de haberlos, detecta si son del Jugador o de la IA.
    // Si son del Jugador, la IA intenta jugar en la posición que haría ganar al jugador, para bloquearlo.
    // Si son de la IA, esta intenta jugar en la posición que le haría ganar la partida.

    /*

    for (let i = 0; i < 3; i++) {
        // Cuando hay 2 símbolos iguales en las filas...
        if ( tableroLogico[i * 3] === tableroLogico[i * 3 + 1] ||       // el primero con el segundo
             tableroLogico[i * 3 + 1] === tableroLogico[i * 3 + 2] ||   // el segundo con el tercero
             tableroLogico[i * 3] === tableroLogico[i * 3 + 2]          // el primero con el tercero
           ) {

            // Si alguno de esos símbolos son del jugador...
            if (tableroLogico[i * 3] === simboloJugador){

                for (let a = 0; a < 3; a++){
                    if ( tableroLogicoFiltrado().includes(a) ){
                        console.log('');
                        console.log(`La IA eligió la posición: ${a}`);
                        tableroLogico.splice(tableroLogico[a], 1, simboloIA);
                        imprimirDatos()
                    }
                } 
            }

            else if (tableroLogico[i * 3 + 1] === simboloJugador){
                for (let b = 3; b < 6; b++){
                    if ( tableroLogicoFiltrado().includes(b) ){
                        console.log('');
                        console.log(`La IA eligió la posición: ${b}`);
                        tableroLogico.splice(tableroLogico[b], 1, simboloIA);
                        imprimirDatos()
                    }
                } 
            }

            else if (tableroLogico[i * 3 + 2] === simboloJugador){
                for (let c = 6; c < 9; c++){
                    if ( tableroLogicoFiltrado().includes(c) ){
                        console.log('');
                        console.log(`La IA eligió la posición: ${c}`);
                        tableroLogico.splice(tableroLogico[c], 1, simboloIA);
                        imprimirDatos()
                    }
                } 
            }

            //bloquearAlJugador();
            
            
            // Si alguno de esos símbolos son de la IA...
            else if (tableroLogico[i * 3] === simboloIA){

                for (let a = 0; a < 3; a++){
                    if ( tableroLogicoFiltrado().includes(a) ){
                        console.log('');
                        console.log(`La IA eligió la posición: ${a}`);
                        tableroLogico.splice(tableroLogico[a], 1, simboloIA);
                        imprimirDatos()
                    }
                } 

                for (let b = 3; b < 6; b++){
                    if ( tableroLogicoFiltrado().includes(b) ){
                        console.log('');
                        console.log(`La IA eligió la posición: ${b}`);
                        tableroLogico.splice(tableroLogico[b], 1, simboloIA);
                        imprimirDatos()
                    }
                } 

                for (let c = 6; c < 9; c++){
                    if ( tableroLogicoFiltrado().includes(c) ){
                        console.log('');
                        console.log(`La IA eligió la posición: ${c}`);
                        tableroLogico.splice(tableroLogico[c], 1, simboloIA);
                        imprimirDatos()
                    }
                } 
                //jugarParaGanar();
            }
        }
  
        /*

        // Cuando hay 2 símbolos iguales en las columnas...
        if ( tableroLogico[i] === tableroLogico[i + 3] ||       // el primero con el segundo
             tableroLogico[i + 3] === tableroLogico[i + 6] ||   // el segundo con el tercero
             tableroLogico[i] === tableroLogico[i + 6]          // el primero con el tercero
           ) {
            // Si alguno de esos símbolos son del jugador...
            if (tableroLogico[i] === simboloJugador ||
                tableroLogico[i + 3] === simboloJugador ||
                tableroLogico[i + 6] === simboloJugador){
                bloquearAlJugador();
            }
            // Si alguno de esos símbolos son de la IA...
            else if (tableroLogico[i] === simboloIA ||
                     tableroLogico[i + 3] === simboloIA ||
                     tableroLogico[i + 6] === simboloIA){
                     jugarParaGanar();
            }
        }

        */
    //}

    /*

    // Cuando hay 2 símbolos iguales en las diagonales...
    if (tableroLogico[0] === tableroLogico[4] ||    // el primero con el del centro
        tableroLogico[4] === tableroLogico[8] ||    // el del centro con el tercero
        tableroLogico[0] === tableroLogico[8]       // el primero con el tercero
       ) {
        // Si alguno de esos símbolos son del jugador...
        if (tableroLogico[0] === simboloJugador ||
            tableroLogico[4] === simboloJugador ||
            tableroLogico[8] === simboloJugador){
            bloquearAlJugador();
        }
        // Si alguno de esos símbolos son de la IA...
        else if (tableroLogico[0] === simboloIA ||
                 tableroLogico[4] === simboloIA ||
                 tableroLogico[8] === simboloIA){
                 jugarParaGanar();
        }
    }

    else if (tableroLogico[2] === tableroLogico[4] ||   // el primero con el del centro
             tableroLogico[4] === tableroLogico[6] ||   // el del centro con el tercero
             tableroLogico[2] === tableroLogico[6]      // el primeron con el tercero
            ) {
        // Si alguno de esos símbolos son del jugador...
        if (tableroLogico[2] === simboloJugador ||
            tableroLogico[4] === simboloJugador ||
            tableroLogico[6] === simboloJugador){
            bloquearAlJugador();
        }
        // Si alguno de esos símbolos son de la IA...
        else if (tableroLogico[2] === simboloIA ||
                 tableroLogico[4] === simboloIA ||
                 tableroLogico[6] === simboloIA){
                 jugarParaGanar();
        }
    }

    */
    







    // Si el centro está disponible, la IA juega en el centro.
    if (tableroLogicoFiltrado().includes(4)){
        console.log('');
        console.log(`La IA eligió la posición: 4`);
        tableroLogico.splice(tableroLogico[4], 1, simboloIA);
        imprimirDatos()
    }

    else if ( tableroLogicoFiltrado().length !== 0 ){
        // Asignamos un número generado al azar a una variable. Este número se multiplica por la longitud del array para que todos los elementos dentro de este tengan el mismo porcentaje de elección.
        let numeroAleatorio = Math.floor(Math.random() * tableroLogicoFiltrado().length);
        // Dicho número aleatorio se usa para hacer referencia a una posición específica del array filtrado. En esta posición encontraremos justamente el lugar en el que la IA jugará y colocará el símbolo (cara/cruz).
        let posicionAleatoria = tableroLogicoFiltrado()[numeroAleatorio];
        // Imprimimos en pantalla la posición elegida por la IA, colocamos el símbolo y mostramos el nuevo tablero.
        console.log('');
        console.log(`La IA eligió la posición: ${posicionAleatoria}`);
        tableroLogico.splice(tableroLogico[posicionAleatoria], 1, simboloIA);
        imprimirDatos()
        comprobarVictoria()
    }
    else {
        console.log('El tablero está lleno. Todas las posiciones están ocupadas.');
    }
}

//Detectar quién gana.

//Por columna
//Por fila
//Por diagonal
//Si hay 3 simbolos iguales y seguidos, es ta-te-ti.
//Puedo hacer un ciclo FOR para recorrer por filas y luego por columnas. O un ciclo FOR dentro de otro ciclo FOR.
//Las posiciones que son ta-te-ti son: [0,1,2], [3,4,5], [6,7,8],   //filas
//                                     [0,3,6], [1,4,7], [2,5,8],   //columnas
//                                     [0,4,8], [2,4,6]             //diagonal

function comprobarVictoria() {
    // Verificar por filas y columnas
    for (let i = 0; i < 3; i++) {
        // Verificar filas
        if ( tableroLogico[i * 3] === tableroLogico[i * 3 + 1] && tableroLogico[i * 3 + 1] === tableroLogico[i * 3 + 2] ) {
            if (tableroLogico[i * 3] === simboloJugador){
                mensajeVictoria('Jugador');
                break;
            }
            else if (tableroLogico[i * 3] === simboloIA){
                mensajeVictoria('IA');
                break;
            }
        }
  
        // Verificar columnas
        if ( tableroLogico[i] === tableroLogico[i + 3] && tableroLogico[i + 3] === tableroLogico[i + 6] ) {
            if (tableroLogico[i] === simboloJugador){
                mensajeVictoria('Jugador');
                break;
            }
            else if (tableroLogico[i] === simboloIA){
                mensajeVictoria('IA');
                break;
            }
        }
    }
    
    // Si el Jugador o la IA gana por 2 o 3 líneas, el mensaje sale una sola vez y no se repite.
    if (hayGanador){
        reiniciarPagina();
    }

    // Verificar diagonales
    else if (tableroLogico[0] === tableroLogico[4] && tableroLogico[4] === tableroLogico[8]) {
        if (tableroLogico[0] === simboloJugador){
            mensajeVictoria('Jugador');
        }
        else if (tableroLogico[0] === simboloIA){
            mensajeVictoria('IA');
        }
    }
    else if (tableroLogico[2] === tableroLogico[4] && tableroLogico[4] === tableroLogico[6]) {
        if (tableroLogico[2] === simboloJugador){
            mensajeVictoria('Jugador');
        }
        else if (tableroLogico[2] === simboloIA){
            mensajeVictoria('IA');
        }
    }

    if (cantidadPosicionesOcupadas === 9 && hayGanador === false){
        alert('Empate.');
        reiniciarPagina();
    }
}

// Función que imprime varios datos como: tablero, cantidadPosicionesOcupadas, tableroLogico y tableroLogicoFiltrado().
function imprimirDatos(){
    crearTablero();
    cantidadPosicionesOcupadas += 1;
    console.log(`* Tu símbolo: ${simboloJugador}`);
    //console.log(`* Tablero: ${tableroLogico}`);
    //console.log(`* Posiciones Disponibles: ${tableroLogicoFiltrado()}`);
    console.log(`* Cantidad de Posiciones Ocupadas: ${cantidadPosicionesOcupadas}`);
    console.log('===============================================================================================');
}

// Función con varias acciones a realizar, al decidir un ganador.
function mensajeVictoria(ganador) {
    hayGanador = true;
    alert(`El ganador es: ${ganador}.`);
    reiniciarPagina();
}

// Función que sirve para reiniciar la página una vez terminada la partida.
function reiniciarPagina() {
    // Asigna la URL actual a location.href
    location.href = location.href;
}

//===========================================================================================================

function jugadaNormal(){
    console.log('¡Vamos a jugar al TA-TE-TI! (También conocido como Tic-Tac-Toe y/o Tres en Raya.)');
    console.log('...');
    quienArranca();
    console.log('Escribe la función: jugarJugador(posicion), para comenzar.')
    console.log('');
}

jugadaNormal();