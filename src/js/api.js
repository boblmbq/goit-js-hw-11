import axios from 'axios';

export class api {
  #search = axios.create({
    baseURL: `https://pixabay.com/api/`,
  });
  page = 1;
  query = null;

  params = {
    key: '38611269-e32dffa05ef058278d905c8af',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
  };

  async fetchPosts() {
    const params = new URLSearchParams({
      ...this.params,
      page: this.page,
      q: this.query,
    });
    const response =  await this.#search.get(`?${params}`);
    return response.data
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
  increasePages() {
    this.page += 1;
  }
  resetPages() {
    this.page = 1;
  }
}
