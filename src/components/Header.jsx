import React from 'react'
import { TiThMenu } from "react-icons/ti";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
  <div className="container
  ">
    <a className="navbar-brand" href="#">
      <h2 className='text-light poppins-bold'>CRM</h2>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <TiThMenu className='text-light menu' />

    </button>
    <div className="collapse navbar-collapse link-header" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">Ana Səhifə</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link" href="#">Servis</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Əlaqə</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Məlumat</a>
        </li>
      
       
      </ul>

      <div className="button  d-flex ms-auto  ">
      <button class="animated-button">
  <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
  </svg>
  <span class="text">İstifadəçi Əlavə Et</span>
  <span class="circle"></span>
  <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
  </svg>
</button>
      </div>
    
    </div>
  </div>
</nav>

  )
}

export default Header