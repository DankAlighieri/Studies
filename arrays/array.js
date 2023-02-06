// JS doesn't have an element type array.
// Arrays in JS are objects.

console.log(typeof Array, typeof new Array, typeof []);

let aprovados = new Array('bia', 'carlos', 'ana')
aprovados.sort() // alterando o array original
console.log(aprovados);
console.log(aprovados);

aprovados = ['bia', 'carlos', 'ana']
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);

aprovados[3] = 'paulo'
aprovados.push('matheus')
console.log(aprovados.length);

aprovados[9] = 'rafael'
console.log(aprovados.length);
console.log(aprovados[8] === undefined);
console.log(aprovados[8] === null);

console.log(aprovados); 



delete aprovados[1]
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana', 'Rafael']
aprovados.splice(1,2, 'Elemento1', 'Elemento2') //removers the formers and adds the laters
console.log(aprovados);