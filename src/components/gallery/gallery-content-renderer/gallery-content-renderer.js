import { galleryState$ } from '../gallery-state/gallery-state';

export function GalleryContentRenderer() {
    const setDefaultBehavior = () => {
        const galleryITem = document.querySelector('.gallery-content__item');
        galleryITem.classList.add('gallery-content__item--active');
    };

    const slideTransition = () => {
        galleryState$.subscribe((state) => {
            console.log(state.currentSlide);
        });
    };

    const state = {
        type: 'gallery-content-renderer',
        init() {
            setDefaultBehavior();
            slideTransition();
        },
    };

    return Object.assign({}, state);
}
