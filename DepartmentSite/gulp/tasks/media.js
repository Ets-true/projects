import browsersync from "browser-sync"

export const files = () => {
    return app.gulp.src('src/media/files/**/*.*')
    .pipe(app.gulp.dest('dist/media/files'))
    .pipe(browsersync.stream())
}

export const fonts = () => {
    return app.gulp.src('src/media/fonts/**/*.*')
    .pipe(app.gulp.dest('dist/media/fonts/'))
    .pipe(browsersync.stream())
}

export const icons = () => {
    return app.gulp.src('src/media/icons/**/*.*')
    .pipe(app.gulp.dest('dist/media/icons/'))
    .pipe(browsersync.stream())
}

export const img = () => {
    return app.gulp.src('src/media/img/**/*.*')
    .pipe(app.gulp.dest('dist/media/img/'))
    .pipe(browsersync.stream())
}

export const video = () => {
    return app.gulp.src('src/media/video/**/*.*')
    .pipe(app.gulp.dest('dist/media/video/'))
    .pipe(browsersync.stream())
}

export const lottie = () => {
    return app.gulp.src('src/media/lottie/**/*.*')
    .pipe(app.gulp.dest('dist/media/lottie/'))
    .pipe(browsersync.stream())
}