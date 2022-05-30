import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import browsersync from "browser-sync"

import cleanCss from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';

import cssnano from 'gulp-cssnano';
import gcmq from 'gulp-group-css-media-queries';




const sass = gulpSass(dartSass);

export const scss = () => {
    return app.gulp.src('src/scss/*.scss', { sourcemaps: true }) 
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(rename({
            extname: ".css"
        }))
        .pipe(app.gulp.dest('src/css/'))


        .pipe(gcmq())
        .pipe(cssnano({
            discardUnused: false
        }))
        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(app.gulp.dest('src/css/'))
        .pipe(app.gulp.dest('dist/css/'))
        .pipe(browsersync.stream())
        // .pipe(browsersync.stream());
}