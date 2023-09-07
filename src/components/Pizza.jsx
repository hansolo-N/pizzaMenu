import React from 'react'


function Pizza({pizza}) {

  
  return (
  <li className={`pizza ${pizza.soldOut? "sold-out":""}`}>
    <div>

      <img src={pizza.photoName} alt="" />
        <div>
      <h3>{pizza.name}</h3>
      <p>{pizza.ingredients}</p>
      <span>{pizza.soldOut?"SOLD OUT":pizza.price}</span>
  
    </div>

    </div>
  </li>
    
  )
}

export default Pizza