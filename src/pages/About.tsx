import '../styles/About.css'
import codingImage from '../assets/img/coding.png'

function About() {
    return (
        <section className="about">
            <div className="about-container">
                <div className="about-image">
                    <img src={codingImage} alt="Programação" />
                </div>
                <div className="about-content">
                    <h2>Sobre Mim</h2>
                    <p>
                        Meu nome é <strong>Eduardo Henrique</strong>, moro na cidade de <strong>Itu, SP - Brasil</strong>. Sou um desenvolvedor apaixonado por transformar ideias em experiências digitais.
                        Com foco em desenvolvimento web e mobile, busco constantemente aprender novas tecnologias e aplicar soluções criativas em cada projeto.
                    </p>
                    <p>
                        Sou formado Técnico em Desenvolvimento de Sistemas pela <strong>ETEC Martinho Di Ciero</strong>, e atualmente curso <strong>Análise e Desenvolvimento de Sistemas</strong> na <strong>FATEC Dom Amaury Castanho</strong>, ambas localizadas em Itu.
                    </p>
                    <p>
                        Tenho experiência com <strong>React</strong>, <strong>Node.js</strong>, <strong>TypeScript</strong> e outras ferramentas modernas do ecossistema JavaScript.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About
