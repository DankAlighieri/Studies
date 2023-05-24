function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            con.log('temp')
            if (Math.random() < chanceErro) {
                reject('Error')
            } else {
                resolve(valor)
            }
        } catch(e) {
            reject(e)
        }
    })
}

funcionarOuNao('Testando...', 0.5)
    .then(v => console.log(`Valor: ${v}`))
    .then(
        v => consol.log(v),
        err => console.log(`Erro esp.: ${err}`) // catch nao eh chamado quando eh feito um tratamento de erro especifico
    )
    .then(() => console.log('Quase Fim!'))
    .catch(err => console.log(`Erro Geral: ${err}`)) // o then continuara executando ate chegar no catch, independente de erros ou nao. O metodo Catch nao passa o valor pra frente.
    .then(() => console.log('Fim!'))