let a = 1
console.log(a);

let p = new Promise(function (cumprirPromessa) {
    // cumprirPromessa(3) // so eh devolvido um valor, para retornar mais de um valor, eh necessario retornar um objeto
    // cumprirPromessa({
    //     x: 3,
    //     y: 4
    // })
    cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

const primeiroElemento = array => array[0]

const primeiraLetra = string => string[0]

const letraMinuscula = letra => letra.toLowerCase()

p
    .then(primeiroElemento)
    .then(primeiraLetra) // o valor sera o retorno da chamada then anterior
    .then(letraMinuscula)
    .then(console.log)
