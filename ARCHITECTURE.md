# Arvion Global – Architecture & Reference Analysis Specification

Inspired by **Arvind.com**, Arvion Global is designed as a premier international industrial and materials conglomerate web portal.

## 1. Reference Analysis of Arvind.com

### Visual Hierarchy & Layout
- **Top Bar**: Transparent overlay transitioning to solid translucent blur (`backdrop-blur-md bg-white/90`) on scroll. Crisp corporate mark on the left, primary navigation with multi-column mega-menus for business verticals, quick search, and prominent inquiry CTA.
- **Cinematic Hero**: Full-viewport high-impact visual narrative showcasing human ingenuity, precision manufacturing, and sustainability commitments. Dynamic typography with subtle letter-spacing, slide pagination, and calm auto-advancing cadence.
- **Section Rhythm**:
  1. Header / Navigation (Sticky dynamic blur)
  2. Cinematic Carousel Hero (Multiple high-impact vertical slides)
  3. Company Introduction & Heritage Statement (Editorial lead with pull-quote typography)
  4. Animated Company Highlights & Global Footprint (Tabular counters, metric KPIs)
  5. Business Verticals Showcase (Interactive image-led cards with hover lift & reveals)
  6. Capabilities & Infrastructure (R&D, advanced manufacturing, supply chain scale)
  7. Innovation & Tech Focus (Interactive showcase of patents, nano-materials, smart textiles)
  8. Sustainability & ESG (Water stewardship, zero liquid discharge, circular economy)
  9. Corporate Social Responsibility (Community education, women in STEM, health clinics)
  10. Investor Relations (Live stock ticker simulation, quarterly reports, annual downloadables)
  11. Newsroom & Press Releases (Editorial grid, categorized media announcements)
  12. Careers & Talent (Culture pillars, open positions filter, employee spotlight)
  13. Contact & Global Inquiries (Regional headquarters, direct contact modal)
  14. Global Multi-Column Footer (Sitemap, legal notices, ESG disclosures)

### Typography & Palette
- **Headings**: `Plus Jakarta Sans`, tight tracking (`-0.02em`), confident weights (600–800).
- **Body**: `Public Sans`, 15–16px, generous line height (1.6), optimal 70ch measure.
- **Colors (60-30-10 discipline)**:
  - 60% Canvas: Crisp architectural white (`#FFFFFF`) and deep industrial slate (`#0B1120`).
  - 30% Structural: Subdued borders (`#E2E8F0`), hairline cards (`#F8FAFC`).
  - 10% Accent: Regal Indigo Navy (`#1E3A8A`) and Precision Cyan/Teal (`#0284C7`).

---

## 2. Modular Content-Driven Architecture

All content is managed through structured, type-safe JSON files with schema validation:
- `/src/content/config/site.json` — Corporate metadata, global offices, social links.
- `/src/content/config/navigation.json` — Mega-menu items, routing, CTAs.
- `/src/content/config/homepage.json` — Dynamic section registry (`sectionsOrder`, `enabled` flags, copy, images, CTAs).
- `/src/content/config/businesses.json` — Detailed portfolios for Advanced Materials, Heavy Engineering, Environmental Solutions, Telecom & IoT, and Sustainable Real Estate.
- `/src/content/config/investors.json` — Financial filings, quarterly earnings, annual reports, corporate governance.
- `/src/content/config/news.json` — Press releases, articles, tags, publication dates.
- `/src/content/config/sustainability.json` — ESG metrics, Net Zero roadmap, zero-liquid-discharge milestones.

### Dynamic Section Registry
The homepage dynamically renders sections based on `homepage.json` ordering and toggle flags:
```typescript
const sectionRegistry: Record<string, React.FC<any>> = {
  hero: HeroSection,
  intro: CompanyIntroSection,
  stats: StatisticsSection,
  businesses: BusinessShowcaseSection,
  capabilities: CapabilitiesSection,
  innovation: InnovationSection,
  sustainability: SustainabilitySection,
  csr: CSRSection,
  investors: InvestorSection,
  newsroom: NewsroomSection,
  careers: CareersSection,
  contactCta: ContactCTASection,
};
```

### GitHub Content Customizer & Live Studio
Included in the website is a toggleable **"Content & GitHub Config Studio"** floating panel allowing administrators to:
1. Preview live modifications to headlines, statistics, images, and copy.
2. Enable, disable, and drag-and-drop reorder homepage sections in real-time.
3. Export clean, formatted JSON files ready to commit directly to GitHub (`git commit -m "Update homepage copy"`).
