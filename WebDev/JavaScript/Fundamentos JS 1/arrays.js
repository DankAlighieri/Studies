const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3]) // lendo os valores dos indeces
console.log(valores[4]) // retorna undefined, pois nao existe valor

valores[4] = 10 // atribui o valor 10 para o indice 4
console.log(valores)
console.log(valores.length) // funcao que retorna a quantidade de indices dentro da variavel

valores.push({id: 3}, false, null, 'teste') // adiciona multiplos valores a array 
console.log(valores)

console.log(valores.pop([])) // retira o ultimo elemento da array
console.log(valores)

delete valores[0] // outra forma de remover um valor da array 
console.log(valores)

console.log(typeof valores)