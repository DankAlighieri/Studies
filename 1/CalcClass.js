const prompt = require('prompt-sync') ();

const soma = (a, b) => a + b;

const sub = (a, b) => a - b;

const mult = (a, b) => a * b;

const divis = (a, b) => a / b;

const operations = function() {
    let choices = {
        1 : "Sum",
        2 : "Subtraction",
        3 : "Multication",
        4 : "Division",
    };
    console.log(choices);

    let op = prompt("What operation would you like to make? ");
    op = parseInt(op)

    switch(op) {
        case 1:
            inputs = prompt("Enter your numbers: ").split(' ');
            a = inputs[0];
            b = inputs[1];
            a =  parseInt(a)
            b =  parseInt(b)
            console.log(soma(a,b));
            break;

        case 2:
            inputs = prompt("Enter your numbers: ").split(' ');
            a = inputs[0];
            b = inputs[1];
            a =  parseInt(a)
            b =  parseInt(b)
            console.log(sub(a,b));
            break;

        case 3:
            inputs = prompt("Enter your numbers: ").split(' ');
            a = inputs[0];
            b = inputs[1];
            a =  parseInt(a)
            b =  parseInt(b)
            console.log(mult(a,b));
            break;

        case 4:
            inputs = prompt("Enter your numbers: ").split(' ');
            a = inputs[0];
            b = inputs[1];
            a =  parseInt(a)
            b =  parseInt(b)
            console.log(divis(a,b));
    };
    
};

console.log('Welcome!');
const text = prompt('Would you like to make a few calculations today? ');
const AskCalc = text.toLowerCase();
console.log(AskCalc);

if (AskCalc == "yes") {
    operations();
}

else {
    console.log(':-(');
    console.log('See you soon!');
}