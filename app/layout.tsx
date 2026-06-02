import type { Metadata } from 'next';
import { Press_Start_2P } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import { MarioHUD } from '@/components/MarioHUD';
import { Analytics } from '@vercel/analytics/next';

const pressStart2P = Press_Start_2P({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});

const siteUrl = 'https://dineshdumka.dev';

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: 'Dinesh Dumka | Competitive Programmer & Backend Developer',
        template: '%s | Dinesh Dumka',
    },
    description:
        'Dinesh Dumka — Competitive Programmer, Backend Developer, and Problem Solver. LeetCode Knight (Top 3%), 1500+ DSA problems solved. Explore projects, CP profiles, and technical skills.',
    keywords: [
        'Dinesh Dumka',
        'competitive programmer',
        'backend developer',
        'problem solver',
        'LeetCode Knight',
        'DSA',
        'Node.js developer',
        'portfolio',
        'full stack developer',
        'Codeforces',
        'CodeChef',
    ],
    authors: [{ name: 'Dinesh Dumka' }],
    creator: 'Dinesh Dumka',
    icons: {
        icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: siteUrl,
        siteName: 'Dinesh Dumka — Portfolio',
        title: 'Dinesh Dumka | Competitive Programmer & Backend Developer',
        description:
            'Dinesh Dumka — Competitive Programmer, Backend Developer, and Problem Solver. LeetCode Knight (Top 3%), 1500+ DSA problems solved.',
    },
    twitter: {
        card: 'summary',
        title: 'Dinesh Dumka | Competitive Programmer & Backend Developer',
        description:
            'Dinesh Dumka — Competitive Programmer, Backend Developer, and Problem Solver. LeetCode Knight (Top 3%).',
    },
    alternates: {
        canonical: siteUrl,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Dinesh Dumka',
    url: siteUrl,
    jobTitle: 'Backend Developer',
    description:
        'Competitive Programmer, Backend Developer, and Problem Solver. LeetCode Knight rated 1928, Top 3% globally.',
    alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Graphic Era Hill University',
    },
    knowsAbout: [
        'Competitive Programming',
        'Backend Development',
        'Data Structures and Algorithms',
        'Node.js',
        'System Design',
        'PostgreSQL',
        'Redis',
        'Docker',
        'WebSockets',
    ],
    sameAs: [
        'https://github.com/DineshDumka/',
        'https://www.linkedin.com/in/dinesh-dumka/',
        'https://leetcode.com/u/DinAce/',
        'https://codeforces.com/profile/DinAce',
    ],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" data-theme="dark">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className={pressStart2P.className}>
                {/* Inline blocking script: reads localStorage and sets data-theme BEFORE paint — eliminates flash of wrong theme */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(){try{var t=localStorage.getItem('theme');document.documentElement.setAttribute('data-theme',t==='light'?'light':'dark');}catch(e){}})();`,
                    }}
                />
                <Navigation />
                <MarioHUD />
                <ThemeProvider>{children}</ThemeProvider>
                <Footer />
                <div className="top-pipe"></div>
                <div className="bottom-pipe"></div>
                <Analytics />
            </body>
        </html>
    );
}
