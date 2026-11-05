import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Layers, ShieldCheck, CheckCircle2, Globe2, ArrowRight } from 'lucide-react';

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
  const icons = [Layers, ShieldCheck, CheckCircle2, Globe2];

  return (
    <section className="py-28 sm:py-36 bg-[#0B132B] text-white relative overflow-hidden">
      {/* Subtle organic radial glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-950/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker={kicker}
          heading={heading}
          lead={description}
          light={true}
        />

        {/* 3D Highlighted Dark Glassmorphic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-4">
          {pillars.map((pillar, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="card-3d-dark rounded-2xl p-7 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* 3D Top Specular Light Catch */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />

                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-900/30 border border-emerald-400/30 flex items-center justify-center text-emerald-300 mb-6 shadow-[0_4px_12px_rgba(6,78,59,0.3)] group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-white mb-3 tracking-tight group-hover:text-emerald-300 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 bg-white/[0.02] -mx-7 -mb-7 px-7 py-4 rounded-b-2xl">
                  <span className="text-[10px] uppercase font-semibold text-slate-400 block tracking-[0.2em] mb-1">
                    Benchmark Metric
                  </span>
                  <span className="font-serif text-xl sm:text-2xl font-normal text-emerald-300 tracking-tight">
                    {pillar.stat}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3D Elevated Quality Assurance Banner */}
        <div className="mt-16 sm:mt-20 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-emerald-950/20 border border-white/15 shadow-[0_15px_35px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.15)] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left max-w-2xl">
            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-emerald-400">
              Sourcing Assurance & Quality Protocol
            </span>
            <h4 className="font-serif text-xl sm:text-2xl font-normal text-white">
              Batch Inspection, GSM Verification & Transparent Sourcing
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Every order batch is inspected for fabric count, finish, colorfastness, and weave integrity before dispatch.
            </p>
          </div>
          <button
            onClick={() => onNavigate('/innovation')}
            className="px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] bg-emerald-700 hover:bg-emerald-600 text-white rounded-lg shadow-[0_4px_15px_rgba(6,78,59,0.4)] transition-all whitespace-nowrap shrink-0 hover:scale-105"
          >
            Our Sourcing Process
          </button>
        </div>
      </div>
    </section>
  );
};
