import concat from 'gulp-concat'
import minify from 'gulp-minify'
import browsersync from "browser-sync"


export const union = () => {
    return app.gulp.src('./src/js/**/functions/*.js')
      .pipe(concat('functions.js'))
      .pipe(minify())
      // .pipe(app.gulp.dest('./src/js/'))
      .pipe(app.gulp.dest('./dist/js/'))
      .pipe(browsersync.stream());
};

export const libjs = () => {
    return app.gulp.src([
        './src/js/lib/jquery.min.js',
        './src/js/lib/TimelineMax.min.js',
        './src/js/lib/TimelineLite.min.js',
        './src/js/lib/gsap.min.js',
        './src/js/lib/ScrollMagic.js',
        './src/js/lib/animation.gsap.js',
        './src/js/lib/lottie.js',
      ])
      .pipe(concat('lib.js'))
      .pipe(minify())
      .pipe(app.gulp.dest('./src/js/'))
      .pipe(app.gulp.dest('./dist/js/'))
      .pipe(browsersync.stream());
};

export const mainjs = () => {
  return app.gulp.src([
      './src/js/main.js',
    ])
    .pipe(minify())
    // .pipe(app.gulp.dest('./src/js/'))
    .pipe(app.gulp.dest('./dist/js/'))
    .pipe(browsersync.stream());
};

// export const catalogjs = () => {
//   return app.gulp.src([
//       './src/js/catalog/catalog.js',
//     ])
//     .pipe(minify())
//     .pipe(app.gulp.dest('./src/js/'))
//     .pipe(app.gulp.dest('./dist/js/'));
// };





