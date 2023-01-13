const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.static('public'))
app.use(cors())
app.use(express.json())

const players = []
class Player{
    constructor(id){
        this.id=id
    }   
    assignJeikepon(jeikepon){
        this.jeikepon = jeikepon
    } 
    updatePosition(x,y){
        this.x = x
        this.y = y
    }
    assignAttacks(attacks){
        this.attacks = attacks
    }
}

class Jeikepon{
    constructor(nombre){
        this.nombre = nombre
    }
}



app.get('/unirse', (req,res) =>{
    const id = `${Math.random()}`
    const player = new Player(id)
    players.push(player)
    res.setHeader("Access-Control-Allow-Origin","*")
    res.send(id)
})
app.post('/jeikepon/:playerId',(req,res) => {
    const playerId= req.params.playerId || ''
    const nombre = req.body.jeikepon || ''
    const jeikepon = new Jeikepon(nombre)
    const playerIndex =players.findIndex((player) => playerId === player.id)
    if (playerIndex >= 0){
        players[playerIndex].assignJeikepon(jeikepon)
    }
    
    
    console.log(players)
    console.log(playerId)
    res.end()
})
app.post('/jeikepon/:playerId/position',(req,res)=> {
    const playerId= req.params.playerId || ''
    const x = req.body.x || 0
    const y = req.body.y || 0

    const playerIndex =players.findIndex((player) => playerId === player.id)
    if (playerIndex >= 0){
        players[playerIndex].updatePosition(x,y)
    }

    const enemys = players.filter((player) => playerId !== player.id)



    res.send({
        enemys
    })
})



app.post('/jeikepon/:playerId/attacks',(req,res)=> {
    const playerId= req.params.playerId || ''
    const attacks = req.body.attacks || []


    const playerIndex =players.findIndex((player) => playerId === player.id)
    if (playerIndex >= 0){
        players[playerIndex].assignAttacks(attacks)
    }
    res.end()
})

app.get('/jeikepon/:playerId/attacks', (req, res) =>{
    const playerId= req.params.playerId || ''
    const player = players.find((player) => player.id === playerId)
    res.send({
        attacks:player.attacks || []
    })
})


app.listen(8080, () => {
    console.log('servidor funcionando');
})