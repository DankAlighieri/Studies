const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

// Sem Callback

const  notasbaixas1 = [];
for (let i in notas) {
    if (notas[i] < 7) {
        notasbaixas1.push(notas[i]);
    };
};

console.log(`Sem Callback = ${notasbaixas1}`);

// Com Callback

const notasbaixas2 = notas.filter(
    function (nota){
        return nota < 7;
    }
);

console.log(`Com Callback = ${notasbaixas2}`);

const notasbaixas3 = notas.filter((nota => nota < 7));
console.log(`Com Callback e arrow = ${notasbaixas3}`);