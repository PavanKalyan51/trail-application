import React from 'react'
import './trail.css'
import image from './images/news1.jpg'

function trail() {
  return (
    <div>
        <div class="card">
  <div class="card-image">
    <img src={image} alt="Card Image" />
  </div>
  <div class="card-content">
    <h2>Card Title</h2>
    <p>Card Description</p>
    <a href="#" class="btn">Read More</a>
  </div>
</div>
    </div>
  )
}

export default trail