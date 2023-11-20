let simboloJugador
let simboloIA

function quienArranca(){
    let numeroAleatorio = Math.round(Math.random());

    if (numeroAleatorio === 0){
        console.log('Arranca la IA.');
        simboloJugador = 'X';
        simboloIA = 'O';
    }
    else if (numeroAleatorio === 1){
        console.log('Arranca el JUGADOR.');
        simboloJugador = 'O';
        simboloIA = 'X';
    }
}

function crearTablero(){
    console.log('  1  ||  2  ||  3  ');
    console.log('=====||=====||===== ');
    console.log('  4  ||  5  ||  6  ');
    console.log('=====||=====||===== ');
    console.log('  7  ||  8  ||  9  ');
}

function jugadaJugador(posicion){

    return
}

function jugadaIA(posicion){
    
}

//alert('¡Abre la consola!')
console.log('Hola, vamos a jugar al TA-TE-TI, también conocido como Tic-Tac-Toe o Tres en Raya.');
console.log('...');
quienArranca();
console.log('...');
crearTablero();
jugadaJugador();
