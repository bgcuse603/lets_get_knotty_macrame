import api from './apiConfig';

export const getAllReviews = async (id) => {
  const resp = await api.get(`/products/${id}/reviews`);
  return resp.data;
}

export const postReview = async (id, reviewData) => {
  const resp = await api.post(`/products/${id}/reviews`, { review: reviewData});
  return resp.data;
}

export const deleteReview = async (productId, reviewId) => {
  await api.delete(`/products/${productId}/reviews/${reviewId}`);
}