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
        <>
        <p>authentic italian cuisine 6 creative dishes to choose from, all from our stone organic and scrumtptious</p>
      <ul className='pizzas'>
      {pizzas.map((pizza)=>(
        <Pizza key ={pizza.id} pizza ={pizza}/>
       
      ))}
      
      </ul>
      </>
      ): <p>We're still working on our menu please come back later!</p>}


    </div>
  )
}
export default Menu