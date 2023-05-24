const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()

new Promise(function (resolve, reject) {
    // resolve(3) // so eh devolvido um valor, para retornar mais de um valor, eh necessario retornar um objeto
    // resolve({
    //     x: 3,
    //     y: 4
    // })
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
    .then(primeiroElemento)
    .then(primeiroElemento) // o valor sera o retorno da chamada then anterior
    .then(letraMinuscula)
    // .then(v => console.log(v))
    .then(console.log)
