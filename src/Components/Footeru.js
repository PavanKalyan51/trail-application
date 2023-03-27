import React from 'react'
import logo from './images/navlogo.png'
import { TbPlayerTrackNext } from "react-icons/tb";
import { MdContactMail } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { BiPhoneCall } from "react-icons/bi";
import { MdArrowForwardIos } from "react-icons/md";

const Footeru = () => {
    return (
        <div className='ftru'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 ftruu'>
                        <div className='col-md-3.5 ftri'>
                            <img src={logo} />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa consectetur assumenda est unde animi. Repellat quibusdam et ad aut molestias, facere maxime expedita aperiam sint.</p>
                            <button><TbPlayerTrackNext />Read More</button>
                        </div>
                        <div className='col-md-4'>
                            <h5 className='hst'>Contact</h5>
                            <p><MdContactMail className='icc'/>  #Koramangala, Banglore
                                Karnataka, INDIA</p>
                            <p><CiMail className='icc'/>  youremail@yourdomain.com</p>
                            <p> <BiPhoneCall className='icc'/>  +88 (0) 101 0000 000 </p>
                            <p>  +88 (0) 202 0000 001</p>
                        </div>
                        <div className='col-md-5'>
                            <h5 className='hst'>Quick Links</h5>
                            <div className='ullis'>
                            <ul className='lstyle'>
                                <li><a><MdArrowForwardIos className='icc'/>Online Classes</a></li>
                                <li><a><MdArrowForwardIos className='icc'/>Events</a></li>
                                <li><a><MdArrowForwardIos className='icc'/>Contact Us</a></li>
                                <li><a><MdArrowForwardIos className='icc'/>Login</a></li>
                                <li><a><MdArrowForwardIos className='icc'/> Terms And Conditions</a></li>
                            </ul>
                            <ul className='lstyle'>
                                <li><a><MdArrowForwardIos className='icc'/>Class Room Classes</a></li>
                                <li><a><MdArrowForwardIos className='icc'/>About Us</a></li>
                                <li><a><MdArrowForwardIos className='icc'/>Faq</a></li>
                                <li><a><MdArrowForwardIos className='icc'/>Sign Up</a></li>
                                <li><a><MdArrowForwardIos className='icc'/>Pravicy Policy</a></li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footeru