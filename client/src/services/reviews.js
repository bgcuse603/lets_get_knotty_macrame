import api from './apiConfig';

export const getAllReviews = async (id) => {
  const resp = await api.get(`/products/${id}/reviews`);
  return resp.data;
}

export const postReview = async (id, reviewData) => {
  const resp = await api.post(`/products/${id}/reviews`, { reviews: reviewData});
  return resp.data;
}

export const deleteReview = async (id, reviewId) => {
  await api.delete(`/products/${id}/reviews/${reviewId}`);
}