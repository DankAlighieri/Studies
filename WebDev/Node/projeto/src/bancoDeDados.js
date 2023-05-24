const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const produtos = {}


function salvarProduto(produto) {
    if (!produto.id) produto.id = sequence.id // se o produto passado nao possuir id, atribue um id a ele referente ao id obtido no sequence
    produtos[produto.id] = produto // caso o produto ja exista, atualiza ele para sua versao mais recente
    return produto // retorna o produto atualizado e com id
}

function getProduto(id) {
    return produtos[id] || {} // retornando o produto por seu id ou se o id nao existir, retorna um objeto vazio
}

function getProdutos() {
    return Object.values(produtos)
}

function excluirProdutos(id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports = { salvarProduto, getProduto, getProdutos, excluirProdutos }