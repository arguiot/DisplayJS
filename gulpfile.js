var gulp = require('gulp'),
    rename = require('gulp-rename')
    uglify = require('gulp-uglify')
    babel = require('gulp-babel');
gulp.task("minify", function () {
	gulp.src('src/*.js')
	.pipe(babel({
		presets: ['env']
	}))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist'))
});
gulp.task("copy", function () {
	gulp.src('src/*.js')
	.pipe(babel({
		presets: ['env']
	}))
    .pipe(gulp.dest('dist'))
});
gulp.task("modern", function () {
	gulp.src('src/*.js')
	.pipe(rename({suffix: '.es6'}))
    .pipe(gulp.dest('dist'))
});
gulp.task('default', [ 'minify', 'copy', 'modern' ]);