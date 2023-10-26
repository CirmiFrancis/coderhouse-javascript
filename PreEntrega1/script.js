//alert, muestra una ventana emergente en el navegador del usuario con un mensaje o texto especificado. 
//prompt, muestra una ventana emergente en el navegador y permite al usuario ingresar datos o texto a través de un campo de entrada.
//debugger, permite examinar y controlar la ejecución de tu programa de manera detallada para identificar y solucionar errores.
//parseInt, convierte una cadena de texto en un número entero.

//console.log('Este es un mensaje informativo.')   //se utiliza para imprimir mensajes informativos o de registro en la consola.
//console.warn('Esto es una advertencia. Ten cuidado.') //se utiliza para imprimir mensajes de advertencia en la consola.
//console.error('¡Hubo un error crítico en el código!')  //se utiliza para imprimir mensajes de error en la consola.

//=================================== PARTE I - NOMBRE ===================================
debugger

alert('¡Hola! Mi nombre es Alertito. Estás a punto de realizar un Test de varias etapas. Te explicaré cada una a su debido tiempo. ¡Comencemos!')

let nombreUsuario = prompt('Primero, quiero saludarte pero necesito saber tu nombre: ')

if (nombreUsuario !== '') {
    if (nombreUsuario === 'Francis') {
        alert('Hola fiera, titán de titanes, perrito malvado.')
    }
    else {
        alert('¡Hola, ' + nombreUsuario + '! Bienvenid@.')
    }
} 
else {
    alert('No ingresaste tu nombre, arrancamos mal.')
}

//=================================== PARTE II - SUMA ===================================

alert('Segundo, ingresa dos números y trataré de adivinar la suma entre ambos.')

let numero1 = parseInt(prompt('Ingresa el primer número: '))    
let numero2 = parseInt(prompt('Ingresa el segundo número: '))
let funcionSuma = (a, b) => a + b
let suma = funcionSuma(numero1, numero2)

if (suma !== 10){
    alert('Veo que el número es distinto a 10...')
    if (suma < 0 || suma > 100){
        alert('Veo que el número NO se encuentra entre 1 y 100. La complicaste, prefiero no averigüar tu número.')
    }
    else{
        alert('Veo que el número se encuentra entre 1 y 100, me estoy acercando...')
        if (suma > 10 && suma < 90){
            alert('Veo que el número se encuentra entre 10 y 90, esto es sencillo. Podría seguir recortando pero sería aburrido. Sé que tu número es ' + suma + ' y los dos números que ingresaste eran ' + numero1 + ' y ' + numero2 + ' respectivamente. Acordate que almaceno tus datos en variables ;)')
        }
        else{
            alert('Veo que el número NO se encuentra entre 10 y 90. La hago corta, tu número es ' + suma + ' y los dos números que ingresaste eran ' + numero1 + ' y ' + numero2 + ' respectivamente. Acordate que almaceno tus datos en variables ;)')
        }
    }
}
else{
    alert('Veo que el número es 10, me lo dejaste muy fácil...')
}

//=================================== PARTE III - EJÉRCITO ===================================

alert('Tercero, ¡Vamos a crear un ejército de Alertitos utilizando ciclos!')

for(let i=1; i<10; i++){
    if (i === 3){
        alert('Alertito ' + i + ' crea- ¡Oh no, salió fallado!')
        continue
    }
    if (i === 6){
        alert('Alertito ' + i + ' creado. Tenía pensado hacer 3 más, pero creo que con 5 es más que suficiente.')
        break
    }
    alert('Alertito ' + i + ' creado.')
}

alert('¡Bien! El ejército está listo. Ahora...')

let alertitos = 5

do {
    alert('*Un Alertito ha explotado*')
    alertitos -= 1
} while (alertitos > 1)

alert('No entiendo... ¿¡Por qué!? ¿¡Por qué explotaron y solo quedó uno!?')

let continuar = false

while (continuar === false){
    continuar = confirm('Esto no estaba planeado, ahora tengo que improvisar parte del Test. Tú... Quieres continuar, ¿verdad?')
}

//=================================== PARTE IV - PERSONALIZACIÓN ===================================

alert('Bien, por suerte queda poco. Mmm... ¡Ya sé! Personaliza el Alertito restante.')

let alertitoNombre = prompt('Escribe un nombre:')
let alertitoColor = prompt('Escribe un color:')
let alertitoEspecialidad = prompt('Elige su especialidad:')

alert('Bien, entonces tenemos a...')

