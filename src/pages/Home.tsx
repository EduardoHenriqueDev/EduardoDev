import "../styles/Home.css"
import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import Socials from '../components/Socials';
import icon from '../assets/img/profile.jpeg';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaClock, FaHtml5, FaCss3Alt, FaReact, FaNode, FaGithub } from 'react-icons/fa';
import { RiSupabaseLine } from "react-icons/ri";
import { SiJavascript, SiTypescript, SiNextdotjs, SiVite } from 'react-icons/si';
import { IoLogoFirebase, IoLogoVercel } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";
import { BiLogoSpringBoot } from "react-icons/bi";

function Home() {
    const { t } = useContext(LanguageContext);

    return (
        <section className="home">
            <Socials />

            <motion.div className="home-container"
                initial={{ opacity: 0, y: 80, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, ease: "backOut" }}
            >
                <div className="hero-content">
                    <p className="intro">
                        <span className="highlight">{t.hello}</span> {t.intro}
                    </p>

                    <h1 className="name">
                        <span className="highlight">{t.nameHighlight}</span>{t.nameRest}
                    </h1>

                    <p className="description">{t.description}</p>

                    <p className="formation">
                        <FaCheckCircle className="icon" /> {t.formation1}
                    </p>
                    <p className="formation">
                        <FaClock className="icon" /> {t.formation2}
                    </p>

                    <div className="skills-section">
                        <div className="skills-icons">
                            {/* Frontend */}
                            <FaHtml5 className="tech-icon html" title={t.skills.html} />
                            <FaCss3Alt className="tech-icon css" title={t.skills.css} />
                            <SiJavascript className="tech-icon js" title={t.skills.js} />
                            <SiTypescript className="tech-icon ts" title={t.skills.ts} />
                            <FaReact className="tech-icon react" title={t.skills.react} />
                            <SiNextdotjs className="tech-icon nextjs" title={t.skills.nextjs} />
                            <SiVite className="tech-icon vite" title={t.skills.vite} />

                            {/* Backend */}
                            <FaNode className="tech-icon node" title={t.skills.node} />
                            <BiLogoSpringBoot className="tech-icon springboot" title={t.skills.springboot} />
                            <IoLogoFirebase className="tech-icon firebase" title={t.skills.firebase} />
                            <RiSupabaseLine className="tech-icon supabase" title={t.skills.supabase} />

                            {/* Ferramentas */}
                            <IoLogoVercel className="tech-icon vercel" title={t.skills.vercel} />
                            <FaGithub className="tech-icon github" title={t.skills.github} />
                            <VscVscode className="tech-icon vscode" title={t.skills.vscode} />
                        </div>
                    </div>
                </div>

                <div className="hero-image">
                    <img src={icon} alt="Eduardo" />
                </div>
            </motion.div>
        </section>
    );
}

export default Home;
