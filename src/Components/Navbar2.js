import React from 'react'
import './css/style.css'
import logo from './images/navlogo.png'
import { BsSearch } from "react-icons/bs";
import img from './images/white-bg1.jpg'

const topbar = () => {
  return (
    <div className='Navbar2'>
<nav className="navbar navbar-expand-lg navbar-light bg-white">
  <a className="navbar-brand" href="#"><img src={logo} alt="Logo" id="Logo"/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About Us</a>
      </li>
      <li className="nav-item">
      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          Courses
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Pages</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Blog</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contact</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><BsSearch/></a>
      </li>
    </ul>
  </div>
</nav>

    </div>
  )
}

export default topbar