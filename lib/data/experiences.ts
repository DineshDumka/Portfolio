import { Experience } from '../types';

// Work Experience section removed from portfolio.
// This data is kept to avoid breaking the /experience/[slug] route.
export const experiences: Experience[] = [];

export function getExperienceBySlug(slug: string): Experience | undefined {
    return experiences.find((exp) => exp.slug === slug);
}
