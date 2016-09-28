var gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('mini', () =>
    gulp.src('imgsrc/*')
    .pipe(imagemin())
    .pipe(gulp.dest('imgsrc/'))
);

var responsive = require('gulp-responsive');
gulp.task('responsive', function() {
    return gulp.src('imgsrc/*.{jpeg,png}')
        .pipe(responsive({
            'pic1.jpeg': [{
                width: 800,
                rename: 'pic1_800w.jpeg'
            }, {
                width: 800 * 2,
                rename: 'pic1_1600w.jpeg'
            }],
            'logo.png': [{
                width: 60,
                rename: 'logo_60w.jpeg'
            }, {
                width: 150,
                rename: 'logo_150w.jpeg'
            }],
            'proj1.jpeg': {
                width: 800,
                rename: 'proj1_800w.jpeg'
            },
            'proj2.jpeg': {
                width: 800,
                rename: 'proj2_800w.jpeg'
            },
            'proj3.jpeg': {
                width: 800,
                rename: 'proj3_800w.jpeg'
            },

        })).pipe(gulp.dest('imgdst/'))
});


gulp.task('default', ['mini', 'responsive']);
