import React from 'react'

function Footer() {
  const hour = new Date().getHours()

  const openHour = 8;

  const closeHour = 22;

  const isOpen = hour>= openHour && hour <= closeHour

 
  return (
        <footer className='footer'>
          
          {isOpen && (<div className='order'>
          <p>We're currently open until {closeHour}:00. come visit us or order online</p>
          <button className='btn'>Order</button>
          </div>
          
          
          )}</footer>
  )
}

export default Footer