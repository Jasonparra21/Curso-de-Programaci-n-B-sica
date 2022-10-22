let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0
while  (triunfos < 3 && perdidas < 3){
    pc =Math.floor(Math.random()*(3-1+1)+1)
    jugador = prompt("Elige: 1 para piedra, 2 para papel y 3 para tijera")
    function eleccion(jugada) {
    let resultado = ""
    if  (jugada ==1){
         resultado= "Piedra 🪨"
        }else if  (jugada ==2){
         resultado= "Papel 📰 "
        }else if  (jugada ==3){
        resultado= "Tijera ✂️"
        }else {
          resultado = "Null"
        }return resultado
    }
    alert('PC elige: ' + eleccion(pc))
    alert('tu eliges: ' + eleccion(jugador))

    if (pc==jugador){
            alert('Empate')
        }else if (jugador ==1 && pc == 3){
            alert('Ganaste')
            triunfos= triunfos + 1
        }else if (jugador == 2 && pc == 1) {
            alert('Ganaste')
            triunfos= triunfos + 1
        }else if (jugador == 3 && pc == 2) {
            alert('Ganaste')
            triunfos= triunfos + 1
        }else {
            alert('Perdiste')
            perdidas = perdidas + 1
    }
}   
alert ("Ganaste: " + triunfos + "veces, perdiste " + perdidas +'veces')