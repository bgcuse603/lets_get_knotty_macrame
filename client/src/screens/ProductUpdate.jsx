import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../services/products';

export default function ProductUpdate() {
  const [product, setProduct] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const productData = await getProduct(id);
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
      <h3>productupdate</h3>
      <img src={`${product.img}`} alt="macrame" width="500" height="600"></img>
    </div>
  )
}
