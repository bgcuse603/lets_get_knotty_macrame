// Packages 
import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
// Screens
import Products from '../screens/Products';
import ProductDetail from '../screens/ProductDetail';
import ProductUpdate from '../screens/ProductUpdate';
import ProductCreate from '../screens/ProductCreate';
// Services
import { getAllProducts, postProduct, deleteProduct } from '../services/products';

export default function MainContainer() {
  const [products, setProducts] = useState([]);
  const history = useHistory();
  
  useEffect(() => {
    const fetchProducts = async () => {
      const productList = await getAllProducts();
      setProducts(productList);
    }
    fetchProducts();
  }, [])

  const handleProductCreate = async (formData) => {
    const newProduct = await postProduct(formData);
    setProducts(prevState => [...prevState, newProduct]);
    history.push('/products');
  }

  const handleProductDelete = async (id) => {
    await deleteProduct(id);
    setProducts(prevState => prevState.filter(product => product.id !== id));
    history.push('/products');
  }

  // const handleProductUpdate = async (formData) => {
  //   const updatedProduct = await postProduct(formData);
  //   setProducts(prevState => [...prevState, newProduct]);
  //   history.push('/products');
  // }

  return (
    <div>
      <h1>Main Container</h1>
      <Switch>
      <Route path='/newproduct'>
          <ProductCreate handleProductCreate={handleProductCreate}/>
        </Route>
        <Route path='/products/:id/update'>
          <ProductUpdate products={ products }/>
        </Route>
        <Route path='/products/:id'>
          <ProductDetail
            handleProductDelete={handleProductDelete} />
        </Route>
        <Route exact path='/products'>
          <Products products={products}/>
        </Route>
      </Switch>
    </div>
  )
}
