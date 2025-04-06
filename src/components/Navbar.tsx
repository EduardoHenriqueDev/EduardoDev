import '../styles/Navbar.css'
import logo from '../assets/img/logo.png'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img src={logo} alt="Logo" className="logo-img" />
                </div>

                <div className="menu-icon" onClick={toggleMenu}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>

                <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
                    <li><NavLink to="/" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>Início</NavLink></li>
                    <li><NavLink to="/About" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>Sobre</NavLink></li>
                    <li><a href="#" onClick={() => setMenuOpen(false)}>Contato</a></li>
                    <li><a href="#" onClick={() => setMenuOpen(false)}>Projetos</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
