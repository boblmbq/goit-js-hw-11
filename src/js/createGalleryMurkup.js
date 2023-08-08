export function createGalleryMurkup(array) {
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
        return `<li class="gallery-item">
          <img class="gallery-img" src="${webformatURL}" alt="${tags}" />
          <ul class="gallery-img-descr">
            <li class="img-descr-likes">
              <h1 class="descr-likes-title">likes</h1>
              <p class="descr-likes-amount">${likes}</p>
            </li>
            <li class="img-descr-views">
              <h1 class="descr-views-title">views</h1>
              <p class="descr-views-amount">${views}</p>
            </li>
            <li class="img-descr-comments">
              <h1 class="descr-comments-title">comments</h1>
              <p class="descr-comments-amount">${comments}</p>
            </li>
            <li class="img-descr-downloads">
              <h1 class="descr-comments-title">downloads</h1>
              <p class="descr-comments-amount">${downloads}</p>
            </li>
          </ul>
        </li>`;
      }
    )
    .join(' ');
}
