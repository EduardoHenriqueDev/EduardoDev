import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import { GrDeploy } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { useState, useEffect } from "react";
import "../styles/ProjectsModal.css";

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

interface ProjectModalProps {
    project: Project;
    onClose: () => void;
    t: any;
}

function ProjectModal({ project, onClose, t }: ProjectModalProps) {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        setCurrentImage(0);
    }, [project]);

    return (
        <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className="modal-content"
                initial={{ y: 100, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 50, opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
            >
                <button className="close-btn" onClick={onClose}>
                    <FiX size={24} />
                </button>

                {/* Layout em duas colunas */}
                <div className="modal-left">
                    <div className="modal-slider">
                        <div className="slider-wrapper">
                            <img
                                src={project.images[currentImage]}
                                alt={project.title}
                            />

                            {project.images.length > 1 && (
                                <>
                                    <button
                                        className="slider-btn prev"
                                        onClick={() =>
                                            setCurrentImage((prev) =>
                                                prev === 0
                                                    ? project.images.length - 1
                                                    : prev - 1
                                            )
                                        }
                                    >
                                        ◀
                                    </button>
                                    <button
                                        className="slider-btn next"
                                        onClick={() =>
                                            setCurrentImage((prev) =>
                                                prev === project.images.length - 1
                                                    ? 0
                                                    : prev + 1
                                            )
                                        }
                                    >
                                        ▶
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                <div className="modal-right">
                    <h2>{project.title}</h2>

                    {/* Tecnologias */}
                    <div className="tech-badges">
                        {project.techs.map((tech, index) => (
                            <span key={index} className="badge">
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Links */}
                    <div className="project-links">
                        {project.links.site && (
                            <a
                                href={project.links.site}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <GrDeploy className="icon" /> {t.viewSite}
                            </a>
                        )}
                        <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub className="icon" /> {t.github}
                        </a>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default ProjectModal;