switch(alertitoEspecialidad){
    case 'Programador':
        alert(alertitoNombre + ', de color ' + alertitoColor + ', trabaja como ' + alertitoEspecialidad + ', y le gusta programar en Python.')
        break
    case 'Escritor':
        alert(alertitoNombre + ', de color ' + alertitoColor + ', trabaja como ' + alertitoEspecialidad + ', y le gusta las historias de fantasía.')
        break
    case 'Chef':
        alert(alertitoNombre + ', de color ' + alertitoColor + ', trabaja como ' + alertitoEspecialidad + ', y le gusta cocinar para su familia.')
        break
}

//=================================== PARTE V - PELEA ===================================

alert('Al fin, la última parte del Test. ¡Pelearé contra tu Alertito!')
alert('La pelea será por turnos. Cada uno tendrá 100 puntos de vida y perderá el primero que llegue a 0.')
alert('Puedes escribir tres opciones: Atacar, Habilidad y Curar. La Habilidad cambia según la especialidad elegida.')
alert('¡Comencemos a pelear!')

let alertito_Vida = 100
let alertitoUsuario_Vida = 100

function Atacar(){
  alert('*' + alertitoNombre + ' atacó a Alertito.*')
  alertito_Vida -= 10
  MostrarVidaAlertito()
}

function Habilidad(){
  switch(alertitoEspecialidad){
    case "Programador":
      alert('*' + alertitoNombre + ' usó su habilidad especial. Declaró variables usando VAR y provocó un cortocircuito en Alertito.*')
      alertito_Vida -= 50
      MostrarVidaAlertito()
      break
    case "Escritor":
      alert('*' + alertitoNombre + ' usó su habilidad especial. Escribió un libro con muchas faltas de ortografía y provocó un cortocircuito en Alertito.*')
      alertito_Vida -= 30
      MostrarVidaAlertito()
      break
    case "Chef":
      alert('*' + alertitoNombre + ' usó su habilidad especial. Le agregó ananá a la pizza y provocó un cortocircuito en Alertito.*')
      alertito_Vida -= 40
      MostrarVidaAlertito()
      break
  }
}

function Curar(){
  alert('*' + alertitoNombre + ' se cura.*')
  alertitoUsuario_Vida += 15
  MostrarVidaUsuario()
}

function MostrarVidaUsuario() {
  alert('*Vida de ' + alertitoNombre + ': ' + alertitoUsuario_Vida + '.*')
}

function MostrarVidaAlertito() {
  alert('*Vida de Alertito: ' + alertito_Vida + '.*')
}

function DetectarKO() {
  if (pelea === true){
    if (alertito_Vida <= 0 || alertitoUsuario_Vida <= 0){
      alert('*Pelea terminada.*')
      if (alertito_Vida <= 0){
        alert('*Ganó ' + alertitoNombre + '.*')
        alert('¡Ja, ja, ja! Buena pelea, casi te gano. A pesar de que el Test no salió como esperaba, estuvo entretenido. Gracias ' + nombreUsuario + ' y ' + alertitoNombre + '.')
        alert('*El Test, Primera PreEntrega, ha finalizado exitosamente.*')
        pelea = false
      }
      else if (alertitoUsuario_Vida <= 0){
        alert('*Ganó Alertito.*')
        alert('¡Ja, ja, ja! Buena pelea, casi me ganas. A pesar de que el Test no salió como esperaba, estuvo entretenido. Gracias ' + nombreUsuario + ' y ' + alertitoNombre + '.')
        alert('*El Test, Primera PreEntrega, ha finalizado exitosamente.*')
        pelea = false
      }
    }
  }
}

function turnoUsuario(){
  let opcionElegida = prompt('Elige una opción:')
  switch(opcionElegida){
    case 'Atacar':
      Atacar()
      break
    case 'Habilidad':
      Habilidad()
      break
    case 'Curar':
      Curar()
      break
  }
}

function turnoAlertito(){
  if (pelea === true){
    alert('*Alertito atacó a ' + alertitoNombre + '.*')
    alertitoUsuario_Vida -= 20
    MostrarVidaUsuario()
  }
}

let pelea = true

while (pelea === true){
  turnoUsuario()
  DetectarKO()
  turnoAlertito()
  DetectarKO()
}

//=================================== EJEMPLO ===================================
/* 
Ejemplo de datos a ingresar para probar el código: 

Francis
13
5
Marco
Celeste
Chef
Atacar
Curar
Habilidad
Habilidad
Habilidad
*/