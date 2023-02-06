console.log(this === global);
console.log(this === module);

// dentro do modulo, o this aponta para o module.exports/exports.
console.log(this === module.exports);
console.log(this === exports);

function logThis() {
    // dentro de uma funcao padrao, o this aponta para o global.
    console.log('Dentro de uma funcao...');
    console.log(this === exports);
    console.log(this === module.exports);
    console.log(this === global);
}

const arrowFunction = () => {
    // ja dentro de uma funcao arrow, this vai apontar para o module.exports/exports
    console.log('Dentro de uma funcao arrow...');
    console.log(this === exports);
    console.log(this === module.exports);
    console.log(this === global);
}

logThis()
arrowFunction()