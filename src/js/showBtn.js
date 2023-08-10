import { refs } from './refs';

export function showBtn() {
    refs.loadMoreBtn.classList.toggle('hidden');
}