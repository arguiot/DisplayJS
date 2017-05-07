var gulp = require('gulp'),
    rename = require('gulp-rename')
    uglify = require('gulp-uglify');
gulp.task("minify", function () {
	gulp.src('src/*.js')
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist'))
});
gulp.task("copy", function () {
	gulp.src('src/*.js')
    .pipe(gulp.dest('dist'))
});
gulp.task('default', [ 'minify', 'copy' ]);