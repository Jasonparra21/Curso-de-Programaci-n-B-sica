const chooseAttack = document.getElementById('Choose_attack')
const sectionRestart = document.getElementById('Restart')
sectionRestart.style.display = 'none'
const petButton = document.getElementById('pet-button')
const restartButton = document.getElementById('restart-button')

const choosePet = document.getElementById('Choose_pet')
const spanPlayerPet =document.getElementById('playerPet')

const spanEnemysPet = document.getElementById('enemysPet')

const spanPlayerLives = document.getElementById('playerLives')
const spanEnemysLives = document.getElementById('enemyLives')

const messageSection = document.getElementById('RESULT')
const player_attacks = document.getElementById('player-attacks')
const enemy_attacks = document.getElementById('enemy-attacks')
const Cardscontainer = document.getElementById('Cards_container')
const attacksContainer = document.getElementById('attacks_container')

let jeikepones = []
let playerattack =[]
let enemyAttack = []
let jeikeponsoption
let inputDrawid
let inputOrchiwet
let inputToprock 
let inputVessptox
let inputFrogblex 
let inputWhitePhoenix 
let inputRazorEagle 
let inputXcorpion 
let playersPet
let jeikeponattacks
let enemyJeikeponAttacks
let windButton 
let fireButton 
let waterButton
let earthButton 
let buttons = []
let indexenemyAttack
let indexplayerAttack
let playerwins = 0
let enemywins = 0

class Jeikepon {
    constructor (nombre, pic, live){

        this.nombre = nombre
        this.pic = pic
        this.live = live
        this.attacks =[]
    }
}

let Drawid = new  Jeikepon ('Drawid','./Img/Blue-Dragon.png', 5)
let Orchiwet = new Jeikepon ('Orchiwet', './Img/Orchiwet.png',5)
let Toprock = new Jeikepon ('Toprock','./Img/Toprock.png', 5)
let Vessptox = new Jeikepon ('Vessptox','./Img/Vessptox.png', 5)
let Frogblex = new Jeikepon ('Frogblex', './Img/Frogblex.png', 5)
let WhitePhoenix = new Jeikepon ('WhitePhoenix', './Img/Whitephoenix.png', 5)
let RazorEagle = new Jeikepon ('RazorEagle','./Img/RazorEagle.png', 5)
let Xcorpion = new Jeikepon ('Xcorpion','./Img/Xcorpion.png', 5)

Drawid.attacks.push(
    { nombre: '🔥', id:'fire-button' },
    { nombre: '🔥', id:'fire-button' },
    { nombre: '🔥', id:'fire-button' },
    { nombre: '🌬️', id:'wind-button' },
    { nombre: '🪨', id:'earth-button' },
)
Orchiwet.attacks.push(
    { nombre: '💦', id:'water-button' },
    { nombre: '💦', id:'water-button' },
    { nombre: '🌬️', id:'wind-button' },
    { nombre: '🌬️', id:'wind-button' },
    { nombre: '🪨', id:'earth-button' },
)
Toprock.attacks.push(
    { nombre: '💦', id:'water-button' },
    { nombre: '💦', id:'water-button' },
    { nombre: '🪨', id:'earth-button' },
    { nombre: '🪨', id:'earth-button' },
    { nombre: '🪨', id:'earth-button' },
)
Vessptox.attacks.push(
    { nombre: '🔥', id:'fire-button' },
    { nombre: '🌬️', id:'wind-button' },
    { nombre: '🪨', id:'earth-button' },
    { nombre: '🪨', id:'earth-button' },
    { nombre: '🪨', id:'earth-button' },
)
Frogblex.attacks.push(
    { nombre: '💦', id:'water-button' },
    { nombre: '💦', id:'water-button' },
    { nombre: '🔥', id:'fire-button' },
    { nombre: '💦', id:'water-button' },
    { nombre: '🪨', id:'earth-button' },
)
WhitePhoenix.attacks.push(
    { nombre: '🔥', id:'fire-button' },
    { nombre: '🔥', id:'fire-button' },
    { nombre: '🔥', id:'fire-button' },
    { nombre: '🌬️', id:'wind-button' },
    { nombre: '🌬️', id:'wind-button' },
)
RazorEagle.attacks.push(
    { nombre: '🌬️', id:'wind-button' },
    { nombre: '🌬️', id:'wind-button' },
    { nombre: '🌬️', id:'wind-button' },
    { nombre: '🌬️', id:'wind-button' },
    { nombre: '🪨', id:'earth-button' },
)
Xcorpion.attacks.push(
    { nombre: '🔥', id:'fire-button' },
    { nombre: '🪨', id:'earth-button' },
    { nombre: '🪨', id:'earth-button' },
    { nombre: '🪨', id:'earth-button' },
    { nombre: '🪨', id:'earth-button' },
)
jeikepones.push(Drawid, Orchiwet, Toprock, Vessptox, Frogblex, WhitePhoenix, RazorEagle, Xcorpion)

