const a = {name: 'Test'} // a constante 'a' possui apenas o endereco no qual o objeto declarado esta localizado

const b = a // b recebe o mesmo endereco de a

b.name = 'Opa' // substitui o valor de name dentro do objeto a

console.log(a)

let c = 3 // diferente da atribuicao de objetos, a atribuicao de variaveis primitivas eh feita pelo valor e nao seu endereco na memoria.

let d = c // copia por valor 

d++ // incrementa o valor atribuido

console.log(d,c)