import { refs } from './js/refs';
import { apiInst, onFormSubmit } from './js/load-img';
import 'tui-pagination/dist/tui-pagination.css';
refs.form.addEventListener('submit', onFormSubmit);
apiInst.renderAfterReload();
// refs.loadMoreBtn.addEventListener('click', loadMore);
