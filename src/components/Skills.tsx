
import './Skills.css';
import { FadeIn } from './FadeIn';
import { useLanguage } from '../i18n/i18n';
import { motion } from 'framer-motion';
import { SpotlightCard } from './SpotlightCard';
import {
    Atom,
    Layers,
    FileCode,
    Wind,
    Server,
    Settings,
    Terminal,
    Globe,
    Zap,
    Database,
    HardDrive,
    Box,
    Cloud,
    GitBranch
} from 'lucide-react';

interface Skill {
    name: string;
    icon: React.ReactNode;
    category: 'frontend' | 'backend' | 'devops' | 'other';
}

const skills: Skill[] = [
    // Frontend
    { name: 'React', icon: <Atom size={24} />, category: 'frontend' },
    { name: 'Next.js', icon: <Layers size={24} />, category: 'frontend' },
    { name: 'TypeScript', icon: <FileCode size={24} />, category: 'frontend' },
    { name: 'Tailwind CSS', icon: <Wind size={24} />, category: 'frontend' },

    // Backend
    { name: 'Node.js', icon: <Server size={24} />, category: 'backend' },
    { name: 'Rust', icon: <Settings size={24} />, category: 'backend' },
    { name: 'Python', icon: <Terminal size={24} />, category: 'backend' },
    { name: 'ASP.NET Core', icon: <Globe size={24} />, category: 'backend' },
    { name: 'Fastify', icon: <Zap size={24} />, category: 'backend' },

    // Databases & DevOps
    { name: 'PostgreSQL', icon: <Database size={24} />, category: 'devops' },
    { name: 'Redis', icon: <HardDrive size={24} />, category: 'devops' },
    { name: 'Docker', icon: <Box size={24} />, category: 'devops' },
    { name: 'AWS', icon: <Cloud size={24} />, category: 'devops' },
    { name: 'Git', icon: <GitBranch size={24} />, category: 'devops' },
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
                                                    className="skill-card-wrapper"
                                                    animate={{
                                                        y: [0, -6, 0],
                                                    }}
                                                    transition={{
                                                        duration: 3 + (skillIndex % 4) * 0.5,
                                                        repeat: Infinity,
                                                        repeatType: "reverse",
                                                        ease: "easeInOut",
                                                        delay: (skillIndex % 3) * 0.7
                                                    }}
                                                    whileHover={{
                                                        scale: 1.1,
                                                        y: -10,
                                                        boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                                                        transition: { duration: 0.2 }
                                                    }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <SpotlightCard className="skill-card glass-panel" spotlightColor="rgba(255, 255, 255, 0.2)">
                                                        <span className="skill-icon">{skill.icon}</span>
                                                        <span className="skill-name">{skill.name}</span>
                                                    </SpotlightCard>
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
