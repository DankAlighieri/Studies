const [a] = [10]
console.log(a);

// atribuindo dados para cada elemento da array de acordo com seu respectivo indice, levando em consideracao que existem indices que foram ignorados e o indice [5] (n6) esta com o valor padrao setado para 0.
const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6);

// atribuindo dados para cada elemento da array, essa array possui outrras arrays aninhadas, os dados pertencentes a essas arrays aninhadas serao atribuidos por essa operacao
const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota);
