import axios from 'axios';
export const search = axios.create({
  baseURL: `https://pixabay.com/api/`,
});