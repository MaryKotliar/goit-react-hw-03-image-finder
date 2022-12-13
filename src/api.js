import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
// axios.defaults.headers.common['Authorization'] =
//   'key=30551862-9589f733672d30c10c91e5769';
const API_KEY = '30551862-9589f733672d30c10c91e5769';
export const fetchImages = async ({ searchName, currentPage }) => {
  const response = await axios.get('/', {
    params: {
      key: `${API_KEY}`,
      q: `${searchName}`,
      per_page: 12,
      page: `${currentPage}`,
      image_type: 'photo',
      orientation: 'horizontal',
    },
  });
  return response.data;
};
