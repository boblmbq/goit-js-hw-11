import Notiflix from 'notiflix';
import { api } from './api';
import { refs } from './refs';
import Pagination from 'tui-pagination/dist/tui-pagination.min';
import { createLightBox } from './simplelightbox';

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
      Notiflix.Notify.success(`Hooray! We found ${response.totalHits} images.`);
      createPag(response.totalHits, response.hits.length);
      createLightBox();
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
    template: {
      page: `<a href="#" class="tui-page-btn">{{page}}</a>`,
      currentPage: `<strong class="tui-page-btn tui-is-selected">{{page}}</strong>`,
      moveButton:
        `<a href="#" class="tui-page-btn tui-{{type}}">` +
        `<span class="tui-ico-{{type}}">{{type}}</span>` +
        '</a>',
      disabledMoveButton:
        `<span class="tui-page-btn tui-is-disabled tui-{{type}}">` +
        `<span class="tui-ico-{{type}}">{{type}}</span>` +
        '</span>',
      moreButton:
        `<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">` +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>',
    },
  });
  pagination.on('beforeMove', async e => {
    apiInst.loader();
    const { page } = e;
    apiInst.page = page;
    try {
      const response = await apiInst.fetchPosts();
      if (response.totalHits > 0) {
        const markup = apiInst.createMurkup(response.hits);
        refs.galleryEl.innerHTML = markup;
        createLightBox();
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
  });
}
