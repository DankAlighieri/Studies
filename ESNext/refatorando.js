const fs = require('fs')
const path = require('path')
const caminho = path.join(__dirname, 'dados.txt')

async function lerConteudo (caminho) {
    let resultado = fs.readFile(caminho, function(_, conteudo) {
        return conteudo.toString()
    })
    return await resultado
}

function exibirArquivo(conteudo) {
    return new Promise(resolve => {
        resolve(lerConteudo(conteudo))
    })
}

exibirArquivo(caminho)
    .then(console.log)