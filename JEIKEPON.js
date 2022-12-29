const restartButton = document.getElementById('Restart')
const chooseAttack = document.getElementById('Choose_attack')
const petButton = document.getElementById('pet-button')
const windButton = document.getElementById('wind-button')
const fireButton = document.getElementById('fire-button')
const waterButton = document.getElementById('water-button')
const earthButton = document.getElementById('earth-button')
const Pets = ['Drawid','Orchiwet','Toprock','Vessptox','Frogblex','WhitePhoenix','RazorEagle','Xcorpion']
const Attacks =['Wind','Fire','Water','Earth' ]
const choosePet = document.getElementById('Choose_pet')
const spanPlayerPet =document.getElementById('playerPet')
const spanEnemysPet = document.getElementById('enemysPet')

const spanPlayerLives = document.getElementById('playerLives')
const spanEnemysLives = document.getElementById('enemyLives')

const messageSection = document.getElementById('Result')
const player_attacks = document.getElementById('player-attacks')
const enemy_attacks = document.getElementById('enemy-attacks')

let playerattack 
let enemyAttack
let playerLives = 3 
let enemyLives  = 3
function startgame(){
    restartButton.style.display = 'none'
    chooseAttack.style.display  = 'none'
    petButton.addEventListener('click', petchoose)
    windButton.addEventListener('click', windAttack)
    fireButton.addEventListener('click', fireAttack)
    waterButton.addEventListener('click', waterAttack)
    earthButton.addEventListener('click', earthAttack)
    restartButton.addEventListener('click', restart)
}
function randomselector (min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
function petchoose(){
    choosePet.style.display  = 'none'
    chooseAttack.style.display  = 'flex'

    let a = 0
    for (var i = 0; i < 8 ; i++){
        let pet = document.getElementById(Pets[i])
        if (pet.checked){
            spanPlayerPet.innerHTML = Pets[i]
        } else {
            a=a+1
            if (a==8) {
               alert('Choose at least 1 pet')
               location.reload()
            }
        }
    }
    enemyspetchoose()
}
 function enemyspetchoose(){
    let enemy = randomselector(1,8)
    spanEnemysPet.innerHTML = Pets[enemy]
}
function windAttack(){
    playerattack = 'Wind'
    enemyRandomAttack()
}
function fireAttack(){
    playerattack = 'Fire'
    enemyRandomAttack()
}
function waterAttack(){
    playerattack = 'Water'
    enemyRandomAttack()
}
function earthAttack(){
    playerattack = 'Earth'
    enemyRandomAttack()
}
function enemyRandomAttack (){
    let RandomAttack = randomselector(1,4)
    enemyAttack = Attacks[RandomAttack-1]
    combat()
}
function combat() {
    if (playerattack == enemyAttack){
        messageCreator('Draw!')
    }else if ((playerattack == Attacks[2] && enemyAttack == Attacks[1]) || (playerattack == Attacks[2] && enemyAttack == Attacks[0])||(playerattack == Attacks[1] && enemyAttack == Attacks[3])||(playerattack == Attacks[1] && enemyAttack == Attacks[0])|| (playerattack == Attacks[0] && enemyAttack == Attacks[3])||(playerattack == Attacks[3] && enemyAttack == Attacks[2])){
        messageCreator('Win!')
        enemyLives--
        spanEnemysLives.innerHTML= enemyLives
    }else {
        messageCreator('lost!')
        playerLives--
        spanPlayerLives.innerHTML= playerLives
    }
    countLives()
}
function countLives(){
    if (enemyLives == 0){
        finalMessage("Congratulations, you win!")
    }else if (playerLives == 0){
        finalMessage("Unfortunately, you lost!")
    }
}
function messageCreator(result){
    let newPlayerAttack= document.createElement('p')
    let newEnemyAttack = document.createElement('p')
    messageSection.innerHTML = result
    newPlayerAttack.innerHTML = playerattack
    newEnemyAttack.innerHTML = enemyAttack
    
    player_attacks.appendChild(newPlayerAttack)
    enemy_attacks.appendChild(newEnemyAttack)
}
function finalMessage(finalResult){
    messageSection.innerHTML = finalResult
    windButton.disabled =true
    fireButton.disabled =true
    waterButton.disabled =true
    earthButton.disabled =true
    restartButton.style.display ='block'
}
function restart(){
    location.reload()
}
window.addEventListener('load',startgame)




