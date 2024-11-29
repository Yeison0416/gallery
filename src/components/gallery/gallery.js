import template from './galley.hbs';

// eslint-disable-next-line
import styles from './gallery.scss';

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
