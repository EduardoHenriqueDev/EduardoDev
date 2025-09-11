import '../styles/Navbar.css';
import logo from '../assets/img/logo.png';
import { NavLink } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { LanguageContext } from '../contexts/LanguageContext';
import Socials from './Socials';

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
                            {menuOpen ? <FaTimes /> : <FaBars />}
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
