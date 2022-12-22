// Funcao quadratica f(x) = ax2 + bx + c
// f(x) = x2+3x+2

function funcQuadratica(a,b,c,) {
    let resultados = [];
    let delta = (b ** 2) - (4*a*c);
    if (delta < 0) {
        return 'Delta is negative.';
    }
    let x1 = (-b + Math.sqrt(delta))/(2*a);
    let x2 = (-b - Math.sqrt(delta))/(2*a);
    resultados.push(x1);
    resultados.push(x2);
    return resultados;
};

console.log(funcQuadratica(1, 3, 2));
console.log(funcQuadratica(1, 4, 3));
