function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => { // promise eh uma funcao que recebe uma callback que sera executada quanto a promessa for atendida
        setTimeout(() => {
            resolve(frase) // situacao de sucesso
        }, segundos * 1000)
    }) 
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase));