// O node faz cache dos objetos, portanto tudo que for alterado no A, sera alterado no B
const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

// as factories possuem instancias proprias, portanto nenhuma alteracao feita em C, ocorrera em D
const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor);

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor ,contadorD.valor);