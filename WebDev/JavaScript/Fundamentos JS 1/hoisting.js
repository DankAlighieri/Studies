/* 
    Variaveis declaradas com 'var' sofrem hoisting pelo proprio interpretador.
    Ou seja, elas sempre serao lidas antes de qualquer outra linha de codigo, e podem ser atribuidas mesmo depois de serem referenciadas no codigo.
*/

console.log('a =', a);
var a = 2;
console.log('a =', a);

/* 
    Ja as variaveis declaradas com 'let' nao sofrem hoisting.
*/

console.log('b =', b);
let b = 2;
console.log('b =', b);