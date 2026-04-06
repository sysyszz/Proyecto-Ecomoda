import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import Logo from '../../../shared/assets/Logo.webp'

export const Navbar = () => {
  return (
    <nav>
        <li><img src={Logo} alt="" width="50px"></img></li>
        <li>
            <Link to="/login">Iniciar Sesion</Link>
        </li>
        <li>
            <Link to="/nosotros">Nosotros</Link>
        </li>
        
    </nav>
  )
}

export default Navbar;
