import React from 'react'

function Footer() {
  const hour = new Date().getHours()

  const openHour = 12;

  const closeHour = 22;

  if(hour >= openHour && hour <=closeHour){
    alert("We're currently open")
  }
  else{
    alert("Sorry we're closed!")
  }

  return (
    <footer id='footer'>We're currently open!</footer>
  )
}

export default Footer