//*--------------------------------------------------------------*
// GULPFILE
//*--------------------------------------------------------------*
//
var gulp = require('gulp');

//*--------------------------------------------------------------*
// PLUGINS
//*--------------------------------------------------------------*
//
var sass = require ('gulp-sass');
var minifyCSS = require ('gulp-minify-css');
var autoprefixer = require ('gulp-autoprefixer');
var changed = require('gulp-changed');
var jshint = require ('gulp-jshint');
var concat = require ('gulp-concat');
var uglify = require ('gulp-uglify');
var rename = require('gulp-rename');
var imagemin = require ('gulp-imagemin');
var minifyhtml = require ('gulp-minify-html');
var nodemon = require ('gulp-nodemon');


//*--------------------------------------------------------------*
// DEFAULT
//*--------------------------------------------------------------*
//
gulp.task('default', ['server', 'styles', 'scripts', 'watch']);

//*--------------------------------------------------------------*
// styles
//*--------------------------------------------------------------*
//
gulp.task('styles', function () {
	var src = 'src/styles/main.scss',
		dest = 'public/css';

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
	var src = 'src/scripts/*.js';
		dest = 'public/js',
		name = 'main.js';

    gulp.src( src )
		.pipe( concat( name ) )
        .pipe( uglify() )
        .pipe( gulp.dest( dest ) );
});

//*--------------------------------------------------------------*
// SERVER
//*--------------------------------------------------------------*
//
gulp.task('server',function(){
    nodemon({
        'script': 'gulp/server.js',
        'ignore': 'src/scripts/*.js'
    });
});


//*--------------------------------------------------------------*
// WATCH
//*--------------------------------------------------------------*
//
gulp.task('watch', function () {
    gulp.watch('src/styles/**/*.scss', ['styles']);
    gulp.watch('src/scripts/**.js', ['scripts']);
    //gulp.watch('images-orig/**', ['images']);
});
