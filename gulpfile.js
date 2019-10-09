var gulp = require('gulp');    // Require esta pegando do nodes modules
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');

sass.compiler = require('node-sass');
gulp.task('sass', function(){
	gulp.src('./sass/**/*.scss')   // Pega os arquivos para compilar
	.pipe(sass().on('error', sass.logError)) //sass tenta compilar
	.pipe(cssnano())
	.pipe(gulp.dest('./css'))		// Cria a pasta css e nela guarda o css compilado
});