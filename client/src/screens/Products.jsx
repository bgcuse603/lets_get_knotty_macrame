import React from 'react'

export default function Products({ products }) {
  return (
    <div>
      {products.map((product) => (
        <div>
          <img src={`${product.img}`} alt="macrame" width="300" height="300"></img>
          <h4>{`${product.item}`}</h4>
          </div>
      ))}
    </div>
  )
}
