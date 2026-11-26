import React, { useEffect, useState, useRef } from 'react';
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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.25, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-14 sm:py-20 bg-white border-b border-[#173D35]/10 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Content (Slides in from Left) */}
          <div
            className={`lg:col-span-7 space-y-6 transition-all duration-1100 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-8 sm:-translate-x-12'
            }`}
          >
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

            {/* Editorial Pull Quote Forest Green 3D Box */}
            <div className="card-3d-dark rounded-2xl p-6 sm:p-7 space-y-3 my-6 relative overflow-hidden group shadow-[0_12px_32px_-8px_rgba(16,43,37,0.35)]">
              {/* Top Terracotta Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#D97845] to-transparent" />

              {/* Decorative Subtle Ambient Glow */}
              <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-[#D97845]/15 rounded-full blur-2xl pointer-events-none" />

              <blockquote className="relative z-10 font-serif italic text-lg sm:text-xl text-[#F5F0E6] leading-relaxed font-normal">
                "{quote}"
              </blockquote>

              <div className="relative z-10 flex items-center gap-2">
                <span className="w-4 h-[1.5px] bg-[#D97845]" />
                <span className="text-[11px] uppercase tracking-[0.24em] font-semibold text-[#E89A6F]">
                  {quoteAuthor}
                </span>
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

          {/* Right Column: High-Aspect Photography with 3D Depth (Slides in from Right) */}
          <div
            className={`lg:col-span-5 transition-all duration-1100 ease-[cubic-bezier(0.22,1,0.36,1)] delay-150 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-8 sm:translate-x-12'
            }`}
          >
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
              <span className="text-[#D97845]">Direct Factory & Weaver Linkages</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
