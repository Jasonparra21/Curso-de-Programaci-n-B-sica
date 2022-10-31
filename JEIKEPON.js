let Pets = ['Drawid','Orchiwet','Toprock','Vessptox','Frogblex','WhitePhoenix','Massivehummingbird','xcorpion']
let Attacks =['Wind','Fire','Water','Earth' ]
let playerattack 
let enemyAttack

function startgame(){
    let petButton = document.getElementById('pet-button')
    petButton.addEventListener('click', petchoose)
    let windButton = document.getElementById('wind-button')
    windButton.addEventListener('click', windAttack)
    let fireButton = document.getElementById('fire-button')
    fireButton.addEventListener('click', fireAttack)
    let waterButton = document.getElementById('water-button')
    waterButton.addEventListener('click', waterAttack)
    let earthButton = document.getElementById('earth-button')
    earthButton.addEventListener('click', earthAttack)
}
function randomselector (min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
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
    let enemy = randomselector(1,8)
    let spanEnemysPet = document.getElementById('enemysPet')
    spanEnemysPet.innerHTML = Pets[enemy-1]
}

function windAttack(){
    playerattack = 'Wind'
    alert(playerattack)
    enemyRandomAttack()
}
function fireAttack(){
    playerattack = 'Fire'
    alert(playerattack)
    enemyRandomAttack()
}
function waterAttack(){
    playerattack = 'Water'
    alert(playerattack)
    enemyRandomAttack()
}
function earthAttack(){
    playerattack = 'Earth'
    alert(playerattack)
    enemyRandomAttack()
}
function enemyRandomAttack (){
    let RandomAttack = randomselector(1,4)
    enemyAttack = Attacks[RandomAttack-1]
    messageCreator()
}
function messageCreator(){
    let messageSection = document.getElementById('message')
    let paragraph = document.createElement('p')
    paragraph.innerHTML = 'Your pet attacked with ' + playerattack + ', the enemys pet attacked with '+ enemyAttack +' you'
    messageSection.appendChild(paragraph)
}
window.addEventListener('load',startgame)





