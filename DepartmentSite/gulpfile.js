
import gulp from "gulp";
import { path } from "./gulp/config/path.js";
import { reload } from "./gulp/tasks/reload.js";

import {git} from './gulp/tasks/git.js';
import {server} from './gulp/tasks/server.js';

import { html } from './gulp/tasks/html.js';
import { scss } from "./gulp/tasks/scss.js";
import { php } from "./gulp/tasks/php.js";

import {union} from './gulp/tasks/js.js'
import {libjs} from './gulp/tasks/js.js'
import {mainjs} from './gulp/tasks/js.js'
// import {catalogjs} from './gulp/tasks/js.js'

// const js = gulp.series(libjs, union, mainjs)
// const js = gulp.series(union, mainjs)


import {files} from './gulp/tasks/media.js';
import {fonts} from './gulp/tasks/media.js';
import {icons} from './gulp/tasks/media.js';
import {img} from './gulp/tasks/media.js';
import {video} from './gulp/tasks/media.js';
import {lottie} from './gulp/tasks/media.js';

import { ftphtml } from "./gulp/tasks/ftp.js";
import { ftpcss } from "./gulp/tasks/ftp.js";
import { ftpjs } from "./gulp/tasks/ftp.js";
import { ftpphp } from "./gulp/tasks/ftp.js";

import {ftpfiles} from './gulp/tasks/ftp.js';
import {ftpfonts} from './gulp/tasks/ftp.js';
import {ftpicons} from './gulp/tasks/ftp.js';
import {ftpimg} from './gulp/tasks/ftp.js';
import {ftpvideo} from './gulp/tasks/ftp.js';
import {ftplottie} from './gulp/tasks/ftp.js';


import browsersync from "browser-sync"


global.app = {
    path: path,
    gulp: gulp
}











function watcher(){
    
    // gulp.watch('dist/**/*.*', { delay: 10000 }, git)

    gulp.watch('src/**/*.html', html)
    gulp.watch('src/scss/', scss)
    // gulp.watch('src/js/', js)
    // gulp.watch('src/js/', js)

    gulp.watch('src/js/functions/', union)
    gulp.watch('src/js/main.js', mainjs)

    gulp.watch('src/php/', php)

    gulp.watch('src/media/files/', files)
    gulp.watch('src/media/fonts/', fonts)
    gulp.watch('src/media/icons/', icons)
    gulp.watch('src/media/img/', img)
    gulp.watch('src/media/video/', video)
    gulp.watch('src/media/lottie/', lottie)

    /////////////////////////////////////

    // gulp.watch('dist/**/*.html', ftphtml)    
    // gulp.watch('dist/css/**/*.css', ftpcss)
    // gulp.watch('dist/js/**/*.js', ftpjs)
    // gulp.watch('dist/php/**/*.*', ftpphp)

    // gulp.watch('dist/media/files/', ftpfiles)
    // gulp.watch('dist/media/fonts/', ftpfonts)
    // gulp.watch('dist/media/icons/', ftpicons)
    // gulp.watch('dist/media/img/', ftpimg)
    // gulp.watch('dist/media/video/', ftpvideo)
    // gulp.watch('dist/media/lottie/', ftplottie)

    // gulp.watch('dist/**/*.*', reload)
}


// const start = gulp.series(html, scss, js, ftphtml, ftpcss)
const contin = gulp.parallel(server, watcher)

// const tasks = gulp.series(contin)
gulp.task('default', contin);




// const redeploy = gulp.series(html, scss, js, php, files, fonts, icons, img, video, lottie, ftphtml, ftpcss, ftpjs, ftpphp, ftpfiles, ftpfonts, ftpicons, ftpimg, ftpvideo, ftplottie)
// gulp.task('redeploy', redeploy);


