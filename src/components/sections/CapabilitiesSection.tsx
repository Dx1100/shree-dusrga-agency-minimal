import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Factory, ShieldCheck, Cog, Globe, ArrowRight } from 'lucide-react';

interface CapabilitiesSectionProps {
  kicker: string;
  heading: string;
  description: string;
  pillars: {
    title: string;
    description: string;
    stat: string;
  }[];
  onNavigate: (path: string) => void;
}

export const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({
  kicker,
  heading,
  description,
  pillars,
  onNavigate,
}) => {
  const icons = [Factory, ShieldCheck, Cog, Globe];

  return (
    <section className="py-24 sm:py-28 bg-slate-50/50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker={kicker}
          heading={heading}
          lead={description}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="p-8 bg-white border border-slate-200/60 flex flex-col justify-between hover:border-slate-300 transition-colors"
              >
                <div>
                  <div className="w-10 h-10 border border-slate-200 flex items-center justify-center text-slate-800 mb-6">
                    <Icon className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-950 mb-3 break-normal">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6 break-normal">
                    {pillar.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100">
                  <span className="text-[10px] uppercase font-semibold text-slate-400 block tracking-wider mb-0.5">
                    Benchmark Metric
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-900 font-mono">
                    {pillar.stat}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Minimalist Quality Assurance Strip (No heavy gradient boxes) */}
        <div className="mt-12 p-6 sm:p-8 bg-white border border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9b111e]">
              Global Standard Compliance
            </span>
            <h4 className="text-base sm:text-lg font-normal text-slate-900">
              ASME, AS9100D, ISO 14001, and ZDHC Level 3 Certified Operations
            </h4>
            <p className="text-xs text-slate-500 max-w-2xl font-normal leading-relaxed">
              Every manufacturing center undergoes regular independent third-party audits with full traceability.
            </p>
          </div>
          <button
            onClick={() => onNavigate('/about')}
            className="px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Review Certifications
          </button>
        </div>
      </div>
    </section>
  );
};
