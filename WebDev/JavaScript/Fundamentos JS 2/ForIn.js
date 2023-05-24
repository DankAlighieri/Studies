const notas = [6.7, 7.4, 9.8, 8.1, 7.7];

for (i in notas) {
    console.log(`Grade = ${notas[i]}`);
}

console.log('End\n');

const person = {
    Nome : 'Anna',
    Surname : 'Santos',
    Age : 32,
    Weight : 64
}

for (attribute in person) {
    console.log(`${attribute} = ${person[attribute]}`);
}

console.log('End 2\n');