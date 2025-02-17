export function GalleryContentRenderer() {
    const setDefaultBehavior = () => {
        const galleryITem = document.querySelector('.gallery-content__item');
        galleryITem.classList.add('gallery-content__item--active');
    };
    const state = {
        type: 'gallery-content-renderer',
    };

    setDefaultBehavior();

    return Object.assign({}, state);
}
