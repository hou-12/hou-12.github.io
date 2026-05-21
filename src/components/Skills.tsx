
import { useState } from 'react';
import './Skills.css';
import { FadeIn } from './FadeIn';
import { useLanguage } from '../i18n/i18n';
import { motion, AnimatePresence } from 'framer-motion';
import { SpotlightCard } from './SpotlightCard';
import { Skills3D } from './Skills3D';
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
    category: 'frontend' | 'backend' | 'devops';
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

    // DevOps
    { name: 'PostgreSQL', icon: <Database size={24} />, category: 'devops' },
    { name: 'Redis', icon: <HardDrive size={24} />, category: 'devops' },
    { name: 'Docker', icon: <Box size={24} />, category: 'devops' },
    { name: 'AWS', icon: <Cloud size={24} />, category: 'devops' },
    { name: 'Git', icon: <GitBranch size={24} />, category: 'devops' },
];

type FilterCategory = 'all' | 'frontend' | 'backend' | 'devops';

interface FilterPill {
    id: FilterCategory;
    labelKey: string;
}

const filters: FilterPill[] = [
    { id: 'all', labelKey: 'skills.all' },
    { id: 'frontend', labelKey: 'skills.frontend' },
    { id: 'backend', labelKey: 'skills.backend' },
    { id: 'devops', labelKey: 'skills.devops' },
];

export function Skills() {
    const { t } = useLanguage();
    const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
    const [viewMode, setViewMode] = useState<'grid' | '3d'>('grid');

    const filteredSkills =
        activeFilter === 'all' ? skills : skills.filter((s) => s.category === activeFilter);

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <FadeIn>
                    <h2 className="section-title">{t('skills.title')}</h2>
                </FadeIn>

                {/* Control bar containing filters and view switcher */}
                <FadeIn delay={100}>
                    <div className="skills-controls">
                        <div className="skills-filter-bar">
                            {filters.map((filter) => (
                                <button
                                    key={filter.id}
                                    className={`filter-pill ${activeFilter === filter.id ? 'active' : ''}`}
                                    onClick={() => setActiveFilter(filter.id)}
                                >
                                    {t(filter.labelKey)}
                                </button>
                            ))}
                        </div>

                        <div className="skills-view-toggle">
                            <button
                                className={`view-toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
                                onClick={() => setViewMode('grid')}
                            >
                                {t('skills.listView')}
                            </button>
                            <button
                                className={`view-toggle-btn ${viewMode === '3d' ? 'active' : ''}`}
                                onClick={() => setViewMode('3d')}
                            >
                                {t('skills.sphereView')}
                            </button>
                        </div>
                    </div>
                </FadeIn>

                {/* Dynamic skills display area */}
                <div className="skills-content-area">
                    <AnimatePresence mode="wait">
                        {viewMode === 'grid' ? (
                            <motion.div
                                key="grid"
                                className="category-skills skills-grid-all"
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -15 }}
                                transition={{ duration: 0.3 }}
                            >
                                {filteredSkills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        className="skill-card-wrapper"
                                        layout
                                        initial={{ opacity: 0, scale: 0.85, y: 10 }}
                                        animate={{
                                            opacity: 1,
                                            scale: 1,
                                            y: [0, -6, 0],
                                        }}
                                        exit={{
                                            opacity: 0,
                                            scale: 0.8,
                                            y: 10,
                                            transition: { duration: 0.2 },
                                        }}
                                        transition={{
                                            opacity: { duration: 0.3, delay: skillIndex * 0.04 },
                                            scale: { duration: 0.3, delay: skillIndex * 0.04 },
                                            y: {
                                                duration: 3 + (skillIndex % 4) * 0.5,
                                                repeat: Infinity,
                                                repeatType: 'reverse',
                                                ease: 'easeInOut',
                                                delay: (skillIndex % 3) * 0.7,
                                            },
                                        }}
                                        whileHover={{
                                            scale: 1.1,
                                            y: -10,
                                            transition: { duration: 0.2 },
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <SpotlightCard
                                            className="skill-card glass-panel"
                                            spotlightColor="rgba(201, 168, 76, 0.15)"
                                        >
                                            <span className="skill-icon">{skill.icon}</span>
                                            <span className="skill-name">{skill.name}</span>
                                        </SpotlightCard>
                                    </motion.div>
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                key="3d"
                                className="skills-3d-wrapper"
                                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: -15 }}
                                transition={{ duration: 0.35 }}
                            >
                                <Skills3D skills={filteredSkills} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
