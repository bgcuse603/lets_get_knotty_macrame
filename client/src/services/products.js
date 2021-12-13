import api from './apiConfig';

export const getAllProducts = async () => {
  const resp = await api.get('/products');
  return resp.data;
}

export const getProduct = async (id) => {
  const resp = await api.get(`/products/${id}`);
  return resp.data;
}