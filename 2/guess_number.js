const prompt = require('prompt-sync') ();

function randomNumber(min = 1, max = 1000) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let guess = prompt("What's your guess?\n")

console.log(valor);
console.log(prompt);