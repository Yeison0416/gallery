import { galleryState$ } from '../gallery-state/gallery-state';

export function GalleryNavigation() {
    const setDefaultBehavior = () => {
        const navigationButton = document.querySelector('.gallery-navigation__button');
        navigationButton.classList.add('gallery-navigation__button--active');
    };

    const navigationTransition = () => {
        galleryState$.subscribe((state) => {
            console.log(state.currentSlide);
        });
    };

    const state = {
        type: 'gallery-navigation',
        init() {
            setDefaultBehavior();
            navigationTransition();
        },
    };

    return Object.assign({}, state);
}
