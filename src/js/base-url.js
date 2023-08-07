import axios from 'axios';
export const search = axios.create({
  baseURL: `https://pixabay.com/api/`,
});

export const params = new URLSearchParams({
  key: '38611269-e32dffa05ef058278d905c8af',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 40,
});
