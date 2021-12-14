// Packages 
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
// Components
import Reviews from '../components/Reviews';
// Services
import { getOneProduct } from '../services/products';


export default function ProductDetail({handleProductDelete}) {
  const [product, setProduct] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id }= useParams();
  

  useEffect(() => {
    const fetchProduct = async () => {
      const productData = await getOneProduct(id);
      setProduct(productData);
      setLoaded(true);
    }
    fetchProduct(id);
  }, [id])

  if (!isLoaded) {
    return <h1>Loading...</h1>
  } 

  return (
    <div>
      <div className="productDetail">
        <div className="imgBox">
          <img src={`${product.img}`} alt="macrame" width="500" height="600"></img>
        </div>
        <div className="textBox">
          <h4>{`${product.item}`}</h4>
          <h6>{`${product.price}`}</h6>
          <p>{`${product.description}`}</p>
          <div className="twoButtons">
            <Link to={`/products/${id}/update`}>
              <button>UPDATE</button>
            </Link>
            <button onClick={() => handleProductDelete(id)}>DESTROY</button>
          </div>
        </div>
      </div>
      <div className="reviews">
        <h3>reviews</h3>
        <Reviews />
      </div>
    </div>
  )
}
