let valor
console.log(valor)  // nao inicializada
// console.log(valor2)  // nao declarada

valor = null // variavel foi inicializada, mas nao aponto para nenhum endereco de memoria.
console.log(valor)
// console.log(valor.toString()) Cannot read properties of null

const produto = {} // variavel esta definida
console.log(produto.preco) // preco nao esta definido
console.log(produto)

produto.preco = 3.58
console.log(produto)
console.log(!!produto.preco)

produto.preco = undefined // evitar atribuir undefined
console.log(!!produto.preco) // verificando o valor 'preco' esta setado 
console.log(produto) // o valor preco ainda esta existe, mas n esta definido
// delete produto.preco // exclui o valor 'preco' da variavel 
console.log(produto)

produto.preco = null // sem preco 
console.log(!!produto.preco)
console.log(produto)
