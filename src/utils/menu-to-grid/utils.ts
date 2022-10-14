import imagesLoaded from 'imagesloaded'
import WebFont from 'webfontloader'

/**
 * Preload images
 * @param {String} selector - Selector/scope from where images need to be preloaded. Default is 'img'
 */
const preloadImages = (selector = 'img') => {
    return new Promise((resolve) => {
        imagesLoaded(document.querySelectorAll(selector), {background: true}, resolve);
    });
};

/**
 * Preload fonts
 * @param {String} id
 */
 const preloadFonts = (id: string) => {
    return new Promise((resolve) => {
        WebFont.load({
            typekit: {
                id: id
            },
            active() { resolve }
        });
    });
};

export {
    preloadImages,
    preloadFonts,
};