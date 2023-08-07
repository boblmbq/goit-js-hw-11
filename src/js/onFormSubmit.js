import { searchByInput } from './searchByInput';
import { createGalleryMurkup } from './createGalleryMurkup';
import { renderGalleryMarkup } from './renderGalleryMurkup';

export async function onFormSubmit(e) {
  e.preventDefault();
  const inputValue = e.currentTarget.elements.searchQuery.value;
  const searchResult = await searchByInput(inputValue);
  const createdMarkup = createGalleryMurkup(searchResult.data.hits);
  renderGalleryMarkup(createdMarkup)
}
