import template from './galley.hbs';

export function Gallery(data, node) {
    const state = {
        type: 'galley',
        createGallery() {
            const galleryTemplate = template(data);
            node.innerHTML = galleryTemplate;
        },
    };

    return Object.assign(Object.create(state), { data });
}
