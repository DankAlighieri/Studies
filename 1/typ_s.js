const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5)) // retorna vazio pois nao existe nenhum valor no index 5
console.log(escola.charCodeAt(3)) // retorna o valor HTML do elemento no index
console.log(escola.indexOf('3'))
console.log(escola.substring(1)) // retorna todos os elementos a partir do indece 1
console.log(escola.substring(0, 3)) // retorna 3 elementos a partir do indece 0

console.log('Escola '.concat(escola).concat('!')) // retorna a string "Escola" concatenada com o valor da constante escola "Cod3r", que por sua vez tera um "!" concatenado.
console.log('Escola ' + escola + "!") // retorna a string "Escola" concatenada com o valor da constante escola "Cod3r", que por sua vez tera um "!" concatenado.
console.log(escola.replace(3, 'e')) // substitui o elemento no indece 3 da constante escola por 'e' 
console.log(escola.replace(/\w/, 'e')) // substitui o primeiro elemento da constante escola por 'e' 
console.log(escola.replace(/\w/g, 'e')) // substitui todos os elemento da constante escola por 'e' 

console.log('Ana,Maria,Pedro'.split(',')) // a funcao split vai separar a string fornecida em cada virgula e criara uma array.
