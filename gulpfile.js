//*--------------------------------------------------------------*
// GULPFILE
//*--------------------------------------------------------------*
//
var gulp = require('gulp');

//*--------------------------------------------------------------*
// PLUGINS
//*--------------------------------------------------------------*
//
var sass = require ('gulp-sass'),
	minifyCSS = require ('gulp-minify-css'),
    autoprefixer = require ('gulp-autoprefixer'),
	changed = require('gulp-changed'),
    jshint = require ('gulp-jshint'),
    concat = require ('gulp-concat'),
    uglify = require ('gulp-uglify'),
    rename = require('gulp-rename'),
    imagemin = require ('gulp-imagemin'),
    minifyhtml = require ('gulp-minify-html');


//*--------------------------------------------------------------*
// DEFAULT
//*--------------------------------------------------------------*
//
gulp.task('default', ['styles', 'scripts', 'watch']);

//*--------------------------------------------------------------*
// SASS
//*--------------------------------------------------------------*
//
gulp.task('styles', function () {
	var src = '_sass/main.scss',
		dest = '_css';

    gulp.src( src )
        .pipe( sass() )
        .pipe( autoprefixer() )
        .pipe( minifyCSS() )
        .pipe( gulp.dest( dest ) );
});


//*--------------------------------------------------------------*
// JS
//*--------------------------------------------------------------*
//
gulp.task('scripts', function() {
	var src = '_js-lib/*.js';
		dest = '_js',
		name = 'main.js';

    gulp.src( src )
		.pipe( concat( name ) )
        .pipe( uglify() )
        .pipe( gulp.dest( dest ) );
});


//*--------------------------------------------------------------*
// WATCH
//*--------------------------------------------------------------*
//
gulp.task('watch', function () {
    gulp.watch('_sass/**/*.scss', ['styles']);
    gulp.watch('_js-lib/**.js', ['scripts']);
    //gulp.watch('images-orig/**', ['images']);
});
