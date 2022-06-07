

//*Greetings
app.get('/greeting', (req, res) =>{
    res.send('Hello, stranger')
})

//*Greetings name
app.get('/greeting/:name', (req, res) => {
    res.send(`What's up, ${req.params.name}`)
})

//*Tip Calculator
app.get('/tip/:total/:tipPercentage', (req, res) =>{
    res.send(req.params.tipPercentage)
})

//*Magic 8 Ball
app.get('/magic/:question', (req, res) =>{
    const arr = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    const rand = Math.floor(Math.random()*arr.length)
    console.log(arr[rand]);
    res.send(`<h1>${req.params.question}? <br> ${arr[rand]}</h1>`)
})

//*Take one Down and Pass it Around


//* App Listener
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})