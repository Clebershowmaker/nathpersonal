# Design Specification: nathpersonal-site Redesign
**Data:** 28/07/2026  
**Status:** Aprovado em brainstorming  
**Tech Stack:** HTML/CSS/JavaScript puro  
**Timeline:** 1 semana (sem pressa)

---

## Visão Geral

Redesenho completo do site nathpersonal.com.br com foco em **Personal Training para Idosos** como especialidade principal. O novo site será moderno, elegante, com dark mode permanente e animações estratégicas.

**Objetivo:** Posicionar Nathalia como especialista em treinamento para idosos enquanto mantém presença nos outros serviços (Personal Trainer e Treinamento Funcional).

---

## Arquitetura do Projeto

```
nathpersonal-site/
├── index.html (HOME)
├── sobre.html (SOBRE NATHALIA)
├── servicos.html (SERVIÇOS)
├── depoimentos.html (DEPOIMENTOS)
├── contato.html (CONTATO)
├── css/
│   ├── variables.css (paleta, tipografia, breakpoints)
│   ├── global.css (reset, dark mode, estilos base)
│   ├── components.css (botões, cards, modais)
│   ├── animations.css (keyframes, transições)
│   └── responsive.css (media queries)
├── js/
│   ├── main.js (navegação, inicialização)
│   ├── animations.js (scroll effects, fade-in)
│   ├── form.js (validação de contato)
│   └── utils.js (helpers)
├── assets/
│   ├── logo/
│   │   ├── logo-site2-03.png
│   │   └── Logo-nath-fundoescuro.png
│   ├── images/
│   │   ├── hero.jpg
│   │   ├── nathalia.jpg
│   │   └── depoimentos/
│   └── icons/ (SVG)
├── docs/
├── README.md
└── CLAUDE.md
```

---

## Design System

### Paleta de Cores

| Uso | Cor | Hex | RGB |
|-----|-----|-----|-----|
| **Primária** | Vermelho (Logo) | `#FF3333` | rgb(255, 51, 51) |
| **Primária Hover** | Vermelho claro | `#ff6b6b` | rgb(255, 107, 107) |
| **Fundo** | Quase preto | `#0f0f0f` | rgb(15, 15, 15) |
| **Fundo secundário** | Cinza muito escuro | `#1a1a1a` | rgb(26, 26, 26) |
| **Texto principal** | Cinza claro | `#e0e0e0` | rgb(224, 224, 224) |
| **Texto secundário** | Cinza médio | `#999999` | rgb(153, 153, 153) |
| **Bordas/dividers** | Cinza escuro | `#333333` | rgb(51, 51, 51) |
| **Sucesso** | Verde suave | `#4CAF50` | rgb(76, 175, 80) |

### Tipografia

- **Heading Font:** Inter ou Poppins (Google Fonts) — bold, sans-serif, moderna
- **Body Font:** Roboto ou Open Sans (Google Fonts) — regular, sans-serif, legível
- **Tamanhos:**
  - H1: 48px (desktop), 32px (mobile)
  - H2: 36px (desktop), 24px (mobile)
  - H3: 24px (desktop), 18px (mobile)
  - Body: 16px
  - Small: 14px

### Espaçamento

- Base unit: 8px
- Spacing scale: 8px, 16px, 24px, 32px, 48px, 64px

### Breakpoints

- Mobile: 320px
- Tablet: 768px
- Desktop: 1024px
- Wide: 1440px

---

## Componentes Reutilizáveis

### 1. Button (CTA)
- **Variantes:** Primary (vermelho), Secondary (outline), Ghost
- **Estados:** Default, Hover (lift + cor clara), Active, Disabled
- **Tamanhos:** Small, Medium, Large
- **Exemplo:** `<button class="btn btn-primary">Saiba mais</button>`

### 2. Card
- **Estrutura:** Header (opcional), Body, Footer (opcional)
- **Animação ao hover:** Lift (transform: translateY(-4px)), sombra
- **Exemplo:** Card de serviço, depoimento, timeline
- **Cores:** Fundo `#1a1a1a`, borda `#333333`

