// Funcao em JS eh First-Class Object (citizens)
// Higher-order function
// Pode ser tratada como um dado, passar como parametro, criar como variavel, etc

// criar de forma literal
//  retorno eh opcional

function fun1() { };

// Armazenar em uma variavel
const fun2 = function () { };

// Armazenar em um array
const array = [function(a, b) { return a + b }, fun1, fun2];
console.log(array[0](2, 3));

// Armazenar em um atributo de objeto
const obj = {};
obj.falar = function () {return 'Aloha'};
console.log(obj.falar());

// Passar funcao como parametro
function run(fun) {
    fun();
};

run(function () {console.log('Executando...') });

// Uma funcao pode retornar/conter uma funcao
function soma(a, b) {
    return function (c) {
        console.log(a+b+c);
    };
};
soma(2, 3) (4);

const cincoMais = soma(2, 3);
cincoMais(4);