var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    del = require('del'),
    autoprefixer = require('gulp-autoprefixer'),
    minify = require('gulp-minifier');
    rename = require('gulp-rename');

var paths = {
    scripts: {
        all: ['./js/scripts.js'],
        content: [
            './src/js/script.js'
        ],   
        vendors: [
            './src/js/lib/jquery-3.2.1.min.js',
            './src/js/lib/slick.js'
        ]
    },
    images: ['./images/**'],
    scss: {
        build: ['./src/scss/style.scss', './src/scss/style-*.scss'],
        watch: ['./src/scss/**/*.scss']
    },
    css: ['./css/style.css', './css/style-*.css']
};

gulp.task('clean', function () {
    del.sync(paths.css);
});

gulp.task('build-css', function() {
    return gulp.src(paths.scss.build)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({browsers: ['> 1%']}))
        .pipe(minify({
            minify: true,
            minifyCSS: true
        }))
        .pipe(gulp.dest('css'));
});


gulp.task('build-js', function () {
    gulp.src(paths.scripts.vendors)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('./js'))
        .pipe(minify({
            minify: true,
            minifyJS: {
                sourceMap: true
            }
        }))
        .pipe(rename('vendor.min.js'))
        .pipe(gulp.dest('./js'));
    gulp.src(paths.scripts.content)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('./js'))
        .pipe(minify({
            minify: true,
            minifyJS: {
                sourceMap: true
            }
        }))
        .pipe(rename('scripts.min.js'))
        .pipe(gulp.dest('./js'));
});



gulp.task('watch', ['build'], function () {
    gulp.watch([paths.scss.watch], {interval: 500}, ['build-css']);
    gulp.watch([paths.scripts.content], {interval: 300}, ['build-js']);
});

gulp.task('build', ['clean', 'build-css', 'build-js']);
