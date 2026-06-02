'use client';

const skills = [
    'C++', 'Node.js', 'Express', 'PostgreSQL',
    'MongoDB', 'Redis', 'Docker', 'WebSockets',
    'DSA', 'System Design', 'React', 'TypeScript',
];

const highlights = [
    { icon: '🎓', label: 'Education', value: 'B.Tech CSE — Graphic Era Hill University', sub: 'CGPA: 8.5 | 2022 – 2026' },
    { icon: '⚔', label: 'LeetCode', value: 'Knight — Rating 1928', sub: 'Top 3% | 1500+ problems solved' },
    { icon: '🏆', label: 'Achievements', value: '2nd Place — College CodeFest', sub: 'Mentored 40+ students in DSA' },
    { icon: '⚡', label: 'Focus', value: 'Backend Development', sub: 'Distributed systems & scalable APIs' },
];

export function ResumeSection() {
    return (
        <section id="resume" className="section">
            <div className="mario-star resume-star-left" />
            <div className="mario-star resume-star-right" />
            <div className="container">
                <h2 className="text-center section-heading" style={{ marginBottom: 'var(--space-5)' }}>
                    Resume
                </h2>
                <p className="text-center text-muted" style={{ fontSize: 'var(--text-xs)', marginBottom: 'var(--space-8)', lineHeight: 1.8 }}>
                    Quick highlights — download the full resume below
                </p>

                {/* Highlights grid */}
                <div className="resume-highlights-grid">
                    {highlights.map((item) => (
                        <div key={item.label} className="resume-highlight-card card">
                            <div className="resume-highlight-icon">{item.icon}</div>
                            <div className="resume-highlight-label">{item.label}</div>
                            <div className="resume-highlight-value">{item.value}</div>
                            <div className="resume-highlight-sub">{item.sub}</div>
                        </div>
                    ))}
                </div>

                {/* Skills */}
                <div className="resume-skills-section">
                    <h3 className="resume-skills-heading">Core Skills</h3>
                    <div className="resume-skills-grid">
                        {skills.map((skill) => (
                            <span key={skill} className="tag resume-skill-tag">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Download button */}
                <div className="resume-download-section">
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-resume-download btn-3d"
                        download="Dinesh_Dumka_Resume.pdf"
                        aria-label="Download Dinesh Dumka's resume"
                    >
                        <span className="resume-btn-icon">📄</span>
                        Download Resume
                    </a>
                    <p className="resume-download-hint">PDF · Updated 2025</p>
                </div>
            </div>
        </section>
    );
}
