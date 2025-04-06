import '../styles/Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p>&copy; {new Date().getFullYear()} Meu Nome. Todos os direitos reservados.</p>
                <div className="footer-links">
                    <a href="#">LinkedIn</a>
                    <a href="#">GitHub</a>
                    <a href="#">Email</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
