import { urlFetch } from './class-URLfetch';
import { createGalleryMurkup } from './createGalleryMurkup';
import { renderGalleryMarkup } from './renderGalleryMurkup';

export async function onFormSubmit(e) {
  e.preventDefault();
  const inputValue = e.currentTarget.elements.searchQuery.value;
  const caughtResponse = await urlFetch.searchByInput(inputValue);
  const createdMarkup = createGalleryMurkup(caughtResponse.data.hits);
  renderGalleryMarkup(createdMarkup);
}
