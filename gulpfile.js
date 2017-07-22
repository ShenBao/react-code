

var pro = 'react-mixin';





var dist = './'+pro;

var gulp = require('gulp'),
    clean = require('gulp-clean');

gulp.task('copy', function () {
    gulp.src(['./_my-app-demo/package.json','./_my-app-demo/yarn.lock','./_my-app-demo/README.md'])
        .pipe(gulp.dest(dist));
});
gulp.task('copySrc', function () {
    gulp.src(['./_my-app-demo/src/**/*'])
        .pipe(gulp.dest(dist+'/src'));
});

gulp.task('copyPublic', function () {
    gulp.src(['./_my-app-demo/public/**/*'])
        .pipe(gulp.dest(dist+'/public'));
});

gulp.task('copyBuild', function () {
    gulp.src(['./_my-app-demo/build/**/*'])
        .pipe(gulp.dest(dist+'/build'));
});

gulp.task('default',['copy','copySrc','copyPublic','copyBuild']);

gulp.task('clean', function() {
    gulp.src(dist, {read: false})
    .pipe(clean({force: true}));
});

