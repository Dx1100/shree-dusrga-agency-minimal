export interface HeroSlide {
  id: string;
  kicker: string;
  heading: string;
  subheading: string;
  description: string;
  desktopImage: string;
  mobileImage: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  overlayStrength: number;
}

export interface StatItem {
  id: string;
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel: string;
}

export interface BusinessItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  summary: string;
  fullDescription: string;
  image: string;
  metrics: { label: string; value: string }[];
  keyOfferings: string[];
  certifications: string[];
  caseStudy: {
    title: string;
    description: string;
    clientType: string;
    impact: string;
  };
}

export interface NewsItem {
  id: string;
  title: string;
  slug: string;
  date: string;
  category: 'Corporate' | 'Innovation' | 'Sustainability' | 'Financial';
  summary: string;
  content: string;
  image: string;
  readTime: string;
  featured?: boolean;
}

export interface QuarterlyResult {
  quarter: string;
  fiscalYear: string;
  revenue: string;
  ebitda: string;
  pat: string;
  pdfUrl: string;
  pressReleaseUrl: string;
}

export interface AnnualReport {
  year: string;
  title: string;
  theme: string;
  fileSize: string;
  downloadUrl: string;
}

export interface InvestorData {
  stockInfo: {
    symbol: string;
    exchange: string;
    price: number;
    change: number;
    changePercent: number;
    currency: string;
    lastUpdated: string;
    marketCap: string;
    peRatio: string;
    dividendYield: string;
  };
  quarterlyResults: QuarterlyResult[];
  annualReports: AnnualReport[];
  governanceCommittees: { name: string; membersCount: number; chair: string }[];
}

export interface SustainabilityData {
  heroHeading: string;
  heroSummary: string;
  keyPillars: {
    id: string;
    title: string;
    metric: string;
    metricLabel: string;
    description: string;
    targetYear: string;
    initiatives: string[];
  }[];
  waterStewardship: {
    treatedPerDay: string;
    recyclingRate: string;
    zeroLiquidDischargePlants: number;
    summary: string;
  };
}

export interface CSRData {
  headline: string;
  subheadline: string;
  description: string;
  livesImpacted: string;
  villagesCovered: string;
  schoolsSupported: string;
  pillars: {
    id: string;
    title: string;
    impact: string;
    summary: string;
    programs: string[];
  }[];
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
}

export interface SiteConfig {
  companyName: string;
  legalEntity: string;
  tagline: string;
  foundedYear: number;
  globalPresenceCountries: number;
  headquarters: {
    address: string;
    city: string;
    country: string;
    phone: string;
    email: string;
  };
  social: {
    linkedin: string;
    twitter: string;
    youtube: string;
  };
}

export interface NavigationLink {
  id: string;
  label: string;
  path: string;
  dropdown?: {
    title: string;
    description: string;
    path: string;
  }[];
}

export interface HomepageConfig {
  sectionsOrder: string[];
  sections: {
    hero: {
      enabled: boolean;
      slides: HeroSlide[];
    };
    intro: {
      enabled: boolean;
      kicker: string;
      heading: string;
      leadParagraph: string;
      secondaryParagraph: string;
      quote: string;
      quoteAuthor: string;
      image: string;
      ctaText: string;
      ctaLink: string;
    };
    stats: {
      enabled: boolean;
      heading: string;
      subheading: string;
      items: StatItem[];
    };
    businesses: {
      enabled: boolean;
      kicker: string;
      heading: string;
      subheading: string;
      viewAllText: string;
    };
    capabilities: {
      enabled: boolean;
      kicker: string;
      heading: string;
      description: string;
      pillars: {
        title: string;
        description: string;
        stat: string;
      }[];
    };
    innovation: {
      enabled: boolean;
      kicker: string;
      heading: string;
      description: string;
      patentsCount: string;
      rdSpendPercent: string;
      innovations: {
        title: string;
        category: string;
        description: string;
      }[];
    };
    sustainability: {
      enabled: boolean;
      kicker: string;
      heading: string;
      description: string;
      ctaText: string;
      highlights: {
        metric: string;
        label: string;
      }[];
    };
    csr: {
      enabled: boolean;
      kicker: string;
      heading: string;
      description: string;
      impactMetric: string;
      impactLabel: string;
    };
    investors: {
      enabled: boolean;
      kicker: string;
      heading: string;
      subheading: string;
    };
    newsroom: {
      enabled: boolean;
      kicker: string;
      heading: string;
      subheading: string;
    };
    careers: {
      enabled: boolean;
      kicker: string;
      heading: string;
      description: string;
      culturePoints: string[];
    };
    contactCta: {
      enabled: boolean;
      heading: string;
      description: string;
      primaryButtonText: string;
      secondaryButtonText: string;
    };
  };
}
