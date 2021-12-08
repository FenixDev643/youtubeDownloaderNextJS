var TitleHome: {} = {
    from: { opacity: 0, translateY: -40 },
    to: { opacity: 1, translateY: 0 },
    config: { mass: 3, tension: 250 }
}

var DownloaderButtonAnim: {} = {
    from: { opacity: 0, rotateZ: 180 },
    to: { opacity: 1, rotateZ: 0 },
    config: { mass: 3, tension: 250 }
}

var DownloaderInputAnim: {} = {
    from: { opacity: 0, scaleX: 0 },
    to: { opacity: 1, scaleX: 1 },
    config: { mass: 3, tension: 250 }
}

var LoadingCircle: {} = {
    from: { rotateZ: 0 },
    to: { rotateZ: 360 },
    config: { mass: 3, tension: 170 },
    loop: true
}

export { TitleHome, DownloaderButtonAnim, DownloaderInputAnim, LoadingCircle };