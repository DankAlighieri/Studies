/*
O programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.
*/

function calculadora(x, op, z) {
    switch (op) {
        case '+':
            return console.log(x+z);
            break
        case '-':
            return console.log(x-z);
            break
        case '*':
            return console.log(x*z);
            break
        case '/':
            return console.log(x/z);
            break
        default:
            console.log("Invalid operation");
            break
    };
};

calculadora(2, "-", 2);
calculadora(2, "+", 2);
calculadora(2, "*", 2);
calculadora(2, "/", 2);