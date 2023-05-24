const { series, parallel } = require('gulp') ;
const gulp = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const { countBy } = require('lodash');

function transformacaoJS(cb) {
    gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,
            presets: ['@babel/preset-env'] // Updated to import @babel/preset-env correctly
        }))
        .pipe(uglify())
        .on('error', err => console.log(err))
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build'))
        .on('end', cb);
        
    return;
}

function fim (cb){
    console.log('Fim!');
    return cb();
}

exports.default = parallel(transformacaoJS, fim);
