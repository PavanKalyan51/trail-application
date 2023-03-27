import React from 'react'
import { BsTwitter} from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import {AiOutlineGooglePlus,AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='logos'>
        <BsTwitter/>
        <FaFacebookF/>
        <AiOutlineGooglePlus/>
        <AiOutlineInstagram/>
        </div>
        <div className='copyr'>
        <h6>© Copyright 2017 Konnect plugins</h6>
        </div>
    </div>
  )
}

export default Footer