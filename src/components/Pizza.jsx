import React from 'react'


function Pizza({pizza}) {
  return (
    <div>
        <img src={pizza.photoName} alt="" />
        <h2>{pizza.name}</h2>
        <p>{pizza.ingredients}</p>
    </div>
  )
}

export default Pizza