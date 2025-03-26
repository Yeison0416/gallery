import { galleryState$ } from '../gallery-state/gallery-state';

export function GalleryNavigation(galleryTransition) {
    const galleryNavigationElements = {
        buttons: Array.from(document.querySelectorAll('.gallery-navigation__button')),
        galleryNavigation: document.querySelector('.gallery-navigation'),
    };
    const galleryState = { currentSlide: 0 };

    const setEvents = () => {
        galleryNavigationElements.galleryNavigation.addEventListener('click', (event) => handleSlideNavigation(event));
    };

    const handleSlideNavigation = (event) => {
        const buttonClicked = event.target.closest('button');

        if (buttonClicked && buttonClicked.classList.contains('gallery-navigation__button')) {
            const buttonClickedIndex = galleryNavigationElements.buttons.indexOf(buttonClicked);
            const galleryStateUpdated = updateGalleryState(buttonClickedIndex);
            galleryTransition(galleryStateUpdated, galleryNavigationElements.buttons, 'gallery-navigation__button--active');
            galleryState$.update(galleryStateUpdated);
        }
    };

    const updateGalleryState = (index) => ({
        ...galleryState,
        currentSlide: index,
    });

    const setInitgalleryNavigationElementsState = () => {
        galleryNavigationElements.buttons[0].classList.add('gallery-navigation__button--active');
    };

    const navigationTransition = () => {
        galleryState$.subscribe((state) => {
            galleryTransition(state, galleryNavigationElements.buttons, 'gallery-navigation__button--active');
        });
    };

    const state = {
        type: 'gallery-navigation',
        init() {
            setInitgalleryNavigationElementsState();
            navigationTransition();
            setEvents();
        },
    };

    return Object.assign({}, state);
}
