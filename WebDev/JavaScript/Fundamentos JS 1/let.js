let numero = 1; // caso nao exista variavel dentro daquele escopo, entao um escopo mais abragente sera utilizado.

{
    let numero = 2;
    console.log('dentro = ', numero); // variaveis declaradas com let terao preferencia dentro do escopo aonde estao.
}
console.log('fora = ', numero);