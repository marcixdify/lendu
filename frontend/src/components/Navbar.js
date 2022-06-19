import React from 'react'
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <div>Navbar
      <ul>
        <li><Link to="/">Strona główna</Link></li>
        <li><Link to="/notice/add">Dodaj ogłoszenie</Link></li>
      </ul>

    </div>
    
  )
}

export default Navbar