import React from 'react'
import'./navbar.css'
import logo_light from '../assets/imgo.png'
import search_icon_light from '../assets/search-w.png'
import { Link } from 'react-router-dom';


const Navbar = () => {

  return (
    <div className='navbar'>
        <img src={logo_light}
         alt="" className='logo' /> 

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/Courses">Courses</Link></li>
        <li><Link to="/Quiz">Quiz</Link></li>
        <li><Link to="/about">Register</Link></li>
        <li><Link to="/Login">Connexion</Link></li>
        <li><Link to="/">Logout</Link></li>
      </ul>
    
  



        <div className='search-box'>
            <input type="text" placeholder='search' />
            <img src={search_icon_light} alt="" />
        </div>
      
    </div>
    
  )
}

export default Navbar