function startgame(){
    chooseAttack.style.display  = 'none'
    
    jeikepones.forEach((Jeikepon) => {
        jeikeponsoption = `
        <input type="radio" name="pet" id=${Jeikepon.nombre} />
        <label class="Jeikepon_card" for=${Jeikepon.nombre}>
            <p>${Jeikepon.nombre}</p>
            <img src=${Jeikepon.pic} alt=${Jeikepon.nombre}>
        </label>
        `
        Cardscontainer.innerHTML += jeikeponsoption

       inputDrawid = document.getElementById('Drawid')
       inputOrchiwet = document.getElementById('Orchiwet')
       inputToprock = document.getElementById('Toprock')
       inputVessptox= document.getElementById('Vessptox')
       inputFrogblex = document.getElementById('Frogblex')
       inputWhitePhoenix = document.getElementById('WhitePhoenix') 
       inputRazorEagle = document.getElementById('RazorEagle')
       inputXcorpion = document.getElementById('Xcorpion')
       
    })
    petButton.addEventListener('click', petchoose)
    restartButton.addEventListener('click', restart)
}
function petchoose(){
    choosePet.style.display  = 'none'
    chooseAttack.style.display  = 'flex'

    if (inputDrawid.checked) {
        spanPlayerPet.innerHTML = inputDrawid.id
        playersPet = inputDrawid.id
    } else if (inputOrchiwet.checked) {
        spanPlayerPet.innerHTML = inputOrchiwet.id
        playersPet = inputOrchiwet.id
    } else if (inputToprock.checked) {
        spanPlayerPet.innerHTML = inputToprock.id
        playersPet = inputToprock.id
    } else if (inputVessptox.checked) {
        spanPlayerPet.innerHTML = inputVessptox.id
        playersPet = inputVessptox.id
    } else if (inputFrogblex.checked) {
        spanPlayerPet.innerHTML = inputFrogblex.id
        playersPet = inputFrogblex.id
    } else if (inputWhitePhoenix.checked) {
        spanPlayerPet.innerHTML = inputWhitePhoenix.id
        playersPet = inputWhitePhoenix.id
    } else if (inputRazorEagle.checked) {
        spanPlayerPet.innerHTML = inputRazorEagle.id
        playersPet = inputRazorEagle.id
    } else if (inputXcorpion.checked) {
        spanPlayerPet.innerHTML = inputXcorpion.id
        playersPet = inputXcorpion.id
    }else {
        alert('Choose a pet')
        location.reload()
    }

    attackstract(playersPet)
    enemyspetchoose()
}
 function attackstract(playersPet){
    let attacks
    for (let i = 0; i < jeikepones.length; i++) {
        if (playersPet === jeikepones[i].nombre){
            attacks = jeikepones[i].attacks
        }
    }
    showattacks(attacks)
 }
 function showattacks(attacks){
    attacks.forEach((attack) => {
        jeikeponattacks = `
        <button id=${attack.id} class="atack-button BAttack">${attack.nombre}</button>
        `
        attacksContainer.innerHTML += jeikeponattacks
    })

    windButton = document.getElementById('wind-button')
    fireButton = document.getElementById('fire-button')
    waterButton = document.getElementById('water-button')
    earthButton = document.getElementById('earth-button')
    buttons =document.querySelectorAll('.BAttack')
    

 }
 function AttackSecuense() {
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            if (e.target.textContent === '🔥') {
                playerattack.push('FIRE')
                button.style.background = '#112f58'
                button.disabled = true
                console.log(playerattack)                
            } else if (e.target.textContent === '🌬️') {
                playerattack.push('WIND')
                button.style.background = '#112f58'
                button.disabled = true
                console.log(playerattack)                
            } else if (e.target.textContent === '💦') {
                playerattack.push('WATER')
                button.style.background = '#112f58'
                button.disabled = true    
                console.log(playerattack)            
            } else {
                playerattack.push('EARTH')
                button.style.background = '#112f58'
                button.disabled = true
                console.log(playerattack)
            }
            enemyRandomAttack ()
        })
    })
 }
 function enemyspetchoose(){
    let enemy = randomselector(0, jeikepones.length -1)
    spanEnemysPet.innerHTML = jeikepones[enemy].nombre
    enemyJeikeponAttacks = jeikepones[enemy].attacks
    AttackSecuense()
}
function enemyRandomAttack (){
    let RandomAttack = randomselector(0,enemyJeikeponAttacks.length -1)
    if(RandomAttack == 0||RandomAttack == 1){
        enemyAttack.push('FIRE')
    } else if(RandomAttack ==2){
        enemyAttack.push('WIND')
    } else if(RandomAttack ==3){
        enemyAttack.push('WATER')
    } else {
        enemyAttack.push('EARTH')
    }
    console.log(enemyAttack)    
    combatinit()
}
function combatinit(){
    if (playerattack === 5) {
        combat()
    }
}

