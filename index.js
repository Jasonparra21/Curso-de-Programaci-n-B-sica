const express = require('express')
const cors = require('cors')
const app = express()
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
    res.end()
})




app.listen(8080, () => {
    console.log('servidor funcionando');
})