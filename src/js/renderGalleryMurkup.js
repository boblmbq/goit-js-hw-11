import { refs } from './refs';

export function renderGalleryMarkup(markup) {
  refs.galleryEl.insertAdjacentHTML('beforeEnd', markup);
}
