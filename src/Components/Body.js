import React from 'react'
import './css/style.css'
import logo from './images/white-bg1.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

function Body() {
  
  return (
    <div>
    <div>
    <img
        src={logo}
        alt="My Image"
        className='imgg'
      />
    </div>
   </div>
  )
}

export default Body