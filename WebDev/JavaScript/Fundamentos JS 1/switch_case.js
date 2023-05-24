const prompt = require('prompt-sync') ();

const soma = (a, b) => a + b;
let op = 1
switch(op) {
    case 1:
        inputs = prompt("Enter your numbers: ").split(' ');
        let a = inputs[0];
        let b = inputs[1];
        a = parseInt(a)
        b =  parseInt(b)
        console.log(typeof a);
        console.log(soma(a,b));
    }