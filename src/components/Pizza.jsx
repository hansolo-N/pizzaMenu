import React from 'react'


function Pizza(pizzadata) {
  return (
    <div>
        <img src={pizzadata.photoName} alt="" />
        <h2>{pizzadata.name}</h2>
        <p>{pizzadata.ingredients}</p>
    </div>
  )
}

export default Pizza