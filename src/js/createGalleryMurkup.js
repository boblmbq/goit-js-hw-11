export function createGalleryMurkup(array) {
  console.log(array);
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
        return `<li>
          <img src="${webformatURL}" srcset="${largeImageURL} 1280w" alt="${tags}" />
          <ul>
            <li>
              <h1>likes</h1>
              <p>${likes}</p>
            </li>
            <li>
              <h1>views</h1>
              <p>${views}</p>
            </li>
            <li>
              <h1>comments</h1>
              <p>${comments}</p>
            </li>
            <li>
              <h1>downloads</h1>
              <p>${downloads}</p>
            </li>
          </ul>
        </li>`;
      }
    )
    .join(' ');
}
