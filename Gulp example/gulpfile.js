var gulp = require("gulp");
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var header = require('gulp-header');
var gutil = require('gulp-util');
var ftp = require( 'vinyl-ftp' );

gulp.task( 'deploy', function () {

    var conn = ftp.create( {
        host:     '127.0.0.1',
        user:     'ekaterina24',
        password: '#YPKxl-@wy'
    } );

    var globs = [
        './tests/css/**',
        './index.html'
    ];

    return gulp.src( globs, { base: '.', buffer: false } )
        .pipe( conn.newer( '/public_html' ) ) // only upload newer files
        .pipe( conn.dest( '/public_html' ) );

} );

/*gulp.task('sendOnFtp', function () {
    return gulp.src('./tests/css/styles.css')
        .pipe(ftp({
            host: 'test232.zzz.com.ua',
            user: 'ekaterina24',
            pass: '#YPKxl-@wy'
        }))
        .pipe(gutil.noop());
});*/

gulp.task('sass', function () {
    return gulp.src('./tests/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 100 versions'],
            cascade: false
        }))
        .pipe(header("/** it's some comment **/"))
        .pipe(gulp.dest('./tests/css'));
});

gulp.task("test", function () {
    console.log("123")
});

gulp.task("showDate", function () {
    var date = new Date();
    console.log(date.toString());
});
