# Task 7: SERVIÇOS (Services) Page — Complete

**Commit:** 56865b9  
**Date:** 2026-07-28  
**Status:** ✅ Complete

---

## Deliverable

**File Created:** `servicos.html` (536 lines)

---

## Implementation Details

### 1. Navbar (Reused Pattern)
- Logo + navigation links (HOME, SOBRE, SERVIÇOS, DEPOIMENTOS, CONTATO)
- **Active Link:** SERVIÇOS highlighted
- WhatsApp CTA button (right)
- Hamburger menu for mobile (toggle functionality via main.js)
- Sticky behavior with scroll detection

### 2. Hero Section
- **Height:** 40vh (min-height: 300px)
- **Headline:** "Nossos Serviços" (observe-fade-in-up animation)
- **Subheadline:** "Soluções personalizadas para sua saúde" (fade-in-up animation)
- Background overlay with dark gradient
- Responsive: Adjusts height for tablet/mobile

### 3. Service Cards Section
- **Grid Layout:** 3 columns (desktop), 1 column (mobile)
- **Grid Class:** `.grid-3-desktop` (responsive via css/responsive.css)

#### Card 1: Personal Sênior (HIGHLIGHTED)
- **Class:** `.card.card-highlight` (larger, red border, different styling)
- **Emoji Icon:** 👴
- **Title:** Personal Sênior
- **Subtitle:** Especialização em idosos
- **Description:** Treinamento especializado para idosos. Foco em força, equilíbrio, mobilidade e independência.
- **Benefits List (6 items):**
  - Melhora na capacidade funcional
  - Prevenção de quedas
  - Maior independência
  - Qualidade do sono
  - Aumento de energia
  - Melhor qualidade de vida
