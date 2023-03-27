import React from 'react'
import cimg1 from './images/classroom.png'
import cimg2 from './images/certificate.png'
import cimg3 from './images/job-support.png'
import './css/style.css'

function card() {
  return (
    <div>
         <div className='container cbody4'>
        <div className='row'>
      <div className='col-md-4'>
      <div className='card'>
        <div className='card-body p-0'>
          <img src={cimg1} alt="classroom" className='cimg' />
          <div>
            <h4>Experienced Trainers</h4>
            <p>Curabitur ut est a mi fermentum tristique. Aliquam et ante odio. Donec elementum odio eget ex porta, vel laoreet nisl fermentum.</p>
          </div>
        </div>
      </div>
      </div>
      <div className='col-md-4'>
      <div className='card'>
        <div className='card-body p-0'>
          <img src={cimg2} alt="classroom" className='cimg' />
          <div>
            <h4>Certification</h4>
            <p>Curabitur ut est a mi fermentum tristique. Aliquam et ante odio. Donec elementum odio eget ex porta, vel laoreet nisl fermentum.</p>
          </div>
        </div>
      </div>
      </div>
      <div className='col-md-4'>
      <div className='card'>
        <div className='card-body p-0'>
          <img src={cimg3} alt="classroom" className='cimg' />
          <div>
            <h4>Job Support</h4>
            <p>Curabitur ut est a mi fermentum tristique. Aliquam et ante odio. Donec elementum odio eget ex porta, vel laoreet nisl fermentum.</p>
          </div>
        </div>
      </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default card