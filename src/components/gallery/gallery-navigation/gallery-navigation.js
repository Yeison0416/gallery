import { galleryState$ } from '../gallery-state/gallery-state';
import { galleryTransition } from '../gallery-transition/gallery-transition';

export function GalleryNavigation() {
    const navigationButtons = {
        buttons: Array.from(document.querySelectorAll('.gallery-navigation__button')),
    };

    const setInitNavigationButtonsState = () => {
        navigationButtons.buttons[0].classList.add('gallery-navigation__button--active');
    };

    const navigationTransition = () => {
        galleryState$.subscribe((state) => {
            galleryTransition(state, navigationButtons.buttons, 'gallery-navigation__button--active');
        });
    };

    const state = {
        type: 'gallery-navigation',
        init() {
            setInitNavigationButtonsState();
            navigationTransition();
        },
    };

    return Object.assign({}, state);
}
