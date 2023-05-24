// metodo base de criar um objeto
const prod1 = {
    nome: 'tenis',
    preco: 45
}

const prod2 = {
    nome: 'whatever',
    preco: 120
}

// Funcao factory eh uma funcao que retorna um objeto
// Factory simples

function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa());
