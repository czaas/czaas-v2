var gulp = require('gulp'),
	sass = require('gulp-sass');

var babel = require('gulp-babel');

var isProduction = (process.argv.indexOf("--production")>-1);
console.log(process.argv);

gulp.task('build-server', function(){
	return gulp.src(['server.js', './webpack.config.js'])
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('./dist'));
});

gulp.task('build-app-for-server', function(){
	return gulp.src(['./app/**/*.js'])
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('./dist/app'));
});

gulp.task('sass', function(){

	(isProduction) ? console.log('./dist/dist') : console.log('./dist');

	return gulp.src('./app/css/main.scss')
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(gulp.dest((isProduction) ? './dist/dist' : './dist'));
});

gulp.task('sass:watch', function(){
	gulp.watch('./app/css/**/*.scss', ['sass']);
});

gulp.task('default', ['sass:watch']);