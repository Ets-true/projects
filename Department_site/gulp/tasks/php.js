import browsersync from "browser-sync"

export const php = () => {
    return app.gulp.src('src/php/**/*.*')
    .pipe(app.gulp.dest('dist/php/'))
    .pipe(browsersync.stream())
}