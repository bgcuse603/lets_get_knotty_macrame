import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { getAllProducts } from '../services/products';

export default function MainContainer() {
  const [products, setProducts] = useState([]);
  // const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productList = await getAllProducts();
      setProducts(productList);
    }
    fetchProducts();
  }, [])

  return (
    <div>
      <h1>Main Container</h1>
      <Switch>
        <Route path='/products'>
            <h1>products</h1>
          </Route>
      </Switch>
    </div>
  )
}
