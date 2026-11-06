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
    <section className="py-24 sm:py-32 bg-white border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image without bulky overlays */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative bg-stone-100 overflow-hidden shadow-lg border border-stone-200/80">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=80"
                alt="Regional Textile Sourcing Hubs"
                fallbackTitle="Regional Textile Production Market"
                className="w-full h-80 sm:h-[460px] object-cover"
              />
            </div>
            <div className="mt-3.5 flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-stone-500 font-medium">
              <span>Primary Regional Hubs</span>
              <span>Surat · Varanasi · Jaipur</span>
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

            {/* 3D Highlighted Metrics Grid with mild color wash */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-2 pb-4">
              {highlights.map((h, idx) => (
                <div
                  key={idx}
                  className="card-3d rounded-xl p-5 sm:p-6 group relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-600/30 to-transparent" />
                  <span className="font-serif text-3xl sm:text-4xl font-normal text-slate-950 block tracking-tight group-hover:text-emerald-900 transition-colors mb-1.5">
                    {h.metric}
                  </span>
                  <p className="text-xs sm:text-sm font-light text-stone-600 leading-relaxed break-normal">
                    {h.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('/sourcing-ecosystem')}
                className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-950 hover:text-emerald-800 transition-colors group"
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
