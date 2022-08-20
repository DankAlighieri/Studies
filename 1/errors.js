function tratarErroELancar(erro) {
    //throw new Error('...')
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritando (obj) {
    try {
        console.log(obj.name.toUpperCase()) +"!!!" // atributo "name" nao existe, logo retornara um erro.
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('Final')
    }
    
}

const obj = { nome: 'Roberto'}
imprimirNomeGritando(obj)