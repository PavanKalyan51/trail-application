import React from 'react'
import image from './images/students.jpeg'
import './css/style.css'

const Body2 = () => {
  return (
    <div className='body2'>
      <h4>WHO WE ARE?</h4>
      <span className='linestyle'></span>
      <span className='line2'></span>

     <div className='container'>
      <div className='row'>
      <div className='col-md-12 aligni' >
        <div className='col-md-6 item1'>
          <h5>ABOUT EDUCOURSE TEMPLATE.</h5>
          <p>Curabitur ut est a mi fermentum tristique. Aliquam et ante odio. Donec elementum odio eget ex porta, vel laoreet nisl fermentum. Nam risus purus, hendrerit id placerat sit amet, tempor a urna. Maecenas id quam et dolor facilisis pulvinar.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <button className='vbutton'>View More</button>
        </div>
        <div className='col-md-6'>
          <img src={image} alt="students" />
        </div>
      </div>
      </div>
     </div>

    </div>
  )
}

export default Body2