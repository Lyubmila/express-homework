//load express
const express = require('express')

const app = express()
const PORT = 3000

app.get('/greeting', (req, res) =>{
    res.send('Hello, stranger')
})

app.get('/greeting/:name', (req, res) => {
    res.send(`What's up, ${req.params.name}`)
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})