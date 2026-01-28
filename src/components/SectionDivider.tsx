import './SectionDivider.css';

interface SectionDividerProps {
    variant?: 'diagonal' | 'dots' | 'wave';
    flip?: boolean;
}

export function SectionDivider({ variant = 'diagonal', flip = false }: SectionDividerProps) {
    return (
        <div className={`section-divider section-divider-${variant} ${flip ? 'section-divider-flip' : ''}`}>
            {variant === 'diagonal' && (
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="divider-svg">
                    <path d="M0,0 L1200,120 L1200,0 L0,0 Z" className="divider-path" />
                </svg>
            )}
            {variant === 'dots' && (
                <div className="divider-dots">
                    <span /><span /><span /><span /><span />
                </div>
            )}
            {variant === 'wave' && (
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="divider-svg">
                    <path d="M0,60 Q300,0 600,60 T1200,60 L1200,120 L0,120 Z" className="divider-path" />
                </svg>
            )}
        </div>
    );
}
