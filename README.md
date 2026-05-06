# Portfolio Website

A React portfolio site built with Vite, `framer-motion`, and route-based pages. The site is centered on data science, research, teaching, workshops, leadership, writing, and related activities.

## Tech Stack
- React
- Vite
- Framer Motion
- React Router

## Run Locally
1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

## Site Sections
- Home
- Projects
- Research
- Teaching
- Workshops
- Certifications
- Leadership
- Blog
- Other Activities

## Project Structure
- `src/App.jsx`: route definitions
- `src/content.js`: portfolio content for each page
- `src/components/SiteLayout.jsx`: shared navigation and page shell
- `src/pages/HomePage.jsx`: landing page
- `src/pages/SectionPage.jsx`: reusable section-page renderer
- `src/styles.css`: global styling, palette, animation, and gallery behavior

## Content Notes
- Projects, research, certifications, blog, and other activities include direct external links where relevant.
- Cards support either a single preview image, a slideshow for multi-image entries, or a text-only layout when no image belongs in the section.
- Home-page utility sections such as Contact, Writing, About, and Teaching use text-first cards instead of decorative image placeholders.
- The shared footer includes a site-wide glass panel with the line `Vibe coded with Codex`.

## Current Direction
- Multi-page portfolio instead of a single scrolling landing page
- Twilight indigo and dusk blue visual palette
- Short, scan-friendly portfolio summaries with links out to deeper material

## Next Improvements
- Add any remaining real images for sections that should become galleries later
- Replace the resume placeholder with a live document link when ready
- Continue tightening copy and section emphasis as the portfolio evolves
