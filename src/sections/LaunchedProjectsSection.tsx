import '../styles/LaunchedProjectsSection.css';
import glv from '../assets/img/projects/glv.png';
import delivery from '../assets/img/projects/delivery.png';
import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const LaunchedProjectsSection = () => {
	const { t } = useContext(LanguageContext);

	const imageMap: Record<string, string> = { glv, delivery };

	const projects = (t.launchedProjectsList as typeof t.launchedProjectsList).map(
		(proj) => ({
			...proj,
			image: imageMap[proj.image] || proj.image,
		})
	);

	return (
		<section className="launched-projects-section">
			<h2
				className="launched-title"
				dangerouslySetInnerHTML={{ __html: t.launchedProjectsTitle }}
			/>
			<p className="launched-subtitle">{t.launchedProjectsSubtitle}</p>
			<div className="launched-projects-grid">
				{projects.map((project, idx) =>
					project.url ? (
						<a
							className="launched-card"
							key={project.name + idx}
							href={project.url}
							target="_blank"
							rel="noopener noreferrer"
						>
							<div className="launched-img-wrapper">
								<img
									src={project.image}
									alt={project.name}
									className="launched-img"
								/>
							</div>
							<div className="launched-info">
								<h3 className="launched-name">{project.name}</h3>
								<p className="launched-desc">{project.description}</p>
								<div className="launched-techs">
									{project.techs.map((tech) => (
										<span className="launched-tech" key={tech}>
											{tech}
										</span>
									))}
								</div>
							</div>
						</a>
					) : (
						<div
							className="launched-card"
							key={project.name + idx}
							style={{
								cursor: 'not-allowed',
								opacity: 0.7,
							}}
						>
							<div className="launched-img-wrapper">
								<img
									src={project.image}
									alt={project.name}
									className="launched-img"
								/>
							</div>
							<div className="launched-info">
								<h3 className="launched-name">{project.name}</h3>
								<p className="launched-desc">{project.description}</p>
								<div className="launched-techs">
									{project.techs.map((tech) => (
										<span className="launched-tech" key={tech}>
											{tech}
										</span>
									))}
								</div>
							</div>
						</div>
					)
				)}
			</div>
			<div style={{ display: 'flex', justifyContent: 'center', marginTop: '2.5rem' }}>
				<a href="/projetos" className="launched-see-all-btn">
					{t.launchedSeeAll}
				</a>
			</div>
		</section>
	);
};

export default LaunchedProjectsSection;
