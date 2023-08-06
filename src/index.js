import axios from 'axios';
import { BASE_URL, parahms } from './js/base-url';
import { refs } from './js/refs';

const response = async () => await console.log(axios.get(BASE_URL));

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  searchByInput(e.currentTarget.elements.searchQuery.value);
}

async function searchByInput(input) {
  const parahms = new URLSearchParams({
    key: '38611269-e32dffa05ef058278d905c8af',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    q: input,
  });
  
}
