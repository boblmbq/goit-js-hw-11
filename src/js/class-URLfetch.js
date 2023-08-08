import { search } from './base-url';

class UrlFetch {
  page = 1;
  per_page = 40;

  #params = new URLSearchParams({
    key: '38611269-e32dffa05ef058278d905c8af',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  async searchByInput(input) {
    this.#params.set('per_page', this.per_page);
    this.#params.set('page', this.page);
    this.#params.set('q', input);
    const searching = await search.get(`?${this.#params}`);
    console.log(searching)
    return searching;
  }
}

export const urlFetch = new UrlFetch();
