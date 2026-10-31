import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { ArrowRight, GraduationCap, Stethoscope } from 'lucide-react';

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
    <section className="py-24 sm:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              kicker={kicker}
              heading={heading}
              lead={description}
              className="mb-6"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="p-6 bg-slate-50/70 border border-slate-200/60 space-y-2">
                <div className="w-8 h-8 border border-slate-200 flex items-center justify-center text-slate-800 mb-3">
                  <GraduationCap className="w-4 h-4 stroke-[1.5]" />
                </div>
                <h4 className="text-sm font-semibold text-slate-950 break-normal">
                  Girls in STEM Scholarships
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal break-normal">
                  Full academic funding for 45,000+ rural young women pursuing technology degrees.
                </p>
              </div>

              <div className="p-6 bg-slate-50/70 border border-slate-200/60 space-y-2">
                <div className="w-8 h-8 border border-slate-200 flex items-center justify-center text-slate-800 mb-3">
                  <Stethoscope className="w-4 h-4 stroke-[1.5]" />
                </div>
                <h4 className="text-sm font-semibold text-slate-950 break-normal">
                  Mobile Healthcare Vans
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal break-normal">
                  280,000 doorstep consultations and prenatal screenings across 180 villages annually.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('/csr')}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-950 hover:text-[#9b111e] transition-colors group"
              >
                <span>Foundation Initiatives</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Highlight Box (Minimalist white card with light large numbers) */}
          <div className="lg:col-span-5">
            <div className="p-8 sm:p-12 bg-slate-50/80 border border-slate-200 space-y-4">
              <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9b111e] block">
                Decade of Direct Impact
              </span>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-950 font-mono tracking-tight">
                {impactMetric}
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal break-normal">
                {impactLabel}
              </p>
              <div className="pt-6 border-t border-slate-200/60 text-[11px] text-slate-400 font-normal leading-relaxed">
                All CSR contributions directed through certified foundations and third-party social audits.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
