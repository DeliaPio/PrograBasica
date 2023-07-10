let ataqueJugador
let ataqueEnemigo

function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)
}

function seleccionarMascotaJugador() {
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
    if (ataqueEnemigo == ataqueJugador){
        crearMensaje("EMPATE")
    } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA'){
        crearMensaje("GANASTE")
    } else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje("GANASTE")
    } else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensaje("GANASTE")
    } else {
        crearMensaje("PERDISTE")
    }
}

function crearMensaje(resultado){
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ', las mascota del enemigo atacó con ' + ataqueEnemigo + '- ' + resultado

    sectionMensajes.appendChild(parrafo)
}

function aleatorio(min, max){
    return Math.floor(Math.random()* (max-min +1) +min)
}

window.addEventListener('load', iniciarJuego)