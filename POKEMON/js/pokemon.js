function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
}

function seleccionarMascotaJugador() {
    let inputCharmander = document.getElementById('Charmander')
    let inputBulbasaur = document.getElementById('Bulbasaur')
    let inputSquirte = document.getElementById('Squirte')
    
    if (inputCharmander.checked) {
        alert('Seleccionaste a Charmander')
    } else if (inputBulbasaur.checked) {
        alert('Seleccionaste a Bulbasaur')
    } else if (inputSquirte.checked) {
        alert('Seleccionaste a Squirte')
    } else {
        alert('Selecciona una mascota')
    }
}

window.addEventListener('load', iniciarJuego)