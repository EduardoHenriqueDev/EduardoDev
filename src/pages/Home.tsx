import '../styles/Home.css'
import icon from '../assets/img/profile.jpeg'
import { FaCheckCircle, FaClock, FaHtml5, FaCss3Alt, FaReact, FaNode } from 'react-icons/fa'
import { SiJavascript, SiTypescript } from 'react-icons/si'
import { IoLogoFirebase } from "react-icons/io5";
import { motion } from 'framer-motion';

function Home() {
    return (
        <section className="home">
            <motion.div className="home-container"
                initial={{ opacity: 0, y: 80, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, ease: "backOut" }}
            >
                <div className="hero-content">
                    <p className="intro">
                        <span className="highlight">Olá!</span> meu nome é
                    </p>
                    <h1 className="name">
                        <span className="highlight">Eduardo </span>Henrique
                    </h1>
                    <p className="description">
                        Sou um <span className="highlight">Desenvolvedor Mobile</span> e <span className="highlight">Full-Stack</span> apaixonado por tecnologia e soluções criativas.
                    </p>
                    <p className="formation">
                        <FaCheckCircle className="icon" />
                        Técnico em Desenvolvimento de Sistemas na ETEC Itu.
                    </p>
                    <p className="formation">
                        <FaClock className="icon" />
                        Análise e Desenvolvimento de Sistemas na FATEC Itu.
                    </p>

                    <div className="skills-section">
                        <div className="skills-icons">
                            <FaHtml5 className="tech-icon html" title="HTML5" />
                            <FaCss3Alt className="tech-icon css" title="CSS3" />
                            <SiJavascript className="tech-icon js" title="JavaScript" />
                            <SiTypescript className="tech-icon ts" title="TypeScript" />
                            <FaReact className="tech-icon react" title="React" />
                            <FaNode className="tech-icon node.js" title="Node.js" />
                            <IoLogoFirebase className="tech-icon firebase" title="Firebase" />
                        </div>
                    </div>
                </div>

                <div className="hero-image">
                    <img src={icon} alt="Eduardo" />
                </div>
            </motion.div>
        </section>
    )
}

export default Home
