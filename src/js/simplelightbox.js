import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function createLightBox() {
  const lightbox = new simpleLightbox('.gallery img', {
    sourceAttr: 'data-large',
  });
}