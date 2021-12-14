import React from 'react'
import { Link } from 'react-router-dom';

export default function Products({ products }) {

  return (
    <div>
      <div>
        <h3>PRODUCTS</h3>
        <Link to={`/newproduct`}>
          <button>CREATE NEW</button>
        </Link>
      </div>
      <div>
      {products.map((product, index) => (
        <Link to={`/products/${product.id}`} key = {index}>
            <div className="productDiv" >
            <img src={`${product.img}`} alt="macrame" width="300" height="300"></img>
            <h4>{`${product.item}`}</h4>
          </div>
        </Link>
      ))}
      </div>
    </div>
  )
}
