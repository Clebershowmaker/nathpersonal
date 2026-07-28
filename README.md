# Nath Personal - Website

A modern, responsive personal training portfolio website showcasing Nathalia's 20+ years of experience in physical education and specialization in senior training.

## ✨ Features

- ✅ **Responsive Design** — Mobile-first approach with optimized breakpoints (320px, 768px, 1024px+)
- ✅ **Dark Mode** — Permanent dark theme with professional color palette
- ✅ **Smooth Animations** — CSS-based scroll effects, fade-ins, and hover interactions
- ✅ **Accessibility** — WCAG AA+ contrast, semantic HTML, keyboard navigation
- ✅ **Vanilla JavaScript** — No framework dependencies, lightweight and performant
- ✅ **SEO Optimized** — Meta tags, structured data, sitemap.xml, robots.txt
- ✅ **Multi-Page** — Home, About, Services, Testimonials, and Contact pages
- ✅ **Form Validation** — Real-time contact form validation with user feedback
- ✅ **CSS Variables** — Centralized theming for easy customization

## 📁 Project Structure

```
nathpersonal-site/
├── index.html                 # HOME page
├── sobre.html                 # ABOUT page
├── servicos.html              # SERVICES page
├── depoimentos.html           # TESTIMONIALS page
├── contato.html               # CONTACT page
├── css/
│   ├── variables.css          # CSS custom properties (colors, fonts, spacing)
│   ├── global.css             # Reset, typography, utilities
│   ├── components.css         # Button, card, navbar, footer styles
│   ├── animations.css         # Keyframe animations and scroll effects
│   └── responsive.css         # Media queries for all breakpoints
├── js/
│   ├── main.js                # Navigation and page initialization
│   ├── animations.js          # IntersectionObserver for scroll effects
│   ├── form.js                # Contact form validation
│   └── utils.js               # Helper utilities
├── assets/
│   ├── logo/                  # Logo variants (light, dark)
│   ├── images/                # Hero, about, and testimonial images
│   └── icons/                 # SVG icons
├── robots.txt                 # SEO robot rules
├── sitemap.xml                # XML sitemap
├── README.md                  # This file
├── CLAUDE.md                  # Development documentation
└── .git/                      # Version control
```

## 🎨 Color Palette

| Usage | Color | Hex | RGB |
|-------|-------|-----|-----|
| **Primary (Accent)** | Vermelho | `#FF3333` | rgb(255, 51, 51) |
| **Primary Hover** | Vermelho Claro | `#ff6b6b` | rgb(255, 107, 107) |
| **Background** | Quase Preto | `#0f0f0f` | rgb(15, 15, 15) |
| **Background Secondary** | Cinza Muito Escuro | `#1a1a1a` | rgb(26, 26, 26) |
| **Text Primary** | Cinza Claro | `#e0e0e0` | rgb(224, 224, 224) |
| **Text Secondary** | Cinza Médio | `#999999` | rgb(153, 153, 153) |
| **Borders** | Cinza Escuro | `#333333` | rgb(51, 51, 51) |
| **Success** | Verde Suave | `#4CAF50` | rgb(76, 175, 80) |

## 📱 Breakpoints

| Device | Width | Columns | Font Sizes |
|--------|-------|---------|-----------|
| **Mobile** | 320px - 767px | 1 | H1: 32px, H2: 24px, Body: 16px |
| **Tablet** | 768px - 1023px | 2 | H1: 36px, H2: 28px, Body: 16px |
| **Desktop** | 1024px+ | 3 | H1: 48px, H2: 36px, Body: 16px |

## 🚀 How to Run Locally

### Option 1: Python 3 Built-in Server (Recommended)

```bash
# Navigate to project directory
cd nathpersonal-site

# Start Python HTTP server
python -m http.server 8000

# Open in browser
# http://localhost:8000
```

### Option 2: VS Code Live Server

1. Install the "Live Server" extension (5M+ downloads by Ritwick Dey)
2. Right-click on `index.html` and select "Open with Live Server"
3. Browser will open automatically at `http://127.0.0.1:5500`

### Option 3: Node.js HTTP Server

```bash
# Install globally (if not already installed)
npm install -g http-server

# Start server
http-server

# Open in browser
# http://localhost:8080
```

## ✏️ How to Edit

### Adding New Sections

1. Create a new `<section>` in the HTML file with a descriptive class
2. Add styles to the appropriate CSS file (usually `components.css`)
3. For animations, add `observe-fade-in-up` or `observe-scale-in` class to trigger on scroll
4. Update responsive styles in `responsive.css` if needed

Example:
```html
<section class="new-section observe-fade-in-up">
  <div class="container">
    <h2>Section Title</h2>
    <p>Content here...</p>
  </div>
</section>
```

### Changing Colors

All colors are defined in `css/variables.css` as CSS custom properties:

```css
:root {
  --color-primary: #FF3333;
  --color-text-primary: #e0e0e0;
  /* ... more variables ... */
}
```

To change the primary color globally:
1. Open `css/variables.css`
2. Update `--color-primary` value
3. The change applies to all elements using `var(--color-primary)`

### Adding Animations

Animations are defined in `css/animations.css`:

1. Add a new `@keyframes` animation
2. Create a CSS class that applies the animation
3. Add the class name to your HTML element
4. For scroll-triggered animations, use `observe-[animation-name]` class pattern with JavaScript IntersectionObserver in `js/animations.js`

Example:
```css
@keyframes fade-in-down {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-down {
  animation: fade-in-down 0.6s ease-out;
}
```

### Modifying Typography

Font sizes and families are in `css/variables.css` and `css/global.css`:

```css
/* In variables.css */
--font-family-heading: 'Poppins', sans-serif;
--font-family-body: 'Roboto', sans-serif;
--font-size-h1: 48px; /* Desktop */
--font-size-h1-mobile: 32px; /* Mobile */
```

## 🔄 Next Phases (Roadmap)

- 📝 **Blog** — Articles about health, fitness, and senior wellness
- 🎥 **Video Testimonials** — Real client testimonials with video content
- 💬 **WhatsApp Integration** — Chatbot for instant messaging
- 📅 **Booking System** — Online appointment scheduling with calendar
- 📊 **Dashboard** — Client progress tracking and session management
- 📸 **Before/After Gallery** — Visual transformation stories
- 🌐 **Multi-language** — Portuguese and English support
- 📧 **Newsletter** — Email marketing integration

## 📞 Contact Information

**Nathalia de Miranda Souza**

- 📱 **WhatsApp:** +55 31 98899-1661  
  [Open WhatsApp](https://api.whatsapp.com/send?l=pt_pt&phone=5531988991661)
- 📷 **Instagram:** [@nathpersonalbh](https://instagram.com/nathpersonalbh)
- 📧 **Email:** [nathalia@nathpersonal.com.br](mailto:nathalia@nathpersonal.com.br)

## 📄 License

© 2026 Nath Personal. All rights reserved.

Developed by [Showmaker Digital](https://showmaker.com.br)

---

## 🛠️ Development

For more development details, see [CLAUDE.md](CLAUDE.md)

**Quick Links:**
- [CSS Variables Documentation](#color-palette)
- [Breakpoints Table](#breakpoints)
- [Component Usage Guide](#how-to-edit)
- [Animation Examples](#adding-animations)
