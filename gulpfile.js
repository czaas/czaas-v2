var gulp = require('gulp'),
	sass = require('gulp-sass');

gulp.task('sass', function(){
	return gulp.src('./app/css/main.scss')
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(gulp.dest('./dist'));
});

gulp.task('sass:watch', function(){
	gulp.watch('./app/css/**/*.scss', ['sass']);
});

gulp.task('default', ['sass:watch']);