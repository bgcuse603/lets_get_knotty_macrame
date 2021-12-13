import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../services/products';

export default function ProductDetail({ products }) {
  const [product, setProduct] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [reviews, setReviews] = useState([]);
  const { id }= useParams();
  

  useEffect(() => {
    const fetchProduct = async () => {
      const productData = await getProduct(id);
      setProduct(productData);
      setLoaded(true);
    }
    fetchProduct(id);
    setReviews(product.reviews);
  }, [id])

  if (!isLoaded) {
    return <h1>Loading...</h1>
  }
  
  return (
    <div>
      
      <h1>{`${id}`}</h1>
      

      <div className="productDetail">
        <div className="imgBox">
          <img src={`${product.img}`} alt="macrame" width="500" height="600"></img>
        </div>
        <div className="textBox">
          <h4>{`${product.item}`}</h4>
          <h6>{`${product.price}`}</h6>
          <p>{`${product.description}`}</p>
        </div>
      </div>
      <div className="reviews">
        <h3>reviews</h3>
        {reviews.map((review) => (
        <div>
          <h4>{`${review.name}`}</h4>
          <p>{`${review.comment}`}</p>
          <br/>
        </div>
      ))}
      </div>
     
    </div>
  )
}
