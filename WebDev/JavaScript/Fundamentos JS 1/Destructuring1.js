/*
    Operador de desestruturacao. 
    Retira algum elemento da estrutura
*/

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

//extraindo o dado nome e o dado idade do objeto pessoa
const { nome, idade } = pessoa
console.log(nome, idade);

//extraindo o dado nome e o dado idade do objeto pessoa, e criando variaveis n e i para cada um, respectivamente.
const { nome: n, idade: i} = pessoa
console.log(n, i);

// tentando extrair dados que nao existem no objeto
// retorno sera undefined
// BemHumorada esta com a atribuicao generica true, para ser retornada caso nao exista nenhum valor dentro de pessoa 
const {sobrenome,BemHumorada = true } = pessoa 
const {endereco: { logradouro: l, numero: nu, cep: c } } = pessoa
console.log(l, nu, c);

//tentando extrair filhos inexistentes de um dado inxistentes
const {conta: { ag, num }} = pessoa
console.log(ag, num);