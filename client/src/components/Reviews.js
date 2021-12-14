import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
// Services
import { getAllReviews} from '../services/reviews';

export default function Reviews() {
  const [reviews, setReviews] = useState({
    name: '',
    comment: '',
    product_id: '',
});
  const { id } = useParams();

  // const [formData, setFormData] = useState({
  //   name: '',
  //   comment: '',
  //   product_id: '',
  // });
  // const { name, comment } = formData;

  useEffect(() => {
    const fetchReviews = async () => {
      const reviewsList = await getAllReviews(id);
      setReviews(reviewsList);
    }
    fetchReviews(id);
  }, [])
  console.log(reviews);
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData(prevState => ({
  //     ...prevState,
  //     [name]: value
  //   }))
  // }

  // const handleReviewCreate = async (formData) => {
  //   const newReview = await postReview(formData);
  //   setReviews(prevState => [...prevState, newReview]);
  // }

  return (
    <div>
      <h1>test</h1>
      <div>
        {/* {reviews.map((review, index) => (
          <div className='reviewBox' key={index}>
            <h4>{`${review.name}`}</h4>
            <p>{`${review.comment}`}</p>
            <br />
        </div>
        ))} */}
      </div>

      {/* <form
        onSubmit={(e) => {
          e.preventDefault();
          // handleReviewCreate(formData);
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
        <button>Submit</button>
      </form> */}
 
    </div>
  )
}
