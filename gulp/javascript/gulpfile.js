const { series } = require('gulp') ;
const gulp = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

function padrao(cb) {
    gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,
            presets: ['@babel/preset-env'] // Updated to import @babel/preset-env correctly
        }))
        .pipe(uglify())
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build'))
        .on('end', cb);
        
    return;
}

exports.default = gulp.series(padrao);
