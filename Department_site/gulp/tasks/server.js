// import notify from "browser-sync"
import browsersync from "browser-sync"

export const server = (done) => {
    browsersync.init({
        server: {
            baseDir: `./dist/`
        },
        notify: false,
        port: 3000,    
    });
}