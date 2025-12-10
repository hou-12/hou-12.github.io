import './Projects.css';
import { ProjectCard } from './ProjectCard';
import { projects } from '../data/projects';
import { FadeIn } from './FadeIn';
import { useLanguage } from '../i18n/i18n';

export function Projects() {
    const { t } = useLanguage();
    // Filter out Cyprus Bus Tracker since it's featured separately
    const otherProjects = projects.filter(p => p.id !== 'bus-tracker');

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <FadeIn>
                    <h2 className="section-title">{t('projects.title')}</h2>
                </FadeIn>
                <div className="projects-grid">
                    {otherProjects.map((project, index) => (
                        <FadeIn key={project.id} delay={index * 100}>
                            <ProjectCard project={project} />
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}

