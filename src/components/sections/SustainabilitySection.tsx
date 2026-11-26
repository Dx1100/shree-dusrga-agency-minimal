import React, { useEffect, useState, useRef } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../ui/ImageWithFallback';

interface SustainabilitySectionProps {
  kicker: string;
  heading: string;
  description: string;
  ctaText: string;
  highlights: {
    metric: string;
    label: string;
  }[];
  onNavigate: (path: string) => void;
}

export const SustainabilitySection: React.FC<SustainabilitySectionProps> = ({
  kicker,
  heading,
  description,
  ctaText,
  highlights,
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
          {/* Left Column: Image (Slides in from Left) */}
          <div
            className={`lg:col-span-5 order-2 lg:order-1 transition-all duration-1100 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-8 sm:-translate-x-12'
            }`}
          >
            <div className="relative rounded-2xl bg-[#F5F0E6] overflow-hidden shadow-lg border border-[#173D35]/12 group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=80"
                alt="Regional Textile Sourcing Hubs"
                fallbackTitle="Regional Textile Production Market"
                className="w-full h-80 sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="mt-3.5 flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-[#173D35]/60 font-semibold">
              <span>Primary Regional Hubs</span>
              <span className="text-[#D97845]">Surat · Varanasi · Jaipur</span>
            </div>
          </div>

          {/* Right Column: Editorial Copy & Open Cards (Slides in from Right) */}
          <div
            className={`lg:col-span-7 order-1 lg:order-2 space-y-6 transition-all duration-1100 ease-[cubic-bezier(0.22,1,0.36,1)] delay-150 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-8 sm:translate-x-12'
            }`}
          >
            <SectionHeading
              kicker={kicker}
              heading={heading}
              lead={description}
              className="mb-8"
            />

            {/* 3D Highlighted Hubs Grid in Heritage Forest Green */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-2 pb-4">
              {highlights.map((h, idx) => (
                <div
                  key={idx}
                  className="card-3d-dark rounded-xl p-5 sm:p-6 group relative overflow-hidden hover:-translate-y-1 transition-all duration-300 shadow-[0_10px_26px_-6px_rgba(16,43,37,0.35)]"
                >
                  {/* Top Terracotta Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#D97845] to-transparent" />

                  {/* Ambient Hover Glow */}
                  <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-[#D97845]/15 rounded-full blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />

                  <span className="relative z-10 font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#F5F0E6] block tracking-tight group-hover:text-[#E89A6F] transition-colors mb-2">
                    {h.metric}
                  </span>
                  <p className="relative z-10 text-xs sm:text-sm font-normal text-[#F5F0E6]/80 group-hover:text-[#F5F0E6] leading-relaxed break-normal transition-colors">
                    {h.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('/sourcing-ecosystem')}
                className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#173D35] hover:text-[#D97845] transition-colors group"
              >
                <span>{ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D97845] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
