import template from './galley.hbs';
import { GalleryContentRenderer } from './gallery-content-renderer/gallery-content-renderer';
import { GalleryNavigation } from './gallery-navigation/gallery-navigation';

export function Gallery() {
    let galleryState = {};

    const setEvents = () => {
        const rightButton = document.querySelector('.gallery__arrow-button--right');
        const leftEvents = document.querySelector('.gallery__arrow-button--left');

        rightButton.addEventListener('click', () => handleNextSlide(nextSlide));
        leftEvents.addEventListener('click', () => handlePrevSlide(previousSlide));
    };

    const handleNextSlide = (nextSlide) => {
        galleryState = nextSlide();

        console.log(galleryState);
    };

    const handlePrevSlide = (previousSlide) => {
        galleryState = previousSlide();

        console.log(galleryState);
    };

    const nextSlide = () => ({
        ...galleryState,
        currentSlide: (galleryState.currentSlide + 1) % galleryState.maxSlides,
    });

    const previousSlide = () => ({
        ...galleryState,
        currentSlide: (galleryState.currentSlide - 1 + galleryState.maxSlides) % galleryState.maxSlides,
    });

    const state = {
        type: 'galley',

        init(data, node, initGalleryState) {
            const galleryTemplate = template(data);
            node.innerHTML = galleryTemplate;
            galleryState = { ...initGalleryState };
            setEvents();
            GalleryContentRenderer();
            GalleryNavigation();
        },
    };

    return Object.assign(Object.create(state));
}
