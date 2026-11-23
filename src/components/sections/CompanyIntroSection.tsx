import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../ui/ImageWithFallback';

interface CompanyIntroSectionProps {
  kicker: string;
  heading: string;
  leadParagraph: string;
  secondaryParagraph: string;
  quote: string;
  quoteAuthor: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  onNavigate: (path: string) => void;
}

export const CompanyIntroSection: React.FC<CompanyIntroSectionProps> = ({
  kicker,
  heading,
  leadParagraph,
  secondaryParagraph,
  quote,
  quoteAuthor,
  image,
  ctaText,
  ctaLink,
  onNavigate,
}) => {
  return (
    <section className="py-14 sm:py-20 bg-white border-b border-[#173D35]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-6 h-[1.5px] bg-[#D97845]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#D97845]">
                {kicker}
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-tight text-[#173D35] leading-[1.18] break-normal">
              {heading}
            </h2>

            <p className="text-base sm:text-lg text-[#173D35]/85 font-normal leading-relaxed break-normal">
              {leadParagraph}
            </p>

            <p className="text-sm sm:text-base text-[#173D35]/75 font-normal leading-relaxed break-normal">
              {secondaryParagraph}
            </p>

            {/* Editorial Pull Quote 3D Highlighted Box */}
            <div className="card-3d-emerald rounded-2xl p-6 sm:p-7 space-y-2.5 my-6 relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D97845]/75 to-transparent" />
              <blockquote className="font-serif italic text-lg sm:text-xl text-[#173D35] leading-relaxed font-normal">
                "{quote}"
              </blockquote>
              <div className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#D97845]">
                — {quoteAuthor}
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate(ctaLink)}
                className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#173D35] hover:text-[#D97845] transition-colors group"
              >
                <span>{ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D97845] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: High-Aspect Photography with 3D Depth */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl bg-[#F5F0E6] shadow-[0_20px_45px_-10px_rgba(23,61,53,0.16)] border border-[#173D35]/12 group">
              <ImageWithFallback
                src={image}
                alt="Shree Durga Agency Textile Sourcing"
                fallbackTitle="Regional Textile Sourcing Hub"
                className="w-full h-80 sm:h-[480px] lg:h-[520px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="mt-3.5 flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-[#173D35]/60 font-semibold">
              <span>Primary Textile Hubs</span>
              <span className="text-[#D97845]">Direct Mill & Weaver Linkages</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
