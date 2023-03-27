import React from 'react'
import './trail.css'
import img1 from './images/news1.jpg'
import img2 from './images/news2.jpg'
import img3 from './images/news3.jpg'
import { BsCalendar2Check } from "react-icons/bs";

const Body4 = () => {
    return (
        <div className='section4'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='offer'>
                            <h5>OFFERING COURSES</h5>
                            <span className='linestyle'></span>
                            <span className='line2'></span>
                            <p className='pstyle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque erat, ultrices cursus nisi at, hendrerit tristique.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='isection4'>
                <div className='container'>
                    <div className='row'>
                        <div className=' cn'>
                                <div className="card card1">
                                    <div className="card-image">
                                        <img src={img1} alt="Card Image" />
                                    </div>
                                    <div className="card-content">
                                        <h2>Course One</h2>
                                        <p><BsCalendar2Check/>  3-4 weaks</p>
                                       
                                        <a href="#" className="btn">Attend</a>
                                    </div>
                                    <span className='imgtop'>$150</span>
                                </div>
                                <div className="card card1">
                                    <span className='imgtop'>$110</span>
                                    <div className="card-image">
                                        <img src={img2} alt="Card Image" />
                                        
                                    </div>
                                    <div className="card-content">
                                        <h2>Course Two</h2>
                                        <p><BsCalendar2Check/>  3-4 weaks</p>
                                        <span className='imgtop'>$110</span>
                                        <a href="#" className="btn">Attend</a>
                                    </div>
                                   
                                </div>
                                <div className="card card1">
                                    <div className="card-image">
                                        <img src={img3} alt="Card Image" />
                                       
                                    </div>
                                    <div className="card-content">
                                        <h2>CourseThree</h2>
                                        <p><BsCalendar2Check/>  4-5 weaks</p>
                                        <a href="#" className="btn">Attend</a>
                                    </div>
                                    <span className='imgtop'>$90</span>
                                </div>
                            

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Body4