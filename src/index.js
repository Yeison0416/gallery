import 'reset-css';
import './index.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Gallery } from './components/gallery/gallery';
import { data } from './data/data';

function app() {
    return {
        buildGallery() {
            const rootElement = document.querySelector('#app-root');
            const galleryObject = Gallery(data.gallery, rootElement);
            galleryObject.createGallery();
        },
    };
}

const application = app();
application.buildGallery();
