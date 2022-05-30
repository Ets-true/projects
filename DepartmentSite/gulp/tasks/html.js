import browsersync from "browser-sync"

export const html = () => {
    return app.gulp.src('src/**/*.html')
    .pipe(app.gulp.dest('dist/'))
    .pipe(browsersync.stream());
}