function indexsamenemys(player, enemy){
    indexplayerAttack = playerattack[player]
    indexenemyAttack = enemyAttack[enemy]
}
function combat() {
    
   for (let index = 0; index < playerattack.length; index++) {
        if (playerattack[index] === enemyAttack[index]) {
            indexsamenemys(index, index)
            messageCreator('Draw!')
        }else if ((playerattack[index] == 'WATER' && enemyAttack[index] == 'FIRE') || (playerattack[index] == 'WATER' && enemyAttack[index] == 'WIND')||(playerattack[index] == 'FIRE' && enemyAttack[index] == 'EARTH')||(playerattack[index] == 'FIRE' && enemyAttack[index] == 'WIND')|| (playerattack[index] == 'WIND' && enemyAttack[index] == 'EARTH')||(playerattack[index] == 'EARTH' && enemyAttack[index] == 'WATER')){
            indexsamenemys(index,index)
            messageCreator('Win!')
            playerwins++
            spanPlayerLives.innerHTML = playerwins
        }else {
            indexsamenemys(index, index)
            messageCreator('lost!')
            enemywins++
            spanEnemysLives.innerHTML= enemywins
        }
   }
    countWins()
}

function countWins(){
    if (playerwins == enemywins) {
        finalMessage("WOW, It's a draw")        
    } else if (playerwins > enemywins) {
        finalMessage("Congratulations, you win!")
    }else{
        finalMessage("Unfortunately, you lost!")
    }
}
function messageCreator(result){
    let newplayerattacks= document.createElement('p')
    let newEnemyAttack = document.createElement('p')
    messageSection.innerHTML = result
    newplayerattacks.innerHTML = indexplayerAttack
    newEnemyAttack.innerHTML = indexenemyAttack
    
    player_attacks.appendChild(newplayerattacks)
    enemy_attacks.appendChild(newEnemyAttack)
}
function finalMessage(finalResult){
    messageSection.innerHTML = finalResult
    sectionRestart.style.display = 'block'
}
function restart(){
    location.reload()
}
function randomselector (min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
window.addEventListener('load',startgame)




