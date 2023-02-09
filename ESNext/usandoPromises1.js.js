const http = require('http')

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e)
                }
            })
        })
    })
}

// let nomes = []
// getTurma('A').then(alunos => {
//     nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
//     getTurma('B').then(alunos => {
//         nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
//         getTurma('C').then(alunos => {
//             nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
//             console.log(nomes);
//         })
//     })
// })

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')]) // retorna uma matriz com um array para cada get
    .then(turmas => [].concat(...turmas)) // fazendo spreading em um array novo a partir da matriz passada
    .then(alunos => alunos.map(aluno => aluno.nome)) // itera na array passada com o map e retorna o valor da chave nome de cada objeto em uma array nova
    .then(nomes => console.log(nomes)) // retorna array no console
    .catch(e => console.log(e.message))