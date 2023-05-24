// Object.preventExtensions
// You won't be able to add new attributes to this object

const produto = Object.preventExtensions({
    nome: 'Qualquer', 
    preco: 1.99,
    tag:'promocao'
})
console.log('Extensivel:', Object.isExtensible(produto));

produto.nome = 'Borracha'
produto.descricao = "Borracha escolar" //won't be included since the object can't be extended
delete produto.tag
console.log(produto);

//Object.seal
//Can change attributes, but can't delete nor add any attbute
const pessoa = {
    nome: 'Juliana', 
    idade: 35
}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa));

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa);

//Object.freeze
//Can't modify at all the object