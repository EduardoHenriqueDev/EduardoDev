import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { motion } from 'framer-motion';
import '../styles/Home.css';

const Socials = () => {
    const socials = [
        { icon: <FaGithub />, url: 'https://github.com/EduardoHenriqueDev', name: 'GitHub' },
        { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/eduardo-henrique-14584128b/', name: 'LinkedIn' },
        { icon: <FaInstagram />, url: 'https://instagram.com/_e.lopesz', name: 'Instagram' },
        { icon: <SiGmail />, url: 'mailto:eduhenrimacedo@gmail.com', name: 'Email' },
    ];

    return (
        <motion.div
            className="socials-floating-bar"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "backOut" }}
        >
            {socials.map((social) => (
                <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label={social.name}
                >
                    {social.icon}
                </a>
            ))}
        </motion.div>
    );
};

export default Socials;
