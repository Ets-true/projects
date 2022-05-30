import browsersync from "browser-sync"

export const reload = () => {
    return browsersync.stream()
}

