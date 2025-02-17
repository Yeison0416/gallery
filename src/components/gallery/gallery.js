import template from './galley.hbs';
import { GalleryContentRenderer } from './gallery-content-renderer/gallery-content-renderer';
import { GalleryNavigation } from './gallery-navigation/gallery-navigation';

export function Gallery(data, node) {
    const state = {
        type: 'galley',
        createGallery() {
            const galleryTemplate = template(data);
            node.innerHTML = galleryTemplate;
            GalleryContentRenderer();
            GalleryNavigation();
        },
    };

    return Object.assign(Object.create(state), { data });
}
