import React from 'react'
import './css/style.css'
import img1 from './images/gallery-one.jpg'
import img2 from './images/gallery-two.jpg'
import img3 from './images/gallery-three.jpeg'
import img4 from './images/gallery-four.jpeg'

function Gallery() {
    return (
        <div className='gallery'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='galleryt'>
                            <h5>GALLERY</h5>
                            <span className='linestyle'></span>
                            <span className='line2'></span>
                            <p className='pstyle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque erat, ultrices cursus nisi at, hendrerit tristique.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container galleri'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='galleryi'>
                            <div className='col-md-03'>
                                <img src={img1} />
                            </div>
                            <div className='col-md-02'>
                                <img src={img2} />
                            </div>
                            <div className='col-md-03'>
                                <img src={img3} />
                            </div>
                            <div className='col-md-02'>
                                <img src={img4} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button className='galleryb'>View More Gallery</button>
            </div>
        </div >
    )
}

export default Gallery