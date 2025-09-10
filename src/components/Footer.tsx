import '../styles/Footer.css'

function Footer() {
    return (
        <footer className="footer-glass">
            <div className="footer-content">
                <div className="footer-logo">
                    <span>©{new Date().getFullYear()}Eduardo Dev</span>
                </div>
                <div className="footer-socials">
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="mailto:contato@email.com" aria-label="Email">
                        <i className="fa-solid fa-envelope"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
