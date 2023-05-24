const prod1 ={}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaco

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: { // obj unico aninhado a prod2
        blabla: 1,
        obj: { // obj unico aninhado a obj
            blabla: 2,
        }
    }

}

console.log(prod2);