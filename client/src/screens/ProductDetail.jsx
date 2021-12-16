import '../assets/css/ProductDetail.css';
// Packages 
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
// Components
import Reviews from '../components/Reviews';
// Services
import { getOneProduct } from '../services/products';


export default function ProductDetail({handleProductDelete, buttonClass}) {
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
    <div className="productDetail">
      <div className='productsDetailTitle'>
        <h1>Product Detail</h1>
      </div>
      <div className="productDetailMain">
        <div className="imgBox">
          <img src={`${product.img}`} alt="macrame" width="400vw" height="400vh"></img>
        </div>
        <div className="textBox">
          <h1>Item {`${product.item}`}</h1>
          <h2>${`${product.price}`}</h2>
          <p>{`${product.description}`}</p>
          <div className="twoButtons">
            <Link to={`/products/${id}/update`}>
              <button className={buttonClass}>UPDATE</button>
            </Link>
            <button onClick={() => handleProductDelete(id)} className={buttonClass} >DESTROY</button>
          </div>
        </div>
      </div>
      <div className="reviews">
        <Reviews buttonClass={buttonClass}/>
      </div>
    </div>
  )
}
