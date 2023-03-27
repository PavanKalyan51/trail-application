import React from 'react'
import './css/style.css'
import image from './images/dark-bg.jpg'


const Dark = () => {
  return (
    <div className='dark'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='wrapper'>
                        <img src={image}  alt="dark bg" />
                    </div>
                    <div className='dark-text'>
                        <h5>STUDENT REVIEWS</h5>
                        <span className='linestyle'></span>
                            <span className='line2'></span>
                            <br /><br /><br />
                            
                    </div> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dark