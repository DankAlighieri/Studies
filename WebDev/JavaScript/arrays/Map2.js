const carrinho = [
  '{ "nome": "Borracha", "preco": 3.45 }',
  '{ "nome": "Caderno", "preco": 13.90 }',
  '{ "nome": "Kit de Lapis", "preco": 41.22 }',
  '{ "nome": "Caneta", "preco": 7.50 }',
];

// RETORNAR UMA ARRAY APENAS COM PRECOS
Array.prototype.Map2 = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(JSON.parse(this[i]));
  }
};

carrinho.Map2(function (e) {
  console.log(e.preco);
});
