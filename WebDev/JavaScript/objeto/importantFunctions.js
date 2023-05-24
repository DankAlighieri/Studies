const pessoa = {
    nome: "Rebecca",
    idade: 2,
    peso: 13
}
console.log(Object.keys(pessoa)); // returns the respective object's keys
console.log(Object.values(pessoa)); // returns the respective object's values
console.log(Object.entries(pessoa)); // returns the respective object's registries

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`);
})

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
}) // using destructuring instead of array indexes

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // sera ou nao listada
    writable: false, // impossivel alterar
    value: "01/01/2022"
})

pessoa.dataNascimento = '0/01/2017'
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

// Object.assign (ECMAScript 2015)
// This will concatenate the objects passed after the first parameter inside the first parameter.

const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c:3, a:4}                              //since "a" was later changed
// there's no limit for how many args can be passed.
const obj = Object.assign(dest, o1, o2) // dest + o1 + o2 = {a:4, b:2, c:3}
console.log(obj);

// Object.freeze
Object.freeze(obj)
obj.c = 1234
console.log(obj);