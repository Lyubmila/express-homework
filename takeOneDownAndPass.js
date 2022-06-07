//load express
const express = require('express')

//* // create an instance of express
const app = express()
const PORT = 3000

app.get('/', (req, res) =>{
    res.send(`99 Bottles of beer on the wall <br> <a href=/98>take one down, pass it around</a>`)
})

app.get('/:number_of_bottles',(req, res) =>{
    //res.send(`${req.params.number_of_bottles} Bottles of beer on the wall.`)

    let link = ''
    const numBottles = Number(req.params.number_of_bottles) - 1
    if (numBottles >= 0) {
        link =  `<a href=/${numBottles}>take one down, pass it around</a>`
    } else {
        link =  `<a href=/>Start Over</a>`
    }
    res.send(`${req.params.number_of_bottles} Bottles of beer on the wall. <br>${link}`)
})

//* App Listener
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})