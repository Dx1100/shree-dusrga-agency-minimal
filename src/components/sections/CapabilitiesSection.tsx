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
    <section className="py-14 sm:py-20 bg-[#173D35] text-[#F5F0E6] relative overflow-hidden">
      {/* Subtle warm radial glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D97845]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker={kicker}
          heading={heading}
          lead={description}
          light={true}
        />

        {/* 3D Highlighted Dark Pine Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-4">
          {pillars.map((pillar, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="card-3d-dark rounded-2xl p-7 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* 3D Top Specular Light Catch */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D97845]/80 to-transparent" />

                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#D97845]/15 border border-[#D97845]/35 flex items-center justify-center text-[#E89A6F] mb-6 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#F5F0E6] mb-3 tracking-tight group-hover:text-[#E89A6F] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#F5F0E6]/80 font-normal leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F5F0E6]/10 bg-[#F5F0E6]/[0.03] -mx-7 -mb-7 px-7 py-4 rounded-b-2xl flex items-center justify-between">
                  <span className="font-serif text-lg sm:text-xl font-normal text-[#E89A6F] tracking-tight">
                    {pillar.stat}
                  </span>
                  <span className="text-[11px] font-semibold text-[#F5F0E6]/50">
                    0{idx + 1}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3D Elevated Quality Assurance Banner */}
        <div className="mt-16 sm:mt-20 p-8 sm:p-10 rounded-2xl bg-[#102B25]/85 border border-[#F5F0E6]/15 shadow-[0_15px_35px_rgba(10,28,24,0.45),inset_0_1px_0_rgba(245,240,230,0.12)] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#E89A6F]">
              End-to-End Sourcing Assurance
            </span>
            <h4 className="font-serif text-xl sm:text-2xl font-normal text-[#F5F0E6]">
              Seasonal Planning, Physical Sampling & Pre-Dispatch Lot Inspection
            </h4>
            <p className="text-xs sm:text-sm text-[#F5F0E6]/80 font-normal leading-relaxed">
              Every consignment is checked against approved physical swatches for fabric weight, finish, colour fastness, and stitching quality before release.
            </p>
          </div>
          <button
            onClick={() => onNavigate('/our-process')}
            className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] bg-[#D97845] hover:bg-[#C26534] text-white rounded-lg shadow-lg transition-all whitespace-nowrap shrink-0 hover:scale-105"
          >
            <span>Explore Our Process</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
