import template from './galley.hbs';
import { GalleryContentRenderer } from './gallery-content-renderer/gallery-content-renderer';
import { GalleryNavigation } from './gallery-navigation/gallery-navigation';
import { galleryState$ } from './gallery-state/gallery-state';

export function Gallery(data, node) {
    const maxSlides = data.galleryContent.content.length;
    let galleryState = { currentSlide: 0 };

    const setEvents = () => {
        const rightButton = document.querySelector('.gallery__arrow-button--right');
        const leftEvents = document.querySelector('.gallery__arrow-button--left');

        rightButton.addEventListener('click', () => handleNextSlide(nextSlide));
        leftEvents.addEventListener('click', () => handlePrevSlide(previousSlide));
    };

    const handleNextSlide = (nextSlide) => {
        galleryState = nextSlide();
        galleryState$.update(galleryState);

        console.log(galleryState);
    };

    const handlePrevSlide = (previousSlide) => {
        galleryState = previousSlide();
        galleryState$.update(galleryState);

        console.log(galleryState);
    };

    const nextSlide = () => ({
        ...galleryState,
        currentSlide: (galleryState.currentSlide + 1) % maxSlides,
    });

    const previousSlide = () => ({
        ...galleryState,
        currentSlide: (galleryState.currentSlide - 1 + maxSlides) % maxSlides,
    });

    const state = {
        type: 'galley',
        init() {
            const galleryTemplate = template(data);
            node.innerHTML = galleryTemplate;
            setEvents();
            const galleryContentRenderer = GalleryContentRenderer();
            galleryContentRenderer.init();
            const galleryNavigation = GalleryNavigation();
            galleryNavigation.init();
        },
    };

    return Object.assign({}, state);
}
