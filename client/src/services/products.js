import api from './apiConfig';

export const getAllProducts = async () => {
  const resp = await api.get('/products');
  return resp.data;
}