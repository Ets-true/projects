import ghPages from 'gulp-gh-pages';


export const git = () => {
    return app.gulp.src([
        './src/**/*.*'
    ])
    .pipe(ghPages({
        branch: "master",
        remoteUrl:'https://github.com/Ets-true/departmentview.github.io/'
    }))
};
