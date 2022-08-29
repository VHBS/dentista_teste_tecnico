import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001',
});

const testandoAxios = async () => {
  const { data } = await api.get('/teste');

  return data;
};

export { testandoAxios };
export default api;
