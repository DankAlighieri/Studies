const produtos = [
    {nome: "Notebook", preco: 2499, fragil: true},
    {nome: "iPad Pro", preco: 4199, fragil: true},
    {nome: "Copo de Vidro", preco: 12.49, fragil: true},
    {nome: "Copo de Palstico", preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p){
    if (p.preco >= 500 && p.fragil == true) {
        return true
    }else {
        return false
    }
}));

console.log(produtos.filter(caroeFragil(produtos)));

const caro = produtos => produtos.preco >= 500;
const fragil = produtos => produtos.fragil;

console.log(produtos.filter(caro).filter(fragil));