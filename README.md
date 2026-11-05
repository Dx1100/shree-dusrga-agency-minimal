# Shree Durga Agency – Textile Sourcing & Consulting Portal

A high-performance corporate web portal inspired by the visual language, editorial typography, interactions, and modular architecture of premium corporate web design.

Representing **Shree Durga Agency**: a textile sourcing and consulting partner helping retailers, wholesalers, boutiques, and other textile businesses source products from relevant textile markets and production centres.

Built with **React**, **TypeScript**, and **Tailwind CSS**, Shree Durga Agency delivers a content-driven experience where non-technical stakeholders can manage pages, reorder sections, and update sourcing data directly through GitHub or the built-in **Section Studio**.

---

## 1. Core Architecture & Highlights

- **Visual Sophistication**: Clean editorial typography, balanced color palette with deep navy (`blue-900`/`slate-950`) and textile emerald (`emerald-600`/`emerald-700`), subtle hairline dividers, and minimal corporate presence.
- **Top Bar Contract**: Sticky header that transitions from transparent overlay over the hero into a frosted glass background (`backdrop-blur-md bg-white/95`) on scroll. Features brand wordmark, product category dropdowns, site-wide search (with `Cmd+K` / `Ctrl+K`), and a consultation inquiry action.
- **12 Homepage Modular Sections**:
  1. `HeroSection`: Multi-slide showcase highlighting sourcing from primary Indian textile markets.
  2. `CompanyIntroSection`: Editorial agency overview outlining consulting methodology and direct loom connections.
  3. `StatisticsSection`: Key sourcing metrics (hubs connected, fabric varieties, quality check pass rate, showroom partners).
  4. `BusinessShowcaseSection`: Five core textile categories (Sarees, Suit Sets, Lehengas, Fabrics, Traditional Brocades).
  5. `CapabilitiesSection`: On-the-ground inspection protocol, GSM verification, and single-invoice dispatch.
  6. `InnovationSection`: 5-step sourcing consulting methodology from requirement gathering to doorstep delivery.
  7. `SustainabilitySection`: Sourcing Hubs & regional production centers (Surat, Varanasi, Jaipur, Kolkata, Panipat, Delhi NCR).
  8. `CSRSection`: Artisan & Handloom Weaver cluster initiatives (Varanasi zari, Jaipur block prints, craft preservation).
  9. `InvestorSection`: ThreadLinc trade financing, working capital support, and buyer procurement handbooks.
  10. `NewsroomSection`: Textile market updates, festive buying guides, and cluster price advisories.
  11. `CareersSection`: Customer segments served (Showrooms, Boutiques, Wholesalers, Garment Manufacturers).
  12. `ContactCTASection`: Sourcing consultation call to action with direct modal trigger.
- **11 Dedicated Views/Pages**:
  - `/` — Homepage (Dynamic section registry)
  - `/about` — Agency positioning, sourcing milestones, and coordination team
  - `/businesses` — Five textile categories with category filtering
  - `/businesses/:slug` — Deep-dive product pages with fabric types, inspection standards, and buyer case studies
  - `/innovation` — 5-step sourcing workflow and cluster connect
  - `/sustainability` — Regional sourcing hubs and manufacturing specializations
  - `/csr` — Artisan cluster support and handloom preservation
  - `/investors` — ThreadLinc working capital financing guide and buyer handbooks
  - `/newsroom` — Textile market intelligence and seasonal advisories
  - `/careers` — Customer segments and partnership engagement models
  - `/contact` — Regional hub directory and sourcing inquiry form
- **Zero-Broken-Image Policy**: `ImageWithFallback` ensures that if any asset is missing or blocked, a clean, styled SVG/CSS container renders seamlessly.

---

## 2. Centralized Content Management (GitHub Workflow)

All content is decoupled from components and stored in clean, validated JSON files located in `src/content/config/`:

| Config File | Purpose |
| :--- | :--- |
| `src/content/config/site.json` | Brand identity, legal entity, contact details, and social channels |
| `src/content/config/navigation.json` | Header links, product dropdown items, and routing |
| `src/content/config/homepage.json` | Homepage sections order, enable/disable flags, hero slides, and copy |
| `src/content/config/businesses.json` | Textile categories, fabrics, metrics, and buyer case studies |
| `src/content/config/investors.json` | ThreadLinc trade financing structure, buyer tiers, and handbooks |
| `src/content/config/news.json` | Market advisories, buying guides, and seasonal updates |
| `src/content/config/sustainability.json`| Sourcing Hubs (Surat, Varanasi, Jaipur, etc.) and cluster strengths |
| `src/content/config/careers.json` | Customer segments (Showrooms, Boutiques, Wholesalers) and benefits |
| `src/content/config/csr.json` | Artisan weaving clusters and handloom preservation programs |

---

## 3. Technology Stack

- **Framework**: React SPA with Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: CSS transitions and Motion
- **Architecture**: Modular, content-driven, GitHub-friendly JSON configurations
