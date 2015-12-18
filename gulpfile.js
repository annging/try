var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var less = require('gulp-less');
var path = require('path');
var minifycss = require('gulp-minify-css');
var jshint = require('gulp-jshint');


gulp.task('default', function() {
  // 将你的默认的任务代码放在这
});
gulp.task('minify', function() {
	return gulp.src('src/*.html')
	.pipe(htmlmin({collapsWhitespace: true}))
	.pipe(gulp.dest('dist'))
});
gulp.task('less', function(){
	return gulp.src('./less/**/*.less')
		.pipe(less({
			paths: [ path.join(__dirname, 'less', 'includes') ]
		}))
		.pipe(gulp.dest('./public/css'));
});
gulp.task('minify-css',function() {
	return gulp.src('style/*.css')
		.pipe(minifycss({compatibility: 'ie8'}))
		.pipe(gulp.dest('dist'));
});
gulp.task('lint', function() {
	return gulp.src('./lib/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('YOUR_REPORTER_HERE'));
});


