import { refs } from './refs';

export function renderGalleryMarkup(markup) {
  refs.galleryEl.innerHTML = markup;
}
