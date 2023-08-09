import { refs } from './js/refs';
import { onFormSubmit } from './js/onFormSubmit';
import { api } from './js/api';
const apiInst = new api();

refs.form.addEventListener('submit', onFormSubmit);
refs.loadMoreBtn.addEventListener('click', () => loadMore());

async function loadMore() {
  apiInst.increasePages();
  const response = await apiInst.fetchPosts();
  if (response.data.hits.length > 0) {
    const createdMurkup = apiInst.createMurkup(response.data.hits);
    refs.galleryEl.insertAdjacentHTML('beforeend', createdMurkup);
  }
}
