let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!isAtivo) // negacao inverte o valor 
console.log(!!isAtivo) // dupla negacao inverte e reverte o valor 

console.log('os verdadeiros...') // situacoes que resolvem para valor verdadeiro
console.log(!!3)
console.log(!!-1)
console.log(!!' ') // string aberta
console.log(!![]) // array
console.log(!!{}) // object
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'') // string vazia
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar')
console.log(!!('' || null || 0 || ' ')) // retorna o primeiro valor verdadeiro que encontra

let nome = ''

console.log(nome || 'Desconhecido')
