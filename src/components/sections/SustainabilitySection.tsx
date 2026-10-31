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
    <section className="py-24 sm:py-28 bg-slate-50/50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image without bulky overlays */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative bg-slate-100 overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80"
                alt="Zero Liquid Discharge Water Facility"
                fallbackTitle="Zero Liquid Discharge Facility"
                className="w-full h-80 sm:h-[440px] object-cover"
              />
            </div>
            <div className="mt-3 flex items-center justify-between text-[11px] uppercase tracking-widest text-slate-400 font-medium">
              <span>Closed-Loop Water Treatment</span>
              <span>75 MLD Daily</span>
            </div>
          </div>

          {/* Right Column: Editorial Copy & Open Metrics */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <SectionHeading
              kicker={kicker}
              heading={heading}
              lead={description}
              className="mb-8"
            />

            {/* Metrics 2x2 Grid with clean thin lines */}
            <div className="grid grid-cols-2 gap-y-6 gap-x-8 pt-4 pb-6 border-y border-slate-200/60">
              {highlights.map((h, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="text-3xl sm:text-4xl font-light text-slate-950 font-mono block">
                    {h.metric}
                  </span>
                  <p className="text-xs sm:text-sm font-normal text-slate-600 leading-snug break-normal">
                    {h.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('/sustainability')}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-950 hover:text-[#9b111e] transition-colors group"
              >
                <span>{ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
