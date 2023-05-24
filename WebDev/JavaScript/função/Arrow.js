let dobro = function (a) {
    return 2 * a;
};

// tipo 1 de arrow function

dobro = (a) => {
    return 2 * a;
};

// tipo 2 de arrow function (apenas um parametro)
dobro = a => 2 * a; // return implicito
console.log(dobro(Math.PI));

let ola = function() {
    return 'Ola';
};

ola = () => 'Ola';
ola = _ => 'Ola';

console.log(ola());
