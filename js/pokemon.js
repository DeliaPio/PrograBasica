let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    let seccionSeleccionrAtaque = document.getElementById('seleccionar-ataque')
    seccionSeleccionrAtaque.style.display = 'none'
    let sectionReiniciar = document.getElementById ('reiniciar')

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {
    let sectionSeleccionarMascota =  document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'

    let sectionSeleccionaAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionaAtaque.style.display = 'block'

    let inputCharmander = document.getElementById('Charmander')
    let inputBulbasaur = document.getElementById('Bulbasaur')
    let inputSquirte = document.getElementById('Squirte')
    let spanMascotaEnimigo = document.getElementById('mascota-jugador')
    
    if (inputCharmander.checked) {
        spanMascotaEnimigo.innerHTML ='Charmander'
    } else if (inputBulbasaur.checked) {
        spanMascotaEnimigo.innerHTML = 'Bulbasaur'
    } else if (inputSquirte.checked) {
        spanMascotaEnimigo.innerHTML = 'Squirte'
    } else {
        alert('Selecciona una mascota')
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
    let ataqueAletorio = aleatorio(1,3)
    let spanMascotaEnimigo = document.getElementById('mascota-enemigo')

    if (ataqueAletorio ==1){
        spanMascotaEnimigo.innerHTML = 'Charmander'
    } else if (ataqueAletorio ==2){
        spanMascotaEnimigo.innerHTML = 'Bulbasaur'
    } else {
        spanMascotaEnimigo.innerHTML = 'Squirte'
    }
}

function ataqueFuego(){
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnmigo()
}
function ataqueAgua(){
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnmigo()
}
function ataqueTierra(){
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnmigo()
}

function ataqueAleatorioEnmigo(){
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio ==1){
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio ==2){
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }

    combate()
}

function combate(){
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    if (ataqueEnemigo == ataqueJugador){
        crearMensaje("EMPATE")
    } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA'){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    resvisarVidas()
}

function resvisarVidas(){
    if (vidasEnemigo ==0){
        crearMensajeFinal("FELICIDADES! GANASTE :)")
    } else if (vidasJugador ==0){
        crearMensajeFinal("LO SIENTO, PERDISTE :(")
    }
}

function crearMensaje(resultado){
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ', las mascota del enemigo atacó con ' + ataqueEnemigo + '- ' + resultado

    sectionMensajes.appendChild(parrafo)
}

function crearMensajeFinal(resultadoFinal){
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo =document.createElement('p')
    parrafo.innerHTML = resultadoFinal

    sectionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min, max){
    return Math.floor(Math.random()* (max-min +1) +min)
}

window.addEventListener('load', iniciarJuego)