//const { application } = require("express")
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

const messageSection = document.getElementById('result')
const player_attacks = document.getElementById('player-attacks')
const enemy_attacks = document.getElementById('enemy-attacks')
const Cardscontainer = document.getElementById('Cards_container')
const attacksContainer = document.getElementById('attacks_container')

const sectionShowMap = document.getElementById('Show-Map')
const map = document.getElementById('Map')

let playerId
let jeikepones = []
let playerattack =[]
let enemyAttack = []
let enemyJeikepon = []
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
let myJeikepon
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
let lienzo = map.getContext("2d")
let range
let backgroundMap = new Image()
backgroundMap.src='./Img/mokemap.jpg'
let searchAltura
let anchoMap = window.innerWidth-20
const maxancho = 350
if (anchoMap > maxancho){
    anchoMap = maxancho - 20 
}
altura=(anchoMap*600)/800
map.width = anchoMap
map.height = altura

class Jeikepon {
    constructor (nombre, pic, live, id = null){
        this.id = id
        this.nombre = nombre
        this.pic = pic
        this.live = live
        this.attacks =[]
        this.ancho = 80
        this.alto = 80
        this.x =randomselector(0, map.width - this.ancho)
        this.y = randomselector(0, map.height - this.alto)
        this.picMap= new Image()
        this.picMap.src = pic
        this.speedX=0
        this.speedY=0
    }

