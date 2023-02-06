const porta = 8080

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended:true }))

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
}) // ':id' sera passado como um parametro, que devera corresponder ao id do produto dentro do objeto produtos no Banco de Dados

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({ // atribui o objeto para a constante produto
        nome: req.body.nome, // pegando o nome dentro do corpo da requisicao
        preco: req.body.preco // pegando o preco dentro do corpo da requisicao
    })
    res.send(produto) // retorna o objeto produto na forma de JSON
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})


app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProdutos(req.params.id)
    res.send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`);
})

