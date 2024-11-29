import 'reset-css';
import './index.scss';
import { Gallery } from './components/gallery/gallery';
import { data } from './data/data';

function app() {
    return {
        buildGallery() {
            const rootElement = document.querySelector('#app-root');
            const galleryObject = Gallery(data, rootElement);
            galleryObject.createGallery();
        },
    };
}

const application = app();
application.buildGallery();
