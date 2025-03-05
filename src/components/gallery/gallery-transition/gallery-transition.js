export function galleryTransition(state, elements, className) {
    elements.forEach((element, index) => {
        element.classList.remove(className);

        if (state.currentSlide === index) {
            element.classList.add(className);
        }
    });
}
