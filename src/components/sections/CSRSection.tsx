import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { ArrowRight, Sparkles, Feather } from 'lucide-react';

interface CSRSectionProps {
  kicker: string;
  heading: string;
  description: string;
  impactMetric: string;
  impactLabel: string;
  onNavigate: (path: string) => void;
}

export const CSRSection: React.FC<CSRSectionProps> = ({
  kicker,
  heading,
  description,
  impactMetric,
  impactLabel,
  onNavigate,
}) => {
  return (
    <section className="py-24 sm:py-32 bg-[#FAF9F6] border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              kicker={kicker}
              heading={heading}
              lead={description}
              className="mb-8"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="card-3d-emerald rounded-2xl p-7 space-y-3 relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-600/40 to-transparent" />
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200/60 flex items-center justify-center shadow-xs mb-2">
                  <Feather className="w-5 h-5 stroke-[1.5]" />
                </div>
                <h4 className="font-serif text-xl font-normal text-slate-950 group-hover:text-emerald-900 transition-colors break-normal">
                  Handloom Weaver Linkages
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed break-normal">
                  Direct market connections for Varanasi, Mubarakpur, and Chanderi generational artisan looms.
                </p>
              </div>

              <div className="card-3d-emerald rounded-2xl p-7 space-y-3 relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-600/40 to-transparent" />
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200/60 flex items-center justify-center shadow-xs mb-2">
                  <Sparkles className="w-5 h-5 stroke-[1.5]" />
                </div>
                <h4 className="font-serif text-xl font-normal text-slate-950 group-hover:text-emerald-900 transition-colors break-normal">
                  Artisan Block Print Support
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed break-normal">
                  Promoting natural vegetable dyes, water-saving techniques, and heritage hand-block preservation.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => onNavigate('/csr')}
                className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-950 hover:text-emerald-800 transition-colors group"
              >
                <span>Artisan Cluster Programs</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Highlight Box: 3D Elevated Card with mild emerald highlight */}
          <div className="lg:col-span-5">
            <div className="card-3d-emerald rounded-3xl p-8 sm:p-12 space-y-6 relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-emerald-600/60 to-transparent" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-emerald-800 block px-3 py-1 bg-emerald-50/80 rounded-md border border-emerald-100/60 w-fit">
                Cluster Community Impact
              </span>
              <div className="font-serif text-5xl sm:text-6xl font-normal text-slate-950 tracking-tight group-hover:text-emerald-900 transition-colors">
                {impactMetric}
              </div>
              <p className="text-sm text-stone-600 font-light leading-relaxed break-normal">
                {impactLabel}
              </p>
              <div className="pt-6 border-t border-stone-200/70 text-xs text-stone-500 font-light leading-relaxed">
                All cluster initiatives support artisan livelihoods, fair pricing, and heritage handloom preservation.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
