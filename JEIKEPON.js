const chooseAttack = document.getElementById('Choose_attack')
const sectionRestart = document.getElementById('Restart')
sectionRestart.style.display = 'none'
const petButton = document.getElementById('pet-button')
const restartButton = document.getElementById('restart-button')

const Attacks =['Wind','Fire','Water','Earth' ]

const choosePet = document.getElementById('Choose_pet')
const spanPlayerPet =document.getElementById('playerPet')
const spanEnemysPet = document.getElementById('enemysPet')

const spanPlayerLives = document.getElementById('playerLives')
const spanEnemysLives = document.getElementById('enemyLives')

const messageSection = document.getElementById('Result')
const player_attacks = document.getElementById('player-attacks')
const enemy_attacks = document.getElementById('enemy-attacks')
const Cardscontainer = document.getElementById('Cards_container')
const attacksContainer = document.getElementById('attacks_container')

let jeikepones = []
let playerattack 
let jeikeponsoption
let enemyAttack
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
let windButton 
let fireButton 
let waterButton
let earthButton 
let buttons = []
let playerattacks =[]

let playerLives = 3 
let enemyLives  = 3

class Jeikepon {
    constructor (namee, pic, live){

        this.namee = namee
        this.pic = pic
        this.live = live
        this.attackss =[]
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

Drawid.attackss.push(
    {name: '🔥', id:'fire-button'},
    {name: '🔥', id:'fire-button'},
    {name: '🔥', id:'fire-button'},
    {name: '🌬️', id:'wind-button'},
    {name: '🪨', id:'earth-button'},
)
Orchiwet.attackss.push(
    {name: '💦', id:'water-button'},
    {name: '💦', id:'water-button'},
    {name: '🌬️', id:'wind-button'},
    {name: '🌬️', id:'wind-button'},
    {name: '🪨', id:'earth-button'},
)
Toprock.attackss.push(
    {name: '💦', id:'water-button'},
    {name: '💦', id:'water-button'},
    {name: '🪨', id:'earth-button'},
    {name: '🪨', id:'earth-button'},
    {name: '🪨', id:'earth-button'},
)
Vessptox.attackss.push(
    {name: '🔥', id:'fire-button'},
    {name: '🌬️', id:'wind-button'},
    {name: '🪨', id:'earth-button'},
    {name: '🪨', id:'earth-button'},
    {name: '🪨', id:'earth-button'},
)
Frogblex.attackss.push(
    {name: '💦', id:'water-button'},
    {name: '💦', id:'water-button'},
    {name: '🔥', id:'fire-button'},
    {name: '💦', id:'water-button'},
    {name: '🪨', id:'earth-button'},
)
WhitePhoenix.attackss.push(
    {name: '🔥', id:'fire-button'},
    {name: '🔥', id:'fire-button'},
    {name: '🔥', id:'fire-button'},
    {name: '🌬️', id:'wind-button'},
    {name: '🌬️', id:'wind-button'},
)
RazorEagle.attackss.push(
    {name: '🌬️', id:'wind-button'},
    {name: '🌬️', id:'wind-button'},
    {name: '🌬️', id:'wind-button'},
    {name: '🌬️', id:'wind-button'},
    {name: '🪨', id:'earth-button'},
)
Xcorpion.attackss.push(
    {name: '🔥', id:'fire-button'},
    {name: '🪨', id:'earth-button'},
    {name: '🪨', id:'earth-button'},
    {name: '🪨', id:'earth-button'},
    {name: '🪨', id:'earth-button'},
)
jeikepones.push(Drawid, Orchiwet, Toprock, Vessptox, Frogblex, WhitePhoenix, RazorEagle, Xcorpion)

function startgame(){
    chooseAttack.style.display  = 'none'
    
    jeikepones.forEach((Jeikepon) => {
        jeikeponsoption = `
        <input type="radio" name="pet" id=${Jeikepon.namee} />
        <label class="Jeikepon_card" for=${Jeikepon.namee}>
            <p>${Jeikepon.namee}</p>
            <img src=${Jeikepon.pic} alt=${Jeikepon.namee}>
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
    }

    attackstract(playersPet)
    enemyspetchoose()
}
 function attackstract(playersPet){
    let attacks
    for (let i = 0; i < jeikepones.length; i++) {
        if (playersPet === jeikepones[i].namee){
            attacks = jeikepones[i].attackss
        }
        
    }
    showattacks(attacks)
 }
 function showattacks(attacks){
    attacks.forEach((attacks) => {
        jeikeponattacks = `
        <button id=${attacks.id} class="atack-button BAttack">${attacks.name}</button>
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
        button.addEventListener('click', (e)=> {
            if (e.target.textcontent === '🔥') {
                playerattacks.push('FIRE')
                button.style.background = '#112f58'                
            } else if (e.target.textcontent === '🌬️') {
                playerattacks.push('WIND')
                button.style.background = '#112f58'                
            } else if (e.target.textcontent === '💦') {
                playerattacks.push('WATER')
                button.style.background = '#112f58'                
            } else {
                playerattacks.push('EARTH')
                button.style.background = '#112f58'

            }

            
        })
    })
 }
 function enemyspetchoose(){
    let enemy = randomselector(0,jeikepones.length-1)
    spanEnemysPet.innerHTML = jeikepones[enemy].namee
    AttackSecuense()
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
    sectionRestart.style.display ='block'
}
function restart(){
    location.reload()
}
function randomselector (min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
window.addEventListener('load',startgame)




