import { BehaviorSubject } from 'rxjs';

function GalleryState(galleryState) {
    const galleryState$ = new BehaviorSubject(galleryState);

    const state = {
        subscribe: (callback) => galleryState$.subscribe(callback),
        getState: () => galleryState$.value,
        update: (newState) => galleryState$.next({ ...galleryState$.value, ...newState }),
    };

    return Object.assign({}, state);
}

export const galleryState$ = GalleryState({ currentSlide: 0 });
