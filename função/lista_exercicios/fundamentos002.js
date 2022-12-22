function triangulos(a,b,c) {
    if (a == b && b == c) {
        return 'Equilatero.';
    } else if (a == b || b == c || a == c) {
        return 'Isoceles.';
    } else {
        return 'Escaleno.'
    }
};

console.log( triangulos(1,2,3));; // escaleno
console.log( triangulos(2,2,3));; // isoceles
console.log( triangulos(1,2,2));; // isoceles
console.log( triangulos(2,2,2));; // equilatero