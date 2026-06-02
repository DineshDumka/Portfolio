import { MetadataRoute } from 'next';
import { projects } from '@/lib/data/projects';

const siteUrl = 'https://dineshdumka.dev';

export default function sitemap(): MetadataRoute.Sitemap {
    const projectRoutes = projects.map((project) => ({
        url: `${siteUrl}/projects/${project.slug}`,
        lastModified: new Date(),
        priority: 0.7 as const,
    }));

    return [
        {
            url: siteUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        ...projectRoutes,
    ];
}
