import React from 'react'
import Pizza from './Pizza'
import pizzaData from '../Data/data'
import { useState } from 'react'





function Menu() {

  const [pizzas,setData] = useState(pizzaData);
  return (
    <div className='menu'>
      <h2>Our Menu</h2>
      {pizzas.length > 0 ? (
      <ul className='pizzas'>
      {pizzas.map((pizza)=>(
        <Pizza key ={pizza.id} pizza ={pizza}/>
       
      ))}
      
      </ul>
      ): null}


    </div>
  )
}
export default Menu