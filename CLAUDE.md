# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**nathpersonal-site** is a redesign/rebuild of the personal training portfolio website for Nathalia de Miranda Souza (nathpersonal.com.br). The site showcases Nathalia's 20+ years of experience in physical education, with specialization in exercise physiology and senior training.

Current website is WordPress-based with Slider Revolution. This project documents the content and structure for a modern rebuild.

## Content Structure

The website has 3 main pages. Refer to [Docs/nathpersonal-conteudo-site-antigo.md](Docs/nathpersonal-conteudo-site-antigo.md) for the complete current site structure and content.

**Key Pages:**
- **HOME** — Hero section with introduction, area overview, and call-to-action to read more
- **ÁREA DE ATUAÇÃO** (Services) — Three service offerings with descriptions:
  - Personal Trainer (general fitness training)
  - Personal Sênior (specialized elderly training)
  - Treinamento Funcional (functional training)
- **CONTATO** (Contact) — Contact form, phone number, and social media links (WhatsApp, Instagram)

**Global Elements:**
- Navigation menu: HOME | ÁREA DE ATUAÇÃO | CONTATO
- Logos (light and dark variants): logo-site2-03.png, logo-site-preta-03.png
- Footer on all pages: "Todos os direitos reservados Nath Personal. Site desenvolvido por Showmaker Digital"
- Primary CTA: WhatsApp link (+55 31 98899-1661)

## Content & Brand Guidelines

Refer to [Docs/texto nathpersonal-novo site.md](Docs/texto nathpersonal-novo site.md) for the full professional biography and mission statement.

**Key Brand Themes:**
- Mission: transforming lives through movement and personalized health coaching
- Focus on elderly/senior training as primary specialization
- Emphasis on individualized, humanized, science-based approach
- Tagline: "Cuidar da sua saúde é a minha missão. Promover qualidade de vida é o meu propósito."
- Philosophy: "Envelhecer é um privilégio. Envelhecer com saúde, autonomia e qualidade de vida é uma escolha que podemos construir juntos."

## Development Commands

### Local Development Server

This is a static HTML/CSS/JavaScript site with no build step required.

**Python 3 HTTP Server (Recommended):**
```bash
# From project root
python -m http.server 8000
# Visit: http://localhost:8000
```

**VS Code Live Server:**
1. Install extension: Live Server (Ritwick Dey)
2. Right-click `index.html` → "Open with Live Server"
3. Browser opens at `http://127.0.0.1:5500`

**Node.js HTTP Server:**
```bash
npm install -g http-server
http-server
# Visit: http://localhost:8080
```

**Common workflows:**
- `python -m http.server 8000` — Start local development server
- No build required; edit files directly
- Changes visible on save (with Live Server) or manual refresh
- All files are vanilla HTML, CSS, and JavaScript

## Architecture

### Frontend-Only Architecture

This is a **static, frontend-only website** with no backend dependencies or build pipeline.

**Tech Stack:**
- **HTML5** — Semantic structure, meta tags for SEO
- **CSS3** — Custom properties (variables), CSS Grid/Flexbox, media queries, animations
- **JavaScript (Vanilla)** — No frameworks, no dependencies
- **Assets** — PNG/JPG images, SVG icons

### CSS Organization

The CSS is split into modular files for maintainability:

- **`css/variables.css`** (113 lines)
  - CSS custom properties for colors, typography, spacing, z-index
  - Centralized theming system
  - Usage: `color: var(--color-primary)`

- **`css/global.css`** (466 lines)
  - CSS reset and normalization
  - Typography and text utilities
  - Dark mode base styles
  - Global classes (`.container`, `.text-center`, etc.)

- **`css/components.css`** (701+ lines)
  - Reusable component styles: buttons, cards, navbar, footer
  - Component variations and states (hover, active, disabled)
  - All components use CSS variables for consistency

- **`css/animations.css`** (361 lines)
  - Keyframe animations (fade-in, slide, scale, etc.)
  - Scroll observer classes for triggering animations on scroll
  - Accessibility support: `prefers-reduced-motion` media query

- **`css/responsive.css`** (830 lines)
  - Mobile-first media queries
  - Breakpoints: 320px (mobile), 768px (tablet), 1024px (desktop)
  - Responsive grids, fonts, spacing

### JavaScript Organization

- **`js/main.js`** (126 lines)
  - Navigation logic and hamburger menu
  - Page initialization
  - Smooth scroll behavior

- **`js/animations.js`** (114 lines)
  - IntersectionObserver for scroll-triggered animations
  - Scroll effects: fade-in, scale, parallax
  - Automatic animation trigger on elements with `.observe-*` classes

- **`js/form.js`**
  - Contact form validation
  - Real-time feedback (visual validation)
  - Accessibility compliance (ARIA labels)

- **`js/utils.js`**
  - Helper functions (debounce, throttle, etc.)
  - Reusable utilities

### File Organization

**HTML Files (One per Page):**
- `index.html` — HOME page (hero, services, testimonial, CTA, footer)
- `sobre.html` — ABOUT page (biography, timeline, mission)
- `servicos.html` — SERVICES page (service cards, detailed descriptions)
- `depoimentos.html` — TESTIMONIALS page (client testimonials, statistics)
- `contato.html` — CONTACT page (form, contact info)

**Reusable Patterns:**
- Navigation bar (included in each page)
- Footer (included in each page)
- CTA sections (reused across pages)
- Component classes for consistency

### Key Design Patterns

**1. CSS Variables for Theming**
All colors, fonts, and spacing use CSS custom properties. Update in `css/variables.css` and changes apply globally.

**2. Scroll-Triggered Animations**
Elements with class `observe-fade-in-up` or `observe-scale-in` automatically animate when scrolled into view using IntersectionObserver API.

**3. Responsive Grid System**
- Desktop: `.grid-3-desktop` (3 columns)
- Tablet: Auto-scales to 2 columns at 768px
- Mobile: Auto-scales to 1 column at 320px
- Uses CSS Grid with media queries

**4. Modular Component Classes**
Buttons, cards, and other components use BEM-like naming:
- `.btn`, `.btn-primary`, `.btn-secondary`
- `.card`, `.card-service`, `.card-testimonial`
- Easy to extend with modifier classes

**5. Accessibility First**
- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- WCAG AA+ color contrast (red #FF3333 on black #0f0f0f passes)
- Keyboard navigation for all interactive elements
- Focus states visible for all buttons/links
- Alt text on all images
- ARIA labels on form inputs

### Responsive Breakpoints

| Device | Width | Grid Cols | Hero Height | Body Font |
|--------|-------|-----------|-------------|-----------|
| Mobile | 320px-767px | 1 | 50vh | 16px |
| Tablet | 768px-1023px | 2 | 60vh | 16px |
| Desktop | 1024px+ | 3 | 70vh | 16px |

### Performance Optimization

- **No external dependencies** — Faster loading, no CDN requests
- **Vanilla JavaScript** — Minimal JavaScript footprint
- **CSS-based animations** — GPU-accelerated, smooth performance
- **Image optimization** — Compressed assets, modern formats (WebP + fallback)
- **Lazy loading** — Images and iframes load on demand
- **Minification ready** — Can be minified for production

### Data Flow

No complex state management needed. All data is static or form-based:
- **Static content** — Hardcoded in HTML
- **Form data** — Collected by contact form, validated in JavaScript
- **Animations** — Triggered by scroll events via IntersectionObserver
- **Navigation** — Simple URL-based (no SPA routing)
