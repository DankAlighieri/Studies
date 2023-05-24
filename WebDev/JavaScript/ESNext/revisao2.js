// Arrow Function 
const soma = (a, b) => a + b; // return chamada implicitamente
console.log(soma(2, 3));

// Arrow Function (this)
const lexico1 = () => console.log(this === exports);
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// paramentro default
function log(texto = 'Node') {
    console.log(texto);
}

log() // imprime padrao
log(undefined) // imprime padrao
log(null) // imprime null
log("blablabla") // imprime blablabla

// operador rest 

function total (...numeros) {
    let total = 0
    numeros.forEach(n => total +=n)
    return total
}
console.log(2, 3, 4, 5);