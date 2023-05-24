// criando uma funcao array pra gerar um numero randomico entre os valores admitidos por min e max, tendo como valortes padroes 0 e 1000.
function rand([min = 0, max = 1000]) {
    // verificando se o numero min eh maior doq o max, caso sim a posicao dos parametros eh invertida.
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50,40]));
console.log(rand([992]));
console.log(rand([0, 10]));
console.log(rand([]));