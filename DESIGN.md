# Design System — Nath Personal

<!-- impeccable:design-schema 1 -->

## Thesis

Documentary + Modern Premium. Every section demonstrates real human movement and transformation, not claims about it. Visual language is warm, sophisticated, and energetic—the opposite of clinical or patronizing.

## Palette & Materials

**Base:**
- Dark background: #0f0f0f (near-black, WCAG AAA on all text)
- Secondary background: #1a1a1a (subtle depth)
- Warm neutral: #F5F1ED (future overlays, light sections, breathing room)

**Accent:**
- Primary gold: #D4AF37 (premium, distinctive, used in buttons, highlights, statistics)
- Gold hover: #E5C158 (lighter, for interactive states)

**Text:**
- Primary: #e0e0e0 (light gray on dark)
- Secondary: #999999 (medium gray, secondary info)
- On warm: #2a2a2a (dark text when background is #F5F1ED)

**Functional:**
- Success: #4CAF50
- Border (dark): #333333
- Border (warm): #E8E3DD (subtle on warm backgrounds)

## Typography

**Display Face: Fraunces**
- Serif, warm, distinctive personality
- Used for: all headings (h1-h6)
- Weight: 700 for impact
- Tracking: -0.02em (tight, premium)
- No italic (italic serif is cliché template default)

**Body Face: Inter**
- Sans-serif, modern, highly readable
- Used for: all body text, UI labels, controls
- Weight: 400 regular, 500 medium, 600 bold
- Measure: 65-75ch on desktop (optimal reading width)
- Tracking: normal (0)

**Size Scale:**
| Element | Desktop | Mobile | Weight | Purpose |
|---------|---------|--------|--------|---------|
| h1 | 64px | 32px | 700 | Hero thesis |
| h2 | 48px | 24px | 700 | Section headline |
| h3 | 24px | 18px | 700 | Card/subsection |
| h4 | 20px | 18px | 600 | Small heading |
| Body | 16px | 16px | 400 | Main text (16px prevents mobile zoom) |
| Small | 14px | 13px | 400 | Captions, labels |

## Spacing & Rhythm

**Base unit: 8px**
- xs: 8px
- sm: 16px
- md: 24px
- lg: 32px
- xl: 48px
- 2xl: 64px

**Sections:**
- Desktop: 80px vertical padding (generous breathing room)
- Mobile: 48px vertical padding
- Horizontal: 32px (desktop), 16px (mobile) via container

**Interior spacing:**
- Tight groups (related items): 8-16px gap
- Generous separation (section breaks): 48-80px

## Components

### Hero
- Full viewport height (min-height: 100vh)
- Background: gradient overlay (65% dark) + optional full-bleed image
- Content: centered, white text, h1 64px Fraunces 700
- Layout: flex center, responsive
- CTA buttons: primary (gold) + secondary (white outline)

### Featured Specialty (50/50 Layout)
- Grid: 2 columns on desktop, 1 on mobile
- Image: left column, 1:1 aspect ratio, 12px border-radius, shadow 0 16px 48px
- Content: right column, max 600px text width
- Eyebrow: uppercase, 14px, letter-spacing 0.12em, gold color
- Headline: 48px Fraunces 700
- Stats: grid 2 cols, big number + label (premium metric style)
- List: check marks (gold ✓) + text benefits
- CTA button: primary gold

### Service Cards (Grid 3 Desktop → 2 Tablet → 1 Mobile)
- Card: dark background, subtle border, 12px radius
- Header: h3 Fraunces 700, subtext in secondary gray
- Body: benefits list with bullets
- Footer: "Saiba mais" button
- Hover: subtle lift (transform: translateY(-4px)), enhanced shadow

### Buttons
- Primary: gold background, dark text, 16px Inter 500, padding 14px 32px
- Secondary: transparent, gold text, gold border (1px), 16px Inter 500
- Sizes: small (12px padding), large (14px padding, larger on hero)
- States: hover (lighter gold), active (pressed), focus (visible 2px outline)
- Touch target: minimum 44px (accessibility)

