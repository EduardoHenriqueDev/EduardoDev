import '../styles/About.css'
import codingImage from '../assets/img/coding.png'
import { motion } from 'framer-motion';

function About() {
    return (
        <section className="about">
            <motion.div className="about-container"
                initial={{ opacity: 0, y: 80, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, ease: "backOut" }}
            >
                <div className="about-image">
                    <img src={codingImage} alt="Programação" />
                </div>
                <div className="about-content">
                    <h2>Sobre <strong>Mim</strong>...</h2>
                    <p>
                        Meu nome é <strong>Eduardo Henrique</strong>, moro na cidade de <strong>Itu, SP - Brasil</strong>. Sou um desenvolvedor apaixonado por transformar ideias em experiências digitais.
                        Com foco em desenvolvimento web e mobile, busco constantemente aprender novas tecnologias e aplicar soluções criativas em cada projeto.
                    </p>
                    <p>
                        Sou formado  <strong>Técnico em Desenvolvimento de Sistemas</strong> pela <strong>ETEC Martinho Di Ciero</strong>, e atualmente curso <strong>Análise e Desenvolvimento de Sistemas</strong> na <strong>FATEC Dom Amaury Castanho</strong>, ambas localizadas em Itu.
                    </p>
                    <p>
                        Tenho experiência com <strong>React</strong>, <strong>Node.js</strong>, <strong>TypeScript</strong> e outras ferramentas modernas do ecossistema JavaScript.
                    </p>
                </div>
            </motion.div>
        </section>
    )
}

export default About
