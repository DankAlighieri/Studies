// criando uma funcao ojeto pra gerar um numero randomico entre os valores admitidos por min e max, tendo como valortes padroes 0 e 1000.
function rand({ min = 0, max = 1000 }) {
    // Math.random will return a floating point of the determined range. If no range is determined it will pick a floating point that is >= 0 and < 1.
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) // math.floor returns the largest integer less than or equal to a given number. In this case the given number is the value attributed to 'valor'    
}
const obj = { max: 50, min: 40 }
console.log(rand(obj));
console.log(rand({ min: 955}));
console.log(rand({}));