import React from 'react';
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
  return (
    <section className="py-24 sm:py-32 bg-white border-b border-[#173D35]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl bg-[#F5F0E6] overflow-hidden shadow-lg border border-[#173D35]/12">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=80"
                alt="Regional Textile Sourcing Hubs"
                fallbackTitle="Regional Textile Production Market"
                className="w-full h-80 sm:h-[460px] object-cover"
              />
            </div>
            <div className="mt-3.5 flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-[#173D35]/60 font-semibold">
              <span>Primary Regional Hubs</span>
              <span className="text-[#D97845]">Surat · Varanasi · Jaipur</span>
            </div>
          </div>

          {/* Right Column: Editorial Copy & Open Cards */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <SectionHeading
              kicker={kicker}
              heading={heading}
              lead={description}
              className="mb-8"
            />

            {/* 3D Highlighted Hubs Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-2 pb-4">
              {highlights.map((h, idx) => (
                <div
                  key={idx}
                  className="card-3d-emerald rounded-xl p-5 sm:p-6 group relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D97845]/70 to-transparent" />
                  <span className="font-serif text-3xl sm:text-4xl font-normal text-[#173D35] block tracking-tight group-hover:text-[#D97845] transition-colors mb-1.5">
                    {h.metric}
                  </span>
                  <p className="text-xs sm:text-sm font-normal text-[#173D35]/75 leading-relaxed break-normal">
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