### 3. Navigation Bar
- **Logo (esquerda):** Logo-nath-fundoescuro.png (80px)
- **Links (centro):** HOME | SOBRE | SERVIÇOS | DEPOIMENTOS | CONTATO
- **CTA (direita):** Botão WhatsApp
- **Sticky:** Fica fixo ao scroll
- **Responsivo:** Menu hamburger em mobile
- **Transição:** Suave entre páginas

### 4. Hero Section
- **Layout:** Fullscreen ou 70vh
- **Fundo:** Imagem de fundo + overlay dark (rgba(15, 15, 15, 0.6))
- **Conteúdo:** Centered, texto branco
- **Animação:** Fade-in ao carregar

### 5. Depoimento Card
- **Estrutura:**
  - Avatar (80x80px, circular)
  - Nome + Idade (ex: "Maria, 68 anos")
  - Serviço utilizado (badge)
  - ⭐⭐⭐⭐⭐ (5 stars)
  - Texto (3-4 linhas)
- **Animação:** Hover lift + cor vermelha suave
- **Grid:** 3 colunas (desktop), 1 coluna (mobile)

### 6. Form Input
- **Estilos:** Border bottom only (minimalista)
- **Focus:** Border color muda para vermelho
- **Validação:** Feedback visual em tempo real
- **Accessibility:** Labels associados, ARIA

### 7. Footer
- **Conteúdo:**
  - Crédito: "Todos os direitos reservados Nath Personal. Site desenvolvido por Showmaker Digital"
  - Links rápidos: HOME, SOBRE, SERVIÇOS, DEPOIMENTOS, CONTATO
  - Redes sociais: WhatsApp, Instagram
- **Fundo:** `#1a1a1a`
- **Texto:** `#999999`

---

## Páginas Detalhadas

### 1. HOME (index.html)

**Seção 1: Hero**
- Headline: "Transformando vidas através do movimento"
- Subheadline: "Especialista em Personal Training para Idosos"
- Imagem de fundo: Idoso feliz, ativo, seguro
- 2 CTAs: "Conheça nossos serviços" (Primary) + "Saiba mais sobre mim" (Secondary)
- Altura: 70vh

**Seção 2: Especialização (Cards)**
- Título: "Nossos Serviços"
- 3 Cards em grid:
  
  **Card 1 - Personal Sênior (DESTAQUE)**
  - Tamanho: Maior (2x escala visual)
  - Cor de fundo: `#1a1a1a` com borda vermelha `2px`
  - Ícone: Silhueta de idoso ou coração
  - Titulo: "Personal Sênior"
  - Descrição: "Treinamento especializado para idosos. Foco em força, equilíbrio, mobilidade e independência."
  - Benefícios (lista):
    - Melhora na capacidade funcional
    - Prevenção de quedas
    - Maior independência
    - Qualidade do sono
  - CTA: "Saiba mais"
  - Animação: Lift ao hover, borda vermelha mais brilhante

  **Card 2 - Personal Trainer**
  - Tamanho: Normal
  - Ícone: Haltere
  - Titulo: "Personal Trainer"
  - Descrição: "Treinamento personalizado para seus objetivos."
  - Benefícios: Perda de peso, ganho muscular, condicionamento
  - CTA: "Saiba mais"
  - Animação: Lift ao hover

  **Card 3 - Treinamento Funcional**
  - Tamanho: Normal
  - Ícone: Movimento dinâmico
  - Titulo: "Treinamento Funcional"
  - Descrição: "Movimentos naturais para máximo desempenho."
  - Benefícios: Prevenção de lesões, força, agilidade
  - CTA: "Saiba mais"
  - Animação: Lift ao hover

- Animação: Fade-in ao scroll (staggered)

**Seção 3: Depoimento em Destaque**
- 1 depoimento de destaque (de idoso)
- Foto (circular, 120px)
- Nome, idade
- Serviço: "Personal Sênior"
- 5 estrelas
- Depoimento: "Há 6 meses não conseguia subir escadas. Hoje caminho 5km sem cansaço! Nathalia mudou minha vida."
- Fundo: Cardíaco (subtle gradient)
- Animação: Fade-in ao scroll

