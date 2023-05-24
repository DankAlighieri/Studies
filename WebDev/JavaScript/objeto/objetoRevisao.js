// dinamic collection of pairs key/value

const produto = new Object;
produto.nome = 'Chair';
produto['marca do produto'] = 'Generica';
produto.preco = 220;

console.log(produto);
delete produto.preco
delete produto['marca do produto']
console.log(produto);

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42

    }],
    calcularValorSeguro: function() {
        //...
    }
};

carro.proprietario.endereco.numero = 1000;
carro['proprietario']['endereco']['logradouro'] = "Av. Gigante"
console.log(carro);

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro);
console.log(carro.condutores); // this won't return an error, only undefined, bc you're reaching inside something that exists, only the thing that you're reaching is undefined.

// console.log(carro.condutores.length); this will produce an error bc you're trying to reach something inside something that doesn't exist anymore, since "condutores" have been deleted.