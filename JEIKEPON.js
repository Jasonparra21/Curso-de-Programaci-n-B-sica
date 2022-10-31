function startgame(){
    let petButton = document.getElementById('pet-button')
    petButton.addEventListener('click',petchoose)
}
let Pets=['Drawid','Orchiwet','Toprock','Vessptox','Frogblex','WhitePhoenix','Massivehummingbird','xcorpion'  ]
function petchoose(){
    let a = 0
    for (var i = 0; i < 8 ; i++){
        let pet = document.getElementById(Pets[i])
        let spanPlayerPet =document.getElementById('playerPet')
        if (pet.checked){
            //alert('you choose ' + Pets[i])
            spanPlayerPet.innerHTML = Pets[i]
        } else {
            a=a+1}
    }
    if (a==Pets.length) {
        alert('Choose at least 1 pet')  
    }
    enemyspetchoose()
}

function enemyspetchoose(){
    let enemy =Math.floor(Math.random()*(8-1+1)+1)
    let spanEnemysPet = document.getElementById('enemysPet')
    spanEnemysPet.innerHTML = Pets[enemy-1]
}
window.addEventListener('load',startgame)




