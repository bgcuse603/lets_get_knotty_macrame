import { useState, useEffect } from 'react'
import { useParams} from 'react-router-dom';
import '../assets/css/Reviews.css';
// Services
import { getAllReviews, postReview, deleteReview} from '../services/reviews';

export default function Reviews({buttonClass}) {
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

  const formtextboxA = {
    color: "#323D33",
    fontFamily: "Raleway",
    fontSize: "20px",
    margin: "5px",
    width: "75%",
  }

  const formtextboxB = {
    color: "#323D33",
    fontFamily: "Raleway",
    fontSize: "20px",
    margin: "5px",
    width: "75%",
    height: "60px",
  }

  const handleReviewCreate = async (id, formData) => {
    const newReview = await postReview(id, formData);
    setReviews(prevState => [...prevState, newReview]);
  }

  const handleReviewDelete = async (review) => {
    let reviewId = review.id;
    let productId = review.product_id;
    await deleteReview(productId, reviewId);
    setReviews(prevState => prevState.filter(review => review.id !== reviewId));
  }

  return (
    <div className='reviewDiv'>
      <form className='reviewForm'
        onSubmit={(e) => {
          e.preventDefault();
          handleReviewCreate(id, formData);
        }}>
      <h1>Reviews</h1>
      <label>
        <input
          type='text'
          name='name'
          value={name}
          placeholder='Your Name'
          style={formtextboxA}
          onChange={handleChange}
        />
        </label>
        <label>
        <input
          type='text'
          name='comment'
          value={comment}
          placeholder='Your Review'
          style={formtextboxB}
          onChange={handleChange}
        />
        </label>
        <button className='reviewSubmit'>Submit</button><br/>
      </form>
      <div>
        {toggleFetch ?
          <div className="reviewList">
            {reviews.map((review, index) => (
              <div className='reviewBox' key={index}>
              <h4>{`${review.name}`}</h4>
              <p>{`${review.comment}`}</p>
              <button className={buttonClass} onClick={() => handleReviewDelete(review)}>DESTROY</button>
              <br />
            </div>
          ))}
          </div> : '...loading reviews...'}
      </div>
    </div>
  )
}
