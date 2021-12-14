import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Products from '../screens/Products';
import ProductDetail from '../screens/ProductDetail';
import ProductUpdate from '../screens/ProductUpdate';
import { getAllProducts } from '../services/products';

export default function MainContainer() {
  const [products, setProducts] = useState([]);
  
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
        <Route path='/products/:id/update'>
          <ProductUpdate />
        </Route>
        <Route path='/products/:id'>
          <ProductDetail />
        </Route>
        <Route exact path='/products'>
          <Products products={products}/>
        </Route>
      </Switch>
    </div>
  )
}
