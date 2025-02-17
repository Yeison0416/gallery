export function GalleryNavigation() {
    const setDefaultBehavior = () => {
        const navigationButton = document.querySelector('.gallery-navigation__button');
        navigationButton.classList.add('gallery-navigation__button--active');
    };

    const state = {
        type: 'gallery-navigation',
    };

    setDefaultBehavior();

    return Object.assign({}, state);
}
