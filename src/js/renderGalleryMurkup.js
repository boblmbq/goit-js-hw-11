import { refs } from './refs';

export function renderGalleryMarkup(markup) {
  console.log(markup)
  refs.galleryEl.innerHTML = markup;
}
