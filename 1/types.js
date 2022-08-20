// 

const peso1 = 1.0
const peso2 = Number('2.0') // converte a str para int

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))

const avaliacao1 = 9.871 // float
const avaliacao2 = 6.871 // float

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total/(peso1+peso2)

console.log(media.toFixed(2)) // toFixed limita a quantidade de casas decimais que serao impressas
console.log(media.toString(2)) // em binario
console.log(typeof media)