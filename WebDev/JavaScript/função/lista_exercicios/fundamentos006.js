// simples = aplicacao * juros * tempo

function calcJurosSimples(a,j,t) {
    j = j/100;

    montante = a*j*t;
    console.log(`R$ ${montante.toFixed(2).replace(".", ",")}`);
}

calcJurosSimples(1000,10,10);

// composto = aplicacao * (1+juros)^tempo

function calcJurosComposto(a,j,t) {
    j = j/100;

    montante = a*Math.pow((1+j), t);
    console.log(`R$ ${montante.toFixed(2).replace(".", ",")}`);
}

calcJurosComposto(300,1,12 )