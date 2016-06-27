var gulp = require('gulp');
var series = require('stream-series');
var inject = require('gulp-inject');
 
gulp.task('angular', function () {
	var main = gulp.src(['./app/app.js'], {read: false});
	var services = gulp.src(['./app/services/*.js'], {read: false});
	var filters = gulp.src(['./app/filters/*.js'], {read: false});
	var directives = gulp.src(['./app/directives/**/*.js'], {read: false});
	var controllers = gulp.src(['./app/controllers/*.js'], {read: false});
	
	gulp.src('./app/index.html')
	.pipe(inject(series(main, services, filters, directives, controllers), {relative: true}))
	.pipe(gulp.dest('./app'));
});