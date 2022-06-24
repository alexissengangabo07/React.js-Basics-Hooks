import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <div className='menu-container'>
      <ul className='menu'>
        <li>
          <Link to={'/'} style={linkSyle} className="link">Home</Link>
        </li>
        <li>
          <Link to={'/client'} style={linkSyle} className="link">Clients</Link>
        </li>
        <li>
          <Link to={'/incrementeur'} style={linkSyle} className="link">Incrementeur</Link>
        </li>
      </ul>
    </div>
  )
}

const linkSyle = {
  
}

export default Navbar