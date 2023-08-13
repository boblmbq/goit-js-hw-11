import Notiflix from 'notiflix';
import { api } from './api';
import { refs } from './refs';
import Pagination from 'tui-pagination/dist/tui-pagination.min';

// import { showBtn, hideBtn } from './showBtn';

const apiInst = new api();
export async function onFormSubmit(e) {
  e.preventDefault();
  apiInst.loader();
  apiInst.resetPages();
  apiInst.query = e.currentTarget.elements.searchQuery.value.trim();

  try {
    const response = await apiInst.fetchPosts();
    if (response.totalHits > 0) {
      const markup = apiInst.createMurkup(response.hits);
      refs.galleryEl.innerHTML = markup;
      createPag(response.totalHits, response.hits.length);
    } else {
      refs.galleryEl.innerHTML = '';
      Notiflix.Notify.failure(
        'Your query might be wrong, please write a correct query'
      );
    }
  } catch (error) {
    console.log(error);
    console.log(error.message);
  }
  apiInst.loader();
}

// export async function loadMore() {
//   try {
//     apiInst.increasePages();
//     const response = await apiInst.fetchPosts();
//     if (response.totalHits > 0) {
//       const createdMurkup = apiInst.createMurkup(response.hits);
//       refs.galleryEl.insertAdjacentHTML('beforeend', createdMurkup);
//     } else {
//       Notiflix.Notify.failure(
//         "We're sorry, but you've reached the end of search results."
//       );
//       showBtn();
//     }
//   } catch (error) {
//     console.log(error);
//     Notiflix.Notify.failure(
//       "We're sorry, but something went wrong, try to reload this page"
//     );
//   }
// }

function createPag(totalItems, itemsPerPage) {
  const pagination = new Pagination('pagination', {
    totalItems: totalItems,
    itemsPerPage: itemsPerPage,
    visiblePages: 5,
    page: 1,
    centerAlign: true,
  });
  pagination.on('beforeMove', async e => {
    const { page } = e;
    apiInst.page = page;
    try {
      const response = await apiInst.fetchPosts();
      if (response.totalHits > 0) {
        const markup = apiInst.createMurkup(response.hits);
        refs.galleryEl.innerHTML = markup;
      } else {
        refs.galleryEl.innerHTML = '';
        Notiflix.Notify.failure(
          'Your query might be wrong, please write a correct query'
        );
      }
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  });
}
