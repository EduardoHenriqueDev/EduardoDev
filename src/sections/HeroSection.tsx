import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import icon from '../assets/img/profile.jpeg';
import { FaCheckCircle, FaClock, FaReact, FaNode, FaGithub, FaArrowDown } from 'react-icons/fa';
import { RiSupabaseLine } from "react-icons/ri";
import { SiJavascript, SiTypescript, SiNextdotjs, SiVite } from 'react-icons/si';
import { IoLogoFirebase, IoLogoVercel } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";
import { BiLogoSpringBoot } from "react-icons/bi";

function HeroSection() {
    const { t } = useContext(LanguageContext);

    return (
        <>
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
                    <span className="highlight">{t.nameHighlight}</span><span className="capitol">{t.nameRest}</span>
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
                        <SiTypescript className="tech-icon ts" title={t.skills.ts} />
                        <FaReact className="tech-icon react" title={t.skills.react} />
                        <SiNextdotjs className="tech-icon nextjs" title={t.skills.nextjs} />
                        <SiVite className="tech-icon vite" title={t.skills.vite} />

                        {/* Backend */}
                        <FaNode className="tech-icon node" title={t.skills.node} />
                        <BiLogoSpringBoot className="tech-icon springboot" title={t.skills.springboot} />
                        <IoLogoFirebase className="tech-icon firebase" title={t.skills.firebase} />
                        <RiSupabaseLine className="tech-icon supabase" title={t.skills.supabase} />

                    </div>
                </div>
            </div>

            <div className="hero-image">
                <img src={icon} alt="Eduardo" />
            </div>
        </motion.div>
        <div className="scroll-down-arrow">
            <FaArrowDown />
        </div>
        </>
    );
}

export default HeroSection;
