import React from 'react'

function ProductDetail(props) {
    const data = props.data
  return (
    <div>
    <h1>Name: { data.name}</h1>
    <h2>Price: { data.price} $</h2>
    <h4>Category: { data.category}</h4>
    <h6>Description: { data.description}</h6>
    
    </div>
  )
}

export default ProductDetail