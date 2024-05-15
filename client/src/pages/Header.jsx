import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
       
      <ul>
      <li><img className='logo' src='../img/logo.jpg'></img></li>
      <li > <Link to="/">Home</Link>  </li>
      <li > <Link to="/Login">Login</Link>  </li>
      <li > <Link to="/Register">Register</Link> </li>
      <li > <Link to="/userRegister">userRegister</Link> </li>
      <li > <Link to="/Videos">Videos</Link> </li>
      <li > <Link to="/MYProfile">MY Profile</Link> </li>
      <li><a href="https://www.instagram.com/_noya_tzur_" target="_blank" rel="noopener noreferrer">Instagram</a></li>

      </ul>  
      </nav>
      <Outlet />
    </div>
   
  )
}

export default Header