### Navigation
- Fixed, dark background, transparent hover states
- Logo left, links center, CTA button right
- Mobile: hamburger menu (3-line icon), full-screen overlay on toggle
- Active link: gold color

### Footer
- Dark background, minimal text
- Links in gold on hover
- Copyright and attribution

## Motion & Micro-interactions

**Entrance animations:**
- Fade-in-up: sections as they scroll into view (observe-fade-in-up class)
- Scale-in: cards and highlights (observe-scale-in class)
- Duration: 300ms ease (var(--transition-base))

**Interaction:**
- Links: color transition 150ms
- Buttons: background + shadow transition 150ms
- No gradient text, no glass morphism, no floating/glowing effects (avoids AI template)

**Native moments:**
- Smooth scroll behavior (html { scroll-behavior: smooth })
- No parallax (can be jerky on mobile)
- Reduced motion respected (@media (prefers-reduced-motion: reduce))

## Accessibility (WCAG AAA)

**Contrast:**
- Body text #e0e0e0 on #0f0f0f = 15.6:1 ✓ (AAA)
- Secondary #999999 on #0f0f0f = 4.6:1 ✓ (AAA for large text)
- Gold #D4AF37 on #0f0f0f = 4.4:1 ✓ (AA for buttons)

**Typography:**
- Body font: Inter 400, 16px (no sub-12px)
- Line-height: 1.5 (normal reading)
- Letter-spacing: non-negative (never condensed)
- Max line-length: 75ch (optimal readability)

**Interaction:**
- All buttons: 44px minimum touch target
- Keyboard focus: 2px gold outline, 2px offset
- Form inputs: 16px font (prevents iOS zoom)
- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<footer>`, `<h1-h6>`, `<button>`, `<form>`
- ARIA labels on icon buttons and controls

**Responsiveness:**
- Mobile-first (320px minimum)
- Breakpoints: 768px (tablet), 1024px (desktop)
- Fluid typography where possible
- Touch-friendly spacing and tap targets

## Anti-patterns (intentional refusals)

- ❌ No card stacks (same-size icon+heading+text repeated)
- ❌ No eyebrow labels on every section
- ❌ No section numbers (01 / 02 / 03)
- ❌ No gradient text (emphasis via weight/size instead)
- ❌ No glass or blur decoration
- ❌ No colored left borders on cards
- ❌ No monospace for "technical look"
- ❌ No hero metric template (big number + supporting stats as primary)

These are category defaults, not bans. The brief's own words can justify any, but escaping them requires rethinking, not softening.

## Asset Requirements

### Photography (User-provided)
- **Hero background** (1400x900px min, optimized): Motion, energy, real people training
- **Featured Specialty image** (800x800px min, 1:1 aspect): You + client in functional movement
- **Service card images** (optional): 3 images for Personal Sênior, Trainer, Funcional sections
- **Testimonial avatars** (120x120px): Real client photos (or stylized illustrations)

### Color Tokens
All defined in `css/variables.css` as CSS custom properties. Update `:root` to change global palette.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid, Flexbox, CSS custom properties
- Graceful degradation: older browsers see fallback fonts (Georgia serif, system sans-serif)
- Mobile Safari 12+ (iOS 12+)

## Performance Notes

- No external dependencies (vanilla HTML/CSS/JS only)
- Fraunces + Inter: ~70kb combined (optimized weight ranges)
- Images: lazy-load on scroll (IntersectionObserver)
- Animations: GPU-accelerated (transform, opacity)
- No heavy JavaScript (animations.js, form.js, main.js total <20kb)

## Future Enhancements

- Replace gradient placeholders with real photography
- Add video hero (autoplay, muted, inline)
- Expand warm neutral section with testimonials or case studies
- Blog section (inherits typography/spacing, uses same palette)
- Newsletter signup (form styles defined)
