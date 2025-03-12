import template from './galley.hbs';
import { GalleryContentRenderer } from './gallery-content-renderer/gallery-content-renderer';
import { GalleryNavigation } from './gallery-navigation/gallery-navigation';
import { galleryState$ } from './gallery-state/gallery-state';

export function Gallery(data, node) {
    const galleryTemplate = template(data);
    node.innerHTML = galleryTemplate;

    const maxSlides = data.galleryContent.content.length;
    let galleryState = { currentSlide: 0 };
    const galleryElements = {
        rightButton: document.querySelector('.gallery__arrow-button--right'),
        leftButton: document.querySelector('.gallery__arrow-button--left'),
    };

    const setEvents = () => {
        galleryElements.rightButton.addEventListener('click', () => handleNextSlide(nextSlide));
        galleryElements.leftButton.addEventListener('click', () => handlePrevSlide(previousSlide));

        document.addEventListener('keyup', (event) => keyupHandler(event));
    };

    const keyupHandler = (event) => {
        if (event.key === 'ArrowRight') {
            handleNextSlide(nextSlide);
            galleryElements.rightButton.focus();
        }

        if (event.key === 'ArrowLeft') {
            handlePrevSlide(previousSlide);
            galleryElements.leftButton.focus();
        }
    };

    const handleNextSlide = (nextSlide) => {
        galleryState = nextSlide();
        galleryState$.update(galleryState);
    };

    const handlePrevSlide = (previousSlide) => {
        galleryState = previousSlide();
        galleryState$.update(galleryState);
    };

    const nextSlide = () => ({
        ...galleryState,
        currentSlide: (galleryState.currentSlide + 1) % maxSlides,
    });

    const previousSlide = () => ({
        ...galleryState,
        currentSlide: (galleryState.currentSlide - 1 + maxSlides) % maxSlides,
    });

    const updateGalleryState = () => {
        galleryState$.subscribe((state) => {
            galleryState = state;
        });
    };

    const state = {
        type: 'galley',
        init() {
            setEvents();
            updateGalleryState();
            const galleryContentRenderer = GalleryContentRenderer();
            galleryContentRenderer.init();
            const galleryNavigation = GalleryNavigation();
            galleryNavigation.init();
        },
    };

    return Object.assign({}, state);
}
