import '../styles/Projects.css';
import { GrDeploy } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { FiX } from 'react-icons/fi';
import fitPilot from '../assets/img/projects/dashboard_fitpilot2.png';
import daybyday from '../assets/img/projects/daybyday.png';
import glv from '../assets/img/projects/glv.png';
import ecomerce from '../assets/img/projects/ecomerce.png';
import delivery from '../assets/img/projects/delivery.png';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useContext } from 'react';
import Socials from '../components/Socials';
import { LanguageContext } from '../contexts/LanguageContext';
import ProjectModal from "../components/ProjectModal";

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
        images: [fitPilot],
        techs: ["HTML", "CSS", "JavaScript", "Firebase"],
        links: {
            site: "https://dashboard-fitpilot.vercel.app/pages/login.html",
            github: "https://github.com/EduardoHenriqueDev/dashboard-fitpilot.git"
        }
    },
    {
        id: 2,
        title: "DayByDay",
        images: [daybyday],
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
    },
    {
        id: 4,
        title: "GLV Informática e Desenvolvimento",
        images: [glv],
        techs: ["React", "TypeScript", "TailwindCSS", "Next.js"],
        links: {
            site: "https://www.glvinformatica.com.br/",
            github: "https://github.com/devcauagalvao/siteglv.git"
        }
    },
    {
        id: 5,
        title: "Delivery",
        images: [delivery],
        techs: [
            "Next.js",
            "TypeScript",
            "TailwindCSS",
            "Supabase",
            "Framer Motion",
            "Leaflet",
            "OpenStreetMap",
            "React Hook Form",
            "Zod",
            "Vitest",
            "Testing Library"
        ],
        links: {
            site: "https://delivery-lake.vercel.app/",
            github: "https://github.com/devcauagalvao/delivery.git"
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
                <h2 dangerouslySetInnerHTML={{ __html: t.projectsTitle }} />
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
                                {project.techs.slice(0, 4).map((tech, index) => (
                                    <span key={index} className="badge">{tech}</span>
                                ))}
                                {project.techs.length > 4 && (
                                    <span style={{ marginLeft: 8, fontWeight: 500 }}>mais ...</span>
                                )}
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
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                        t={t}
                    />
                )}
            </AnimatePresence>

        </section>
    );
}

export default Projects;
