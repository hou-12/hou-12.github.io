import './Skills.css';
import { FadeIn } from './FadeIn';
import { useLanguage } from '../i18n/i18n';
import { motion } from 'framer-motion';

interface Skill {
    name: string;
    icon: string;
    category: 'frontend' | 'backend' | 'devops' | 'other';
}

const skills: Skill[] = [
    // Frontend
    { name: 'React', icon: '⚛️', category: 'frontend' },
    { name: 'Next.js', icon: '▲', category: 'frontend' },
    { name: 'TypeScript', icon: '📘', category: 'frontend' },
    { name: 'Tailwind CSS', icon: '🎨', category: 'frontend' },

    // Backend
    { name: 'Node.js', icon: '💚', category: 'backend' },
    { name: 'Rust', icon: '🦀', category: 'backend' },
    { name: 'Python', icon: '🐍', category: 'backend' },
    { name: 'ASP.NET Core', icon: '🔷', category: 'backend' },
    { name: 'Fastify', icon: '⚡', category: 'backend' },

    // Databases & DevOps
    { name: 'PostgreSQL', icon: '🐘', category: 'devops' },
    { name: 'Redis', icon: '🔴', category: 'devops' },
    { name: 'Docker', icon: '🐳', category: 'devops' },
    { name: 'AWS', icon: '☁️', category: 'devops' },
    { name: 'Git', icon: '📦', category: 'devops' },
];

export function Skills() {
    const { t } = useLanguage();

    const categories = [
        { id: 'frontend', labelKey: 'skills.frontend', color: '#00c6ff' },
        { id: 'backend', labelKey: 'skills.backend', color: '#7000ff' },
        { id: 'devops', labelKey: 'skills.devops', color: '#ff6b6b' },
    ];

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <FadeIn>
                    <h2 className="section-title">{t('skills.title')}</h2>
                </FadeIn>

                <div className="skills-categories">
                    {categories.map((category, catIndex) => (
                        <FadeIn key={category.id} delay={catIndex * 100}>
                            <div className="skill-category">
                                <h3 className="category-title" style={{ color: category.color }}>
                                    {t(category.labelKey)}
                                </h3>
                                <div className="category-skills">
                                    {skills
                                        .filter(skill => skill.category === category.id)
                                        .map((skill, skillIndex) => (
                                            <FadeIn key={skill.name} delay={catIndex * 100 + skillIndex * 50}>
                                                <motion.div
                                                    className="skill-card glass-panel"
                                                    whileHover={{
                                                        scale: 1.08,
                                                        y: -4,
                                                    }}
                                                    whileTap={{ scale: 0.95 }}
                                                    transition={{
                                                        type: "spring",
                                                        stiffness: 400,
                                                        damping: 17
                                                    }}
                                                >
                                                    <span className="skill-icon">{skill.icon}</span>
                                                    <span className="skill-name">{skill.name}</span>
                                                </motion.div>
                                            </FadeIn>
                                        ))
                                    }
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}


