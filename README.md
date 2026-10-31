# Arvion Global – Premier Modular Corporate Web Portal

A high-performance corporate web portal inspired by the visual language, editorial typography, interactions, and modular architecture of **Arvind.com**.

Built with **React**, **TypeScript**, **Tailwind CSS**, and **Motion**, Arvion Global delivers a content-driven experience where non-technical stakeholders can manage pages, reorder sections, and update corporate data directly through GitHub or the built-in **Content & Section Studio**.

---

## 1. Core Architecture & Highlights

- **Visual Sophistication**: Editorial typography (`Plus Jakarta Sans` headings paired with `Public Sans` body), 60-30-10 color discipline with deep navy and industrial slate, subtle hairline dividers, and cinematic visual presence.
- **Top Bar Contract**: Sticky header that transitions from transparent overlay over the hero into a frosted glass background (`backdrop-blur-md bg-white/95`) on scroll. Features brand wordmark, mega-menu dropdowns, site-wide search (with `Cmd+K` / `Ctrl+K`), and a global inquiry action.
- **12 Homepage Modular Sections**:
  1. `HeroSection`: Multi-slide cinematic showcase with automatic advance and manual navigation.
  2. `CompanyIntroSection`: Editorial 86-year heritage statement with pull-quote from Executive Chairman.
  3. `StatisticsSection`: Animated counters with tabular numerals (`tabular-nums`).
  4. `BusinessShowcaseSection`: Five business verticals with benchmark performance metrics and hover transitions.
  5. `CapabilitiesSection`: Manufacturing facilities, cleanrooms, and global logistics corridors.
  6. `InnovationSection`: Intellectual property, 140+ granted patents, and breakthrough materials.
  7. `SustainabilitySection`: Net-Zero roadmap, Zero Liquid Discharge (ZLD), and water stewardship.
  8. `CSRSection`: Arvion Foundation's social programs, STEM scholarships, and mobile health vans.
  9. `InvestorSection`: Real-time stock ticker snapshot, quarterly earnings results, and annual reports.
  10. `NewsroomSection`: Press releases with categorization and article reader modal.
  11. `CareersSection`: Workplace culture and open positions preview.
  12. `ContactCTASection`: Global engineering partnership call to action with direct modal trigger.
- **11 Dedicated Views/Pages**:
  - `/` — Homepage (Dynamic section registry)
  - `/about` — Heritage, 86-year timeline, Board of Directors, and global presence
  - `/businesses` — Diversified portfolio catalog with category filters
  - `/businesses/:slug` — Deep-dive vertical pages with technical specs, certifications, and case studies
  - `/innovation` — R&D centers (Bengaluru, Frankfurt, Ahmedabad) and patent claims registry
  - `/sustainability` — Net-Zero roadmap, water stewardship, and closed-loop circularity
  - `/csr` — Social impact metrics, girls in STEM, and mobile clinics
  - `/investors` — Earnings table, integrated annual reports, and board committees
  - `/newsroom` — Press releases with live search and category filtering
  - `/careers` — Job board with department filters and application modal
  - `/contact` — Global office directory (India, Germany, USA, Singapore) and inquiry form
- **Zero-Broken-Image Policy**: `ImageWithFallback` ensures that if any asset is missing or blocked, a clean, styled SVG/CSS mesh container renders seamlessly.

---

## 2. Centralized Content Management (GitHub Workflow)

All content is decoupled from components and stored in clean, validated JSON files located in `src/content/config/`:

| Config File | Purpose |
| :--- | :--- |
| `src/content/config/site.json` | Corporate identity, headquarters, contact details, and social channels |
| `src/content/config/navigation.json` | Header links, mega-menu items, and routing |
| `src/content/config/homepage.json` | Homepage sections order, enable/disable flags, hero slides, and copy |
| `src/content/config/businesses.json` | Business portfolios, metrics, certifications, and case studies |
| `src/content/config/investors.json` | Stock ticker details, quarterly results, annual reports, and governance |
| `src/content/config/news.json` | Corporate press releases, dates, summaries, and read times |
| `src/content/config/sustainability.json`| Water recycling metrics, Net-Zero roadmap, and ZLD installations |
| `src/content/config/careers.json` | Culture points, benefits, and open engineering positions |

### How to Reorder or Toggle Homepage Sections
Open `src/content/config/homepage.json`:
```json
{
  "sectionsOrder": [
    "hero",
    "intro",
    "stats",
    "businesses",
    "capabilities",
    "innovation",
    "sustainability",
    "csr",
    "investors",
    "newsroom",
    "careers",
    "contactCta"
  ]
}
```
- **To Reorder**: Simply swap array items in `sectionsOrder`.
- **To Disable a Section**: Set `"enabled": false` under the corresponding section object in `sections`.

### How to Add a New Business Vertical
Open `src/content/config/businesses.json` and append a new object:
```json
{
  "id": "biz-6",
  "slug": "green-hydrogen-electrolyzers",
  "title": "Green Hydrogen Systems",
  "category": "Clean Energy Infrastructure",
  "summary": "High-pressure alkaline and PEM electrolyzer stacks.",
  "fullDescription": "...",
  "image": "https://...",
  "metrics": [{ "label": "Efficiency", "value": "82%" }],
  "keyOfferings": ["Stack assemblies", "Balance of plant"],
  "certifications": ["CE-PED", "ISO 19880"],
  "caseStudy": { "title": "...", "description": "...", "clientType": "...", "impact": "..." }
}
```
The new business automatically appears in the navigation dropdown, business showcase, and dedicated detail page at `/businesses/green-hydrogen-electrolyzers`.

### How to Add a News Article
Open `src/content/config/news.json` and add:
```json
{
  "id": "news-5",
  "title": "Arvion Expands High-Bay Cleanroom Facility",
  "slug": "high-bay-cleanroom-expansion",
  "date": "November 14, 2026",
  "category": "Innovation",
  "summary": "New 12,000 m² facility doubles aerospace pre-preg capacity.",
  "content": "Full article prose...",
  "image": "https://...",
  "readTime": "3 min read"
}
```
The article will immediately render on the Homepage newsroom strip and the Newsroom page.

---

## 3. Interactive Content & Section Studio

Click the floating **"Content & Section Studio"** button at the bottom right of the screen:
1. **Section Registry Tab**: Enable or disable sections with eye toggles and move sections up/down live.
2. **Live Hero Editor Tab**: Modify the hero headline, kicker, and lead paragraph in real-time.
3. **GitHub JSON Export Tab**: Click **Copy JSON** or **Download File** to obtain the updated `homepage.json` ready for a GitHub pull request.

---

## 4. Development & Build

```bash
# Install dependencies
npm install

# Start local development server on port 3000
npm run dev

# Build for production
npm run build
```
