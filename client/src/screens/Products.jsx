import '../assets/css/Products.css';
import { Link } from 'react-router-dom';

export default function Products({ products }) {
  const productsLinkStyle = {
    color: "#bc7554",
    textDecoration: "none",
    fontFamily: "raleway",
    padding: "4vh",
  
  };
  
  return (
    <div>
      <div className='productsMain'>
        <h1>Products</h1>
        <Link to={`/newproduct`}>
          <button>CREATE NEW</button>
        </Link>
      </div>
      <div className='productsBody'>
      {products.map((product, index) => (
        <Link to={`/products/${product.id}`} style={ productsLinkStyle} key = {index}>
            <div className="productDiv" >
            <img src={`${product.img}`} alt="macrame" width="300" height="300"></img>
            <h2>Item {`${product.item}`}</h2>
          </div>
        </Link>
      ))}
      </div>
    </div>
  )
}
