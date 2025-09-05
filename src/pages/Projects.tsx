import '../styles/Projects.css';
import { GrDeploy } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { FiX } from 'react-icons/fi';
import fitPilot1 from '../assets/img/projects/dashboard_fitpilot1.png';
import fitPilot2 from '../assets/img/projects/dashboard_fitpilot2.png';
import daybyday1 from '../assets/img/projects/daybyday.png';
import daybyday2 from '../assets/img/projects/daybyday2.png';
import ecomerce from '../assets/img/projects/ecomerce.png';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useContext } from 'react';
import Socials from '../components/Socials';
import { LanguageContext } from '../contexts/LanguageContext';

type Project = {
    id: number;
    title: string;
    images: string[];
    techs: string[];
    links: {
        site?: string;
        github: string;
    };
};


const projectsData: Project[] = [
    {
        id: 1,
        title: "FitPilot Dashboard",
        images: [fitPilot1, fitPilot2],
        techs: ["HTML", "CSS", "JavaScript", "Firebase"],
        links: {
            site: "https://dashboard-fitpilot.vercel.app/pages/login.html",
            github: "https://github.com/EduardoHenriqueDev/dashboard-fitpilot.git"
        }
    },
    {
        id: 2,
        title: "DayByDay",
        images: [daybyday1, daybyday2],
        techs: ["PHP", "JavaScript", "CSS", "SQL"],
        links: {
            github: "https://github.com/EduardoHenriqueDev/TCC-DAYBYDAY.git"
        }
    },
    {
        id: 3,
        title: "E-Commerce",
        images: [ecomerce],
        techs: ["React.js", "TypeScript", "CSS", "Java", "Spring-Boot"],
        links: {
            github: "https://github.com/EduardoHenriqueDev/frontend_estoque_ecomerce.git"
        }
    }
];

function Projects() {
    const { t } = useContext(LanguageContext);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        if (selectedProject) {
            setCurrentImage(0);
        }
    }, [selectedProject]);

    return (
        <section className="projects">
            <Socials />

            <motion.div className="projects-container"
                initial={{ opacity: 0, y: 80, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, ease: "backOut" }}
            >
                <h2>{t.projectsTitle}</h2>
                <div className="projects-grid">
                    {projectsData.map(project => (
                        <div key={project.id} className="project-card" onClick={() => setSelectedProject(project)}>
                            <div className="project-image-hover">
                                <img src={project.images[0]} alt={project.title} className="default-img" />
                                {project.images[1] && (
                                    <img src={project.images[1]} alt={`${project.title} Hover`} className="hover-img" />
                                )}
                            </div>
                            <h3>{project.title}</h3>
                            <div className="tech-badges">
                                {project.techs.map((tech, index) => (
                                    <span key={index} className="badge">{tech}</span>
                                ))}
                            </div>
                            <div className="project-links">
                                {project.links.site && (
                                    <a href={project.links.site} target="_blank" rel="noopener noreferrer">
                                        <GrDeploy className='icon' /> {t.viewSite}
                                    </a>
                                )}
                                <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                                    <FaGithub className='icon' /> {t.github}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            className="modal-content"
                            initial={{ y: 100, opacity: 0, scale: 0.9 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: 50, opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            onClick={e => e.stopPropagation()}
                        >
                            <h2>{selectedProject.title}</h2>
                            {/* slider e tech badges */}
                            <button className="close-btn" onClick={() => setSelectedProject(null)}>
                                <FiX size={24} />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

export default Projects;
