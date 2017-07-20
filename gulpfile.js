

var pro = 'hello-word';
var dist = './'+pro;

var gulp = require('gulp'),
    clean = require('gulp-clean');

gulp.task('copy', function () {
    gulp.src(['./my-app-demo/package.json','./my-app-demo/yarn.lock'])
        .pipe(gulp.dest(dist));
});
gulp.task('copySrc', function () {
    gulp.src(['./my-app-demo/src/**/*'])
        .pipe(gulp.dest(dist+'/src'));
});

gulp.task('copyPublic', function () {
    gulp.src(['./my-app-demo/public/**/*'])
        .pipe(gulp.dest(dist+'/public'));
});

gulp.task('copyBuild', function () {
    gulp.src(['./my-app-demo/build/**/*'])
        .pipe(gulp.dest(dist+'/build'));
});

gulp.task('default',['copy','copySrc','copyPublic','copyBuild']);

gulp.task('clean', function() {
    gulp.src(dist, {read: false})
    .pipe(clean({force: true}));
});

