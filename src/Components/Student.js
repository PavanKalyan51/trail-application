import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import imag from './images/bg.png'
import imag1 from './images/student-2.png'
import imag2 from './images/student-3.png'

function Student() {
  return (
    <div className='student'>
          <Splide options={ { rewind: true } } aria-label="React Splide Example">
             <SplideSlide className='div1'>
              <div className='col-md-6 divs1'>
              <h2>Online and Class Room Training</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in tincidunt mauris. Etiam arcu enim, laoreet vitae orci vel, rutrum feugiat nibh. Integer feugiat ligula tellus, non pulvinar justo pharetra eu. Nullam vehicula lorem ut diam tincidunt sagittis. Morbi est ligula, posuere in laoreet ac, porta porttitor dui</p>
              <button className='vbutton'>SHOW MORE</button>
              </div>
              <div className='col-md-6'>
              <img src={imag} alt="Image 1" className=' imagg'/>
              </div>
              &nbsp;
             </SplideSlide>
             <SplideSlide className='div1'>
             <div className='col-md-6'>
               <img src={imag1} alt="Image 2" className=' imagg'/>
               </div>
              <div className='col-md-6 divs2'>
              <h2>Based on Bootstrap</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in tincidunt mauris. Etiam arcu enim, laoreet vitae orci vel, rutrum feugiat nibh. Integer feugiat ligula tellus, non pulvinar justo pharetra eu. Nullam vehicula lorem ut diam tincidunt sagittis. Morbi est ligula, posuere in laoreet ac, porta porttitor dui</p>
              <button className='vbutton'>SHOW MORE</button>
              </div>
              &nbsp;
             </SplideSlide>
             <SplideSlide className='div1'>
              
              <div className='col-md-6 divs3'>
              <h2>Clean and Flat</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in tincidunt mauris. Etiam arcu enim, laoreet vitae orci vel, rutrum feugiat nibh. Integer feugiat ligula tellus, non pulvinar justo pharetra eu. Nullam vehicula lorem ut diam tincidunt sagittis. Morbi est ligula, posuere in laoreet ac, porta porttitor dui</p>
              <button className='vbutton'>SHOW MORE</button>
              </div>
               <div className='col-md-6'>
               <img src={imag2} alt="Image 3" className=' imagg'/>
               </div>
             </SplideSlide>
           </Splide>
          </div>
  )
}

export default Student