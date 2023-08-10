import Notiflix from 'notiflix';
import { api } from './api';
import { refs } from './refs';
import { showBtn } from './showBtn';

const apiInst = new api();
export async function onFormSubmit(e) {
  e.preventDefault();
  apiInst.resetPages();
  apiInst.query = e.currentTarget.elements.searchQuery.value.trim();
  try {
    const response = await apiInst.fetchPosts();
    if (response.totalHits > 0) {
      const markup = apiInst.createMurkup(response.hits);
      refs.galleryEl.innerHTML = markup;
      showBtn();
    }
  } catch (error) {
    console.log(error);
    console.log(error.message);
  }
}

export async function loadMore() {
  try {
    apiInst.increasePages();
    const response = await apiInst.fetchPosts();
    if (response.totalHits > 0) {
      const createdMurkup = apiInst.createMurkup(response.hits);
      refs.galleryEl.insertAdjacentHTML('beforeend', createdMurkup);
    } else {
      Notiflix.Notify.failure(
        "We're sorry, but you've reached the end of search results."
      );
      showBtn()
    }
  } catch (error) {
    console.log(error);
    Notiflix.Notify.failure(
      "We're sorry, but something went wrong, try to reload this page"
    );
  }
}
