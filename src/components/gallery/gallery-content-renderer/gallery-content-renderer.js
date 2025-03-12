import { galleryState$ } from '../gallery-state/gallery-state';
import { galleryTransition } from '../gallery-transition/gallery-transition';

export function GalleryContentRenderer() {
    const galleryContentRendererElements = {
        slides: Array.from(document.querySelectorAll('.gallery-content__item')),
    };

    const setInitgalleryContentRendererElementsState = () => {
        galleryContentRendererElements.slides[0].classList.add('gallery-content__item--active');
    };

    const slideTransition = () => {
        galleryState$.subscribe((state) => {
            galleryTransition(state, galleryContentRendererElements.slides, 'gallery-content__item--active');
        });
    };

    const state = {
        type: 'gallery-content-renderer',
        init() {
            setInitgalleryContentRendererElementsState();
            slideTransition();
        },
    };

    return Object.assign({}, state);
}
