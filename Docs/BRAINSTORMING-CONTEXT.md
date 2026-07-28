# Brainstorming Context — nathpersonal-site Redesign
**Data:** 27/07/2026  
**Status:** Em progresso — continua amanhã  
**Facilitador:** Claude Code

---

## Decisões Confirmadas ✅

### Tech Stack
- **Framework:** HTML/CSS/JavaScript puro (sem React/Vue)
- **Motivo:** Mais simples, moderno, rápido, elegante — máximo controle visual

### Estrutura do Site
**5 Páginas principais:**
1. HOME (landing page com scroll smooth)
2. SOBRE NATHALIA (biografia completa)
3. SERVIÇOS (3 serviços: Personal Sênior, Personal Trainer, Treinamento Funcional)
4. DEPOIMENTOS (com exemplos fictícios agora)
5. CONTATO (formulário + WhatsApp)

**Futuro (V2):**
- BLOG (fica para depois)

### Foco Principal
- **Personal Sênior** como especialidade principal e destaque
- Narrativa: Transformação de vidas através do movimento, com ênfase em qualidade de vida para idosos

### Visual e Cores
- **Dark Mode:** Permanente (sempre escuro, sem toggle)
- **Paleta:** Baseada nas cores da logo existente
- **Logo:** Será colocada em `/docs` para extração de cores
- **Tipografia:** 2 fontes modernas via Google Fonts (1 heading + 1 body)

### Animações
- Estratégicas, não em excesso
- Fade-in ao scroll (seções)
- Hover nos cards (serviços/depoimentos)
- Transições suaves entre páginas
- Micro-animações em CTAs

### Timeline
- **Prazo:** 1 semana (viável com foco)
- **Depoimentos:** Exemplos fictícios (serão substituídos pelos reais depois)
- **Blog:** Fica para V2

---

## Arquitetura do Projeto

```
nathpersonal-site/
├── index.html (HOME)
├── sobre.html (SOBRE)
├── servicos.html (SERVIÇOS)
├── depoimentos.html (DEPOIMENTOS)
├── contato.html (CONTATO)
├── css/
│   ├── variables.css (cores baseadas na logo)
│   ├── global.css (dark mode, tipografia, reset)
│   └── components.css (botões, cards, animações)
├── js/
│   ├── main.js (navegação, interações)
│   ├── animations.js (scroll effects, transitions)
│   └── form.js (validação de contato)
├── assets/
│   ├── logo/
│   ├── images/
│   └── icons/
├── Docs/ (documentação)
└── README.md
```

---

## Design das Páginas

### HOME (Landing Page) ✅ APROVADO
Estrutura com scroll smooth:

1. **Hero Section**
   - Imagem de fundo + overlay dark elegante
   - Headline: "Transformando vidas através do movimento"
   - Subheadline: Foco em idosos, qualidade de vida
   - CTA Primária: "Conheça nossos serviços" (destaque)
   - CTA Secundária: "Saiba mais sobre mim"

2. **Seção "Especialização"** (Cards animados)
   - **Personal Sênior** (destaque — maior, cor diferenciada)
   - Personal Trainer
   - Treinamento Funcional
   - Cada card: ícone, descrição curta, CTA

3. **Depoimento em Destaque**
   - 1 depoimento de idoso (melhor resultado)
   - Foto/avatar, nome, depoimento breve
   - Animação ao hover

4. **CTA Final**
   - "Vamos começar? Entre em contato"
   - Botão WhatsApp + Botão Contato

5. **Rodapé**
   - Logo, menu rápido, crédito "Desenvolvido por Showmaker Digital"

---

## Próximas Etapas (Amanhã)

### Design das Páginas Restantes
- [ ] SOBRE NATHALIA — apresentar design
- [ ] SERVIÇOS — apresentar design
- [ ] DEPOIMENTOS — apresentar design
- [ ] CONTATO — apresentar design

### Paleta de Cores
- [ ] Aguardar logo em `/docs`
- [ ] Extrair cores principais
- [ ] Definir CSS variables

### Aprovação Final
- [ ] Revisar design completo
- [ ] Escrever documento de spec (design.md)
- [ ] Criar plano de implementação (writing-plans)

---

## Referências e Conteúdo

**Documentos de conteúdo já preparados:**
- `Docs/texto nathpersonal-novo site.md` — Bio completa e missão de Nathalia
- `Docs/nathpersonal-conteudo-site-antigo.md` — Estrutura e conteúdo do site WordPress atual

**Brand Themes:**
- Missão: Transformar vidas através do movimento e coaching personalizado
- Foco: Personal training para idosos com qualidade de vida
- Tagline: "Cuidar da sua saúde é a minha missão. Promover qualidade de vida é o meu propósito."
- Filosofia: "Envelhecer é um privilégio. Envelhecer com saúde, autonomia e qualidade de vida é uma escolha que podemos construir juntos."

**Contact Info:**
- WhatsApp: +55 31 98899-1661
- Instagram: @nathpersonalbh
- Crédito: Showmaker Digital

---

## Notas Importantes

⚠️ **Timeline desafiadora:** 5 páginas em 1 semana requer foco + estrutura limpa + sem overengineering

🎨 **Logo aguardando:** Coloque a logo em `/docs` para extrair paleta de cores exata

📝 **Depoimentos fictícios:** Usar exemplos agora, substituir pelos reais depois

🚀 **Próxima fase:** Após aprovação do design, invocar `writing-plans` para criar plano de implementação
