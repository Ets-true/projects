import { configFTP } from '../config/ftp.js';
import vinylFTP from 'vinyl-ftp';
import util from 'gulp-util';

export const ftphtml = () => {
    configFTP.log = util.log;
    const ftpConnect = vinylFTP.create(configFTP);
    return app.gulp.src(`dist/**/*.html`, {})
        .pipe(ftpConnect.dest(`/${app.path.ftp}/`));
}

export const ftpcss = () => {
    configFTP.log = util.log;
    const ftpConnect = vinylFTP.create(configFTP);
    return app.gulp.src(`dist/**/*.css`, {})
        .pipe(ftpConnect.dest(`/${app.path.ftp}/`));
}

export const ftpjs = () => {
    configFTP.log = util.log;
    const ftpConnect = vinylFTP.create(configFTP);
    return app.gulp.src(`dist/**/*.js`, {})
        .pipe(ftpConnect.dest(`/${app.path.ftp}/`));
}

export const ftpphp = () => {
    configFTP.log = util.log;
    const ftpConnect = vinylFTP.create(configFTP);
    return app.gulp.src(`dist/php/**/*.*`, {})
        .pipe(ftpConnect.dest(`/${app.path.ftp}/php/`));
}

export const ftpfiles = () => {
    configFTP.log = util.log;
    const ftpConnect = vinylFTP.create(configFTP);
    return app.gulp.src(`dist/media/files/**/*.*`, {})
        .pipe(ftpConnect.dest(`/${app.path.ftp}/media/files/`));
}
export const ftpfonts = () => {
    configFTP.log = util.log;
    const ftpConnect = vinylFTP.create(configFTP);
    return app.gulp.src(`dist/media/fonts/**/*.*`, {})
        .pipe(ftpConnect.dest(`/${app.path.ftp}/media/fonts/`));
}
export const ftpicons = () => {
    configFTP.log = util.log;
    const ftpConnect = vinylFTP.create(configFTP);
    return app.gulp.src(`dist/media/icons/**/*.*`, {})
        .pipe(ftpConnect.dest(`/${app.path.ftp}/media/icons/`));
}
export const ftpimg = () => {
    configFTP.log = util.log;
    const ftpConnect = vinylFTP.create(configFTP);
    return app.gulp.src(`dist/media/img/**/*.*`, {})
        .pipe(ftpConnect.dest(`/${app.path.ftp}/media/img/`));
}
export const ftpvideo = () => {
    configFTP.log = util.log;
    const ftpConnect = vinylFTP.create(configFTP);
    return app.gulp.src(`dist/media/video/**/*.*`, {})
        .pipe(ftpConnect.dest(`/${app.path.ftp}/media/video/`));
}
export const ftplottie = () => {
    configFTP.log = util.log;
    const ftpConnect = vinylFTP.create(configFTP);
    return app.gulp.src(`dist/media/lottie/**/*.*`, {})
        .pipe(ftpConnect.dest(`/${app.path.ftp}/media/lottie/`));
}