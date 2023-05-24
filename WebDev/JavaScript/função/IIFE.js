// Funcao auto invocada para evitar tocar no escopo global
// IIFE -> Immediately Invoke Function Expression

// Qualquer coisa declarada nessa funcao, estara retida a esse escopo, ate que a funcao seja executada.

(function(){
    console.log('Sera executado na hora!');
    console.log('Foge do escopo mais abrangente!');
})()