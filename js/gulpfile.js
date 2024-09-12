var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass')(require('sass'));

function scss_to_css(done) {

    gulp.src('../scss/style.scss')
        .pipe( sass({
            errLogToConsole: true
        }) )
        .on('error', console.error.bind(console))
        .pipe( rename('style.css') )
        .pipe( gulp.dest('../css/') );
    
    done();

}

gulp.task('default', scss_to_css);