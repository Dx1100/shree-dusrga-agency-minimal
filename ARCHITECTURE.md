# Shree Durga Agency – Architecture & Sourcing System Specification

A premier textile sourcing and consulting web portal inspired by the visual language, editorial typography, interactions, and modular architecture of Arvind.com, tailored specifically for Indian textile trade businesses.

## 1. Business Positioning & Reference Analysis

### Business Identity
**Shree Durga Agency**: A textile sourcing and consulting partner helping retailers, wholesalers, boutiques, and other textile businesses source products from relevant textile markets and production centres.

### Visual Hierarchy & Layout
- **Top Bar**: Transparent overlay transitioning to solid translucent blur (`backdrop-blur-md bg-white/95`) on scroll. Wordmark on the left, primary navigation with category dropdowns, quick search, and prominent consultation CTA.
- **Cinematic Hero**: Full-viewport visual narrative highlighting direct access to primary Indian textile production hubs. Dynamic typography with subtle letter-spacing, slide pagination, and calm auto-advancing cadence.
- **Section Rhythm**:
  1. Header / Navigation (Sticky dynamic blur)
  2. Hero Carousel (High-impact textile sourcing slides)
  3. Company Introduction & Heritage Statement (Consulting partner positioning with pull-quote)
  4. Operational Highlights & Hub KPIs (Hubs connected, fabric varieties, quality pass rate)
  5. Product Categories Showcase (Sarees, Suit Sets, Lehengas, Fabrics, Traditional Brocades)
  6. Quality Assurance & Inspection Protocol (Batch inspection, GSM verification, transparent sourcing)
  7. Sourcing Methodology (5-step consulting lifecycle from requirement to dispatch)
  8. Sourcing Hubs & Regional Markets (Surat, Varanasi, Jaipur, Kolkata, Panipat, Delhi NCR)
  9. Artisan & Weaver Clusters (Varanasi handlooms, Jaipur block print preservation)
  10. ThreadLinc Trade Financing (Working capital support for retail showrooms and wholesalers)
  11. Newsroom & Market Advisories (Seasonal buying guides, cluster price movements)
  12. Customer Segments (Showrooms, Boutiques, Wholesalers, Apparel Makers)
  13. Sourcing Consultation CTA (Direct consultation modal trigger)
  14. Global Multi-Column Footer (Sitemap, legal notices, trade terms)

### Typography & Palette
- **Headings**: `Plus Jakarta Sans`, tight tracking (`-0.02em`), confident weights (600–800).
- **Body**: `Public Sans`, 15–16px, generous line height (1.6), optimal 70ch measure.
- **Colors (60-30-10 discipline)**:
  - 60% Canvas: Crisp architectural white (`#FFFFFF`) and deep slate (`#020617` / `#0B1120`).
  - 30% Structural: Subdued borders (`#E2E8F0`), hairline cards (`#F8FAFC`).
  - 10% Accent: Approved Blue & Green palette (`blue-900` / `#1E3A8A` and `emerald-600` / `#059669`). Zero red accents.

---

## 2. Modular Content-Driven Architecture

All content is managed through structured, type-safe JSON files with schema validation:
- `/src/content/config/site.json` — Corporate metadata, sourcing hubs, contact details.
- `/src/content/config/navigation.json` — Menu items, category dropdowns, routing.
- `/src/content/config/homepage.json` — Dynamic section registry (`sectionsOrder`, `enabled` flags, copy, images, CTAs).
- `/src/content/config/businesses.json` — Detailed portfolios for Sarees, Suits, Lehengas, Fabrics, and Traditional Brocades.
- `/src/content/config/investors.json` — ThreadLinc trade financing, buyer segment guides, and handbooks.
- `/src/content/config/news.json` — Textile market intelligence, seasonal buying guides, cluster advisories.
- `/src/content/config/sustainability.json` — Sourcing Hubs (Surat, Varanasi, Jaipur, Delhi, Kolkata, Panipat) and manufacturing specializations.
- `/src/content/config/careers.json` — Customer segments and partnership engagement models.
- `/src/content/config/csr.json` — Artisan and handloom weaver cluster programs.

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
