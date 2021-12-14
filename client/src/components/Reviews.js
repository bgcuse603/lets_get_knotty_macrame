import { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom';

// Services
import { getAllReviews, postReview, deleteReview} from '../services/reviews';

export default function Reviews() {
  const history = useHistory();
  const [reviews, setReviews] = useState({
    name: '',
    comment: '',
    product_id: '',
  });
  const [toggleFetch, setToggleFetch] = useState(false);
  const { id } = useParams();
  

  const [formData, setFormData] = useState({
    name: '',
    comment: '',
    product_id: '',
  });
  const { name, comment } = formData;

  useEffect(() => {
    const fetchReviews = async () => {
      const reviewsList = await getAllReviews(id);
      setReviews(reviewsList);
      setToggleFetch(!toggleFetch);
    }
    fetchReviews(id);
  }, [])

  console.log(reviews);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleReviewCreate = async (id, formData) => {
    const newReview = await postReview(id, formData);
    setReviews(prevState => [...prevState, newReview]);
    setToggleFetch(!toggleFetch);
  }

  const handleReviewDelete = async (review) => {
    let reviewId = review.id;
    let productId = review.product_id;
    await deleteReview(productId, reviewId);
    setReviews(prevState => prevState.filter(review => review.id !== reviewId));
    setToggleFetch(!toggleFetch);
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleReviewCreate(id, formData);
        }}>
      <label>
        Name:
        <input
          type='text'
          name='name'
          value={name}
          onChange={handleChange}
        />
        </label><br />
        <label>
        Comment:
        <input
          type='text'
          name='comment'
          value={comment}
          onChange={handleChange}
        />
        </label><br />
        <button>Submit</button><br/>
      </form>
      <div>
        {toggleFetch ?
          <div>
            {reviews.map((review, index) => (
              <div className='reviewBox' key={index}>
              <h4>{`${review.name}`}</h4>
              <p>{`${review.comment}`}</p>
              <button onClick={() => handleReviewDelete(review)}>DESTROY</button>
              <br />
            </div>
          ))}
          </div> : '...loading reviews...'}
      </div>
    </div>
  )
}