- **CTA Button:** "Agendar agora" (Primary, links to #senior tab)
- **Animation:** observe-scale-in (scroll trigger)

#### Card 2: Personal Trainer
- **Emoji Icon:** 💪
- **Title:** Personal Trainer
- **Subtitle:** Treinamento personalizado
- **Description:** Treinamento personalizado para seus objetivos específicos.
- **Benefits List (6 items):**
  - Perda de peso
  - Ganho muscular
  - Condicionamento físico
  - Autoconfiança
  - Resistência aprimorada
  - Transformação corporal
- **CTA Button:** "Agendar agora" (links to #trainer tab)
- **Animation:** observe-scale-in

#### Card 3: Treinamento Funcional
- **Emoji Icon:** 🏃
- **Title:** Treinamento Funcional
- **Subtitle:** Movimentos naturais
- **Description:** Movimentos naturais e dinâmicos para máximo desempenho e qualidade de vida.
- **Benefits List (6 items):**
  - Prevenção de lesões
  - Força e agilidade
  - Melhor mobilidade
  - Estabilidade corporal
  - Flexibilidade aumentada
  - Desempenho funcional
- **CTA Button:** "Agendar agora" (links to #funcional tab)
- **Animation:** observe-scale-in

### 4. Detailed Description Section (Tabs)
- **Background:** Dark secondary (`var(--bg-secondary)` = #1a1a1a)
- **Container:** `.tabs-container` with flexbox layout
- **Tab Buttons Row:** `.tabs-buttons` (flex, horizontal, bottom border)
  - **Active State:** `.btn-primary` class + bottom border in red
  - **Inactive State:** Gray text, no bottom border
  - **Hover:** Color changes to primary red
  - **Buttons:** data-tab attribute (senior/trainer/funcional)

#### Tab 1: Personal Sênior (id="senior")
- **Initial State:** display: block (active on page load)
- **Content Card:** `.card` with sections
  - **Descrição:** Full paragraph about specialized senior training
  - **Público-Alvo:** Target audience (60+ years)
  - **Como Funciona:** Numbered list (5 steps)
    1. Avaliação Inicial
    2. Planejamento Personalizado
    3. Atendimento Domiciliar ou Presencial
    4. Monitoramento Contínuo
    5. Reavaliação Periódica
  - **Benefícios:** Unordered list (8 items)
  - **Frequência Recomendada:** Text paragraph (2-3x per week)
- **Animation:** observe-fade-in-up on scroll

#### Tab 2: Personal Trainer (id="trainer")
- **Initial State:** display: none (hidden, shown when tab clicked)
- **Content Card:** Same structure as Personal Sênior
  - **Descrição:** Personalized training paragraph
  - **Público-Alvo:** Adults of all ages
  - **Como Funciona:** 5 steps (Consulta Inicial → Avaliação Física → Prescrição → Acompanhamento → Revisão)
  - **Benefícios:** 8 items (Perda de peso, Ganho muscular, Condicionamento, etc.)
  - **Frequência Recomendada:** 3-4x per week

#### Tab 3: Treinamento Funcional (id="funcional")
- **Initial State:** display: none
- **Content Card:** Same structure
  - **Descrição:** Functional training with natural movements
  - **Público-Alvo:** All ages seeking dynamic training
  - **Como Funciona:** 5 steps (Avaliação Funcional → Desenho do Programa → Sessões Dinâmicas → Adaptação Progressiva → Monitoramento)
  - **Benefícios:** 8 items
  - **Frequência Recomendada:** 2-3x per week

### 5. Tab Toggle JavaScript
- **Event:** Click on `.tab-btn`
- **Logic:**
  1. Get `data-tab` attribute value
  2. Hide all `.tab-content` divs (display: none)
  3. Show selected tab (display: block, add .active class)
  4. Remove `.btn-primary` from all buttons
  5. Add `.btn-primary` to clicked button
- **Smooth Transition:** CSS animation (observe-fade-in-up) on tab content
- **Accessibility:** Proper ARIA attributes ready for enhancement

### 6. CTA Final Section
- **Headline:** "Escolha seu serviço e vamos começar"
- **Subheadline:** "Entre em contato e agende sua avaliação gratuita"
- **Buttons:**
  - "Abrir WhatsApp" (Primary red button, external link)
  - "Enviar mensagem" (Secondary outline button, links to contato.html)
- **Animation:** observe-fade-in on buttons
- **Background:** Default primary (matches index.html/sobre.html)

### 7. Footer (Reused Pattern)
- **Sections:**
  - Menu: Home, Sobre, Serviços, Depoimentos, Contato
  - Contact: Phone, Instagram, WhatsApp
  - Hours: Mon-Fri 08:00-18:00, Sat 08:00-12:00
- **Copyright:** "Todos os direitos reservados © Nath Personal. Site desenvolvido por Showmaker Digital"
- **Styling:** Matches header/sobre.html footer

---

## CSS Implementation

### Inline Styles
- **Servicos Detalhes Section:** Background, padding, responsive adjustments
- **Tabs Container:** Flexbox layout for tab buttons and content
- **Tab Buttons:** Styling for active/inactive states, bottom border, hover effects
- **Tab Content:** Display control, card styling, typography
- **Responsive Adjustments:**
  - Mobile: Flex-direction column for tabs, smaller padding
  - Tablet: Maintained 2-column grid (via global responsive.css)

### External CSS Files Used
1. `css/variables.css` — Color palette, spacing, breakpoints, typography
2. `css/global.css` — Reset, dark mode base, utilities
3. `css/components.css` — Button styles, card styles, navbar, footer
4. `css/animations.css` — observe-fade-in-up, observe-scale-in keyframes
5. `css/responsive.css` — Media queries for grid-3-desktop, tablet/mobile adjustments

---

## Animations

### On Page Load / Scroll
- **Hero Title & Subtitle:** `observe-fade-in-up` (0.6s ease-out)
- **Service Cards:** `observe-scale-in` (staggered via IntersectionObserver)
- **Tab Content:** `observe-fade-in-up` on tab switch
- **CTA Buttons:** `observe-fade-in` (0.6s ease-out)

### Hover States
- **Service Cards:** `transform: translateY(-4px)`, shadow increase (via css/components.css)
- **Tab Buttons:** Color change to primary red
- **Buttons:** Lift effect + glow shadow (via css/components.css)

---

## Responsiveness

### Desktop (1024px+)
- 3-column grid for service cards
- Hero 40vh
- Tab buttons horizontal with bottom border
- Full spacing (64px)
- Font sizes: H1 48px, H2 36px

### Tablet (768px - 1023px)
- 2-column grid for service cards (via grid-3-desktop)
- Hero 40vh
- Reduced spacing (48px)
- Tab buttons horizontal (wrapping)
- Font sizes: H1 36px, H2 24px

### Mobile (320px - 767px)
- 1-column grid for service cards
- Hero 40vh (min-height 300px)
- Hamburger menu for navigation
- Tab buttons stack vertically
- Reduced padding/spacing
- Font sizes: H1 24px, H2 18px
- Touch-friendly buttons (44px min height)

---

## Features & Interactivity

✅ **Tab Navigation**
- Smooth switching between services
- Visual feedback (active button highlighted in red)
- Active state persists during page session
- Keyboard accessible (ready for tab/enter navigation)

✅ **Service Cards**
- Highlight styling on Personal Sênior card (larger, red border)
- Hover lift animations on all cards
- Scroll-triggered scale-in animations
- Responsive button sizing and spacing

✅ **SEO & Meta Tags**
- Page title: "Serviços - Nath Personal"
- Meta description: "Conheça nossos serviços de Personal Training para Idosos, Personal Trainer e Treinamento Funcional. Soluções personalizadas para sua saúde."
- Semantic HTML (section, article, nav, footer)

✅ **Accessibility**
- ARIA labels on hamburger menu
- Semantic buttons and links
- Proper heading hierarchy (H1 > H3)
- Focus states on interactive elements
- Color contrast: WCAG AA+ verified

✅ **Performance**
- Vanilla JavaScript (no dependencies)
- Efficient event delegation
- CSS animations with GPU acceleration
- Lazy-loaded images ready (placeholder URLs)

---

## Verification Checklist

- [x] File created: `servicos.html` (536 lines)
- [x] Navbar with active SERVIÇOS link
- [x] Hero section 40vh with headline/subheadline
- [x] Service cards grid 3→1 responsive
- [x] Personal Sênior card highlighted (red border, larger)
- [x] All cards have 6 benefits listed
- [x] Cards have observe-scale-in animation
- [x] Tab section with dark background
- [x] Tabs toggle JavaScript working
- [x] Personal Sênior tab active by default
- [x] Tab content includes all required sections (Descrição, Público-Alvo, Como Funciona, Benefícios, Frequência)
- [x] CTA Final section with WhatsApp + Contato buttons
- [x] Footer reused from index.html
- [x] Responsive breakpoints working
- [x] Animations triggering on scroll
- [x] Git commit created with descriptive message
- [x] No console errors or broken links

---

## Browser Compatibility

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Dependencies

- `js/main.js` — Navigation, hamburger menu, active link detection
- `js/animations.js` — IntersectionObserver for scroll animations
- `css/variables.css` — Color palette, spacing, typography
- `css/components.css` — Button and card styles
- `css/animations.css` — Keyframe animations
- `css/responsive.css` — Media queries and responsive utilities

---

## Next Steps (Upcoming Tasks)

- Task 8: Create DEPOIMENTOS (Testimonials) page
- Task 9: Create CONTATO (Contact) page
- Task 10: Optimize images and assets
- Task 11: Add meta tags and SEO enhancements
- Task 12: Create README and documentation

---

## Summary

Task 7 is complete. The SERVIÇOS page features a modern, responsive design with:
- 3 service cards (Personal Sênior highlighted)
- Interactive tab-based detailed descriptions
- Smooth animations and transitions
- Proper semantic HTML and accessibility
- Mobile-first responsive design
- Consistent styling with existing pages

The page is ready for user testing and can be linked from the HOME page navigation.
