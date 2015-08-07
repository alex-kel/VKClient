var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var reactify = require('reactify');
var streamify = require('gulp-streamify');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var glob = require('glob');
var rename = require('gulp-rename');
var flatten = require('gulp-flatten');
gulp.task('sass', function () {
    gulp.src('./dev/css/**/*.scss')
        .pipe(sass({
            style: 'compressed',
            loadPath: [
                './dev/css'
            ]
        }).on("error", notify.onError(function (error) {
            return "Error: " + error.message;
        })))
        .pipe(gulp.dest('./dist/css/'));

});


gulp.task('react', function () {
    glob('./dev/js/*.js', function(err, files) {
        if(err) done(err);

        files.map(function(entry) {
            console.log(entry);
            browserify({ entries: [entry], transform:[reactify] })
                .bundle()
                .pipe(source(entry))
                .pipe(flatten({ includeParents: 0} ))
                .pipe(gulp.dest('./dist/js/'));
        });
    })

});

gulp.task('build', ['sass', 'react'], function(){

});