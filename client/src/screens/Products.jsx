import React from 'react'
import { Link } from 'react-router-dom';

export default function Products({ products }) {

  return (
    <div>
      {products.map((product) => (
        <Link to={`/products/${product.id}`}>
             <div className="productDiv">
            <img src={`${product.img}`} alt="macrame" width="300" height="300"></img>
            <h4>{`${product.item}`}</h4>
          </div>
        </Link>
      ))}
    </div>
  )
}
