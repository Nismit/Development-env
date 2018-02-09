// General
const gulp = require('gulp');
const browser = require('browser-sync');
const plumber = require('gulp-plumber');
// Scss & CSS
const sass = require('gulp-sass');
const please = require('gulp-pleeease');
const sourcemaps = require('gulp-sourcemaps');
const comb = require('gulp-csscomb');
const cleanCSS = require('gulp-clean-css');
// JS
const uglify = require('gulp-uglify');
// Utils
const rename = require('gulp-rename');
const notify = require('gulp-notify');

const errorHandler = {
  errorHandler: notify.onError({
    title: 'Gulp',
    message: 'Error: <%= error.message %>'
  })
};

// Directory
const dir = {
  root: './',
  scss: 'src/sass',
  js: 'src/js',
  img: 'src/img',
  min_css: 'dist/styles',
  min_js: 'dist/scripts',
  img_dist: 'dist/images'
};

gulp.task('browser-sync', function() {
	browser.init({
		server: {
			baseDir: dir.root
		}
	});
});

gulp.task('js', function() {
	gulp.src(dir.js + '/**/*.js')
		.pipe(plumber(errorHandler))
		.pipe(uglify())
		.pipe(gulp.dest(dir.min_js))
		.pipe(browser.reload({ stream:true }))
});

gulp.task('scss', function() {
	gulp.src(dir.scss + '/**/*.scss')
		.pipe(plumber(errorHandler))
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(please({
      autoprefixer: {'browsers': ['last 2 versions']},
      minifier: false
		}))
		//.pipe(comb())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(dir.min_css))
		.pipe(browser.reload({ stream:true }))
});

gulp.task('prodSCSS', function() {
	gulp.src(dir.scss + '/**/*.scss')
		.pipe(plumber(errorHandler))
		.pipe(sass())
		.pipe(please({
      autoprefixer: {'browsers': ['last 2 versions']},
      minifier: false
		}))
		.pipe(gulp.dest(dir.min_css))
});

gulp.task('minifyCSS', function() {
  gulp.src(dir.min_css + '/*.css' )
    .pipe(plumber(errorHandler))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(dir.min_css))
});

gulp.task('image', function() {
  gulp.src(dir.img + '/**/*.(jpg|png|gif|svg)')
    .pipe(plumber(errorHandler))
    .pipe(gulp.dest(dir.img_dist))
    .pipe(browser.reload({ stream:true }))
});

gulp.task('html', function() {
	gulp.src(['**/*.html'])
		.pipe(browser.reload({ stream:true }))
});

gulp.task('default',['browser-sync'], function() {
	gulp.watch( dir.js + '/**/*.js', ['js']);
	gulp.watch( dir.scss + '/**/*.scss', ['scss']);
  gulp.watch( dir.img + '/**/*.(jpg|png|gif|svg)', ['image']);
	gulp.watch( dir.root + '**/*.html', ['html']);
});

gulp.task('build', ['scss', 'js', 'image']);

gulp.task('prod', ['prodSCSS', 'minifyCSS']);
