import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';


export const path = {
    build: {
        css: `${buildFolder}/css/`, 
        files: `${buildFolder}/`,
    },
    src: {
        files: `${srcFolder}/**/*.*`,
        scss: `${srcFolder}/scss/style.scss`,
    },
    watch: {
        scss: `${srcFolder}/scss/**/*.scss`,
        files: `${srcFolder}/**/*.*`,
        filesDist: `${buildFolder}/**/*.*`,
        htmlDist: `${buildFolder}/**/*.html`,
        cssDist: `${buildFolder}/**/*.css`,
        srcGit: `./src/**/*`,

        jsFuncDist: `${srcFolder}/js/functions/*.js`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: 'public_html/test/'
} 