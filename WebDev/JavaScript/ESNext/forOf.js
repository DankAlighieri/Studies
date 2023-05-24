// itera sobre os valores 

for (let letra of "Cod3r") {
    console.log(letra);
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) {
    console.log(i);
}

for (let assunto of assuntosEcma) {
    console.log(assunto);
}

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }],
])

for (let assunto of assuntosMap){ // pega o elemento e retorna em uma array
    console.log(assunto);
}

for (let chave of assuntosMap.keys()) { // pegando so as chaves
    console.log(chave);
}

for (let valor of assuntosMap.values()) { // pegando so os valores
    console.log(valor);
}

// combinando destructuring com for of

for (let [ch, vl] of assuntosMap.entries()){ // pegando chave e valor e retornando apenas o elemento
    console.log(ch, vl);
}

const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra);
}
