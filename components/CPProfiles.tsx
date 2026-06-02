'use client';

import { cpProfiles, globalAchievements, CPProfile } from '@/lib/data/cpProfiles';

function RatingBar({ rating, maxRating, color }: { rating: number | null; maxRating: number; color: string }) {
    const percentage = rating ? Math.min((rating / maxRating) * 100, 100) : 30;
    return (
        <div className="cp-rating-bar-track">
            <div
                className="cp-rating-bar-fill"
                style={{ width: `${percentage}%`, background: color }}
            />
        </div>
    );
}

function CPCard({ profile }: { profile: CPProfile }) {
    return (
        <a
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="cp-card"
            style={{ '--cp-color': profile.platformColor, '--cp-color-dark': profile.platformColorDark } as React.CSSProperties}
            aria-label={`${profile.platform} profile — ${profile.username}`}
        >
            <div className="cp-card-glow" />
            <div className="cp-card-content">
                {/* Header */}
                <div className="cp-card-header">
                    <div className="cp-platform-badge" style={{ borderColor: profile.platformColor }}>
                        <span className="cp-platform-icon">{profile.icon}</span>
                        <span className="cp-platform-name" style={{ color: profile.platformColor }}>
                            {profile.platform}
                        </span>
                    </div>
                    <div className="cp-rank-badge" style={{ background: profile.rankColor, color: '#1a1a2e' }}>
                        {profile.rank}
                    </div>
                </div>

                {/* Username */}
                <div className="cp-username">@{profile.username}</div>

                {/* Rating bar */}
                <div className="cp-rating-section">
                    {profile.rating && (
                        <div className="cp-rating-label">
                            <span className="cp-rating-text">RATING</span>
                            <span className="cp-rating-value" style={{ color: profile.platformColor }}>
                                {profile.rating}
                            </span>
                        </div>
                    )}
                    <RatingBar rating={profile.rating} maxRating={profile.maxRating} color={profile.platformColor} />
                </div>

                {/* Stats */}
                <div className="cp-stats-row">
                    {profile.stats.map((stat) => (
                        <div key={stat.label} className="cp-stat">
                            <span className="cp-stat-value">{stat.value}</span>
                            <span className="cp-stat-label">{stat.label}</span>
                        </div>
                    ))}
                </div>

                {/* Achievements */}
                <ul className="cp-achievements-list">
                    {profile.achievements.map((achievement) => (
                        <li key={achievement} className="cp-achievement-item">
                            <span className="cp-achievement-dot" style={{ color: profile.platformColor }}>▶</span>
                            {achievement}
                        </li>
                    ))}
                </ul>

                {/* View profile CTA */}
                <div className="cp-view-profile">
                    View Profile →
                </div>
            </div>
        </a>
    );
}

export function CPProfiles() {
    return (
        <section id="cp-profiles" className="section">
            <div className="mario-star cp-star-top-left" />
            <div className="mario-star cp-star-top-right" />
            <div className="container">
                <h2 className="text-center section-heading" style={{ marginBottom: 'var(--space-5)' }}>
                    CP Profiles
                </h2>
                <p className="text-center text-muted" style={{ fontSize: 'var(--text-xs)', marginBottom: 'var(--space-8)', lineHeight: 1.8 }}>
                    Competitive programming across major platforms
                </p>

                {/* Global achievements ticker */}
                <div className="cp-achievements-ticker">
                    <div className="cp-achievements-ticker-inner">
                        {[...globalAchievements, ...globalAchievements].map((item, i) => (
                            <div key={i} className="cp-ticker-item">
                                <span className="cp-ticker-icon">{item.icon}</span>
                                <span>{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Platform cards */}
                <div className="cp-grid">
                    {cpProfiles.map((profile) => (
                        <CPCard key={profile.platform} profile={profile} />
                    ))}
                </div>
            </div>
            <div className="mario-star cp-star-bottom-left" />
            <div className="mario-star cp-star-bottom-right" />
        </section>
    );
}
