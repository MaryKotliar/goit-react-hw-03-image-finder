import axios from 'axios';
const PER_PAGE = 12;
axios.defaults.baseURL = 'https://pixabay.com/api/';
// axios.defaults.headers.common['Authorization'] =
//   'key=30551862-9589f733672d30c10c91e5769';
const API_KEY = '30551862-9589f733672d30c10c91e5769';
export const fetchImages = async ({ searchName, currentPage }) => {
  const response = await axios.get('/', {
    params: {
      key: `${API_KEY}`,
      q: `${searchName}`,
      per_page: `${PER_PAGE}`,
      page: `${currentPage}`,
      image_type: 'photo',
      orientation: 'horizontal',
    },
  });
  const images = normalisedImages(response.data.hits);
  const totalPages = Math.ceil(response.data.totalHits / PER_PAGE);
  return { images, totalPages };
};

const normalisedImages = images =>
  images.map(({ id, webformatURL, largeImageURL, tags }) => ({
    id,
    webformatURL,
    largeImageURL,
    tags,
  }));
