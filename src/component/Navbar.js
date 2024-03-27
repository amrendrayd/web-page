import React from 'react';
import './Navbar.scss'

function Navbar() {
  return (
    <div className='Container'>
        <div className="Navbar">
            <h2 className='Name'>Amrendra</h2>
            <ul className='Feature'>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar;