**Seção 4: CTA Final**
- Headline: "Vamos começar sua transformação?"
- Subheadline: "Entre em contato e agende sua avaliação gratuita"
- 2 Botões: 
  - "Abrir WhatsApp" (Primary, link externo)
  - "Enviar mensagem" (Secondary, leva para #contato)

**Seção 5: Footer**
- Conforme descrito acima

---

### 2. SOBRE (sobre.html)

**Seção 1: Hero Pequeno**
- Headline: "Conheça Nathalia"
- Imagem: Foto profissional de Nathalia (acolhedora, sorriso)

**Seção 2: Quem Sou**
- Biografia completa (do arquivo: texto nathpersonal-novo site.md)
- Destaque de:
  - Formação: Educação Física - Universidade de Itaúna
  - Especialização: Fisiologia do Exercício
  - Experiência: 20+ anos
- Layout: 2 colunas (texto + imagem)
- Animação: Fade-in ao scroll

**Seção 3: Timeline Visual**
- Título: "Minha Trajetória"
- 6 Cards verticais (timeline line visual):
  1. "Professora nas redes estadual e municipal"
  2. "Vice-diretora e coordenadora escolar"
  3. "Coordenadora de academias e personal"
  4. "Personal Trainer na FIAT Automóveis"
  5. "Especialista em treinamento corporativo"
  6. "Dedicada ao atendimento de idosos"
- Cada card: Ano (fictício), ícone, título, descrição breve
- Animação: Fade-in ao scroll (staggered)

**Seção 4: Missão e Valores**
- Banner com fundo vermelho (`#FF3333`)
- Tagline grande: "Cuidar da sua saúde é a minha missão. Promover qualidade de vida é o meu propósito."
- Filosofia abaixo: "Envelhecer é um privilégio. Envelhecer com saúde, autonomia e qualidade de vida é uma escolha que podemos construir juntos."
- Texto branco
- Tamanho: Full width, 40vh

**Seção 5: CTA Final**
- "Vamos começar sua transformação?"
- 2 Botões: WhatsApp + Contato

**Seção 6: Footer**

---

### 3. SERVIÇOS (servicos.html)

**Seção 1: Hero Pequeno**
- Headline: "Nossos Serviços"
- Subheadline: "Soluções personalizadas para sua saúde"

**Seção 2: Cards de Serviços (Grid 3 colunas)**

(Mesmos 3 cards da HOME, com mais detalhes)

**Seção 3: Descrição Detalhada (Abas ou Accordion)**
- Para cada serviço:
  - Descrição completa
  - Público-alvo
  - Como funciona (5 passos)
  - Benefícios listados
  - Exemplos de exercícios (opcional)
  - Duração e frequência típica
  - Valor (opcional - deixar em branco se não definido)

**Exemplo - Personal Sênior:**
- Descrição: Treinamento individualizado, adaptado às necessidades de idosos...
- Público-alvo: Idosos a partir de 60 anos
- Como funciona:
  1. Avaliação inicial
  2. Planejamento personalizado
  3. Atendimento domiciliar
  4. Monitoramento contínuo
  5. Reavaliação periódica
- Benefícios: [lista]
- Exemplos: Exercícios de força, equilíbrio, mobilidade
- Frequência: 2-3x por semana
- Valor: A definir

**Seção 4: CTA Final**
- "Escolha seu serviço e vamos começar"
- Botão WhatsApp (Primary, destaque)

**Seção 5: Footer**

---

### 4. DEPOIMENTOS (depoimentos.html)

**Seção 1: Hero Pequeno**
- Headline: "O que meus clientes dizem"
- Subheadline: "Histórias de transformação e qualidade de vida"

**Seção 2: Galeria de Depoimentos (Grid 3 colunas)**

6 Cards de depoimento (fictícios, com personas):

1. **"Maria, 68 anos"** - Personal Sênior
   - Avatar: Mulher idosa (avatar genérico)
   - Depoimento: "Há 6 meses não conseguia subir escadas. Hoje caminho 5km sem cansaço! Nathalia mudou minha vida."
   - Estrelas: ⭐⭐⭐⭐⭐

2. **"João, 72 anos"** - Personal Sênior
   - Avatar: Homem idoso
   - Depoimento: "Perdi o medo de cair. Agora tenho confiança para fazer tudo sozinho. Valeu, Nathalia!"
   - Estrelas: ⭐⭐⭐⭐⭐

3. **"Ana, 65 anos"** - Personal Sênior
   - Avatar: Mulher idosa
   - Depoimento: "Recuperei minha independência. Sou uma pessoa nova! Fiz amigos e estou muito feliz."
   - Estrelas: ⭐⭐⭐⭐⭐

4. **"Carlos, 45 anos"** - Personal Trainer
   - Avatar: Homem adulto
   - Depoimento: "Perdi 15kg e ganhei muita massa muscular. Personal profissional e dedicada!"
   - Estrelas: ⭐⭐⭐⭐⭐

5. **"Beatriz, 35 anos"** - Treinamento Funcional
   - Avatar: Mulher adulta
   - Depoimento: "Treinamento super dinâmico! Saí da monotonia da academia. Recomendo!"
   - Estrelas: ⭐⭐⭐⭐⭐

6. **"Pedro, 70 anos"** - Personal Sênior (familiar)
   - Avatar: Homem idoso
   - Depoimento: "Minha mãe está muito melhor. Vejo a diferença no dia a dia. Muito obrigado, Nathalia!"
   - Estrelas: ⭐⭐⭐⭐⭐

- Layout: 3 colunas (desktop), 1 coluna (mobile)
- Animação: Fade-in ao scroll, lift ao hover
- Cores: Fundo `#1a1a1a`, borda `#333333`

**Seção 3: Estatísticas (Opcional)**
- "500+ clientes transformados"
- "20+ anos de experiência"
- "98% de satisfação"
- Layout: 3 cards grandes, centered

**Seção 4: Vídeo Testimonial (Placeholder)**
- Espaço reservado para vídeo real (V2)
- Foto placeholder + botão play
- Texto: "Assista histórias reais de transformação"

**Seção 5: CTA Final**
- "Sua história pode ser a próxima"
- Botão WhatsApp + Contato

**Seção 6: Footer**

---

### 5. CONTATO (contato.html)

**Seção 1: Hero Pequeno**
- Headline: "Entre em Contato"
- Subheadline: "Vamos conversar sobre seus objetivos"

**Seção 2: Layout 2 Colunas (Responsivo)**

**Coluna Esquerda: Formulário**
- Campos:
  - **Nome** (text input, obrigatório)
  - **Email** (email input, obrigatório)
  - **Telefone** (tel input, opcional)
  - **Serviço de Interesse** (dropdown, obrigatório)
    - Opções: Personal Sênior, Personal Trainer, Treinamento Funcional, Não sei ainda
  - **Mensagem** (textarea, obrigatório)
  - Checkbox: "Desejo receber atualizações por WhatsApp"
- Validação:
  - Campos obrigatórios marcados
  - Email válido
  - Mensagem mínimo 10 caracteres
- Feedback visual em tempo real
- Botão "Enviar" (Primary, vermelho)
- Mensagem de sucesso: "Mensagem enviada com sucesso! Nathalia responderá em breve."
- Mensagem de erro: Mostrar erros de validação

**Coluna Direita: Informações**
- **WhatsApp (DESTAQUE)**
  - Ícone WhatsApp
  - "+55 31 98899-1661"
  - Botão "Abrir WhatsApp" (Primary, link: https://api.whatsapp.com/send?l=pt_pt&phone=5531988991661)
  - Tamanho: Maior, fundo vermelho

- **Telefone**
  - Ícone telefone
  - "+55 31 98899-1661"

- **Instagram**
  - Ícone Instagram
  - "@nathpersonalbh"
  - Link: https://instagram.com/nathpersonalbh

- **Horário de Atendimento** (placeholder)
  - "Seg-Sex: 08:00 - 18:00"
  - "Sab: 08:00 - 12:00"

- **Imagem**: Foto motivacional ou de Nathalia

**Seção 3: Mapa (Opcional)**
- Mostrar localização se houver endereço fixo
- Ou remover se for só atendimento domiciliar
- Para V2

**Seção 4: Por que entrar em contato?**
- Título: "Próximos Passos"
- Cards:
  1. "Avaliação Inicial Gratuita"
  2. "Plano Personalizado"
  3. "Acompanhamento Dedicado"
- Layout: 3 colunas

**Seção 5: Footer**

---

## Animações e Interações

### Scroll Effects
- **Fade-in:** Elementos aparecem conforme scroll (opacity 0 → 1)
- **Staggered:** Cards de timeline, depoimentos aparecem em cascata
- **Parallax (suave):** Fundo se move mais lentamente que conteúdo (opcional, não excessivo)

### Hover Effects
- **Cards (serviço, depoimento):** `transform: translateY(-4px)`, sombra aumenta
- **Botões:** Cor muda para `#ff6b6b`, suave
- **Links:** Cor muda para vermelho

### Page Transitions
- **Transição suave:** Fade out página atual → fade in página nova (300ms)
- **Smooth scroll:** Links internos usam scroll suave

### Form Interactions
- **Focus:** Border color muda para vermelho, sombra suave
- **Valid:** Borda verde suave
- **Error:** Borda/texto vermelho, mensagem de erro
- **Loading:** Spinner no botão ao enviar

---

## Responsividade

### Mobile (320px - 767px)
- 1 coluna para cards
- Menu hamburger (navegação)
- Hero sections: 50vh
- Tamanhos de fonte reduzidos
- Padding/spacing reduzido
- Images: Full width

### Tablet (768px - 1023px)
- 2 colunas para grids
- Menu normal
- Hero: 60vh
- Tamanhos ajustados

### Desktop (1024px+)
- Conforme descrito (3 colunas, hero 70vh, etc)

---

## Accessibility

- Semantic HTML (header, main, section, footer, nav)
- Contrast: WCAG AA+ (vermelho #FF3333 sobre fundo #0f0f0f passa)
- Labels associados em forms
- ARIA labels para elementos interativos
- Focus states visíveis
- Alt text em imagens
- Teclado navegável

---

## Performance

- Images: Otimizadas, formatos modernos (WebP + fallback JPG)
- CSS: Minificado em produção
- JS: Vanilla JS (sem dependências externas)
- Lazy loading: Imagens e iframes
- Critical CSS: Carregado inline no head

---

## SEO

- Meta tags: title, description, og:image
- H1 único por página
- Estrutura semântica
- Sitemap.xml
- robots.txt
- Open Graph tags para compartilhamento social

---

## Depoimentos Fictícios (Placeholders)

Usar com nomes/histórias criados para demonstração. Devem ser substituídos por depoimentos reais quando disponíveis.

**Avatares:** Usar avatar genéricos (placeholder.com ou similar) ou silhuetas coloridas.

---

## URLs e Navegação

```
/                    → HOME
/sobre               → SOBRE NATHALIA
/servicos            → SERVIÇOS
/depoimentos         → DEPOIMENTOS
/contato             → CONTATO
```

Menu principal em todas as páginas.

---

## Próximas Fases (V2+)

- Blog com artigos de saúde e exercícios
- Vídeos de depoimentos reais
- Integração com WhatsApp API (chatbot)
- Dashboard de agendamentos (opcional)
- Integração com calendário
- Pagina de antes/depois (fotos)

---

## Notas Importantes

⚠️ **Depoimentos:** São fictícios agora. Substituir pelos reais quando disponíveis.

⚠️ **Imagens:** Usar placeholders genéricos agora. Substituir por fotos reais de Nathalia e ambiente.

⚠️ **Valores:** Campo de valor/preço deixar vazio (será definido depois).

✅ **Dark mode:** Permanente em todo site.

✅ **Paleta:** Extraída da logo. Validar contraste WCAG AA+.

✅ **Animações:** Estratégicas, não excessivas. Não impedir interação do usuário.
