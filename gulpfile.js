var gulp = require('gulp'),
    gulpUglify = require('gulp-uglify');

gulp.task('uglifyTask', function() {
    return gulp.src('./dev/*.js')
        .pipe(gulpUglify())
        .pipe(gulp.dest('dist'));
})

gulp.task('uglifyWatchTask', function () {
    gulp.watch('./dev/*.js', ['uglifyTask']);
});

gulp.task('default',['uglifyTask','uglifyWatchTask']);
