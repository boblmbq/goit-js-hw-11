import { refs } from './js/refs';
import { onFormSubmit, loadMore } from './js/load-img';
import { api } from './js/api';
const apiInst = new api();

refs.form.addEventListener('submit', onFormSubmit);
refs.loadMoreBtn.addEventListener('click', loadMore);
