import { galleryState$ } from '../gallery-state/gallery-state';
import { galleryTransition } from '../gallery-transition/gallery-transition';

export function GalleryContentRenderer() {
    const galleryItems = {
        slides: Array.from(document.querySelectorAll('.gallery-content__item')),
    };

    const setInitgalleryItemsState = () => {
        galleryItems.slides[0].classList.add('gallery-content__item--active');
    };

    const slideTransition = () => {
        galleryState$.subscribe((state) => {
            galleryTransition(state, galleryItems.slides, 'gallery-content__item--active');
        });
    };

    const state = {
        type: 'gallery-content-renderer',
        init() {
            setInitgalleryItemsState();
            slideTransition();
        },
    };

    return Object.assign({}, state);
}
