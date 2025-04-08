import '../styles/Navbar.css'
import logo from '../assets/img/logo.png'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { motion } from 'framer-motion'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    // Atualiza o estado quando a janela muda de tamanho
    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 768)
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Logo animada da esquerda */}
                <motion.div
                    className="navbar-logo"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <img src={logo} alt="Logo" className="logo-img" />
                </motion.div>

                <div className="menu-icon" onClick={toggleMenu}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>

                {isDesktop ? (
                    <motion.ul
                        className="navbar-links"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                    >
                        <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Início</NavLink></li>
                        <li><NavLink to="/About" className={({ isActive }) => isActive ? 'active' : ''}>Sobre</NavLink></li>
                        <li><NavLink to="/Contact" className={({ isActive }) => isActive ? 'active' : ''}>Contato</NavLink></li>
                        <li><NavLink to="/Projects" className={({ isActive }) => isActive ? 'active' : ''}>Projetos</NavLink></li>
                    </motion.ul>
                ) : (
                    <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
                        <li><NavLink to="/" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>Início</NavLink></li>
                        <li><NavLink to="/About" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>Sobre</NavLink></li>
                        <li><NavLink to="/Contact" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>Contato</NavLink></li>
                        <li><NavLink to="/Projects" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>Projetos</NavLink></li>
                    </ul>
                )}
            </div>
        </nav>
    )
}

export default Navbar
