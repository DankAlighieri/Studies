const gulp = require('gulp');
const { series, parallel} = require('gulp')

const antes1 = cb => {
    console.log('Tarefa antes 1');
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa antes 2');
    return cb()
}

function copiar(cb) {
    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    gulp.src('pastaA/**/**.txt') // todo arquivo dentro da pastaA que seja do tipo .txt sera lido
    
        // .pipe() a funcao pipe faz transformacoes nos arquivos

        // usando o metodo dest do gulp para copiar os arquivos passados na funcao src para a pastaB
        .pipe(gulp.dest('pastaB'))
    // returning the callback so gulp knows when it's over
    return cb(); 
};

const fim = cb => {
    console.log('Tarefa fim');
    return cb()
}

// exporting the default function
module.exports.default = series(
    // executando tarefas em paralelo (serao inicializadas juntas).
    parallel(antes1,antes2),
    // executando tarefas em serie (uma sera inicializada apenas apos o termino da anterior)
    antes1,
    antes2,
    copiar,
    fim
)