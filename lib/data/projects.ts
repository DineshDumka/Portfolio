import { Project } from '../types';

export const projects: Project[] = [
    {
        slug: 'text2learn',
        title: 'Text2Learn',
        description:
            'AI-powered course generation platform that converts any topic into structured modules, lessons, quizzes, and summaries using Gemini API, Redis queues, BullMQ, and ChromaDB RAG.',
        fullDescription:
            'Text2Learn is an AI-powered course generation platform that takes any topic and converts it into fully structured learning content — including modules, lessons, quizzes, and summaries. It leverages the Gemini API for content generation, Redis and BullMQ for scalable background job queuing, and ChromaDB with Retrieval-Augmented Generation (RAG) for context-aware, high-quality output. The backend is built on Node.js and Express with PostgreSQL as the primary database, making it robust and production-ready.',
        tags: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'BullMQ', 'Gemini API', 'ChromaDB'],
        thumbnail: 'https://via.placeholder.com/400x300/ffd700/1a1a2e?text=Text2Learn',
        images: [
            'https://via.placeholder.com/800x600/ffd700/1a1a2e?text=Text2Learn+Dashboard',
            'https://via.placeholder.com/800x600/ffd700/1a1a2e?text=Course+Generator',
            'https://via.placeholder.com/800x600/ffd700/1a1a2e?text=Module+View',
        ],
        features: [
            'AI-powered course generation from any topic',
            'Structured modules, lessons, quizzes, and summaries',
            'Gemini API integration for intelligent content creation',
            'Redis + BullMQ for scalable background job processing',
            'ChromaDB RAG pipeline for context-aware generation',
            'PostgreSQL database for persistent course storage',
            'RESTful API with Node.js and Express',
        ],
        technologies: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'BullMQ', 'Gemini API', 'ChromaDB', 'RAG'],
        demoUrl: '',
        githubUrl: 'https://github.com/DineshDumka/Text2Learn1',
        color: '#ffd700',
    },
    {
        slug: 'collab-editor',
        title: 'Collab Code Editor',
        description:
            'Real-time collaborative code editor with multiplayer rooms, Docker-based code execution, Socket.IO synchronization, and AI code assistance.',
        fullDescription:
            'A real-time collaborative code editor that enables multiple developers to write and run code together simultaneously. Features multiplayer rooms with Socket.IO for live synchronization, Docker-based sandboxed code execution via the Piston API, and AI-powered code assistance using the Gemini API. Built with React on the frontend and Node.js on the backend, it provides a seamless pair-programming experience with conflict-free editing and instant feedback.',
        tags: ['Node.js', 'React', 'Socket.IO', 'Docker', 'Gemini API', 'Piston API'],
        thumbnail: 'https://via.placeholder.com/400x300/00a651/ffffff?text=Collab+Editor',
        images: [
            'https://via.placeholder.com/800x600/00a651/ffffff?text=Editor+Interface',
            'https://via.placeholder.com/800x600/00a651/ffffff?text=Multiplayer+Room',
            'https://via.placeholder.com/800x600/00a651/ffffff?text=Code+Execution',
        ],
        features: [
            'Real-time multiplayer collaborative editing via Socket.IO',
            'Multiplayer rooms with unique session management',
            'Docker-based sandboxed code execution',
            'Piston API for multi-language code running',
            'AI code assistance powered by Gemini API',
            'Live cursor tracking for all participants',
            'Syntax highlighting and editor theming',
        ],
        technologies: ['Node.js', 'React', 'Socket.IO', 'Docker', 'Gemini API', 'Piston API', 'WebSockets'],
        demoUrl: '',
        githubUrl: 'https://github.com/DineshDumka/Realtime-Collaborative-Code-Editor',
        color: '#00a651',
    },
    {
        slug: 'task-scheduler',
        title: 'Optimized Task Scheduling System',
        description:
            'CLI-based task scheduling system built in C++ that efficiently assigns and manages tasks using priority queues, greedy algorithms, and topological sorting.',
        fullDescription:
            'A CLI-based optimized task scheduling system built in C++ that efficiently assigns and manages tasks using priority queues, greedy algorithms, and graph theory concepts. The system supports full task lifecycle management — add, update, delete, and reprioritize tasks — while handling complex dependencies through topological sorting and detecting circular dependencies before execution. Dependency graphs are visualized using Graphviz, and execution order is displayed clearly in the terminal.',
        tags: ['C++', 'Graph Theory', 'Algorithms', 'CLI'],
        thumbnail: 'https://via.placeholder.com/400x300/a78bfa/ffffff?text=Task+Scheduler',
        images: [
            'https://via.placeholder.com/800x600/a78bfa/ffffff?text=CLI+Interface',
            'https://via.placeholder.com/800x600/a78bfa/ffffff?text=Dependency+Graph',
            'https://via.placeholder.com/800x600/a78bfa/ffffff?text=Execution+Order',
        ],
        features: [
            'Add, update, delete, and reprioritize tasks via CLI',
            'Optimized task execution ordering',
            'Dependency handling using topological sorting',
            'Circular dependency detection',
            'Task dependency visualization using Graphviz',
            'Execution order display in terminal',
        ],
        technologies: ['C++', 'Graph Theory', 'Topological Sorting', 'Priority Queues (Min Heap)', 'Greedy Algorithms', 'Graphviz'],
        demoUrl: '',
        githubUrl: 'https://github.com/DineshDumka/CLI-TaskScheduler',
        color: '#a78bfa',
    },
    {
        slug: 'ai-resume-builder',
        title: 'AI Resume Builder',
        description:
            'AI-powered resume builder that generates ATS-friendly resumes and summaries tailored to job descriptions using Gemini API.',
        fullDescription:
            'AI Resume Builder is an intelligent platform that generates ATS-friendly resumes and professional summaries tailored specifically to job descriptions. Powered by the Gemini API, it analyzes job postings and crafts targeted resume content that maximizes ATS compatibility and recruiter appeal. Users can input their experience and the target job description to receive a fully formatted, optimized resume ready for submission.',
        tags: ['Gemini API', 'Node.js', 'AI', 'Resume'],
        thumbnail: 'https://via.placeholder.com/400x300/5c94fc/ffffff?text=AI+Resume+Builder',
        images: [
            'https://via.placeholder.com/800x600/5c94fc/ffffff?text=Resume+Builder',
            'https://via.placeholder.com/800x600/5c94fc/ffffff?text=ATS+Optimizer',
            'https://via.placeholder.com/800x600/5c94fc/ffffff?text=Preview',
        ],
        features: [
            'AI-powered resume generation via Gemini API',
            'ATS-friendly formatting and keyword optimization',
            'Job description analysis for targeted content',
            'Professional summary generation',
            'Multiple resume templates',
            'Real-time preview and editing',
            'PDF export functionality',
        ],
        technologies: ['Node.js', 'Express', 'Gemini API', 'React', 'PostgreSQL'],
        demoUrl: '',
        githubUrl: 'https://github.com/DineshDumka/AI-Resume-Builder',
        color: '#5c94fc',
    },
    {
        slug: 'medi-compare-ai',
        title: 'MediCompare AI',
        description:
            'AI-powered medicine comparison platform that helps users compare medicines, understand compositions, and analyze alternatives intelligently.',
        fullDescription:
            'MediCompare AI is an intelligent medicine comparison platform that empowers users to make informed healthcare decisions. It leverages AI to compare medicines side-by-side, break down active compositions in plain language, and suggest evidence-based alternatives. The platform is designed to bridge the gap between complex pharmaceutical data and everyday users, making medicine information accessible and understandable.',
        tags: ['AI', 'Node.js', 'Gemini API', 'Healthcare'],
        thumbnail: 'https://via.placeholder.com/400x300/98ff98/1a1a2e?text=MediCompare+AI',
        images: [
            'https://via.placeholder.com/800x600/98ff98/1a1a2e?text=Medicine+Comparison',
            'https://via.placeholder.com/800x600/98ff98/1a1a2e?text=Composition+Analysis',
            'https://via.placeholder.com/800x600/98ff98/1a1a2e?text=Alternatives',
        ],
        features: [
            'AI-powered medicine comparison',
            'Composition breakdown in plain language',
            'Intelligent alternative medicine suggestions',
            'Side-by-side medicine analysis',
            'Healthcare data visualization',
            'User-friendly interface for non-medical users',
            'Real-time AI analysis via Gemini API',
        ],
        technologies: ['Node.js', 'Express', 'Gemini API', 'React', 'PostgreSQL', 'Healthcare APIs'],
        demoUrl: '',
        githubUrl: 'https://github.com/DineshDumka/medi-compare-ai',
        color: '#98ff98',
    },
];

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
    return projects.slice(0, 4);
}
