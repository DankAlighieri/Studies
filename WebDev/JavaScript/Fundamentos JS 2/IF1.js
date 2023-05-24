const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log(`Sua nota foi ${nota}, logo esta aprovado.`);
    } else if(nota <= 7 && nota >= 0){
        console.log(`Sua noite foi ${nota}, logo esta reprovado.`);
    } else {
        console.log('Nota invalida');
    }
}

imprimirResultado(10)
imprimirResultado(7)
imprimirResultado(4)
imprimirResultado(-4)
imprimirResultado('EPA') // vai passar, mesmo sendo str