import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = `34506200-683bb96ed138c06f38447d715`;
const params = {
  per_page: 12,
  key: `${API_KEY}`,
  image_type: `photo`,
  orientation: `horizontal`,
};

export const apiRequest = async (value, page) => {
  const response = await axios.get(`?q=${value}&page=${page}`, { params });
  return response.data;
};
