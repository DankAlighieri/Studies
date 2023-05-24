//Desenvolva uma função JavaScript para que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).

function convertion(decimal) {
    reais = `R$ ${decimal.toFixed(2).toString().replace(".",",")}`
    console.log(reais);
};

convertion(0.1 + 0.2)