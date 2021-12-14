import api from './apiConfig';

export const getAllProducts = async () => {
  const resp = await api.get('/products');
  return resp.data;
}

export const getOneProduct = async (id) => {
  const resp = await api.get(`/products/${id}`);
  return resp.data;
}

export const postProduct = async (productData) => {
  const resp = await api.post('/products', { product: productData});
  return resp.data;
}

export const putProduct = async (formData, id) => {
  const resp = await api.put(`/products/${id}`, { product: formData});
  return resp.data;
}

export const deleteProduct = async (id) => {
  await api.delete(`/products/${id}`);
}