const gulp = require('gulp'),
	connect = require('gulp-connect'),
	sass = require('gulp-sass'),
	clean = require('gulp-clean'),
	cleanCSS = require('gulp-clean-css'),
	imageMin = require('gulp-imagemin'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify');

const paths = {
	jsCustom: ['js/custom/*', 'js/custom/*/*'],
	jsVendor: ['js/vendor/*', 'js/vendor/*/*'],
	scss: ['scss/**/*.scss'],
	img: ['img/*', 'img/*/*'],
	fonts: ['fonts/*', 'css/fonts/*/*'],
	html: ['index.html']
}

gulp.task('scss', function() {
  return gulp.src('scss/styles.scss')
    .pipe(sass().on('error', sass.logError))
		.pipe(cleanCSS({debug: true}))
    .pipe(gulp.dest('docs/scss'))
		.pipe(connect.reload());
});

gulp.task('jsCustom', function () {
	return gulp.src(paths.jsCustom)
	.pipe(concat('custom.js'))
	.pipe(uglify({mangle:true}))
	.pipe(gulp.dest('docs'))
	.pipe(connect.reload());
});

gulp.task('jsVendor', function () {
	return gulp.src(paths.jsVendor)
	.pipe(concat('vendor.js'))
	.pipe(uglify({mangle:true}))
	.pipe(gulp.dest('docs'))
	.pipe(connect.reload());
});

gulp.task('fonts', function(){
	gulp.src(paths.fonts)
	.pipe(gulp.dest('docs/scss/fonts'))
});

gulp.task('clean', function() {
 	return gulp.src('docs')
 	.pipe(clean());
});

gulp.task('watch', function() {
  	gulp.watch(paths.jsCustom, ['jsCustom']);
		gulp.watch(paths.jsVendor, ['jsVendor']);
  	gulp.watch(paths.scss, ['scss']);
  	gulp.watch(paths.html, ['html']);
  	gulp.watch(paths.img, ['images']);
});

gulp.task('html', function(){
	gulp.src('index.html')
		.pipe(gulp.dest('docs'))
    .pipe(connect.reload());
});

gulp.task('images', function(){
	gulp.src(paths.img)
	.pipe(imageMin([
      imageMin.gifsicle({interlaced: true}),
      imageMin.jpegtran({progressive: true}),
      imageMin.optipng({optimizationLevel: 5}),
      imageMin.svgo({plugins: [{removeViewBox: true}]})
    ]))
		.pipe(gulp.dest('docs/img'))
		.pipe(connect.reload());
});

gulp.task('serve', function(){
	connect.server({
		root:'docs',
		port:'3030',
		livereload:true,
		fallback:'docs/index.html'
	})
});

gulp.task('start', ['serve','watch', 'html', 'scss', 'jsCustom', 'jsVendor', 'images', 'fonts']);
