const moduloA = require('../../moduloA')
console.log(moduloA.ola);

const c = require('./pastaC') // o require referencia automaticamente a um arquivo 'index.js', logo nao precisa ser referenciado durante a chamada.
console.log(c.ola2);

// const http = require('http')
// http.createServer((req, res) => {
//     res.write('Boa noite')
//     res.end()
// }).listen(8080) 