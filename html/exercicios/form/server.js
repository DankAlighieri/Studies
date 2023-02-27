const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extende:true}))

app.post('/usuarios', (req, resp) => {
    console.log(req.body);
    resp.send('<h1>Parabens! Usuario incluido!</h1>')
})

// app.get('/usuarios', (req, resp) => {
//     console.log(req.query);
//     resp.send('<h1>Parabens! Usuario incluido!</h1>')
// })

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id);
    console.log(req.body);
    resp.send('<h1>Parabens! Usuario alterado!</h1>')
})

app.listen(3003)