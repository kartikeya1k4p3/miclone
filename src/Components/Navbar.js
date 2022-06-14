import React from 'react'
import '../Styles/Navbar.css'
import  logo from '../Data/data.json';
// import {Link} from 'react-router-dom'; 

const searchIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M19.6 21 13.3 14.7Q12.55 15.3 11.575 15.65Q10.6 16 9.5 16Q6.775 16 4.888 14.113Q3 12.225 3 9.5Q3 6.775 4.888 4.887Q6.775 3 9.5 3Q12.225 3 14.113 4.887Q16 6.775 16 9.5Q16 10.6 15.65 11.575Q15.3 12.55 14.7 13.3L21 19.6ZM9.5 14Q11.375 14 12.688 12.688Q14 11.375 14 9.5Q14 7.625 12.688 6.312Q11.375 5 9.5 5Q7.625 5 6.312 6.312Q5 7.625 5 9.5Q5 11.375 6.312 12.688Q7.625 14 9.5 14Z"/></svg>

const Navbar = () => {
  return (
    <div className='nav'>

      <div className="logo">

         <a href="/" > 
         
            <img id="logoImage" src={logo.logo} alt="Not" />
         </a>

         </div>

         <a className='navlinks' href='/miphones'>Mi Phones</a>
         <a className='navlinks' href='/redmiphones'>Redmi Phones</a>
         <a className='navlinks' href='/tv'>TV</a>
         <a className='navlinks' href='/laptops'>Laptops</a>
         <a className='navlinks' href='/lifeStyle'>Fitness & Lifestyle</a>
         <a className='navlinks' href='/home'>Home</a>
         <a className='navlinks' href='/audio'>Radio</a>
         <a className='navlinks' href='/accessories'>Accessories</a>

         <div className='searchBox'>
         <input type='text' name='search' placeholder='Search Products' />
         {searchIcon}

         </div>

    </div>

  )
}

export default Navbar;