// par nome/valor

const saudacao = 'Opa'; // contexto lexico 1 (local que sua variavel foi fisicamente definida no codigo)

function exec() {
    const saudacao = 'Falaa'; // contexto lexico 2
    return saudacao;
}

// Objetos sao grupos aninhados de pares nome/valor 
const client  = {
    nome: 'Pedro',
    idade : 32,
    peso : 90,
    endereco : {
        logradoura: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao);
console.log(exec());
console.log(client);