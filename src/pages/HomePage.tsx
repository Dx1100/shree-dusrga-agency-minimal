import React from 'react';
import { HomepageConfig } from '../types/content';
import { HeroSection } from '../components/sections/HeroSection';
import { CompanyIntroSection } from '../components/sections/CompanyIntroSection';
import { StatisticsSection } from '../components/sections/StatisticsSection';
import { BusinessShowcaseSection } from '../components/sections/BusinessShowcaseSection';
import { CapabilitiesSection } from '../components/sections/CapabilitiesSection';
import { InnovationSection } from '../components/sections/InnovationSection';
import { SustainabilitySection } from '../components/sections/SustainabilitySection';
import { CSRSection } from '../components/sections/CSRSection';
import { InvestorSection } from '../components/sections/InvestorSection';
import { NewsroomSection } from '../components/sections/NewsroomSection';
import { CareersSection } from '../components/sections/CareersSection';
import { ContactCTASection } from '../components/sections/ContactCTASection';
import { CustomersMarqueeSection } from '../components/sections/CustomersMarqueeSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';

interface HomePageProps {
  config: HomepageConfig;
  onNavigate: (path: string) => void;
  onOpenInquiry: () => void;
  onOpenArticle: (id: string) => void;
  onDownloadReport: (title: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  config,
  onNavigate,
  onOpenInquiry,
  onOpenArticle,
  onDownloadReport,
}) => {
  // Dynamic section registry
  const renderSection = (sectionKey: string) => {
    switch (sectionKey) {
      case 'hero':
        if (!config.sections.hero.enabled) return null;
        return (
          <HeroSection
            key="hero"
            slides={config.sections.hero.slides}
            onNavigate={onNavigate}
            onOpenInquiry={onOpenInquiry}
          />
        );

      case 'customersMarquee':
        if (config.sections.customersMarquee && !config.sections.customersMarquee.enabled) return null;
        return (
          <CustomersMarqueeSection
            key="customersMarquee"
            kicker={config.sections.customersMarquee?.kicker}
            heading={config.sections.customersMarquee?.heading}
            statsText={config.sections.customersMarquee?.statsText}
            customers={config.sections.customersMarquee?.customers}
          />
        );

      case 'intro':
        if (!config.sections.intro.enabled) return null;
        return (
          <CompanyIntroSection
            key="intro"
            kicker={config.sections.intro.kicker}
            heading={config.sections.intro.heading}
            leadParagraph={config.sections.intro.leadParagraph}
            secondaryParagraph={config.sections.intro.secondaryParagraph}
            quote={config.sections.intro.quote}
            quoteAuthor={config.sections.intro.quoteAuthor}
            image={config.sections.intro.image}
            ctaText={config.sections.intro.ctaText}
            ctaLink={config.sections.intro.ctaLink}
            onNavigate={onNavigate}
          />
        );

      case 'stats':
        if (!config.sections.stats.enabled) return null;
        return (
          <StatisticsSection
            key="stats"
            heading={config.sections.stats.heading}
            subheading={config.sections.stats.subheading}
            items={config.sections.stats.items}
          />
        );

      case 'businesses':
        if (!config.sections.businesses.enabled) return null;
        return (
          <BusinessShowcaseSection
            key="businesses"
            kicker={config.sections.businesses.kicker}
            heading={config.sections.businesses.heading}
            subheading={config.sections.businesses.subheading}
            viewAllText={config.sections.businesses.viewAllText}
            onNavigate={onNavigate}
          />
        );

      case 'capabilities':
        if (!config.sections.capabilities.enabled) return null;
        return (
          <CapabilitiesSection
            key="capabilities"
            kicker={config.sections.capabilities.kicker}
            heading={config.sections.capabilities.heading}
            description={config.sections.capabilities.description}
            pillars={config.sections.capabilities.pillars}
            onNavigate={onNavigate}
          />
        );

      case 'innovation':
        if (!config.sections.innovation.enabled) return null;
        return (
          <InnovationSection
            key="innovation"
            kicker={config.sections.innovation.kicker}
            heading={config.sections.innovation.heading}
            description={config.sections.innovation.description}
            patentsCount={config.sections.innovation.patentsCount}
            rdSpendPercent={config.sections.innovation.rdSpendPercent}
            innovations={config.sections.innovation.innovations}
            onNavigate={onNavigate}
          />
        );

      case 'sustainability':
        if (!config.sections.sustainability.enabled) return null;
        return (
          <SustainabilitySection
            key="sustainability"
            kicker={config.sections.sustainability.kicker}
            heading={config.sections.sustainability.heading}
            description={config.sections.sustainability.description}
            ctaText={config.sections.sustainability.ctaText}
            highlights={config.sections.sustainability.highlights}
            onNavigate={onNavigate}
          />
        );

      case 'csr':
        if (!config.sections.csr.enabled) return null;
        return (
          <CSRSection
            key="csr"
            kicker={config.sections.csr.kicker}
            heading={config.sections.csr.heading}
            description={config.sections.csr.description}
            impactMetric={config.sections.csr.impactMetric}
            impactLabel={config.sections.csr.impactLabel}
            onNavigate={onNavigate}
          />
        );

      case 'investors':
        if (!config.sections.investors.enabled) return null;
        return (
          <InvestorSection
            key="investors"
            kicker={config.sections.investors.kicker}
            heading={config.sections.investors.heading}
            subheading={config.sections.investors.subheading}
            onNavigate={onNavigate}
            onDownloadReport={onDownloadReport}
          />
        );

      case 'testimonials':
        if (config.sections.testimonials && !config.sections.testimonials.enabled) return null;
        return (
          <TestimonialsSection
            key="testimonials"
            kicker={config.sections.testimonials?.kicker}
            heading={config.sections.testimonials?.heading}
            subheading={config.sections.testimonials?.subheading}
            items={config.sections.testimonials?.items}
            onOpenInquiry={onOpenInquiry}
          />
        );

      case 'newsroom':
        if (!config.sections.newsroom.enabled) return null;
        return (
          <NewsroomSection
            key="newsroom"
            kicker={config.sections.newsroom.kicker}
            heading={config.sections.newsroom.heading}
            subheading={config.sections.newsroom.subheading}
            onNavigate={onNavigate}
            onOpenArticle={onOpenArticle}
          />
        );

      case 'careers':
        if (!config.sections.careers.enabled) return null;
        return (
          <CareersSection
            key="careers"
            kicker={config.sections.careers.kicker}
            heading={config.sections.careers.heading}
            description={config.sections.careers.description}
            culturePoints={config.sections.careers.culturePoints}
            onNavigate={onNavigate}
          />
        );

      case 'contactCta':
        if (!config.sections.contactCta.enabled) return null;
        return (
          <ContactCTASection
            key="contactCta"
            heading={config.sections.contactCta.heading}
            description={config.sections.contactCta.description}
            primaryButtonText={config.sections.contactCta.primaryButtonText}
            secondaryButtonText={config.sections.contactCta.secondaryButtonText}
            onNavigate={onNavigate}
            onOpenInquiry={onOpenInquiry}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col">
      {config.sectionsOrder.map((sectionKey) => renderSection(sectionKey))}
    </div>
  );
};
