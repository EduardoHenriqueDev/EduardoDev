import { useContext, useRef } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { FaPaintBrush, FaMobileAlt, FaServer, FaCogs, FaShoppingCart, FaUserFriends } from 'react-icons/fa';
import { useInView, motion } from 'framer-motion';
import '../styles/Competencies.css';

const iconMap = {
    FaPaintBrush,
    FaMobileAlt,
    FaServer,
    FaCogs,
    FaShoppingCart,
    FaUserFriends,
} as const;

type IconKey = keyof typeof iconMap;

function CompetenciesSection() {
    const { t } = useContext(LanguageContext);
    const habilidades = t.habilidades;
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    return (
        <section className="competencies-section">
            <h2 className="competencies-title">{t.habilidadesTitle}</h2>
            <div ref={ref} className="competencies-cards-glass">
                {habilidades.map((comp, idx) => {
                    const Icon = iconMap[comp.icon as IconKey];
                    return (
                        <motion.div
                            key={comp.label}
                            className="competency-glass-card"
                            initial={{ opacity: 0, y: 60 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                            transition={{ duration: 0.7, delay: isInView ? idx * 0.18 : 0, ease: 'easeOut' }}
                        >
                            <div className="competency-glass-bar" />
                            <div className="competency-glass-content">
                                <div className="competency-glass-header">
                                    <span className="competency-glass-icon-bg">
                                        {Icon && <Icon className="competency-glass-icon" />}
                                    </span>
                                    <span className="competency-glass-title">{comp.label}</span>
                                </div>
                                <div className="competency-glass-desc">{comp.desc}</div>
                            </div>
                            <div className="competency-glass-glow" />
                            <div className="competency-glass-borderglow" />
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}

export default CompetenciesSection;
