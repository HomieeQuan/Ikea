import React from 'react'
import './Navbar.css'
import logo from '../Images/ikea-1-logo.svg'
import basketIcon from '../Images/basketIcon.avif'
import heartIcon from '../Images/heartIcon.webp'
import hamburgerIcon from '../Images/hamburgerIcon.jpeg'
import searchIcon from '../Images/searchIcon.jpeg'
export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={hamburgerIcon} alt="Menu" />
            <img src={logo}></img>
            <p>Shoppper</p>
        </div>
        <ul className='nav-menu'>
            <li>Products</li>
            <li>Home Decor</li>
            <li>Rooms</li>
            <li>Holiday Shop</li>
            <li>Plannning Tools</li>
            <li>Deals</li>
        </ul>
        <div className='nav-login-cart'>
            <button>Hej! Log in or sign up</button>
            <img src={basketIcon} alt="basket" />
            <img src={heartIcon} alt="" />
            
        </div>
    </div>
  )
}
