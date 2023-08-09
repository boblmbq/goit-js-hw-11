import axios from 'axios';
import { refs } from './refs';

export class api {
  constructor() {
    this._query = '';
  }
  #search = axios.create({
    baseURL: `https://pixabay.com/api/`,
  });

  page = 1;
  per_page = 40;

  params = new URLSearchParams({
    key: '38611269-e32dffa05ef058278d905c8af',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: this.page,
    per_page: this.per_page,
  });

  async allIn() {
    if (this._query !== this.params.get('q')) {
      this.params.set('q', this._query);
      const searching = await this.#search.get(`?${this.params}`);
      const createdMarkup = this.createMurkup(searching.data.hits);
      this.renderNewMurkup(createdMarkup);
      this.increasePages();
    } else {
      console.log('you made it');
    }
  }

  createMurkup(array) {
    return array
      .map(
        ({
          downloads,
          comments,
          views,
          likes,
          tags,
          largeImageURL,
          webformatURL,
        }) => {
          return `<div class="photo-card">
  <img src="${webformatURL}" data-big="" alt="${tags}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes</b>
      <b>${likes}</b>
    </p>
    <p class="info-item">
      <b>Views</b>
      <b>${views}</b>
    </p>
    <p class="info-item">
      <b>Comments</b>
      <b>${comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads</b>
      <b>${downloads}</b>
    </p>
  </div>
</div>`;
        }
      )
      .join(' ');
  }

  renderNewMurkup(markup) {
    refs.galleryEl.innerHTML = markup;
  }
  addingMarkup(markup) {
    refs.galleryEl.insertAdjacentElement('beforeEnd', markup);
  }
  increasePages() {
    this.page += 1;
  }
  resetPages() {
    this.page = 1;
  }

  get query() {
    return this._query;
  }

  set query(newQuery) {
    this._query = newQuery;
  }
}
