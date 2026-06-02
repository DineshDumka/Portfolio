# Dinesh Dumka — Personal Portfolio

My personal portfolio website. Built with a retro Mario pixel-game aesthetic and modern web tech.

**🌐 Live Site**: [https://dineshdumka.dev](https://dineshdumka.dev)

## Why it looks like this

Every visual element on this site is CSS pixel art — no image files, no SVGs, no icon libraries. The coins, pipes, clouds, and icons are all `div` elements with `::before` pseudo-elements drawing individual pixels using `box-shadow`. The coin spin uses `scaleX` with `steps(8)` for that 8-bit crunch.

The cloud parallax generates 30 layers of clouds on desktop (450 elements) clearing at different scroll speeds for a parallax reveal. On mobile it drops to 10 layers.

~5,400 lines of vanilla CSS, no Tailwind, no Bootstrap, no CSS-in-JS. Light/dark mode via a single `data-attribute` toggle.

## About

Competitive Programmer | Backend Developer | Problem Solver

- 🏆 LeetCode Knight — Rating 1928 (Top 3% globally)
- ⚡ 1500+ DSA problems solved across platforms
- 🎓 B.Tech CSE — Graphic Era Hill University
- 🔧 Backend stack: Node.js, Express, PostgreSQL, Redis, Docker

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) with TypeScript
- **Styling**: ~5,400 lines of vanilla CSS with pixel-art animations
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/DineshDumka/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Copy env example and fill in your values:
```bash
cp .env.example .env.local
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── api/contact/       # Contact form API route (Resend)
│   ├── projects/          # Project detail pages
│   └── experience/        # Experience detail pages
├── components/            # React components
│   ├── Hero.tsx           # Hero section with clouds + coins
│   ├── Navigation.tsx     # Retro navbar
│   ├── FeaturedProjects.tsx
│   ├── CPProfiles.tsx     # Competitive programming section
│   ├── ResumeSection.tsx  # Resume highlights + download
│   └── ContactForm.tsx
├── lib/data/              # Data files
│   ├── projects.ts
│   └── cpProfiles.ts
└── public/
    └── resume.pdf         # Place your resume PDF here
```

## Environment Variables

```env
RESEND_API_KEY=re_your_api_key_here
CONTACT_EMAIL=dineshdumka27@gmail.com
```

## Resume PDF

Place your resume PDF at `public/resume.pdf` to enable the download button.

## License

MIT — Feel free to fork and customize.

---

**Built with ❤️ and 🍄s**

*Last updated: May 2026*
