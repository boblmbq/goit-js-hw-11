import { refs } from './js/refs';
import { onFormSubmit } from './js/load-img';
import { api } from './js/api';
import 'tui-pagination/dist/tui-pagination.css';

const apiInst = new api();

refs.form.addEventListener('submit', onFormSubmit);
// refs.loadMoreBtn.addEventListener('click', loadMore);


