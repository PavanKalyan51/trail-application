import React from 'react';
import logo from './images/envato-market.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'
 

const Navbar = () => {
  return (
    <div className='nava'>
      <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-12 p-0'>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <a className="navbar-brand" href="#">
        <img src={logo} className="navi" />
      </a>
      <button className="button1" type="button" >
        Buy Now
      </button>
    </nav>
            </div>
        </div>
    </div>
    </div>
    
  );
}

export default Navbar;