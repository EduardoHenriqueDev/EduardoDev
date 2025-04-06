import '../styles/Contact.css'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { SiGmail } from "react-icons/si";

function Contact() {
    return (
        <section className="contact">
            <div className="contact-container">
                <h2>Entre em <strong>Contato</strong></h2>
                <p>Se você quiser bater um papo, colaborar ou tiver alguma dúvida, estou <strong>disponível</strong> nos canais abaixo:</p>

                <div className="contact-cards">
                    <a href="mailto:eduhenrimacedo@gmail.com" className="contact-card" target="_blank" rel="noopener noreferrer">
                        <SiGmail className="icon" />
                        <span>Gmail</span>
                    </a>

                    <a href="https://www.instagram.com/_e.lopesz/" className="contact-card">
                        <FaInstagram className="icon" />
                        <span>Instagram</span>
                    </a>

                    <a href="https://www.linkedin.com/in/eduardo-henrique-14584128b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BfUVR%2BiVXQq%2BKv%2FXx3zU%2FIg%3D%3D" className="contact-card" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="icon" />
                        <span>LinkedIn</span>
                    </a>

                    <a href="https://github.com/EduardoHenriqueDev" className="contact-card" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="icon" />
                        <span>GitHub</span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact
