const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log(`Sua nota foi ${nota}, logo esta aprovado.`);
    } else {
        console.log(`Sua noite foi ${nota}, logo esta reprovado.`);
    }
}

imprimirResultado(10)
imprimirResultado(7)
imprimirResultado(4)
imprimirResultado('EPA') // vai passar, mesmo sendo str