    drawJeikepon(){
        lienzo.drawImage(
            this.picMap,
            this.x,
            this.y,
            this.alto,
            this.ancho,
        )
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

const Drawid_Attacks = [
    { nombre: '🔥', id:'fire-button' },
    { nombre: '🔥', id:'fire-button' },
    { nombre: '🔥', id:'fire-button' },
    { nombre: '🌬️', id:'wind-button' },
    { nombre: '🪨', id:'earth-button' },
]

const Orchiwet_Attacks = [
    { nombre: '💦', id:'water-button' },
    { nombre: '💦', id:'water-button' },
    { nombre: '🌬️', id:'wind-button' },
    { nombre: '🌬️', id:'wind-button' },
    { nombre: '🪨', id:'earth-button' },
]
const Toprock_attacks = [
    { nombre: '💦', id:'water-button' },
    { nombre: '💦', id:'water-button' },
    { nombre: '🪨', id:'earth-button' },
    { nombre: '🪨', id:'earth-button' },
    { nombre: '🪨', id:'earth-button' },
]
const Vessptox_Attacks = [
    { nombre: '🔥', id:'fire-button' },
    { nombre: '🌬️', id:'wind-button' },
    { nombre: '🪨', id:'earth-button' },
    { nombre: '🪨', id:'earth-button' },
    { nombre: '🪨', id:'earth-button' },
]
const Frogblex_Attacks = [
    { nombre: '💦', id:'water-button' },
    { nombre: '💦', id:'water-button' },
    { nombre: '🔥', id:'fire-button' },
    { nombre: '💦', id:'water-button' },
    { nombre: '🪨', id:'earth-button' },
]
const WhitePhoenix_Attacks = [
    { nombre: '🔥', id:'fire-button' },
    { nombre: '🔥', id:'fire-button' },
    { nombre: '🔥', id:'fire-button' },
    { nombre: '🌬️', id:'wind-button' },
    { nombre: '🌬️', id:'wind-button' },
]
const RazorEagle_Attacks = [
    { nombre: '🌬️', id:'wind-button' },
    { nombre: '🌬️', id:'wind-button' },
    { nombre: '🌬️', id:'wind-button' },
    { nombre: '🌬️', id:'wind-button' },
    { nombre: '🪨', id:'earth-button' },
]
const Xcorpion_Attacks = [
    { nombre: '🔥', id:'fire-button' },
    { nombre: '🪨', id:'earth-button' },
    { nombre: '🪨', id:'earth-button' },
    { nombre: '🪨', id:'earth-button' },
    { nombre: '🪨', id:'earth-button' },
]
Drawid.attacks.push(...Drawid_Attacks)
Orchiwet.attacks.push(...Orchiwet_Attacks)
Toprock.attacks.push(...Toprock_attacks)
Vessptox.attacks.push(...Vessptox_Attacks)
Frogblex.attacks.push(...Frogblex_Attacks)
WhitePhoenix.attacks.push(...WhitePhoenix_Attacks)
RazorEagle.attacks.push(...RazorEagle_Attacks)
Xcorpion.attacks.push(...Xcorpion_Attacks)

jeikepones.push(Drawid, Orchiwet, Toprock, Vessptox, Frogblex, WhitePhoenix, RazorEagle, Xcorpion)

function startgame(){
    chooseAttack.style.display  = 'none'
    sectionShowMap.style.display = 'none'
    
    jeikepones.forEach((jeikepon) => {
        jeikeponsoption = `
        <input type="radio" name="pet" id=${jeikepon.nombre} />
        <label class="Jeikepon_card" for=${jeikepon.nombre}>
            <p>${jeikepon.nombre}</p>
            <img src=${jeikepon.pic} alt=${jeikepon.nombre}>
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
    gameJoin()
}
function gameJoin(){
    fetch('http://localhost:8080/unirse')
    .then(function(res){
        console.log(res);
        if (res.ok){
            res.text()
                .then(function(answer){
                    console.log(answer)
                    playerId = answer

                })
        }
    })
}

function petchoose(){
    choosePet.style.display  = 'none'
   

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

    chooseJeikepon(playersPet)

    attackstract(playersPet)
    sectionShowMap.style.display = 'flex' 
    mapInit()
}
function chooseJeikepon(playerPet){
    fetch(`http://localhost:8080/jeikepon/${playerId}`,{
        method:'post',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            jeikepon: playerPet
        })
    })
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
 function enemyspetchoose(enemy){
    spanEnemysPet.innerHTML = enemy.nombre
    enemyJeikeponAttacks = enemy.attacks
    AttackSecuense()
}

function enemyRandomAttack (){
    console.log('Ataques enemigo', enemyAttack);
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
    combatinit()
}

function combatinit(){
    if (playerattack.length === 5) {
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
        }else if ((playerattack[index] === 'WATER' && enemyAttack[index] === 'FIRE') || (playerattack[index] === 'WATER' && enemyAttack[index] === 'WIND')||(playerattack[index] === 'FIRE' && enemyAttack[index] === 'EARTH')||(playerattack[index] === 'FIRE' && enemyAttack[index] === 'WIND')|| (playerattack[index] === 'WIND' && enemyAttack[index] === 'EARTH')||(playerattack[index] === 'EARTH' && enemyAttack[index] === 'WATER')){
            indexsamenemys(index, index)
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
    if (playerwins === enemywins) {
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
function drawCanvas(){

    myJeikepon.x=myJeikepon.x + myJeikepon.speedX
    myJeikepon.y=myJeikepon.y + myJeikepon.speedY
    lienzo.clearRect(0,0, map.width, map.height)
    lienzo.drawImage(
        backgroundMap,
        0,
        0,
        map.width,
        map.height,
    )
    myJeikepon.drawJeikepon()
        sendPosition(myJeikepon.x,myJeikepon.y)
    enemyJeikepon.forEach (function(jeikepon){
        jeikepon.drawJeikepon()
        collitionReviewing(jeikepon)
    })
}
function sendPosition(x,y){
    fetch(`http://localhost:8080/jeikepon/${playerId}/position`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            x,
            y
        })
    })
    .then(function (res) {
        if (res.ok){
            res.json()
                .then(function({enemys}){
                    console.log(enemys)
                    enemyJeikepon = enemys.map(function(enemy){
                        let enemyJeikepon = null
                        const jeikeponName = enemy.jeikepon.nombre || ''
                        if (jeikeponName === 'Drawid'){
                            enemyJeikepon = new  Jeikepon ('Drawid','./Img/Blue-Dragon.png', 5)
                        }else if (jeikeponName === 'Orchiwet'){
                            enemyJeikepon = new Jeikepon ('Orchiwet', './Img/Orchiwet.png',5)
                        }else if (jeikeponName === 'Toprock'){
                            enemyJeikepon = new Jeikepon ('Toprock','./Img/Toprock.png', 5)
                        }else if (jeikeponName === 'Vessptox'){
                            enemyJeikepon = new Jeikepon ('Vessptox','./Img/Vessptox.png', 5)
                        }else if (jeikeponName === 'Frogblex'){
                            enemyJeikepon = new Jeikepon ('Frogblex', './Img/Frogblex.png', 5)
                        }else if (jeikeponName === 'WhitePhoenix'){
                            enemyJeikepon = new Jeikepon ('WhitePhoenix', './Img/Whitephoenix.png', 5)
                        }else if (jeikeponName === 'RazorEagle'){
                            enemyJeikepon = new Jeikepon ('RazorEagle','./Img/RazorEagle.png', 5)
                        }else if (jeikeponName === 'Xcorpion'){
                            enemyJeikepon = new Jeikepon ('Xcorpion','./Img/Xcorpion.png', 5)
                        }
                        enemyJeikepon.x = enemy.x
                        enemyJeikepon.y = enemy.y 
                        return enemyJeikepon
                    })
                })
            }
    })
}
function moveUp(){
    myJeikepon.speedY = - 5
}
function moveDown(){
    myJeikepon.speedY =  5
}
function moveLeft(){
    myJeikepon.speedX =- 5
}
function moveRight(){
    myJeikepon.speedX = 5
}
function stopmovement(){
    myJeikepon.speedX=0
    myJeikepon.speedY=0
}
function keypress(event){
    switch (event.key) {
        case 'ArrowUp':
            moveUp()
            break;
        case 'ArrowDown':
            moveDown()    
            break;
        case 'ArrowLeft':
            moveLeft()
            break;
        case 'ArrowRight':
            moveRight()
            break;
        default:
            break
    }
}
function mapInit(){
    myJeikepon = objectObtain(playersPet)
    console.log(myJeikepon, playersPet);
    range = setInterval(drawCanvas, 50)
    window.addEventListener('keydown', keypress)
    window.addEventListener('keyup', stopmovement)
}

function objectObtain(){
    for (let i = 0; i < jeikepones.length; i++) {
        if (playersPet === jeikepones[i].nombre){
            return jeikepones[i]
        }
    }
}

function collitionReviewing(enemy){
    const upenemy = enemy.y
    const downenemy = enemy.y + enemy.alto
    const rigthenemy = enemy.x + enemy.ancho
    const leftenemy = enemy.x

    const uppet = myJeikepon.y
    const downpet = myJeikepon.y + myJeikepon.alto
    const rightpet = myJeikepon.x + myJeikepon.ancho
    const leftpet = myJeikepon.x

    if(downpet < upenemy    ||
       uppet > downenemy    ||
       rightpet < leftenemy ||
       leftpet > rigthenemy 
    ){
        return
    }
    stopmovement()
    clearInterval(range)
    chooseAttack.style.display  = 'flex'
    sectionShowMap.style.display = 'none'
    enemyspetchoose(enemy)
}
window.addEventListener('load',startgame)




