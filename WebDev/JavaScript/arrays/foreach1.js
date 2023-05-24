// The forEach function returns 3 params:
// the element;
// the index of the respective element;
// the array itself.
// Any other params will return undefined

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice, array, x) {
    console.log(`${indice + 1}) ${nome}`);
    console.log((array));
    console.log(x);
})

aprovados.forEach(nome => console.log(nome));

const exibirAprovados = a => console.log(a);
aprovados.forEach(exibirAprovados)