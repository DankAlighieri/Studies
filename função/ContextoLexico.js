const valor = 'Global'

function minhaFuncao() {
    console.log(valor);
};

function exec(){
    const valor = 'Local';
    minhaFuncao();
};
// a minhaFuncao() vai referenciar o escopo em que foi criada e nao no que foi executada, portanto valor, aqui, eh = 'Global', nao 'Local'

minhaFuncao();
exec();