import '../styles/Navbar.css'
import logo from '../assets/img/logo.png'
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img src={logo} alt="Logo" className="logo-img" />
                </div>
                <ul className="navbar-links">
                    <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Início</NavLink>
                    </li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Contato</a></li>
                    <li><a href="#">Projetos</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
