import { useContext, useRef } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { motion, useInView } from 'framer-motion';
import icon from '../assets/img/profile.jpeg';
import { FaCheckCircle, FaClock, FaReact, FaNode, FaArrowDown } from 'react-icons/fa';
import { RiSupabaseLine, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiNextdotjs, SiVite } from 'react-icons/si';
import { IoLogoFirebase } from "react-icons/io5";

function HeroSection() {
    const { t } = useContext(LanguageContext);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <>
            <motion.div
                ref={ref}
                className="home-container"
                initial={{ opacity: 0, y: 80, scale: 0.8 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
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
                            <RiTailwindCssFill className="tech-icon tailwind" title={t.skills.tailwind} />
                            <SiNextdotjs className="tech-icon nextjs" title={t.skills.nextjs} />
                            <SiVite className="tech-icon vite" title={t.skills.vite} />

                            {/* Backend */}
                            <FaNode className="tech-icon node" title={t.skills.node} />
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
