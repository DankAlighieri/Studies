var numero = 1;

{ // nao existe escopo de bloco de codigo para o var
    var numero = 2;
    console.log('dentro = ', numero );
}

console.log('fora = ', numero);