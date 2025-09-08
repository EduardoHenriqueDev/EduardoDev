import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { FaPaintBrush, FaMobileAlt, FaServer, FaCogs, FaShoppingCart, FaUserFriends } from 'react-icons/fa';
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
    return (
        <section className="competencies-section">
            <h2 className="competencies-title">{t.habilidadesTitle}</h2>
            <div className="competencies-cards-glass">
                {habilidades.map((comp) => {
                    const Icon = iconMap[comp.icon as IconKey];
                    return (
                        <div key={comp.label} className="competency-glass-card">
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
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default CompetenciesSection;
