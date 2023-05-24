// pessoa -> 123 -> {...}
const pessoa= {nome: "Joao"}
pessoa.nome = 'Pedro' // you can change the data inside that object in memory 
console.log(pessoa);

// pessoa <- 456 -> {...}
// pessoa = {nome: "Ana"} // you can't give "pessoa" a new value in memory

Object.freeze(pessoa) // once it's freeze, you can't change no data inside of it

pessoa.nome = "Maria"
pessoa.address = "Rua ABC"
delete pessoa.nome
console.log(pessoa);

// you can't change anything inside of it.

const pessoaConstante = Object.freeze({nome: "Joao"})
pessoaConstante.nome = "Maria"
console.log(pessoaConstante);