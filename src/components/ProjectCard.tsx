import './ProjectCard.css';
import type { Project } from '../data/projects';
import { useLanguage } from '../i18n/i18n';
import { motion } from 'framer-motion';

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    const { t, language } = useLanguage();

    return (
        <motion.div
            className="project-card glass-panel"
            whileHover={{
                scale: 1.02,
                y: -5,
            }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 20
            }}
        >
            <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                {project.type && <span className="project-type">{project.type}</span>}
            </div>
            {project.role && <div className="project-role">{project.role[language]}</div>}
            <p className="project-description">{project.description[language]}</p>

            {project.highlights && project.highlights.length > 0 && (
                <ul className="project-highlights">
                    {project.highlights.map((highlight, index) => (
                        <li key={index}>{highlight[language]}</li>
                    ))}
                </ul>
            )}

            <div className="project-tech">
                {project.technologies.map(tech => (
                    <motion.span
                        key={tech}
                        className="tech-tag"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        {tech}
                    </motion.span>
                ))}
            </div>

            <div className="project-links">
                {project.link && (
                    <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                        </svg>
                        {t('projects.viewProject')}
                    </motion.a>
                )}
                {project.github && (
                    <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link github-link"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        {t('projects.viewCode')}
                    </motion.a>
                )}
            </div>
        </motion.div>
    );
}



