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
- Projects and workshops have preview placeholders for future screenshots or photos.
- Leadership includes a slideshow-style gallery placeholder for CS Club images or slides.

## Current Direction
- Multi-page portfolio instead of a single scrolling landing page
- Twilight indigo and dusk blue visual palette
- Short, scan-friendly portfolio summaries with links out to deeper material

## Next Improvements
- Replace gallery placeholders with real images
- Add contact information and resume links
- Add richer details for any remaining sections as needed
