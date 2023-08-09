import { api } from './api';
import { refs } from './refs';
import { showBtn } from './showBtn';


const apiInst = new api();
export async function onFormSubmit(e) {
  try {
    e.preventDefault();
    apiInst.resetPages();
    apiInst.query = e.currentTarget.elements.searchQuery.value.trim();
    const response = await apiInst.fetchPosts();
    if (response.data.hits.length > 0) {
      const createdMurkup = apiInst.createMurkup(response.data.hits);
      refs.galleryEl.innerHTML = createdMurkup;
      showBtn()
    }
  } catch (error) {
    console.log(error);
    console.log(error.message);
  }
}
