console.log(module.exports);
console.log(module.exports == this);
console.log(module.exports == exports);

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports);

exports = {
    nome: 'teste'
}

console.log(modules.exports);

module.exports = { publico: true }

// objetos a serem exportados so podem ser criados a partir do metodo 'module.exports, por mais que module.exports == exports == this'