import 'reset-css';
import './index.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Gallery } from './components/gallery/gallery';
import { data } from './data/data';

function app() {
    return {
        buildGallery() {
            const rootElement = document.querySelector('#app-root');
            const galleryObject = Gallery();
            galleryObject.init(data.gallery, rootElement, { currentSlide: 0, maxSlides: data.gallery.galleryContent.content.length });
        },
    };
}

const application = app();
application.buildGallery();
