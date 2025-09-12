import '../styles/Navbar.css';
import logo from '../assets/img/logo.png';
import { NavLink } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { LanguageContext } from '../contexts/LanguageContext';
import Socials from './Socials';
import React from 'react';

const HamburgerMenu: React.FC<{ open: boolean; toggle: () => void }> = ({ open, toggle }) => (
    <div className={`menu-icon ${open ? "open" : ""}`} onClick={toggle}>
        <svg viewBox="0 0 32 32">
            <path
                className="line line-top-bottom"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            />
            <path className="line" d="M7 16 27 16" />
        </svg>
    </div>
);

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
    const { toggleLanguage, language } = useContext(LanguageContext);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth > 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Logo */}
                <motion.div
                    className="navbar-logo"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <NavLink to="/"><img src={logo} alt="Logo" className="logo-img" /></NavLink>
                </motion.div>

                {/* Desktop links + Socials agrupados */}
                {isDesktop ? (
                    <div className="navbar-right-group">
                        <motion.ul
                            className="navbar-links"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                        >
                            <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>{language === 'pt' ? 'Início' : 'Home'}</NavLink></li>
                            <li><NavLink to="/About" className={({ isActive }) => isActive ? 'active' : ''}>{language === 'pt' ? 'Sobre' : 'About'}</NavLink></li>
                            <li><NavLink to="/Projects" className={({ isActive }) => isActive ? 'active' : ''}>{language === 'pt' ? 'Projetos' : 'Projects'}</NavLink></li>
                        </motion.ul>
                        <Socials />
                        <button onClick={toggleLanguage} className="language-switch">{language === 'pt' ? 'EN' : 'PT'}</button>
                    </div>
                ) : (
                    <div className="mobile-menu-controls">
                        <button onClick={toggleLanguage} className="language-switch">{language === 'pt' ? 'EN' : 'PT'}</button>
                        <div className="menu-icon" onClick={toggleMenu}>
                            <HamburgerMenu open={menuOpen} toggle={toggleMenu} />
                        </div>
                    </div>
                )}

                {/* Mobile menu links */}
                {!isDesktop && (
                    <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
                        <li><NavLink to="/" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>{language === 'pt' ? 'Início' : 'Home'}</NavLink></li>
                        <li><NavLink to="/About" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>{language === 'pt' ? 'Sobre' : 'About'}</NavLink></li>
                        <li><NavLink to="/Projects" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>{language === 'pt' ? 'Projetos' : 'Projects'}</NavLink></li>
                    </ul>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
