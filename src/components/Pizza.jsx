import React from 'react'


function Pizza({pizza}) {

  if(pizza.soldOut) return null
  return (
    <div>

        <img src={pizza.photoName} alt="" />
        <div>
          <h3>{pizza.name}</h3>
          <p>{pizza.ingredients}</p>
          <span>{pizza.price}</span>
          
        </div>

    </div>
  )
}

export default Pizza