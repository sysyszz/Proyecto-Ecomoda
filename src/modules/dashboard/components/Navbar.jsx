import React from 'react';
import Logo from '../../../shared/assets/Logo.webp';
import './Navbar.css';

const Navbar = ({ username, onLogout }) => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <img src={Logo} alt="Logo" className="navbar-logo" />
                <span className="navbar-title">Dashboard</span>
            </div>
            <div className="navbar-user">
                <span className="navbar-welcome">Hola, <strong>{username}</strong></span>
                <button 
                    onClick={onLogout}
                    className="logout-button"
                >
                    Cerrar Sesión
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
