var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-sass'),
	plumber = require('gulp-plumber'),
	// minifyCss = require('gulp-minify-css'),
	livereload = require('gulp-livereload'),
	connect = require('gulp-connect'),
	browserSync = require('browser-sync').create(),
	imagemin = require('gulp-imagemin');


// Script Task
// Uglifies
gulp.task('scripts',function(){
	gulp.src('assets/js/*.js')
	.pipe(plumber())
	.pipe(uglify())
	.pipe(gulp.dest('assets/minjs'))
	.pipe(browserSync.stream());
});

// Styles Task
// Scss
gulp.task('styles',function(){
	gulp.src('assets/scss/**/*.scss')
	.pipe(plumber())
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('assets/css'));
	gulp.src('assets/css/**/*.css')
	//.pipe(minifyCss({compatibility: 'ie8'}))
	.pipe(gulp.dest('assets/css'))
	.pipe(livereload());
	// console.log("run styles");
});




// Watch Task
// Watches JS
gulp.task('watch',function(){

	var server = livereload();

	gulp.watch('assets/js/*.js',['scripts']);
	gulp.watch('assets/scss/*.scss',['styles']);
});


// Static Server + watching scss/html files
gulp.task('servesass', ['sass'], function() {
	browserSync.init({
		server: "./"
	});

	gulp.watch("assets/scss/*.scss", ['sass']);
	gulp.watch("*.html").on('change', browserSync.reload);
});



// Image Task
// Compress
gulp.task('image',function(){
	gulp.src('assets/img/*')
	.pipe(imagemin())
	.pipe(gulp.dest('assets/minimg'));

});



// // Static Server + watching scss/html files
// gulp.task('servescripts', ['scripts'], function() {
// 	browserSync.init({
// 		server: "./"
// 	});

// 	gulp.watch("assets/js/*.js", ['scripts']);
// 	gulp.watch("assets/*.html").on('change', browserSync.reload);
// });

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
	return gulp.src("assets/scss/*.scss")
	.pipe(sass())
	.pipe(gulp.dest("assets/css"))
	.pipe(browserSync.stream());
});

gulp.task('default', ['scripts','styles','watch','servesass']);