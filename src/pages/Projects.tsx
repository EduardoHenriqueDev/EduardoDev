import '../styles/Projects.css';
import { GrDeploy } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import fitPilot1 from '../assets/img/projects/dashboard_fitpilot1.png';
import fitPilot2 from '../assets/img/projects/dashboard_fitpilot2.png';
import daybyday1 from '../assets/img/projects/daybyday.png'
import daybyday2 from '../assets/img/projects/daybyday2.png'
import ecomerce from '../assets/img/projects/ecomerce.png'

function Projects() {
    return (
        <section className="projects">
            <div className="projects-container">
                <h2>Meus <strong>Projetos</strong></h2>
                <div className="projects-grid">
                    <div className="project-card">
                        <div className="project-image-hover">
                            <img src={fitPilot1} alt="FitPilot Dashboard" className="default-img" />
                            <img src={fitPilot2} alt="FitPilot Hover" className="hover-img" />
                        </div>
                        <h3>FitPilot Dashboard</h3>
                        <div className="tech-badges">
                            <span className="badge">HTML</span>
                            <span className="badge">CSS</span>
                            <span className="badge">JavaScript</span>
                            <span className="badge">FireBase</span>
                        </div>
                        <div className="project-links">
                            <a href="https://dashboard-fitpilot.vercel.app/pages/login.html" target="_blank" rel="noopener noreferrer">
                                <GrDeploy className='icon' /> Ver Site
                            </a>
                            <a href="https://github.com/EduardoHenriqueDev/dashboard-fitpilot.git" target="_blank" rel="noopener noreferrer">
                                <FaGithub className='icon' /> GitHub
                            </a>
                        </div>
                    </div>

                    <div className="project-card">
                        <div className="project-image-hover">
                            <img src={daybyday1} alt="DayByDay" className="default-img" />
                            <img src={daybyday2} alt="DayByDay Hover" className="hover-img" />
                        </div>
                        <h3>DayByDay</h3>
                        <div className="tech-badges">
                            <span className="badge">PHP</span>
                            <span className="badge">JavaScript</span>
                            <span className="badge">CSS</span>
                            <span className="badge">SQL</span>
                        </div>
                        <div className="project-links">
                            <a href="https://github.com/EduardoHenriqueDev/TCC-DAYBYDAY.git" target="_blank" rel="noopener noreferrer">
                                <FaGithub className='icon' /> GitHub
                            </a>
                        </div>
                    </div>

                    <div className="project-card">
                        <div className="project-image-hover">
                            <img src={ecomerce} alt="Ecommerce" />
                        </div>
                        <h3>E-Commerce</h3>
                        <div className="tech-badges">
                            <span className="badge">PHP</span>
                            <span className="badge">JavaScript</span>
                            <span className="badge">CSS</span>
                            <span className="badge">SQL</span>
                        </div>
                        <div className="project-links">
                            <a href="https://github.com/EduardoHenriqueDev/TCC-DAYBYDAY.git" target="_blank" rel="noopener noreferrer">
                                <FaGithub className='icon' /> GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;
