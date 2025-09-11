import '../styles/Footer.css'

function Footer() {
    return (
        <footer className="footer-glass">
            <div className="footer-content">
                <div className="footer-logo">
                    <span>©{new Date().getFullYear()} EduardoDev</span>
                </div>
                <div className="footer-info">
                    <span>Desenvolvedor Full Stack • React • Typescript</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
