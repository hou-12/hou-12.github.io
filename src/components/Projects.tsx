import './Projects.css';
import { ProjectCard } from './ProjectCard';
import { projects } from '../data/projects';
import { FadeIn } from './FadeIn';
import { useLanguage } from '../i18n/i18n';

export function Projects() {
    const { t } = useLanguage();

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <FadeIn>
                    <h2 className="section-title">{t('projects.title')}</h2>
                </FadeIn>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <FadeIn
                            key={project.id}
                            delay={index * 100}
                        >
                            <ProjectCard project={project} />
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}

