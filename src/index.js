import axios from 'axios';
const BASE_URL =
  'ttps://pixabay.com/api/?key=38611269-e32dffa05ef058278d905c8af&image_type=photo&orientation=horizontal&safesearch=true';
const response = async () => await axios.get(BASE_URL);
console.log(response())
