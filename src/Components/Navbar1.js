import React from 'react'
import './css/style.css'

import { BsTwitter } from "react-icons/bs";
import { FaTelegramPlane,FaGooglePlusG,FaFacebookF,FaLinkedinIn,FaInstagram } from 'react-icons/fa';
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineUserAdd } from "react-icons/ai";
import {HiOutlineDocumentText} from "react-icons/hi";

function Navbar1() {
    return (
      <div className='navbar1'>
          <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-6 snavi'>
                   <ul  className='gright'>
                    <li className="tleft"><a> <FaTelegramPlane/> support@konnectplugins.com</a></li>
                    <li className="tleft"><a><FiPhoneCall/></a>(040) 123-4567</li>
                    
                   </ul>
                </div>
                <div className='col-md-6 '>
                   <ul className='gright'>
                   
                    <li className="tright"><a> <AiOutlineUserAdd/>Log In</a></li>
                    <li className="tright"><a><HiOutlineDocumentText/>Register</a></li>
                    <li className='cr'><BsTwitter/></li>
                    <li className='cr'><FaGooglePlusG/></li>
                    <li className='cr'><FaFacebookF/></li>
                    <li className='cr'><FaLinkedinIn/></li>
                    <li className='cr'><FaInstagram/></li>
                   </ul>
                </div>
            </div>
        </div>
        <div>
      
        </div>
      </div>
      

    )
}

export default Navbar1