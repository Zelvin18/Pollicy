# Pollicy Data Institute — Website

A modern, full-featured website for Pollicy Data Institute Limited, built from scratch with the latest web stack.

## 🚀 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion + CSS animations |
| Icons | Lucide React |
| Fonts | Inter + Syne (Google Fonts) |
| Deployment | Vercel (recommended) |

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Home page
│   ├── about/              # About Pollicy
│   ├── programmes/         # Programmes & Work Areas
│   ├── research/           # Research & Insights
│   ├── resources/          # Publications & Resources
│   ├── blog/               # Blog & News
│   ├── events/             # Events (DataFest, etc.)
│   ├── careers/            # Careers & Fellowship
│   ├── contact/            # Contact page
│   └── privacy-policy/     # Privacy Pollicy
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── home/               # Home page sections
│   └── ui/                 # Reusable UI components
└── lib/
    ├── data.ts             # All site content/data
    └── utils.ts            # Utility functions
```

## 🎨 Design System

- **Primary Color:** Orange `#E8751A`
- **Dark Background:** `#0A0A0A`
- **Cream Background:** `#FDF8F3`
- **Display Font:** Syne (bold, modern)
- **Body Font:** Inter (clean, readable)

## 🏃 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📄 Pages

- `/` — Home (Hero, What We Do, Featured Projects, Insights, Partners, Newsletter)
- `/about` — About Pollicy (Story, Team, Priorities, Annual Reports)
- `/programmes` — All Programmes & Projects
- `/research` — Research & Publications
- `/resources` — Publications, Games, Podcast
- `/blog` — Blog & News
- `/events` — DataFest Africa & Events
- `/careers` — Jobs & Fellowship Programme
- `/contact` — Contact Form & Info
- `/privacy-policy` — Privacy Pollicy

## 🚀 Deployment (Vercel — Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

## 📋 ToR Compliance

This website fulfils all requirements from the Pollicy Website Developer Terms of Reference:

- ✅ Modern, responsive, mobile-first design
- ✅ All required pages (Home, About, Programmes, Research, Publications, Blog, Careers, Partners, Contact)
- ✅ Dynamic content display
- ✅ Newsletter subscription
- ✅ Multimedia content support
- ✅ Cross-browser and cross-device compatibility
- ✅ SEO optimised (metadata, Open Graph, Twitter cards)
- ✅ Performance optimised (static generation, code splitting)
- ✅ Feminist, Pan-African, inclusive design principles
- ✅ Scalable architecture for future growth
- ✅ CMS-ready (can integrate WordPress/Contentful/Sanity)
